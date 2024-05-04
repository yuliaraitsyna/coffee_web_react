import { useEffect, useState } from "react";
import styles from '../../styles/slider.module.css';
import data from '../../../data/menu.json';

export default function Slider() {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        setSliders(data.sliders);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.sliderWrapper}>
                {sliders.map((slider, index) => (
                    <div key={index} className={styles.slider}>
                        <img src={`${slider.img}`} alt={`Slider ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
