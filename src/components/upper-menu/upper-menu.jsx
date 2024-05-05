import styles from '../../styles/upper-menu.module.css';

export default function UpperMenu() {
    return (
        <div className={styles['menu-container']}>
            <div className={styles['links']}>
                <span className={styles['logo']}></span>
                <a className={styles['link']} href='/coffee_web_react/src/menu/'>Menu</a>
                <a className={styles['link']} href='/coffee_web_react/src/generator/'>Generator</a>
                <a className={styles['link']} href='/coffee_web_react/src/about/'>About</a>
            </div>

            <button className={styles['login-btn']}>
                <a href='/coffee_web_react/src/login/'>Login</a>
            </button>
            
        </div>
    );
}
