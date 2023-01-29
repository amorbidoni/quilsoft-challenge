export class Place {
    constructor(
         public id: string,
         public title: string,
         public location: string,
         public imageUrl: string,
         public imageAlt:string,         
         public description: string,
         public isInFav:boolean,
         ){}
         
}