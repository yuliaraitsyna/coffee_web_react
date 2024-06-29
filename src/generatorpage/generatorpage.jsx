import Randomizer from "./randomizer"
import styles from "./generatorpage.module.css"

export default function GeneratorPage() {
    return (
        <div className={styles["generator"]}>
            <Randomizer/>
        </div>
    )
}