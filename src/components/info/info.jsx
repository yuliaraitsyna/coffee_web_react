import { useEffect, useState } from 'react';
import styles from '../../styles/info.module.css'

export default function Info() {
    const [text, setText] = useState(null);

    useEffect(() => {
        fetch('../../../data/text.json')
            .then(response => response.json())
            .then(data => setText(data.info_section.text))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className={styles['container']}>
            <div className={styles['text']}>
                <h2>What is coffee?</h2>
                <p>
                    {text}
                </p>
            </div>
            <div className={styles['img']}></div>
        </div>
    )
}