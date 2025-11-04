export interface Student {
    sid: string;
    name: string;
    dob: string;
}

export interface Course {
    cid: string;
    name: string;
    credits: number;
}

export interface Result {
    sid: string;
    cid: string;
    term: string;
    score: string[];
    grade: string;
}

export interface MergedResult extends Result {
    courseName: string;
    credits: number | string;
}
