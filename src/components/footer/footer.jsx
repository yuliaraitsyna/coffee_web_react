import { useState, useEffect } from 'react'
import styles from '../../styles/footer.module.css'
import data from '../../../data/text.json'

export default function Footer() {
    const [info, setInfo] = useState("");

    useEffect(() => {
        setInfo(data.footer.text);
    }, []);

    return (
        <div className={styles['footer']}>
            <h2>Coffee Explorer</h2>
            <div>
                <div className={styles['links']}>
                    <h4>Follow links: </h4>
                    <a>Menu</a>
                    <a>Generator</a>
                    <a>About</a>
                </div>
                <div>
                    <h4>{"What is Coffee Explorer?"}</h4>
                    <p>{info}</p>
                </div>
            </div>
            <h3> Created by @yuliarai</h3>
        </div>
    )
}