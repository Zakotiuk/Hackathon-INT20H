import React from "react";
import './dish_card.css';

const Dish_card = () =>{
    return(
            <div className="dish_card">
                <div className="org_div">
                </div>
                <div className="dish_card_info">
                    <img className="img_card" src="https://family-images-y24bv7yxalct4.azureedge.net/families/5727/5727_background_1984x900.webp"/>
                    <div className="blured_info">
                        <span className="fnt_fml_bbs fnt_sz_64">Avocado toast</span>
                        <span className="fnt_fml_bbs fnt_sz_36 clr_org">a good morning snack</span>
                        <span className="recipe">Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes. {"\n"} In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.<br/>Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.</span>
                    </div>
                </div>
            </div>
    )
}
export default Dish_card;