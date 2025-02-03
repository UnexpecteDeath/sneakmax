import styles from './index.module.css'
import snickers_photo from '../../../../images/фото кроссовка.svg'

export default function First_step() {

    return (
        <div className={ styles.select__container }>
            <h3>Какой тип кроссовок рассматриваете?</h3>
            <div className={ styles.card__container }>
                { [1, 2, 3, 4, 5, 6].map((item) =>
                <article className={ styles.card } key={`item-key=${item}`}>
                    <img src={snickers_photo} alt='кроссовки'></img>
                    <label className={ styles.gender__label}>
                    <input className={ styles.gender__input } type='checkbox'/>
                    кеды
                </label>
                </article>
                )}
            </div>
        </div>
    )
}