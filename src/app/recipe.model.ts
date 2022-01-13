import { Ingredient } from "./ingredient.model";

export class Recipe{
    public name:string;
    public Description : string;
    public imagePath :string;
    public ingredients :Ingredient[];

    constructor(name:string , desc:string ,imagePath:string,ingredients :Ingredient[]
        ){
        this.name =name;
        this.Description=desc;
        this.imagePath=imagePath;
        this.ingredients = ingredients

    }
}