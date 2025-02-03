import styles from "./index.module.css"
import trash_image from "../../../images/trash.svg"
import { CartSneaker } from "../../../types/typeState"
import { useAppDispatch } from "../../../redux/store"
import { deleteProduct } from "../../../redux/cartSlice"

type Props = {
    item: CartSneaker
}

export default function ProductCart({ item }: Props) {

    const dispatch = useAppDispatch();

    return(
        <>
            <div className={ styles.product__card } key={`item__cart-key=${item.id}`}>
                <img src={ item.imgUrl }  alt={ item.title } className={ styles.cart__item__image}></img>
                    <div className={ styles.card__info__container }>
                        <div className={ styles.card__info }>
                            <p className={ styles.name }>{ item.title }</p>
                            <h2 className={ styles.price }>{ item.price }</h2>
                        </div>
                        <button onClick={()=>dispatch(deleteProduct(item.productId))} className={ styles.delete__item } ><img src={ trash_image } alt="Удалить товар"></img></button>
                    </div>
            </div>
        </>
    )
}