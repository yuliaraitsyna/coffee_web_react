import { useRouteError } from 'react-router-dom'
import styles from './errorpage.module.css'

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div className={styles['error-container']}>
            <h1>404</h1>
            <img src="https://cdn-icons-png.flaticon.com/128/607/607863.png"></img>
            <p>Page is not found</p>
        </div>
    )
}