import styles from "./index.module.css"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import Button from "../button"
import ProductCart from "./ProductCart"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"

type Props = {
    closeCart: () => void;
}

export default function Cart({ closeCart }: Props) {

    const { data_cart } = useSelector((state: RootState) => state.cart )
    const navigate = useNavigate();

    const totalPrice = useMemo(() => {
        return data_cart.reduce((acc, i) => i.price + acc, 0)
    },[data_cart])

    const handleClick = () => {
        navigate("/order")
        closeCart()
    }

    return (
        <div className={ styles.cart }>
        {data_cart.length > 0 && <div className={ styles.cart__list }>
                {data_cart.map((item) =>
                    <ProductCart item={ item } key={`key=${item.productId}`}/>
                )}
            </div>}
            {data_cart.length === 0 &&
                <div className={ styles.clear__cart__list }><h2>Корзина пуста...</h2></div>
            }
            <div className={ styles.footer__cart }>
                <div className={ styles.total__price__container }>
                    <p className={ styles.total__price__title }>Итого:</p>
                    <h2 className={ styles.total__price }>{totalPrice} ₽</h2>
                </div>
                <Button text="Перейти к оформлению" type={!data_cart.length ? "gray" : "red"} onClick={handleClick} disabled={data_cart.length === 0}/>
            </div>
        </div>
    )
}