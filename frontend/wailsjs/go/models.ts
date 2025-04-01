export namespace profile {
	
	export class ProfileField {
	    id: string;
	    type: string;
	    data: string;
	    active: boolean;
	    mandatory: boolean;
	
	    static createFrom(source: any = {}) {
	        return new ProfileField(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.type = source["type"];
	        this.data = source["data"];
	        this.active = source["active"];
	        this.mandatory = source["mandatory"];
	    }
	}
	export class Education {
	    educationName?: ProfileField;
	    certificate?: ProfileField;
	    startDate?: ProfileField;
	    endDate?: ProfileField;
	    title: string;
	    type: string;
	    active: boolean;
	    mandatory: boolean;
	
	    static createFrom(source: any = {}) {
	        return new Education(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.educationName = this.convertValues(source["educationName"], ProfileField);
	        this.certificate = this.convertValues(source["certificate"], ProfileField);
	        this.startDate = this.convertValues(source["startDate"], ProfileField);
	        this.endDate = this.convertValues(source["endDate"], ProfileField);
	        this.title = source["title"];
	        this.type = source["type"];
	        this.active = source["active"];
	        this.mandatory = source["mandatory"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class EducationSection {
	    title: string;
	    type: string;
	    active: boolean;
	    mandatory: boolean;
	    educations: Education[];
	
	    static createFrom(source: any = {}) {
	        return new EducationSection(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.type = source["type"];
	        this.active = source["active"];
	        this.mandatory = source["mandatory"];
	        this.educations = this.convertValues(source["educations"], Education);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class HeaderSection {
	    title: string;
	    type: string;
	    active: boolean;
	    mandatory: boolean;
	    name?: ProfileField;
	    phone?: ProfileField;
	    email?: ProfileField;
	    location?: ProfileField;
	    github?: ProfileField;
	    linkedin?: ProfileField;
	    portfolio?: ProfileField;
	    customFields: ProfileField[];
	
	    static createFrom(source: any = {}) {
	        return new HeaderSection(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.type = source["type"];
	        this.active = source["active"];
	        this.mandatory = source["mandatory"];
	        this.name = this.convertValues(source["name"], ProfileField);
	        this.phone = this.convertValues(source["phone"], ProfileField);
	        this.email = this.convertValues(source["email"], ProfileField);
	        this.location = this.convertValues(source["location"], ProfileField);
	        this.github = this.convertValues(source["github"], ProfileField);
	        this.linkedin = this.convertValues(source["linkedin"], ProfileField);
	        this.portfolio = this.convertValues(source["portfolio"], ProfileField);
	        this.customFields = this.convertValues(source["customFields"], ProfileField);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class JobSection {
	    title: string;
	    type: string;
	    active: boolean;
	    mandatory: boolean;
	    jobTitle?: ProfileField;
	    company?: ProfileField;
	    location?: ProfileField;
	    startDate?: ProfileField;
	    endDate?: ProfileField;
	    description?: ProfileField;
	    jobDuties: ProfileField[];
	
	    static createFrom(source: any = {}) {
	        return new JobSection(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.type = source["type"];
	        this.active = source["active"];
	        this.mandatory = source["mandatory"];
	        this.jobTitle = this.convertValues(source["jobTitle"], ProfileField);
	        this.company = this.convertValues(source["company"], ProfileField);
	        this.location = this.convertValues(source["location"], ProfileField);
	        this.startDate = this.convertValues(source["startDate"], ProfileField);
	        this.endDate = this.convertValues(source["endDate"], ProfileField);
	        this.description = this.convertValues(source["description"], ProfileField);
	        this.jobDuties = this.convertValues(source["jobDuties"], ProfileField);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ProfileSection {
	    title: string;
	    type: string;
	    active: boolean;
	    mandatory: boolean;
	
	    static createFrom(source: any = {}) {
	        return new ProfileSection(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.type = source["type"];
	        this.active = source["active"];
	        this.mandatory = source["mandatory"];
	    }
	}
	export class ProjectSection {
	    title: string;
	    type: string;
	    active: boolean;
	    mandatory: boolean;
	    role?: ProfileField;
	    startDate?: ProfileField;
	    endDate?: ProfileField;
	    link?: ProfileField;
	    description?: ProfileField;
	    projectDuties: ProfileField[];
	
	    static createFrom(source: any = {}) {
	        return new ProjectSection(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.type = source["type"];
	        this.active = source["active"];
	        this.mandatory = source["mandatory"];
	        this.role = this.convertValues(source["role"], ProfileField);
	        this.startDate = this.convertValues(source["startDate"], ProfileField);
	        this.endDate = this.convertValues(source["endDate"], ProfileField);
	        this.link = this.convertValues(source["link"], ProfileField);
	        this.description = this.convertValues(source["description"], ProfileField);
	        this.projectDuties = this.convertValues(source["projectDuties"], ProfileField);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ProjectExperience {
	    title: string;
	    type: string;
	    active: boolean;
	    mandatory: boolean;
	    projects: ProjectSection[];
	
	    static createFrom(source: any = {}) {
	        return new ProjectExperience(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.type = source["type"];
	        this.active = source["active"];
	        this.mandatory = source["mandatory"];
	        this.projects = this.convertValues(source["projects"], ProjectSection);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class WorkExperience {
	    title: string;
	    type: string;
	    active: boolean;
	    mandatory: boolean;
	    jobs: JobSection[];
	
	    static createFrom(source: any = {}) {
	        return new WorkExperience(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.type = source["type"];
	        this.active = source["active"];
	        this.mandatory = source["mandatory"];
	        this.jobs = this.convertValues(source["jobs"], JobSection);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Profile {
	    fileName: string;
	    header?: HeaderSection;
	    workExperience?: WorkExperience;
	    projectExperience?: ProjectExperience;
	    education?: EducationSection;
	    customSections: ProfileSection[];
	
	    static createFrom(source: any = {}) {
	        return new Profile(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.fileName = source["fileName"];
	        this.header = this.convertValues(source["header"], HeaderSection);
	        this.workExperience = this.convertValues(source["workExperience"], WorkExperience);
	        this.projectExperience = this.convertValues(source["projectExperience"], ProjectExperience);
	        this.education = this.convertValues(source["education"], EducationSection);
	        this.customSections = this.convertValues(source["customSections"], ProfileSection);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	

}

