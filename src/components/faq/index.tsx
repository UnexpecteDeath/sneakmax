import { Container } from "../container"
import styles from "./index.module.css"
import Question from "./quetion"
import questions from "./question.json"

export default function FAQ() {


    return (
        <section className={ styles.faq_section } id="faq">
            <Container className={ styles.container }>
                <h2 className={ styles.title_faq }>Часто задаваемые вопросы</h2>
                <div className={ styles.faq_container } >
                    {questions.map((q) =>
                        <Question question={ q.question } answer={ q.answer } key={`question-key=${q.id}`}/>
                    )}
                </div>
            </Container>
        </section>
    )
}