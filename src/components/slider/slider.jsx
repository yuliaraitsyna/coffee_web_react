import { useEffect, useState } from "react";
import styles from '../../styles/slider.module.css';

export default function Slider() {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        fetch('../../../data/menu.json')
            .then(response => response.json())
            .then(data => setSliders(data.sliders))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className={styles.container}>
    <div className={styles.sliderWrapper}>
        {sliders.map((slider, index) => (
            <div key={index} className={styles.slider}>
                <img src={slider.img} alt={`Slider ${index}`} />
            </div>
        ))}
    </div>
</div>

    );
}
