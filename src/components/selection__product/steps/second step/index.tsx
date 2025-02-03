import styles from './index.module.css'
import picture from '../../../../images/Rectangle 45.svg'

const sizeRanges = [
    { id: 1, label: "менее 36", min: null, max: 35 },
    { id: 2, label: "36-38", min: 36, max: 38 },
    { id: 3, label: "39-41", min: 39, max: 41 },
    { id: 4, label: "42-44", min: 42, max: 44 },
    { id: 5, label: "45 и больше", min: 45, max: null },
  ];

export default function Second_step() {

    return (
        <div className={ styles.select__container }>
            <h3>Какой размер вам подойдет?</h3>
            <div className={ styles.size__container }>
                {sizeRanges.map((size) =>
                    <label className={ styles.size__label} key={`checkbox-size-key=${size.id}`}>
                        <input className={ styles.gender__input } type='checkbox' value={ size.id }/>
                        {size.label}
                    </label>
                )}
            </div>
            <img src={ picture } alt='sneakers'></img>
        </div>
    )
}