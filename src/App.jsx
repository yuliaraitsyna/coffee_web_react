import UpperMenu from './components/upper-menu/upper-menu'
import Banner from './components/banner/banner'
import styles from './App.module.css'

function App() {
  return (
    <>
      <UpperMenu></UpperMenu>
      <div className={styles['main']}>
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
