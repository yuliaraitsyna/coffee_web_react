import UpperMenu from './components/upper-menu/upper-menu'
import Banner from './components/banner/banner'
import styles from './App.module.css'
import Info from './components/info/info'
import Slider from './components/slider/slider'
import CoffeeTypizer from './components/coffee-typizer/coffee-typizer'

function App() {
  return (
    <>
      <UpperMenu></UpperMenu>
      <div className={styles['main']}>
        <Banner></Banner>
        <Slider></Slider>
        <Info></Info>
        <CoffeeTypizer></CoffeeTypizer>
      </div>
    </>
  )
}

export default App
