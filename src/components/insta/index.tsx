import Button from "../button"
import { Container } from "../container"
import styles from "./index.module.css"
import picture1 from "./images/Rectangle 37.svg"
import picture3 from "./images/Rectangle 38.svg"
import picture2 from "./images/Rectangle 39.svg"
import picture4 from "./images/Rectangle 40.svg"
import picture5 from "./images/Rectangle 41.svg"
import instagram from "./images/instagram.svg"


export default function Insta() {

    return (
        <section className={ styles.insta }>
            <Container className={ styles.container }>
                <form className={ styles.form }>
                    <h2 className={ styles.title }>Есть вопросы?</h2>
                    <p className={ styles.description }>Заполните форму и наш менеджер свяжется с вами</p>
                    <div className={ styles.label }>
                        <input type="text" placeholder="Ваше имя"/>
                        <input type="text" placeholder="Номер телефона"/>
                        <Button type="red" text="Отправить"/>
                    </div>
                </form>
                <div className={ styles.second__container }>
                    <img src={ instagram } alt="instagram picture" className={styles.insta_logo }></img>
                    <div className={ styles.image__container }>
                        <img src={ picture1 } alt="картинка" className={styles.small} id="img1"></img>
                        <img src={ picture2 } alt="картинка" className={styles.small} id="img2"></img>
                        <img src={ picture3 } alt="картинка" className={styles.large} id="img3"></img>
                        <img src={ picture4 } alt="картинка" className={styles.small} id="img4"></img>
                        <img src={ picture5 } alt="картинка" className={styles.small} id="img5"></img>
                    </div>
                </div>
            </Container>
        </section>
    )
}