import { useParams } from "react-router-dom"
import styles from './index.module.css'
import { useEffect, useState } from "react"
import { RootState, useAppDispatch } from "../../redux/store"
import { getSneaker } from "../../api/product"
import { useSelector } from "react-redux"
import star from "../../images/Star 3.svg"
import Button from "../../components/button"
import galochka from "../../images/galochka.svg"
import no_star from "../../images/no_star.svg"
import { addProduct } from "../../redux/cartSlice"
import { Container } from "../../components/container"
import Loader from "../../components/loader"

export default function SneakersPage() {

    const params = useParams()
    const dispatch = useAppDispatch()
    const [size, setSize] = useState<null | number>(null)
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        if(params.id) {
            dispatch(getSneaker(params.id))
        }
    }, [params])

    const { data, status } = useSelector((state: RootState) => state.sneaker)
    const [inStock, setInStock] = useState(data?.inStock)

    useEffect(() => {
        setInStock(data?.inStock)
    }, [data])

    const addProductToCart = () => {
        if(!inStock) return;
        console.log(inStock)
        dispatch(addProduct({...data, size: size ,productId: crypto.randomUUID()}))
        setInStock(inStock - 1)
    }

    return (
        <>
        <section>
            {status === "pending" && <Loader type="blue"/>}
        {data && <Container className={ styles.sneakers__section } id="sneakers__section">
            <div className={ styles.main__container }>
                <div className={ styles.image__container }>
                    {data.inStock === 0 && <span>Товара нет в наличии</span>}
                    {!isLoad && <div className={ styles.center }><Loader type="blue"/></div>}
                    <img src={ `${data.imgUrl}?w=540` } alt={ data.title } onLoad={()=>setIsLoad(true)}></img>
                </div>
                <div className={ styles.main__info }>
                    <div className={ styles.header }>
                        <h3>{data.title}</h3>
                        <p>В наличии {data.inStock} шт.</p>
                    </div>
                    <div className={ styles.rate__star__container }>
                        {[1, 2, 3, 4, 5].map((item) =>
                            <img src={data.stars >= item ? star : no_star} alt="rate star" key={`star-key=${item}`}></img>
                        )}
                    </div>
                    <div className={ styles.select__size }>
                        <p>Выберите размер</p>
                        <div className={ styles.size__container }>
                            {[35, 36, 37, 38, 39, 40, 41, 42, 43].map((s) =>
                            <button key={`size-key=${s}`} disabled={data.sizes.indexOf(s) === -1} onClick={()=>setSize(s)} id={`${s === size ? "choice" : ''}`}>{ s }</button>
                            )}
                        </div>
                    </div>
                    <div className={ styles.price__container }>
                        <h2>{ data.price }</h2>
                        <p>{ data.oldPrice }</p>
                    </div>
                    <Button text="Заказать" type={`${size ? 'red' : 'gray'}`} onClick={addProductToCart} disabled={data.inStock === 0}/>
                    <div className={ styles.guarantee }>
                        <p><img src={ galochka } alt=""></img>Бесплатная доставка до двери</p>
                        <p><img src={ galochka } alt=""></img>Оплата заказа при получении</p>
                        <p><img src={ galochka } alt=""></img>Обмен в течении двух недель</p>
                    </div>
                </div>
            </div>
            <div className={ styles.description__container }>
                <h3 className={ styles.description__title }>Описание</h3>
                <h3>Характеристики</h3>
                <p  className={ styles.description }>{ data.description }</p>
                <div className={ styles.parameters }>
                    <p>Пол: {data.gender}</p>
                    <p>Цвета: {data.color}</p>
                    <p>Состав: {data.compound}</p>
                    <p>Страна: {data.country}</p>
                </div>
            </div>
            </Container>}
        </section>
        </>
    )
}