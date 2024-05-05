import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/info.module.css'
import data from '../../../data/text.json'

export default function Info() {
    const [text, setText] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        setText(data.info_section.text);
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsVisible(entry.isIntersecting);
            });
        }, options);

        if(textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            observer.disconnect();
        };

    }, [textRef])

    return (
        <div className={styles['container']} ref={textRef}>
            <div className={styles['text']}>
                <h2>What is coffee?</h2>
                <p className={isVisible ? styles['fade-in'] : ''}>
                    {text}
                </p>
            </div>
            <div className={styles['img']}></div>
        </div>
    )
}