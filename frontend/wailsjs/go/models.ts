export namespace profile {
	
	export class ProfileField {
	    id: string;
	    data: string;
	    active: boolean;
	
	    static createFrom(source: any = {}) {
	        return new ProfileField(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.data = source["data"];
	        this.active = source["active"];
	    }
	}
	export class HeaderSection {
	    title: string;
	    active: string;
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
	        this.active = source["active"];
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
		    if (a.slice) {
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
	    active: string;
	
	    static createFrom(source: any = {}) {
	        return new ProfileSection(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.active = source["active"];
	    }
	}
	export class JobSection {
	    title: string;
	    active: string;
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
	        this.active = source["active"];
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
		    if (a.slice) {
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
	    active: string;
	    jobs: JobSection[];
	
	    static createFrom(source: any = {}) {
	        return new WorkExperience(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.active = source["active"];
	        this.jobs = this.convertValues(source["jobs"], JobSection);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
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
	    customSections: ProfileSection[];
	
	    static createFrom(source: any = {}) {
	        return new Profile(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.fileName = source["fileName"];
	        this.header = this.convertValues(source["header"], HeaderSection);
	        this.workExperience = this.convertValues(source["workExperience"], WorkExperience);
	        this.customSections = this.convertValues(source["customSections"], ProfileSection);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
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

