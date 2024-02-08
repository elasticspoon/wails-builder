package profile

type Profile struct {
	WorkExperience *ProfileSection   `json:"workExperience"`
	CustomSections []*ProfileSection `json:"customSections"`
}

type ProfileSection struct {
	Title string `json:"title"`
}

type ProfileField struct {
	Id     string `json:"id"`
	Data   string `json:"data"`
	Active bool   `json:"active"`
}

func NewProfile() *Profile {
	return &Profile{
		WorkExperience: &ProfileSection{
			Title: "Work Experience",
		},
		CustomSections: []*ProfileSection{},
	}
}

func (p *Profile) SaveProfile() error {
	return nil
}

func (p *Profile) GetProfile() (*Profile, error) {
	return p, nil
}
