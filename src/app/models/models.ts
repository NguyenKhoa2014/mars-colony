

interface Encounter {
    id: number;
    date: string;
    atype: string;
    action: string;
    colonist_id: string;
}

export class NewEncounter {
    id: number;
    date: string;
    colonist_id: number;
    atype: string;
    action: string;
}

export class NewColonists {
    name: string;
    job_id: number;
    age: number;
}

interface Job {
    name: string;
    id: number;
    description: string;
}

interface Colonists {
    name: string;
    job: Job;
    id: number;
    age: number;
}

 

interface aliens {
    type: string;
    submitted_by: string;
    id: number;
    description: string;
}
