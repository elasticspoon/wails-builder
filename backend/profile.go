package profile

type Profile struct {
	FileName       string            `json:"fileName"`
	Header         *HeaderSection    `json:"header"`
	WorkExperience *WorkExperience   `json:"workExperience"`
	CustomSections []*ProfileSection `json:"customSections"`
}

type ProfileSection struct {
	Id        string `json:"title"`
	Active    string `json:"active"`
	Type      string `json:"type"`
	Mandatory bool   `json:"mandatory"`
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
			Id:     "Header",
			Active: "true",
			Type:   "section",
		},
		Name:      &ProfileField{Id: "name", Data: "Enter Name", Type: "field", Mandatory: true},
		Phone:     &ProfileField{Id: "phone", Data: "555-555-5555", Type: "field", Active: true},
		Email:     &ProfileField{Id: "email", Data: "mail@example.com", Type: "field", Active: true},
		Location:  &ProfileField{Id: "location", Data: "City, State", Type: "field", Active: true},
		Github:    &ProfileField{Id: "github", Data: "github.com/username", Type: "field", Active: true},
		Linkedin:  &ProfileField{Id: "linkedin", Data: "linkedin.com/in/username", Type: "field", Active: true},
		Portfolio: &ProfileField{Id: "portfolio", Data: "portfolio.com", Type: "field", Active: true},
	}
}

type WorkExperience struct {
	ProfileSection
	Jobs []*JobSection `json:"jobs"`
}

type JobSection struct {
	ProfileSection
	JobTitle    *ProfileField   `json:"jobTitle"`
	Company     *ProfileField   `json:"company"`
	Location    *ProfileField   `json:"location"`
	StartDate   *ProfileField   `json:"startDate"`
	EndDate     *ProfileField   `json:"endDate"`
	Description *ProfileField   `json:"description"`
	JobDuties   []*ProfileField `json:"jobDuties"`
}

func defaultWorkExperience() *WorkExperience {
	return &WorkExperience{
		ProfileSection: ProfileSection{
			Id:     "Work Experience",
			Type:   "section",
			Active: "true",
		},
		Jobs: []*JobSection{sampleJobSection1(), sampleJobSection2()},
	}
}

func sampleJobSection1() *JobSection {
	return &JobSection{
		ProfileSection: ProfileSection{
			Id:     "Pied Piper",
			Active: "true",
			Type:   "section",
		},
		JobTitle:  &ProfileField{Id: "title", Data: "CEO/President", Type: "field", Mandatory: true},
		Company:   &ProfileField{Id: "company", Data: "Pied Piper", Type: "field", Mandatory: true},
		Location:  &ProfileField{Id: "location", Data: "City, State", Type: "field", Active: false},
		StartDate: &ProfileField{Id: "startDate", Data: "Dec 2013", Type: "field", Mandatory: true},
		EndDate:   &ProfileField{Id: "endDate", Data: "Dec 2014", Type: "field", Active: true},
		Description: &ProfileField{
			Id: "description", Type: "field", Active: true,
			Data: `Pied Piper is a multi-platform technology based on a proprietary universal
compression algorithm that has consistently fielded high Weisman Scores™ that
are not merely competitive, but approach the theoretical limit of lossless
compression.`,
		},
		JobDuties: []*ProfileField{
			{Data: "Build an algorithm for artist to detect if their music was violating copyright infringement laws", Type: "field", Active: true},
			{Data: "Successfully won Techcrunch Disrupt", Type: "field", Active: true},
			{Data: "Optimized an algorithm that holds the current world record for Weisman Scores", Type: "field", Active: true},
		},
	}
}

func sampleJobSection2() *JobSection {
	return &JobSection{
		ProfileSection: ProfileSection{
			Id:     "Coder Dojo",
			Active: "true",
			Type:   "section",
		},
		JobTitle:  &ProfileField{Id: "title", Data: "Teacher", Type: "field", Mandatory: true},
		Company:   &ProfileField{Id: "company", Data: "Coder Dojo", Type: "field", Mandatory: true},
		Location:  &ProfileField{Id: "location", Data: "City, State", Type: "field", Active: false},
		StartDate: &ProfileField{Id: "startDate", Data: "July 2013", Type: "field", Mandatory: true},
		EndDate:   &ProfileField{Id: "endDate", Data: "Dec 2013", Type: "field", Active: true},
		Description: &ProfileField{
			Id: "description", Type: "field", Active: true,
			Data: `Global movement of free coding clubs for young people.`,
		},
		JobDuties: []*ProfileField{
			{Data: "Awarded 'Teacher of the Month'", Type: "field", Active: true},
		},
	}
}

type ProjectExperience struct {
	ProfileSection
	Projects []*ProjectSection `json:"projects"`
}

type ProjectSection struct {
	ProfileSection
	JobTitle    *ProfileField   `json:"jobTitle"`
	Company     *ProfileField   `json:"company"`
	Location    *ProfileField   `json:"location"`
	StartDate   *ProfileField   `json:"startDate"`
	EndDate     *ProfileField   `json:"endDate"`
	Description *ProfileField   `json:"description"`
	JobDuties   []*ProfileField `json:"jobDuties"`
}

type ProfileField struct {
	Id        string `json:"id"`
	Type      string `json:"type"`
	Data      string `json:"data"`
	Active    bool   `json:"active"`
	Mandatory bool   `json:"mandatory"`
}

func NewProfile() *Profile {
	profile := &Profile{}
	profile.Header = defaultHeaderSection()
	profile.WorkExperience = defaultWorkExperience()

	return profile
}

func (p *Profile) SaveProfile() error {
	return nil
}

func (p *Profile) GetProfile() (*Profile, error) {
	return p, nil
}
