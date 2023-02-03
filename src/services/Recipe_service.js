import axios from "axios";

export default class Recipe_service{
    static async getRecipe(type){
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c='+type);
        console.log(response.data.meals);
        return response.data.meals;
    }
}