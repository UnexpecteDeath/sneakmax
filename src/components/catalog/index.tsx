import styles from './index.module.css'
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { useMobile } from "../../hooks/useMobileHook";
import { getSneakers } from '../../api/products';
import AsideFilters from '../filters';
import ProductCard from '../productCard';
import Button from '../button';
import { incCurrentPages } from '../../redux/sneakersSlice';
import Loader from '../loader';
import filter_image from '../../images/filter.svg'
import { Container } from '../container';

export default function Catalog() {

const dispatch = useAppDispatch();
const isMobile = useMobile()
const [ isOpen, setIsOpen ] = useState(!isMobile)
const { price, gender, sizes } = useSelector((state: RootState) => state.filter)
const { status, totalPages, currentPage, data } = useSelector(
    (state: RootState) => state.sneakers
);

useEffect(() => {
    dispatch(getSneakers({ page: currentPage, parameters: price + gender + sizes }));
}, [currentPage, price, gender, sizes]);

useEffect(() => {
    const handleRezise = () => {
    setIsOpen(!isMobile)
    }

    window.addEventListener('resize', handleRezise)

    return () => { window.removeEventListener('resize', handleRezise) }
}, [isMobile])


    return (
        <section className={styles.catalog__section} id='catalog'>
        <Container>
          <div className={ styles.header__catalog }>
            <h2 className={styles.catalog__title}>Каталог</h2>
            {isMobile && <button aria-label="Фильтры" className={ styles.filters__button } onClick={()=>setIsOpen(!isOpen)}><img src={ filter_image } alt="фильтры"></img></button>}
          </div>
          <div className={styles.catalog__section__container}>
            {isOpen && <AsideFilters />}
            {data.length > 0 && (
              <div className={styles.products}>
                <div className={styles.products__container}>
                  {data.map((sneakers) => (
                    <ProductCard key={sneakers.id} data={sneakers} />))}
                </div>
                {status === "fulfilled" && totalPages !== currentPage && (
                  <Button
                    text="Показать еще"
                    type="red"
                    onClick={() => dispatch(incCurrentPages(currentPage + 1))} />)}
                {status === "pending" && (
                  <div className={styles.center}>
                    <Loader type='blue'/>
                  </div>)}
              </div>
            )}
            {data.length === 0 && status === "pending" && (
              <div className={styles.center}>
                <Loader type='blue'/>
              </div>
            )}
          </div>
        </Container>
      </section>
    )
}