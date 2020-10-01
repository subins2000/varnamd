package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"path"
)

// PackVersion Details of a pack version
type PackVersion struct {
	Identifier  string
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

func getPackInfo(langCode string) *Pack {
	packs := getPacksInfo()

	if packs == nil {
		return nil
	}

	for _, pack := range packs {
		if pack.LangCode == langCode {
			return &pack
		}
	}
	return nil
}

func getPacksInfo() []Pack {
	if err := createPacksDir(); err != nil {
		fmt.Printf("Failed to create packs directory, err: %s\n", err.Error())
		return nil
	}

	packsFilePath := getPacksDir() + "/packs.json"

	if !fileExists(packsFilePath) {
		fmt.Printf("Packs file doesn't exist\n")
		return nil
	}

	packsFile, _ := ioutil.ReadFile(packsFilePath)

	var packsInfo []Pack

	if err := json.Unmarshal(packsFile, &packsInfo); err != nil {
		fmt.Printf("Parsing packs JSON failed, err: %s\n", err.Error())
		return nil
	}

	return packsInfo
}

func createPacksDir() error {
	packsDir := getPacksDir()
	return os.MkdirAll(packsDir, 0750)
}

func getPacksDir() string {
	configDir := getConfigDir()
	return path.Join(configDir, "packs")
}
