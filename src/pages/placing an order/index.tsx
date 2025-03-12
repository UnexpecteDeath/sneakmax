import { useEffect, useMemo, useRef, useState } from "react"
import styles from "./index.module.css"
import ProductCart from "../../components/cart/ProductCart"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../redux/store"
import Button from "../../components/button"
import { createOrder } from "../../api/create_order"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormData } from "../../types"
import { resetDataCart } from "../../redux/cartSlice"
import check_mark from "../../images/check-circle.svg"
import { useNavigate } from "react-router-dom"

export default function PlacingAnOrder() {

    const [isOpen, setIsOpen] = useState(true)
    const { data_cart, status_order, order_number } = useSelector((state: RootState) => state.cart)
    const [height, setHeight ] = useState(130)
    const answerRef = useRef<null | HTMLDivElement>(null);
    const { register, handleSubmit, reset, formState: { isValid }  } = useForm<FormData>()
    const [isCreated, setIsCreated] = useState(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    console.log(isValid)
    // useEffect предназначен для корректного отображения контейнера с товарами;
    useEffect(() => {
        if(data_cart.length === 0) {
            setIsOpen(false)
        }
            setTimeout(() => {
                if(!answerRef.current) return
                const currentHeight = answerRef.current.scrollHeight > 350 ? 350 : answerRef.current.scrollHeight;
                setHeight(isOpen ? currentHeight + 130 : 130);
            }, 0);
    }, [isOpen, data_cart])

    const totalPrice = useMemo(() => {
        return data_cart.reduce((acc, i) => i.price + acc, 0)
    },[data_cart])


    const sendData: SubmitHandler<FormData> = (data) => {
        if(!data.name || !data.phone_number || !data.email || !data_cart.length) return;
        try {
            createOrder({
                name: data.name,
                phone_number: data.phone_number,
                email: data.email,
                order_data: data_cart,
                status_order: status_order,
                order_number: order_number
            })
            reset();
            dispatch(resetDataCart())
            setIsCreated(true)
        } catch (error) {
            console.log("Ошибка при отправке заказа:", error)
        }
    }

    const backToHome = () => {
        setIsCreated(false)
        navigate('/')
    }

    return(
        <article className={ styles.article }>
                <h3 className={ styles.title }>Оформление заказа</h3>
                <div className={ styles.body } style={{height: `${height}px` }}>
                        <p className={ styles.details }>Товаров в заказе:<span>{data_cart.length}шт</span></p>
                        <p className={ styles.details }>Общая сумма заказа:<span>{totalPrice}₽</span></p>
                        <p className={ `${styles.compound} ${isOpen && styles.open}`} onClick={()=>setIsOpen(!isOpen)}>Состав заказа</p>
                        <div ref={answerRef} className={ styles.scroll_container }>
                            {data_cart.map((i) =>
                            <ProductCart item={i} key={i.productId}/>
                            )}
                        </div>
                </div>
                <form className={ styles.form__order } onSubmit={handleSubmit(sendData)}>
                <div className={ styles.input__container }>
                        <input type="text" placeholder="Ваше имя" {...register("name", {required: true})} required autoFocus/>
                        <input type="text"
                            placeholder="Номер телефона"
                            {...register("phone_number",
                            {required: true, pattern:
                            { value: /^(\+7|8)\d{10}$/,
                            message: "Введите корректный номер телефона"}})}
                            required/>
                        <input type="email" placeholder="E-mail" {...register("email", {required: true})} />
                    </div>
                    <Button type={isValid ? "red" : "gray"} text="Оформить заказ" disabled={!isValid}/>
                </form>
                <div className={  `${styles.order__created} ${isCreated && styles.created }` }>
                    <img src={check_mark} alt="галочка"></img>
                    <h2>Почти готово! <br/> Проверьте почту и оплатите заказ! <br/>Если возникнут вопросы, можете обратиться по номеру +7 800 789 89 89  <br/> Ваш номер заказа: <br/> { order_number }</h2>
                    <Button type="red" text="Вернуться на главную" onClick={backToHome}/>
                </div>
        </article>
    )
}