package profile_test

import (
	"testing"

	profile "github.com/elasticspoon/resume-builder/backend"
)

func TestGenerator_GeneratePDF(t *testing.T) {
	tests := []struct {
		name string // description of this test case
		// Named input parameters for target function.
		htmlContent string
		wantErr     bool
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			// TODO: construct the receiver type.
			var g profile.Generator
			gotErr := g.GeneratePDF(tt.htmlContent)
			if gotErr != nil {
				if !tt.wantErr {
					t.Errorf("GeneratePDF() failed: %v", gotErr)
				}
				return
			}
			if tt.wantErr {
				t.Fatal("GeneratePDF() succeeded unexpectedly")
			}
		})
	}
}
