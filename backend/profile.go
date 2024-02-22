package profile

type Profile struct {
	FileName       string            `json:"fileName"`
	Header         *HeaderSection    `json:"header"`
	WorkExperience *WorkExperience   `json:"workExperience"`
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
			Title:  "Work Experience",
			Active: "true",
		},
		Jobs: []*JobSection{sampleJobSection1(), sampleJobSection2()},
	}
}

func sampleJobSection1() *JobSection {
	return &JobSection{
		ProfileSection: ProfileSection{
			Title:  "Pied Piper",
			Active: "true",
		},
		JobTitle:  &ProfileField{Id: "title", Data: "CEO/President", Active: true},
		Company:   &ProfileField{Id: "company", Data: "Pied Piper", Active: true},
		Location:  &ProfileField{Id: "location", Data: "City, State", Active: false},
		StartDate: &ProfileField{Id: "startDate", Data: "Dec 2013", Active: true},
		EndDate:   &ProfileField{Id: "endDate", Data: "Dec 2014", Active: true},
		Description: &ProfileField{
			Id: "description", Active: true,
			Data: `Pied Piper is a multi-platform technology based on a proprietary universal
compression algorithm that has consistently fielded high Weisman Scores™ that
are not merely competitive, but approach the theoretical limit of lossless
compression.`,
		},
		JobDuties: []*ProfileField{
			{Data: "Build an algorithm for artist to detect if their music was violating copyright infringement laws", Active: true},
			{Data: "Successfully won Techcrunch Disrupt", Active: true},
			{Data: "Optimized an algorithm that holds the current world record for Weisman Scores", Active: true},
		},
	}
}

func sampleJobSection2() *JobSection {
	return &JobSection{
		ProfileSection: ProfileSection{
			Title:  "Coder Dojo",
			Active: "true",
		},
		JobTitle:  &ProfileField{Id: "title", Data: "Teacher", Active: true},
		Company:   &ProfileField{Id: "company", Data: "Coder Dojo", Active: true},
		Location:  &ProfileField{Id: "location", Data: "City, State", Active: false},
		StartDate: &ProfileField{Id: "startDate", Data: "July 2013", Active: true},
		EndDate:   &ProfileField{Id: "endDate", Data: "Dec 2013", Active: true},
		Description: &ProfileField{
			Id: "description", Active: true,
			Data: `Global movement of free coding clubs for young people.`,
		},
		JobDuties: []*ProfileField{
			{Data: "Awarded 'Teacher of the Month'", Active: true},
		},
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
	profile.WorkExperience = defaultWorkExperience()

	return profile
}

func (p *Profile) SaveProfile() error {
	return nil
}

func (p *Profile) GetProfile() (*Profile, error) {
	return p, nil
}
