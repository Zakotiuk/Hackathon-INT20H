import axios from "axios";

export default class Additional_service{
    static async getCategories(){
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        console.log(response.data.categories);
        return response.data.categories;
    }
}