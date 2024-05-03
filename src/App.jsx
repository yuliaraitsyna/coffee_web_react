import UpperMenu from './components/upper-menu/upper-menu'
import Banner from './components/banner/banner'
import styles from './App.module.css'
import Info from './components/info/info'

function App() {
  return (
    <>
      <UpperMenu></UpperMenu>
      <div className={styles['main']}>
        <Banner></Banner>
        <Info></Info>
      </div>
    </>
  )
}

export default App
