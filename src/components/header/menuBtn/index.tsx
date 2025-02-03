import { Dispatch } from 'react'
import styles from './index.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

type Props = {
    isOpen: boolean,
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
}


export default function BurgerMenu({ isOpen, setIsOpen}: Props) {


    const { data_cart } = useSelector((state: RootState) => state.cart )

    return (
        <div className={ styles.burger__menu}>
            <input type="checkbox" checked={isOpen} onChange={()=>setIsOpen(!isOpen)}/>
            <div className={ styles.burger__lines }>
                <span className={ `${styles.line} ${styles.line1}`}></span>
                <span className={ `${styles.line} ${styles.line2}`}></span>
                <span className={ `${styles.line} ${styles.line3}`}></span>
            </div>
            {data_cart.length > 0 && <span className={ styles.cart_badge }>{data_cart.length}</span>}
        </div>
    )
}