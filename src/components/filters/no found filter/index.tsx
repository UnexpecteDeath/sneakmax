import cloud from "../../../images/cloud.svg"
import styles from "./index.module.css"

export default function NotFoundByFilters() {

    return (
        <div className={ styles.container }>
            <div className={ styles.notFound }>
                <h3>По заданным фильтрам ничего не найдено {':('}</h3>
                <img src={ cloud } alt="not found by filters"></img>
            </div>
        </div>
    )
}