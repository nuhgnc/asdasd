import { User } from "./models";
import { connectToDB } from "./utils";

export const addUser = async (formData) => {
    "use server"
    const {
        username,
        email,
        password,
        img,
        isAdmin,
        isActive,
        phone,
        adress } = Object.fromEntries(formData)

    try {
        connectToDB()
        const newUser = new User({
            username,
            email,
            password,
            img,
            isAdmin,
            isActive,
            phone,
            adress
        })
        await newUser.save()
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}