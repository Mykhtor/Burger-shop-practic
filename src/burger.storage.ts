import { nanoid } from "nanoid";
import { type } from "os";

export type Burger = {
  id:   string
  name: string
  image: string
  cost: number
}

let cheese: Burger = {
  id: nanoid(),
  name: 'Cheese Burger',
  image: '/images/burger1.png',
  cost: 25_000
}

let garage: Burger = {
  id: nanoid(),
  name: 'Garage Burger',
  image: '/images/burger1.png',
  cost: 20_000
}

let x: Burger = {
  id: nanoid(),
  name: 'x Burger',
  image: '/images/burger1.png',
  cost: 69_000
}
let it: Burger = {
  id: nanoid(),
  name: 'it Burger',
  image: '/images/burger1.png',
  cost: 15_000
}
let chikken: Burger = {
  id: nanoid(),
  name: 'Chikken Burger',
  image: '/images/burger1.png',
  cost: 23_000
}

export const burgers: Burger[] = [
  it, chikken, x, garage,
]