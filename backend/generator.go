package profile

import (
	"bytes"
	"fmt"
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
	pdfg.Orientation.Set(wkhtmltopdf.OrientationPortrait)
	pdfg.PageSize.Set(wkhtmltopdf.PageSizeA5)

	// Create a new input page from an URL
	v := renderHtml(dom)
	page := wkhtmltopdf.NewPageReader(strings.NewReader(v))

	// Set options for this page
	page.UserStyleSheet.Set("./backend/styles.css")

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

func renderHtml(dom string) string {
	tmpl := template.Must(template.ParseFiles("./backend/template.html"))
	output := new(bytes.Buffer)
	data := struct {
		PageData string
	}{PageData: dom}

	tmpl.Execute(output, data)

	return output.String()
}
