import {Product, User} from "./models"
import { connectToDB } from "./utils"

export const fetchUsers = async (q,page) => {

    const regex = new RegExp(q,"i")

    const ITEM_PER_PAGE = 10

try {
    connectToDB()
    const count = await User.find({username: {$regex:regex}}).count()
    const users = await User.find({username: {$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1))
    return {count,users}
} catch (error) {
    console.log(error)
    throw new Error("Failed to fetch users !!")
}
}

export const fetchProducts = async (q,page) => {

    const regex = new RegExp(q,"i")

    const ITEM_PER_PAGE = 10

try {
    connectToDB()
    const count = await Product.find({title: {$regex:regex}}).count()
    const products = await Product.find({title: {$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1))
    console.log(products)
    return {count,products}
} catch (error) {
    console.log({ProductsError: error})
    throw new Error("Failed to fetch products !!")
}
}