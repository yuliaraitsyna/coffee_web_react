import styles from '../../styles/coffee_typizer.module.css';
import data from '../../../data/text.json';
import { useEffect, useState } from 'react';

export default function CoffeeTypizer() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        setTypes(data.types);
    }, []);
    

    return (
        <div className={styles['types-container']}>
            {types.map((type, index) => (
                <div key={index}>
                    <span className={styles['type-span']}>
                        <img src={type.img} alt={type.text}/>
                    </span>
                    <p>{type.text}</p>
                </div>
            ))}
        </div>
    );
}
