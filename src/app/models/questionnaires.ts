import {Question} from './question';
export class Questionnaire{ 
    id?:number;
    nome:string;
    description:string; 
    creationDate: Date;
    listQuestions:Question[]; 

    constructor(nome:string, description:string, creationDate: Date, listQuestions:Question[])
    { 
        this.nome = nome;
        this.description = description;
        this.creationDate = creationDate;
        this.listQuestions = listQuestions;
    }
}