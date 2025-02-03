import { CartSneaker } from "./typeState"

export type Sneaker = {
    id: number,
    vendorСode: string,
    inStock: number,
    title: string,
    description: string,
    imgUrl: string,
    stars: number,
    sizes: number[],
    price: number,
    oldPrice: number,
    gender: string,
    color: string,
    compound: string,
    country: string
}


export type Team ={
    id: number,
    imgUrl: string,
    name: string,
    role: string
}

export type FormData = {
    name: string,
    phone_number: string,
    email: string,
    order_data: CartSneaker[],
    status_order: string,
    order_number: string
}

type Price = {
    min: number,
    max: number
}
export type Filters = {
    price: Price,
    gender: string[],
    sizes: number[]
}
