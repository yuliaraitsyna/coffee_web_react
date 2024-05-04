import styles from '../../styles/coffee_typizer.module.css';
import data from '../../../data/text.json';
import { useEffect, useState, useRef } from 'react';

export default function CoffeeTypizer() {
    const [types, setTypes] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        setTypes(data.types);
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === textRef.current) {
                    setIsVisible(entry.isIntersecting);
                }
            });
        }, options);
    
        if (textRef.current) {
            observer.observe(textRef.current);
        }
    
        return () => {
            observer.disconnect();
        };
    
    }, [textRef]);
    

    return (
        <div className={styles['types-container']} ref={textRef}>
            {types.map((type, index) => (
                <div key={index}>
                    <span className={styles['type-span']}>
                        <img src={type.img} alt={type.text}/>
                    </span>
                    <p className={isVisible ? styles['fade-in'] : ''}>{type.text}</p>
                </div>
            ))}
        </div>
    );
}
