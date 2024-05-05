import styles from './menupage.module.css';
import data from '../../data/menu.json';
import { useEffect, useState } from "react";
import Recipe from "../components/recipe/recipe";
import RecipeModal from '../components/recipe/recipeModal';

export default function MenuPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data.recipes);
    }, []);

    const openModal = (recipe) => {
        setSelectedRecipe(recipe);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedRecipe(null);
        setShowModal(false);
    };

    return (
        <>
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
                            onClick={() => openModal(recipe)}
                        />
                    ))}
                </div>
            </div>
            {showModal && (
                <RecipeModal
                    title={selectedRecipe.title} 
                    img={selectedRecipe.img} 
                    ingredients={selectedRecipe.ingredients} 
                    instructions={selectedRecipe.instructions}
                    onClose={closeModal}
                />
            )}
        </>
    );
}
