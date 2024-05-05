import styles from '../../styles/recipe_modal.module.css'

export default function RecipeModal(props) {
    return (
        <div className={styles['overlay']}>
            <div className={styles['recipe-modal-container']}>
                <img src={props.img}></img>
                <div className={styles['recipe-info-container']}>
                    <p className={styles['closer']} onClick={props.onClose}>x</p>
                    <h2>{props.title}</h2>
                    {props.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    <p>{props.instructions}</p>
                </div>
            </div>
        </div>
    )
}