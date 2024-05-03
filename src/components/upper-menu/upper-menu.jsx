import styles from '../../styles/upper-menu.module.css';

export default function UpperMenu() {
    return (
        <div className={styles['menu-container']}>
            <div className={styles['links']}>
                <span className={styles['logo']}></span>
                <a className={styles['link']} href='/src/menu/'>Menu</a>
                <a className={styles['link']} href='/src/generator/'>Generator</a>
                <a className={styles['link']} href='/src/about/'>About</a>
            </div>

            <button className={styles['login-btn']}>
                <a href='/src/login/'>Login</a>
            </button>
            
        </div>
    );
}
