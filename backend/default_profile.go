package profile

func defaultHeaderSection() *HeaderSection {
	return &HeaderSection{
		ProfileSection: ProfileSection{
			Title:     "Header",
			Type:      "section",
			Mandatory: true,
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

func defaultWorkExperience() *WorkExperience {
	return &WorkExperience{
		ProfileSection: ProfileSection{
			Title:  "Work Experience",
			Type:   "section",
			Active: true,
		},
		Jobs: []*JobSection{sampleJobSection1(), sampleJobSection2()},
	}
}

func sampleJobSection1() *JobSection {
	return &JobSection{
		ProfileSection: ProfileSection{
			Title:  "Pied Piper",
			Active: true,
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
			Title:  "Coder Dojo",
			Active: true,
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

func defaultProjectExperience() *ProjectExperience {
	return &ProjectExperience{
		ProfileSection: ProfileSection{
			Title:  "Project Experience",
			Type:   "section",
			Active: true,
		},
		Projects: []*ProjectSection{sampleProjectSection1(), sampleProjectSection2()},
	}
}

func sampleProjectSection1() *ProjectSection {
	return &ProjectSection{
		ProfileSection: ProfileSection{
			Title:  "The Daily Bugle",
			Active: true,
			Type:   "section",
		},
		Role:        &ProfileField{Id: "role", Data: "Editor", Type: "field", Active: true},
		StartDate:   &ProfileField{Id: "startDate", Data: "Jan 2012", Type: "field", Mandatory: true},
		EndDate:     &ProfileField{Id: "endDate", Data: "Feb 2013", Type: "field", Active: true},
		Link:        &ProfileField{Id: "link", Data: "http://www.missdirection.com", Type: "field", Active: true},
		Description: &ProfileField{Id: "description", Type: "field", Active: true, Data: "The Daily Bugle is a daily newspaper in New York City"},
		ProjectDuties: []*ProfileField{
			{Data: "Wrote stories about Spiderman", Type: "field", Active: true},
		},
	}
}

func sampleProjectSection2() *ProjectSection {
	return &ProjectSection{
		ProfileSection: ProfileSection{
			Title:  "Miss Direction",
			Active: true,
			Type:   "section",
		},
		Role:        &ProfileField{Id: "role", Data: "Contributor", Type: "field", Active: true},
		StartDate:   &ProfileField{Id: "startDate", Data: "Jan 2012", Type: "field", Mandatory: true},
		EndDate:     &ProfileField{Id: "endDate", Data: "Feb 2013", Type: "field", Active: true},
		Link:        &ProfileField{Id: "link", Data: "http://www.missdirection.com", Type: "field", Active: true},
		Description: &ProfileField{Id: "description", Type: "field", Active: true, Data: "A mapping engine that misguides you"},
		ProjectDuties: []*ProfileField{
			{Data: "Managed and maintained the company website", Type: "field", Active: true},
			{Data: "Developed a GPS tracking system", Type: "field", Active: true},
			{Data: "Worked on an API", Type: "field", Active: true},
		},
	}
}

func defaultEducationSection() *EducationSection {
	return &EducationSection{
		ProfileSection: ProfileSection{
			Title:  "Education",
			Type:   "section",
			Active: true,
		},
		Educations: []*Education{sampleEducation()},
	}
}

func sampleEducation() *Education {
	return &Education{
		ProfileSection: ProfileSection{
			Title:  "University of Utah",
			Active: true,
			Type:   "section",
		},
		EducationName: &ProfileField{Id: "educationName", Data: "University of Utah", Type: "field", Mandatory: true},
		AwardEarned:   &ProfileField{Id: "certificate", Data: "B.S. in Computer Science", Type: "field", Active: true},
		StartDate:     &ProfileField{Id: "startDate", Data: "Jan 2012", Type: "field", Mandatory: true},
		EndDate:       &ProfileField{Id: "endDate", Data: "Feb 2013", Type: "field", Active: true},
	}
}
