import { useEffect, useState } from 'react';
import styles from '../../styles/info.module.css'
import data from '../../../data/text.json'

export default function Info() {
    const [text, setText] = useState(null);

    useEffect(() => {
        setText(data.info_section.text);
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