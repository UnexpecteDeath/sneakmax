import { Link } from 'react-router-dom';
import { useMobile } from '../../hooks/useMobileHook'
import Button from '../button';
import DesktopHeader from './desktop'
import styles from './header.module.css'
import MobileHeader from './mobile'
import { Container } from '../container';

export default function Header() {

    const isMobile = useMobile();


    return (
        <header className={ styles.header }>
            <Container className={ styles.container }>
                <nav className={ styles.header__nav__container }>
                        <Link to={"/"} className={ styles.logo } aria-label="На главную страницу">SneakMax</Link>
                    {!isMobile && <DesktopHeader/>}
                    {isMobile && <MobileHeader />}
                </nav>
                <section className={ styles.header__section}>
                            <h1>Кроссовки известных брендов с доставкой по России и СНГ</h1>
                            <p className={ styles.description }>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
                            <Button text={ 'Перейти к покупкам' } type={"red"}/>
                </section>
            </Container>
        </header>
    )
}