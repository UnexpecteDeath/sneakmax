import styles from "./index.module.css"
import { useEffect, useRef, useState } from "react"

type Props = {
    question: string,
    answer: string
}

export default function Question({ question, answer }: Props) {

    const [isOpen, setIsOpen ] = useState(false)
    const [height, setHeight ] = useState(80)
    const answerRef = useRef<null | HTMLParagraphElement>(null);

    useEffect(() => {
            setTimeout(() => {
                setHeight(isOpen && answerRef.current ? answerRef.current.scrollHeight + 100 : 80);
            }, 0);
    }, [isOpen])

    useEffect(()=> {
        function handleResize() {
                setIsOpen(false)
        }
        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return(
        <div className={styles.quetion} style={{ height: `${height}px` }}>
            <div className={styles.header__quetion}>
                <p className={ styles.name__question }>{ question }</p>
                <div className={styles.btn__container}>
                    <input type="checkbox" checked={isOpen} onChange={()=>setIsOpen(!isOpen)}/>
                    <div className={styles.open__close_btn}>
                        <span className={styles.line1} ></span>
                        <span className={styles.line2} ></span>
                    </div>
                </div>
            </div>
            <p className={styles.answer} ref={answerRef}>{ answer }</p>
        </div>
    )
}