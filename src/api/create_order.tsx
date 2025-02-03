import { FormData } from "../types";
import { initial } from "./initial"




export const createOrder = async (data: FormData) => {
    try {
        const res = initial.post("/orders", data)
        return res
    } catch (error) {
        console.error(error);
    }
}