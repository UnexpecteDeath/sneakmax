import Button from "../../../button"
import styles from "./index.module.css"

export default function Fourth_step() {

    return (
        <form className={ styles.form }>
            <h1>Получить предложение</h1>
            <p>Получите подборку подходящих для вас моделей на почту</p>
            <div className={ styles.input__container }>
                <input placeholder="Ваше имя" type="name"/>
                <input placeholder="E-mail" type="email"/>
            </div>
            <Button text="Получить" type="red"/>
        </form>
    )
}