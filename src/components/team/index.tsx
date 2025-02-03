import { useEffect } from "react"
import styles from "./index.module.css"
import { RootState, useAppDispatch } from "../../redux/store"
import { getTeam } from "../../api/team"
import { useSelector } from "react-redux"
import background_image from "../../images/Group 72.svg"
import Loader from "../loader"
import { Container } from "../container"


export default function Team() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getTeam())
    }, [])
    const { data, status } = useSelector((state: RootState) => state.team );

    return (
        <section className={ styles.section__team } id="team">
            <img src={ background_image } alt="background_image" className={ styles.background_image }></img>
            <Container className={ styles.section__team__container }>
                <h2>Наша команда</h2>
                <div className={ styles.team__container }>
                    {data.length > 1 && data.map((item) =>
                    <article className={ styles.card__team } key={`team-key=${item.id}`}>
                        <img src={ `${item.imgUrl}?w=380` } alt={item.name}></img>
                        <h3>{item.name}</h3>
                        <p>{item.role}</p>
                    </article>
                    )}
                </div>
                {status === "pending" &&
                    <div className={ styles.central }>
                        <Loader type="white"/>
                </div>}
            </Container>
        </section>
    )
}