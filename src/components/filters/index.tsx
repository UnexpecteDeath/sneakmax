import { useForm } from "react-hook-form";
import { resetData } from "../../redux/sneakersSlice";
import { useAppDispatch } from "../../redux/store";
import Button from "../button";
import Slider from "../slider";
import styles from './index.module.css'
import { resetFilters, setGender, setPrice, setSizes } from "../../redux/filterSlice";
import { Filters } from "../../types";
import { useState } from "react";
import isEqual from "lodash/isEqual";

export default function AsideFilters() {

    const dispatch = useAppDispatch();

    const { register, handleSubmit, watch, setValue, reset } = useForm<Filters>({
        defaultValues: {
            price: { min: 1850, max: 30000 },
            gender: [],
            sizes: []
         }
    });

    const gender = watch("gender")
    const sizes = watch("sizes")
    const price = watch('price')

    const [lastAppliedFilters, setLastAppliedFilters] = useState<Filters>({
        price: { min: 1850, max: 30000 },
        gender: [],
        sizes: []
    });

    const isFiltersChanged = !isEqual(lastAppliedFilters, { price, gender, sizes } );

    const setFilters = () => {
        if(!isFiltersChanged) return;
        dispatch(resetData());
        dispatch(setPrice(`&price[from]=${price.min}&price[to]=${price.max}`));
        dispatch(setSizes(sizes.map((i) => `&sizes[]=${i}`).join("")));
        dispatch(setGender(gender.map((i) => `&gender=${i}`).join("")));
        setLastAppliedFilters(structuredClone({ price, gender, sizes }))
    };

    const setSize = (num: number) => {
        const currentSizes = watch("sizes");
        if(currentSizes.includes(num)) {
            setValue("sizes", currentSizes.filter(size => size !== num))
        } else {
            setValue("sizes", [...currentSizes, num])
        }
    }

    const handleReset = () => {
        reset()
        dispatch(resetFilters())
    }
    return (
        <aside className={ styles.aside__filters }>
            <form onSubmit={handleSubmit(setFilters)}>
                <h3>Подбор по параметрам</h3>
                <div className={ styles.price__range}>
                    <span>Цена, руб</span>
                    <div className={ styles.input__container }>
                        <input step="any" type='number' {...register("price.min")}/>
                        <input step="any" type='number' {...register("price.max")}/>
                        <Slider setValue={ setValue }/>
                    </div>
                </div>
                <div  className={ styles.gender}>
                    <span>Пол</span>
                    <div className={ styles.gender__input__container }>
                        <label className={ styles.gender__label}>
                            <input className={ styles.gender__input } type='checkbox' value="Мужской"  {...register("gender")}/>
                            мужской
                        </label>
                        <label className={ styles.gender__label}>
                            <input className={ styles.gender__input } type='checkbox' value="Женский" {...register("gender")}/>
                            женский
                        </label>
                    </div>
                </div>
                <div className={ styles.size }>
                    <span>Размер</span>
                    <div className={ styles.size__button__container }>
                        {[35, 36, 37, 38, 39, 40, 41, 42, 43].map((num) =>
                            <button type="button" className={ `${sizes.includes(num) && styles.choice}` } key={`button_key=${num}`} onClick={()=>setSize(num)}>{num}</button>
                        )}
                    </div>
                </div>
                <Button type='gray' text='Применить' disabled={!isFiltersChanged}/>
                <button className={ styles.clear } onClick={handleReset}>сбросить</button>
            </form>
        </aside>
    )
}