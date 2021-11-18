import {Answer} from './answers';
export class Question{ 
    description:string; 
    listAnswers:Answer[];
    hide?:boolean;

    constructor(description:string, answers:Answer[])
    { 
        this.description = description;
        this.listAnswers = answers;
    }
}