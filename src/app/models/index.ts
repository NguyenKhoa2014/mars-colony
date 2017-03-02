

interface Encounter {
    id: number;
    date: string;
    atype: string;
    action: string;
    colonist_id: string;
}

export class NewEncounter {
    id: string;
    date: string;
    colonist_id: string;
    atype: string;
    action: string;
    constructor(id:string, date:string,colonist_id:string,atype:string,action:string){
        this.id = id;
        this.date = date;
        this.colonist_id = colonist_id;
        this.atype = atype;
        this.action = action;
    }
}

export class NewColonist {
    name: string;
    job_id: string;
    age: string;
        constructor(name:string, age:string, job_id:string){
        this.name = name;
        this.age = age;
        this.job_id = job_id;
    }
}

export class Job {
    name: string;
    id: string;
    description: string;
}

interface Colonists {
    name: string;
    job: Job;
    id: string;
    age: number;
 
}

 

interface aliens {
    type: string;
    submitted_by: string;
    id: string;
    description: string;
}
export class Alien {
    type: string;
    submitted_by:string;
    id: string;
    description: string;
    constructor(type: string, submitted_by: string, id: string, description: string, ) 
    {
        this.type = type;
        this.submitted_by = submitted_by;
        this.id = id;
        this.description = description;

    }
}