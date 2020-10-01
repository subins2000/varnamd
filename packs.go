package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"path"
)

// PackVersion Details of a pack version
type PackVersion struct {
	Identifier  string // Pack identifier is unique across all language packs. Example: ml-basic-1
	Version     int
	Description string
	Size        int
}

// Pack Details of a pack
type Pack struct {
	Identifier  string
	Name        string
	Description string
	LangCode    string
	Versions    []PackVersion
}

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}

func getPackFilePath(langCode string, packIdentifier string) (string, error) {
	pack, err := getPackInfo(langCode)

	if err != nil {
		return "", err
	}

	var packVersion *PackVersion = nil

	for _, version := range pack.Versions {
		if version.Identifier == packIdentifier {
			packVersion = &version
			break
		}
	}

	if packVersion == nil {
		return "", errors.New("Pack version not found")
	}

	// Example: .varnamd/ml/ml-basic-1
	packFilePath := path.Join(getPacksDir(), langCode, packIdentifier)

	if !fileExists(packFilePath) {
		return "", errors.New("Pack file not found")
	}

	return packFilePath, nil
}

func getPackInfo(langCode string) (*Pack, error) {
	packs, err := getPacksInfo()

	if err != nil {
		return nil, err
	}

	for _, pack := range packs {
		if pack.LangCode == langCode {
			return &pack, nil
		}
	}

	return nil, errors.New("Pack not found")
}

func getPacksInfo() ([]Pack, error) {
	if err := createPacksDir(); err != nil {
		err := fmt.Errorf("Failed to create packs directory, err: %s", err.Error())
		return nil, err
	}

	packsFilePath := getPacksDir() + "/packs.json"

	if !fileExists(packsFilePath) {
		err := errors.New("Packs file doesn't exist")
		return nil, err
	}

	packsFile, _ := ioutil.ReadFile(packsFilePath)

	var packsInfo []Pack

	if err := json.Unmarshal(packsFile, &packsInfo); err != nil {
		err := fmt.Errorf("Parsing packs JSON failed, err: %s", err.Error())
		return nil, err
	}

	return packsInfo, nil
}

func createPacksDir() error {
	packsDir := getPacksDir()
	return os.MkdirAll(packsDir, 0750)
}

func getPacksDir() string {
	configDir := getConfigDir()
	return path.Join(configDir, "packs")
}
