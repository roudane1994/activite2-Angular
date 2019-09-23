

export class Post {

    public id?:number;

    constructor(public titre:string,public contenu:string,public dateInsertion:Date,public etat:boolean){}
}
