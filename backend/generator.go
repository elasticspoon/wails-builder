package profile

import (
	"bytes"
	"fmt"
	"os"
	"strings"
	"text/template"

	"github.com/SebastiaanKlippert/go-wkhtmltopdf"
)

type Generator struct{}

func (g *Generator) GeneratePDF(dom string) error {
	pdfg, err := wkhtmltopdf.NewPDFGenerator()
	if err != nil {
		return err
	}
	pdfg.Dpi.Set(300)
	pdfg.Orientation.Set(wkhtmltopdf.OrientationLandscape)
	pdfg.Grayscale.Set(true)

	// Create a new input page from an URL
	v := renderHtml(dom)
	page := wkhtmltopdf.NewPageReader(strings.NewReader(v))

	// Set options for this page
	page.FooterRight.Set("[page]")
	page.FooterFontSize.Set(10)
	page.Zoom.Set(0.95)

	// Add to document
	pdfg.AddPage(page)

	// Create PDF document in internal buffer
	err = pdfg.Create()
	if err != nil {
		return fmt.Errorf("failed creating PDF to: %w", err)
	}

	// Write buffer contents to file on disk
	err = pdfg.WriteFile("./simplesample.pdf")
	if err != nil {
		return fmt.Errorf("writing buffer to disk to: %w", err)
	}

	fmt.Println("Done")
	return nil
}

func loadCss() string {
	dat, err := os.ReadFile("./backend/styles.css")
	if err != nil {
		fmt.Println(err)
	}
	return string(dat)
}

func renderHtml(dom string) string {
	tmpl := template.Must(template.ParseFiles("./backend/template.html"))
	output := new(bytes.Buffer)
	data := struct {
		PageData   string
		PageStyles string
	}{PageData: dom, PageStyles: loadCss()}

	tmpl.Execute(output, data)

	return output.String()
}
