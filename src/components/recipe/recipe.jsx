import styles from '../../styles/recipe.module.css';

export default function Recipe(props) {
    return (
        <div className={styles['recipe-container']}>
            <div onClick={props.onClick}>
                <img src={props.img}></img>
            </div>
            <p>{props.title}</p>
        </div>
    );
}
