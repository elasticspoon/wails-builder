package profile

import (
	"bytes"
	"context"
	"encoding/base64"
	"fmt"
	"os"
	"text/template"
	"time"

	"github.com/chromedp/cdproto/page"
	"github.com/chromedp/chromedp"
)

// Convert HTML to PDF using Chrome's print-to-PDF feature
func (g *Generator) GeneratePDF(htmlContent string) error {
	// Create a base64-encoded data URI for the HTML content
	styledHTML := renderHtml(htmlContent)
	// Encode the HTML content to base64 to create a page chrome can navigate to
	dataURI := "data:text/html;base64," + base64.StdEncoding.EncodeToString([]byte(styledHTML))

	// Create context with timeout
	ctx, cancel := chromedp.NewContext(context.Background())
	defer cancel()
	ctx, cancel = context.WithTimeout(ctx, 30*time.Second)
	defer cancel()

	// Capture the PDF bytes
	var pdfBuffer []byte
	err := chromedp.Run(ctx,
		chromedp.Navigate(dataURI),
		chromedp.ActionFunc(func(ctx context.Context) error {
			// Execute Page.printToPDF command
			buf, _, err := page.PrintToPDF().
				WithPrintBackground(true).
				WithPreferCSSPageSize(true).
				WithLandscape(false).
				Do(ctx)
			if err != nil {
				return err
			}
			pdfBuffer = buf
			return nil
		}),
	)
	if err != nil {
		return err
	}

	// Save PDF to file
	return os.WriteFile("./test.pdf", pdfBuffer, 0644)
}

type Generator struct{}

func renderHtml(dom string) string {
	stylesData, _ := os.ReadFile("./backend/styles.css")
	fmt.Println("Styles data:", string(stylesData))

	tmpl := template.Must(template.ParseFiles("./backend/template.html"))
	output := new(bytes.Buffer)
	data := struct {
		PageData  string
		StyleData string
	}{
		PageData:  dom,
		StyleData: "<style>" + string(stylesData) + "</style>",
	}

	tmpl.Execute(output, data)

	fmt.Println("Rendered HTML:", output.String())
	return output.String()
}
