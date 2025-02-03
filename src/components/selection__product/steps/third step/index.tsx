import styles from "./index.module.css"


export default function Third__step() {

    return (
        <section className={ styles.select__container }>
            <h3>Уточните какие-либо моменты</h3>
            <textarea placeholder="Введите сообщение"/>
        </section>
    )
}