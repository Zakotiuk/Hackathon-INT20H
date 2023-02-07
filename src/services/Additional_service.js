import axios from "axios";

export default class Additional_service{
    static async getDishesCategories(){
        const response = await axios.post("https://api.junonian.earth/api/v1/Categories/GetDishCategories");
        return response.data.items;
    }
    static async getProductsCategories(){
        const response = await axios.post("https://api.junonian.earth/api/v1/Categories/GetProductsCategories");
        return response.data.items;
    }
    static async getUserProducts(){
        const response = await axios.post("https://api.junonian.earth/api/v1/UserProducts/GetProducts");
        console.log(response)
        return response.data.items;
    }
    static async getUserProductsByCategory(category){
        const response = await axios.post("https://api.junonian.earth/api/v1/UserProducts/GetProductsByCategory", {"name" : category});
        console.log(response)
        return response.data.items;
    }
    static async getMissingProducts(products){
        const response = await axios.post("https://api.junonian.earth/api/v1/UserProducts/GetMissingProducts", {"products" : products});
        return response.data.items;
    }
}