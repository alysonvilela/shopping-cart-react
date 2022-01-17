import { useContext } from "react"
import { BuyContext } from "../../App"

export const Checkout = () => {
    const {productList, cartItems} = useContext(BuyContext)

    return (
        <div>
            Checkout Page
        </div>
    )
}