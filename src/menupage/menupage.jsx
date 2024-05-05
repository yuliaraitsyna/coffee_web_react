
import styles from './menupage.module.css';
import data from '../../data/menu.json';
import { useEffect, useState } from "react";
import Recipe from "../components/recipe/recipe";

export default function MenuPage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data.recipes);
    }, []);

    console.log(recipes);
    return (
        <div className={styles['recipes-container']}>
            <h1>Let`s find out new recipes!</h1>
            <div className={styles['recipes-grid']}>
                {recipes.map((recipe, index) => (
                    <Recipe 
                        key={index} 
                        title={recipe.title} 
                        img={recipe.img} 
                        ingredients={recipe.ingredients} 
                        instructions={recipe.instructions}
                    />
                ))}
            </div>
        </div>
    );
}
