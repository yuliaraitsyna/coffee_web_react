import { Link } from 'react-router-dom';
import styles from '../../styles/upper-menu.module.css';

export default function UpperMenu() {
    return (
        <div className={styles['menu-container']}>
            <div className={styles['links']}>
                <Link className={styles['link']} to='/coffee_web_react'>Home</Link>
                <Link className={styles['link']} to='/coffee_web_react/menu'>Menu</Link>
                <Link className={styles['link']} to='/coffee_web_react/generator'>Generator</Link>
                <Link className={styles['link']} to='/coffee_web_react/about'>About</Link>
            </div>
            <div className={styles['login-btn']}>
                <Link to='/coffee_web_react/login'>Login</Link>
            </div>
        </div>
    );
}
