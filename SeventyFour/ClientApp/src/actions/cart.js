import * as type from '../contains/ManageCart'
export const getAll = () => {
    return {

        type: type.GET_ALL,
    }
}
export const totalCart = () => {
    return {

        type: type.TOTAL_CART,
    }
}
export const addToCard = (product, quanlity) => {
    return {
        type: type.ADD_TO_CARD,
        product,
        quanlity,
    }
}
export const DeleteToCard = (product) => {
    return {
        type: type.DELETE_TO_CARD,
        product,

    }
}
export const ChangeItem = (product, change) => {
    return {
        type: type.CHANGE_QUAN_ITEM,
        product,
        change

    }
}