import Banner from '../components/banner/banner'
import styles from './homepage.module.css'
import Info from '../components/info/info'
import Slider from '../components/slider/slider'
import CoffeeTypizer from '../components/coffee-typizer/coffee-typizer'
import Footer from '../components/footer/footer'

export default function HomePage() {
    return (
        <>
        <div className={styles['main']}>
            <Banner></Banner>
            <Slider></Slider>
            <Info></Info>
            <CoffeeTypizer></CoffeeTypizer>
            <Footer></Footer>
        </div>
    </>
    )
}