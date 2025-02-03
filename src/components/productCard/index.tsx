import { Sneaker } from '../../types'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

type Props = {
    data: Sneaker
}


export default function ProductCard({ data }:Props) {

    return(
        <Link to={`sneakers/${data.id}`} className={ styles.card }>
            <div className={ styles.image__container }>
                {data.inStock === 0 && <span>Товар временно недоступен</span>}
                <img src={`${data.imgUrl}?w=300`} alt="" className={ styles.image_card }></img>
            </div>
            <p className={ styles.card__name }>{ data.title }</p>
            <p className="price">{ data.price }  р</p>
        </Link>
    )
}