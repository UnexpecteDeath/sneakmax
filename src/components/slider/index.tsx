import Nouislider from "nouislider-react";
import styles from "./slider.module.css"
import './slider.css'
import { Filters } from "../../types";
import { UseFormSetValue } from "react-hook-form";

type Props = {
    setValue: UseFormSetValue<Filters>
}

export default function Slider({ setValue }: Props) {

    return (
        <div className={ styles.slider__container}>
           <Nouislider range={{min: 1850, max: 30000}} start={[1850, 30000]}
            onUpdate={(slider) => {
                setValue("price.min", Number(slider[0])),
                setValue("price.max", Number(slider[1]))
            }
            } connect/>
        </div>
    )
}