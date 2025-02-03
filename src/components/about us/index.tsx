import styles from './index.module.css'
import figure from '../../images/figure.svg'
import photo from '../../images/pexels-budgeron-bach-5158825 2.svg'
import { Container } from '../container'
export default function About_us() {

    return(
        <section className={ styles.about_us } id='about_us'>
            <img className={ styles.figure_img } src={ figure } alt=''></img>
            <Container className={ styles.about_us_container }>
                <div className={ styles.content_container }>
                    <h2>Пара слов о нас</h2>
                    <p>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. </p>
                    <h3>SneakMax</h3>
                </div>
                <img className={ styles.image } src={ photo } alt='фото кроссовок'></img>
            </Container>
        </section>
    )
}