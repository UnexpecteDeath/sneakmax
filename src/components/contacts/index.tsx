import { Container } from "../container"
import styles from "./index.module.css"
import insta from "../../images/insta.svg"
import vk from "../../images/vk.svg"

export default function Contacts() {

    return(
        <section className={ styles.section__contacts } id="contacts">
            <Container className={ styles.container }>
                <div className={ styles.contact__container }>
                    <h2 className={ styles.title }>Контакты</h2>
                    <p className={ styles.help_container }>ГЛАВНЫЙ ОФИС<span className={styles.help}>?</span></p>
                    <div className={ styles.contacts }>
                        <h2>+7 800 789 89 89</h2>
                        <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
                    </div>
                    <div className={ styles.sale__department }>
                        <p className={ styles.help_container }>ОТДЕЛ ПРОДАЖ</p>
                        <div className={ styles.contacts }>
                            <h2>+7 800 789 89 89</h2>
                            <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
                        </div>
                    </div>
                    <div className={ styles.button_container }>
                        <button><img src={insta} alt="instagram"></img></button>
                        <button><img src={vk} alt="vkontakte"></img></button>
                    </div>
                </div>
                <iframe className={ styles.frame } title="Карта расположения офиса" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae03995c3865ec2ce5cad237f42641e7b10d5a49a80357156ea493ee2e8a381d7&amp;source=constructor"></iframe>
            </Container>
        </section>
    )
}