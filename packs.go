package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
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

// After a new pack download from upstream, update packs.json with installed packs
func updatePacksInfo(langCode string, pack PackVersion) {

}

// Download pack from upstream
func downloadPackFile(langCode string, packVersionIdentifier string) (string, error) {
	fileURL := fmt.Sprintf("%s/packs/%s/%s", varnamdConfig.upstream, langCode, packVersionIdentifier)
	filePath := path.Join(getPacksDir(), langCode, "a"+packVersionIdentifier)

	resp, err := http.Get(fileURL)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		respData, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			log.Fatal(err)
		}

		return "", errors.New(string(respData))
	}

	out, err := os.Create(filePath)
	if err != nil {
		return "", err
	}
	defer out.Close()

	// Write the body to file
	_, err = io.Copy(out, resp.Body)

	if err != nil {
		return "", err
	}

	return filePath, nil
}

func getPackFilePath(langCode string, packIdentifier string, packVersionIdentifier string) (string, error) {
	if _, err := getPackVersionInfo(langCode, packIdentifier, packVersionIdentifier); err != nil {
		return "", err
	}

	// Example: .varnamd/ml/ml-basic-1
	packFilePath := path.Join(getPacksDir(), langCode, packVersionIdentifier)

	if !fileExists(packFilePath) {
		return "", errors.New("Pack file not found")
	}

	return packFilePath, nil
}

func getPackVersionInfo(langCode string, packIdentifier string, packVersionIdentifier string) (*PackVersion, error) {
	pack, err := getPackInfo(langCode, packIdentifier)

	if err != nil {
		return nil, err
	}

	var packVersion *PackVersion = nil

	for _, version := range pack.Versions {
		if version.Identifier == packVersionIdentifier {
			packVersion = &version
			break
		}
	}

	if packVersion == nil {
		return nil, fmt.Errorf("Pack version not found")
	}

	return packVersion, nil
}

func getPackInfo(langCode string, packIdentifier string) (*Pack, error) {
	packs, err := getPacksInfoLang(langCode)

	if err != nil {
		return nil, err
	}

	for _, pack := range packs {
		if pack.Identifier == packIdentifier {
			return &pack, nil
		}
	}

	return nil, fmt.Errorf("Pack not found")
}

// Get packs by language
func getPacksInfoLang(langCode string) ([]Pack, error) {
	packs, err := getPacksInfo()

	if err != nil {
		return nil, err
	}

	var langPacks []Pack

	for _, pack := range packs {
		if pack.LangCode == langCode {
			langPacks = append(langPacks, pack)
		}
	}

	if len(langPacks) == 0 {
		return nil, fmt.Errorf("No packs found")
	}

	return langPacks, nil
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
