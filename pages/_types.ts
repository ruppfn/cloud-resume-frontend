export interface ContactInfo {
    location: string;
    phone: string;
    mail: string;
    linkedIn: string;
    github: string;
}

export interface Experience {
    id: number;
    role: string;
    companyName: string;
    fromDate: string;
    toDate: string;
    techStack: string[];
    achievements: string[];
}

export interface IndividualSkill {
    name: string;
    level: string;
}

export interface Skills {
    programmingLanguages: IndividualSkill[];
    frameworks: IndividualSkill[];
    databases: IndividualSkill[];
    languages: IndividualSkill[];
}

export interface Certification {
    name: string;
    dateObtained: string;
    url: string;
}

export interface CvData {
    id: string;
    name: string;
    role: string;
    contactInfo: ContactInfo;
    aboutMe: string;
    experience: Experience[];
    skills: Skills;
    certifications: Certification[];
}
