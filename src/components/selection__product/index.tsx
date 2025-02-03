import { useState } from 'react'
import Button from '../button'
import styles from './index.module.css'
import First_step from './steps/first step'
import Second_step from './steps/second step'
import Third__step from './steps/third step'
import Fourth_step from './steps/fourth step'

export default function Selection_product() {

    const [ step, setStep ] = useState(1)

    const handleClick = () => {
        setStep(step + 1)
    }

    return (
        <section className={ styles.selection__product } id='product_selection'>
            <h2>{step < 4 ? "Мы подберем идеальную пару для вас" : "Ваша подборка готова!"}</h2>
            <p className={styles.descrip } style={{ color: `${step === 4 ? "var(--beige)" : "var(--light-gray)"}`}}>
                {step < 4 ? "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями" :
                "Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог"}
            </p>
            <hr style={{ border: `1px solid ${step === 4 ? "var(--beige)" : "rgba(0, 0, 0, 0.5)"}`}}/>
            <div className={ styles.content__container }>
                    {step === 1 && <First_step />}
                    {step === 2 && <Second_step />}
                    {step === 3 && <Third__step />}
                    {step === 4 && <Fourth_step />}
            </div>
            {step < 4 && <>
            <hr />
            <div className={ styles.container }>
                <p className={ styles.steps }>{ step } из 3</p>
                <Button text='Следующий шаг'
                type='transparent'
                onClick={handleClick}
                />
            </div>
            </>}
        </section>
    )
}