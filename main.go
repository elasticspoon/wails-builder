package main

import (
	"embed"

	"github.com/elasticspoon/resume-builder/backend"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	p := profile.NewProfile()
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "Resume Builder",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			p,
			&profile.Generator{},
		},
	})
	if err != nil {
		println("Error:", err.Error())
	}
}
