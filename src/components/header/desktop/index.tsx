import styles from './index.module.css'
import shopping_cart from '../../../images/shopping_cart.svg'
import Cart from '../../cart'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

export default function DesktopHeader() {

    const [isOpen, setIsOpen ] = useState(false)

    const closeCart = () => {
        setIsOpen(false)
    }

    const { data_cart } = useSelector((state: RootState) => state.cart )

    return (
        <>
        <div className={ styles.header__nav }>
            <a href="#catalog">Каталог</a>
            <a href="#about_us">О нас</a>
            <a href='#product_selection'>Подбор Товара</a>
            <a href="#team">Наша команда</a>
            <a href="#faq">Доставка и оплата</a>
            <a href='#contacts'>Контакты</a>
            <a className={ styles.shopping__cart } onClick={()=>setIsOpen(!isOpen)}>Корзина
                <div className={ styles.cart }>
                    <img src={ shopping_cart } alt='корзина' className={ styles.shopping_cart__image }></img>
                    {data_cart.length > 0 && <span className={ styles.cart_badge }>{data_cart.length}</span>}
                    <div className={ `${ styles.cart__container } ${isOpen && styles.visible}` } onClick={(e) => e.stopPropagation()}>
                        <Cart closeCart={closeCart}/>
                    </div>
                </div>
            </a>
        </div>
        {isOpen && <div className={styles.overlay} onClick={closeCart}></div>}
        </>
    )
}