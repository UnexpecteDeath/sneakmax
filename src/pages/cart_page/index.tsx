import Cart from "../../components/cart";
import { Container } from "../../components/container";
import styles from "./index.module.css"
import "./index.css"
import { useNavigate } from "react-router-dom";

export default function Cart_page() {

    const navigate = useNavigate()

    return (
        <section className={ styles.cart_section }>
            <Container id="cart_container">
            <Cart closeCart={()=>navigate("/order")}/>
            </Container>
        </section>
    )
}