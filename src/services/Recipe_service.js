import axios from "axios";

export default class Recipe_service{
    static async getRecipes(type){
        const response = await axios.post('https://api.junonian.earth/api/v1/Dish/GetDishesByCategory', { name : type});
        return response.data.items;
    }
    static async getDishesByProducts(products){
        const response = await axios.post('https://api.junonian.earth/api/v1/Dish/GetDishesByProducts', { items : products});
        return response.data.items;
    }
    static async getDish(id){
        const response = await axios.post('https://api.junonian.earth/api/v1/Dish/GetDishById', { id : id});
        return response.data;
    }
}