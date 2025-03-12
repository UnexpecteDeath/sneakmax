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
            <div  className={ styles.header_container }>
                <Container>
                    <nav className={ styles.header__nav__container }>
                            <Link to={"/"} className={ styles.logo } aria-label="Перейти на главную страницу">SneakMax</Link>
                        {!isMobile ? <DesktopHeader/> : <MobileHeader />}
                    </nav>
                </Container>
            </div>
            <Container>
                <section className={ styles.header__section}>
                            <h1>Кроссовки известных брендов с доставкой по России и СНГ</h1>
                            <p className={ styles.description }>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
                            <Button text={ 'Перейти к покупкам' } type={"red"}/>
                </section>
            </Container>
        </header>
    )
}