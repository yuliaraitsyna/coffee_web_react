import { useState, useEffect } from "react";
import data from "../../data/menu.json";
import styles from './randomizer.module.css';
import ErrorBoundary from "../errorhandler/errorboundary";

export default function Randomizer() {
    const [index, setIndex] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data.recipes);
    }, []);

    const handleClick = () => {
        if (items.length > 0) {
            setIndex(Math.floor(Math.random() * items.length));
        }
        else {
            throw new Error("No items were found");
        }
    };

    return (
        <ErrorBoundary>
            <div className={styles["randomizer"]}>
            <h2 className={styles["text"]}>Drink Randomizer</h2>
            <div className={styles["img"]}>
                {items.length > 0 && items[index].img ? (
                    <img src={items[index].img} alt={items[index].name} />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <button onClick={handleClick}>Click to choose</button>
           </div>
        </ErrorBoundary>
    );
}
