import { Sneaker, Team } from './index'


export type SneakersState = {
    data: Sneaker[],
    status: string,
    totalPages: number,
    currentPage: number
}

export type SneakerState = {
    data: Sneaker | null,
    status: string
}

export type TeamState = {
    data: Team[],
    status: string
}

export type CartSneaker = Sneaker & {
    productId: string,
    size: number
}

export type CartState = {
    data_cart: CartSneaker[],
    status_order: string,
    order_number: string
}