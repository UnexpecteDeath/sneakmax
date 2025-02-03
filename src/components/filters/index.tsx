import { useForm } from "react-hook-form";
import { resetData } from "../../redux/sneakersSlice";
import { useAppDispatch } from "../../redux/store";
import Button from "../button";
import Slider from "../slider";
import styles from './index.module.css'
import { resetFilters, setGender, setPrice, setSizes } from "../../redux/filterSlice";
import { Filters } from "../../types";
import { useState } from "react";

export default function AsideFilters() {

    const [filter_data, set_filter_data ] = useState<Filters>({ price: { min: 1850, max: 30000 }, gender: [], sizes: [] })
    const dispatch = useAppDispatch();
    const { handleSubmit } = useForm();

    const setFilters = () => {
        dispatch(resetData());
        dispatch(setPrice(`&price[from]=${filter_data.price.min}&price[to]=${filter_data.price.max}`));

        const size_filters = filter_data.sizes.map((i) => `&sizes[]=${i}`).join("")
        dispatch(setSizes(size_filters))

        const gender_filters = filter_data.gender.map((i) => `&gender=${i}`).join("");
        dispatch(setGender(gender_filters));
    }

    const setSize = (num: number) => {
        set_filter_data({...filter_data, sizes: filter_data.sizes.includes(num) ? filter_data.sizes.filter(size => size !== num) : [...filter_data.sizes, num]})
    }

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        set_filter_data(prev => ({
            ...prev,
            gender: prev.gender.includes(value) ? prev.gender.filter(g => g !== value) : [...prev.gender, value]
        }));
    };

    const handleReset = () => {
        dispatch(resetFilters())
        set_filter_data({ price: { min: 1850, max: 30000 }, gender: [], sizes: [] })
    }
    return (
        <aside className={ styles.aside__filters }>
            <form onSubmit={handleSubmit(setFilters)}>
                <h3>Подбор по параметрам</h3>
                <div className={ styles.price__range}>
                    <span>Цена, руб</span>
                    <div className={ styles.input__container }>
                        <input type='number' value={ filter_data.price.min } onChange={(e)=>set_filter_data(prev => ({...prev, price: {...prev.price, min: Number(e.target.value)}}))}/>
                        <input type='number' value={ filter_data.price.max } onChange={(e)=>set_filter_data(prev => ({...prev, price: {...prev.price, max: Number(e.target.value)}}))}/>
                        <Slider set_filter_data={ set_filter_data } filter_data={ filter_data }/>
                    </div>
                </div>
                <div  className={ styles.gender}>
                    <span>Пол</span>
                    <div className={ styles.gender__input__container }>
                        <label className={ styles.gender__label}>
                            <input className={ styles.gender__input } type='checkbox' value="Мужской"  checked={filter_data.gender.includes("Мужской")} onChange={handleGenderChange}/>
                            мужской
                        </label>
                        <label className={ styles.gender__label}>
                            <input className={ styles.gender__input } type='checkbox' value="Женский" checked={filter_data.gender.includes("Женский")} onChange={handleGenderChange}/>
                            женский
                        </label>
                    </div>
                </div>
                <div className={ styles.size }>
                    <span>Размер</span>
                    <div className={ styles.size__button__container }>
                        {[35, 36, 37, 38, 39, 40, 41, 42, 43].map((num) =>
                            <button type="button" className={ `${filter_data.sizes.includes(num) && styles.choice}` } key={`button_key=${num}`} onClick={()=>setSize(num)}>{num}</button>
                        )}
                    </div>
                </div>
                <Button type='gray' text='Применить'/>
                <button className={ styles.clear } onClick={handleReset}>сбросить</button>
            </form>
        </aside>
    )
}