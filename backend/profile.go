package profile

type Profile struct {
	FileName          string             `json:"fileName"`
	Header            *HeaderSection     `json:"header"`
	WorkExperience    *WorkExperience    `json:"workExperience"`
	ProjectExperience *ProjectExperience `json:"projectExperience"`
	Education         *EducationSection  `json:"education"`
	CustomSections    []*ProfileSection  `json:"customSections"`
}

type ProfileSection struct {
	Title     string `json:"title"`
	Type      string `json:"type"`
	Active    bool   `json:"active"`
	Mandatory bool   `json:"mandatory"`
}

type ProfileField struct {
	Id        string `json:"id"`
	Type      string `json:"type"`
	Data      string `json:"data"`
	Active    bool   `json:"active"`
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

type ProjectExperience struct {
	ProfileSection
	Projects []*ProjectSection `json:"projects"`
}

type ProjectSection struct {
	ProfileSection
	Role          *ProfileField   `json:"role"`
	StartDate     *ProfileField   `json:"startDate"`
	EndDate       *ProfileField   `json:"endDate"`
	Link          *ProfileField   `json:"link"`
	Description   *ProfileField   `json:"description"`
	ProjectDuties []*ProfileField `json:"projectDuties"`
}

type EducationSection struct {
	ProfileSection
	Educations []*Education `json:"educations"`
}

type Education struct {
	EducationName *ProfileField `json:"educationName"`
	AwardEarned   *ProfileField `json:"certificate"`
	StartDate     *ProfileField `json:"startDate"`
	EndDate       *ProfileField `json:"endDate"`
	ProfileSection
}

func NewProfile() *Profile {
	profile := &Profile{}
	profile.Header = defaultHeaderSection()
	profile.WorkExperience = defaultWorkExperience()
	profile.ProjectExperience = defaultProjectExperience()
	profile.Education = defaultEducationSection()

	return profile
}

func (p *Profile) SaveProfile() error {
	return nil
}

func (p *Profile) GetProfile() (*Profile, error) {
	return p, nil
}
