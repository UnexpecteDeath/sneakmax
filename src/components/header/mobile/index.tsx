import BurgerMenu from "../menuBtn";
import styles from './index.module.css'
import shopping_cart from '../../../images/shopping_cart.svg'
import { useState } from "react";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function MobileHeader() {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { data_cart } = useSelector((state: RootState) => state.cart )

    return (
        <>
            <BurgerMenu isOpen={ isOpen } setIsOpen={ setIsOpen }/>
            <div className={isOpen ? styles.aside : `${ styles.aside } ${styles.hide}`}>
                <div className={ styles.header__nav }>
                    <a onClick={()=>setIsOpen(false)} href="/#catalog">Каталог</a>
                    <a onClick={()=>setIsOpen(false)} href="/#about_us">О нас</a>
                    <a onClick={()=>setIsOpen(false)} href="/#product_selection">Подбор Товара</a>
                    <a onClick={()=>setIsOpen(false)} href="/#team">Наша команда</a>
                    <a onClick={()=>setIsOpen(false)} href="/#faq">Доставка и оплата</a>
                    <a onClick={()=>setIsOpen(false)} href='/#contacts'>Контакты</a>
                    <Link to={"cart"} onClick={()=>setIsOpen(false)} className={ styles.shopping__cart }>Корзина
                        <div className={ styles.cart }>
                            <img src={ shopping_cart } alt='корзина'></img>
                            {data_cart.length > 0 && <span className={ styles.cart_badge }>{data_cart.length}</span>}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}