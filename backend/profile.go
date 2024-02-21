package profile

type Profile struct {
	FileName       string            `json:"fileName"`
	Header         *HeaderSection    `json:"header"`
	WorkExperience *ProfileSection   `json:"workExperience"`
	CustomSections []*ProfileSection `json:"customSections"`
}

type ProfileSection struct {
	Title  string `json:"title"`
	Active string `json:"active"`
}

type HeaderSection struct {
	ProfileSection
	Name         *ProfileField   `json:"name"`
	Phone        *ProfileField   `json:"phone"`
	Email        *ProfileField   `json:"email"`
	Location     *ProfileField   `json:"location"`
	Github       *ProfileField   `json:"github"`
	Linkedin     *ProfileField   `json:"linkedin"`
	Portfolio    *ProfileField   `json:"portfolio"`
	CustomFields []*ProfileField `json:"customFields"`
}

func defaultHeaderSection() *HeaderSection {
	return &HeaderSection{
		ProfileSection: ProfileSection{
			Title:  "Header",
			Active: "true",
		},
		Name:      &ProfileField{Id: "name", Data: "Enter Name", Active: true},
		Phone:     &ProfileField{Id: "phone", Data: "555-555-5555", Active: true},
		Email:     &ProfileField{Id: "email", Data: "mail@example.com", Active: true},
		Location:  &ProfileField{Id: "location", Data: "City, State", Active: true},
		Github:    &ProfileField{Id: "github", Data: "github.com/username", Active: true},
		Linkedin:  &ProfileField{Id: "linkedin", Data: "linkedin.com/in/username", Active: true},
		Portfolio: &ProfileField{Id: "portfolio", Data: "portfolio.com", Active: true},
	}
}

type ProfileField struct {
	Id     string `json:"id"`
	Data   string `json:"data"`
	Active bool   `json:"active"`
}

// func NewProfile() *Profile {
// 	return &Profile{}
// }

func NewProfile() *Profile {
	profile := &Profile{}
	profile.Header = defaultHeaderSection()

	return profile
}

func (p *Profile) SaveProfile() error {
	return nil
}

func (p *Profile) GetProfile() (*Profile, error) {
	return p, nil
}
