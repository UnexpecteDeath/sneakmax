import Nouislider from "nouislider-react";
import styles from "./slider.module.css"
import './slider.css'
import { Filters } from "../../types";

type Props = {
    set_filter_data:  (data: Filters) => void,
    filter_data: Filters
}

export default function Slider({ set_filter_data, filter_data }: Props) {

    return (
        <div className={ styles.slider__container}>
           <Nouislider range={{min: 1850, max: 30000}} start={[1850, 30000]}
            onUpdate={(slider) => {
                set_filter_data({...filter_data, price: {min: Number(slider[0]), max: Number(slider[1])}})
            }
            } connect/>
        </div>
    )
}