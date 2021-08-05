import * as type from "../contains/ManageCart";

var data = JSON.parse(localStorage.getItem('damua',));
console.log(data);
const items = (data) ? data : [];

const initialState = {

    itemList: items,

};


var FindID = (cart, product) => {
    console.log(cart);
    console.log(product);
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {

            if (cart[i].product.id === product.productId) {
                index = i;
                break;
            }
        }
    }
    console.log(index);
    return index;
}
var FindID2 = (cart, product) => {
    console.log(cart);
    console.log(product);
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {

            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    console.log(index);
    return index;
}


var rootReducer = (state = initialState.itemList, action) => {

    switch (action.type) {
        case type.GET_ALL:
            console.log(state);
            return state;
        case type.ADD_TO_CARD:
            console.log(action);
            console.log(state);
            var index = -1;
            var index = FindID(state, action.product);
            if (index === -1) {
                var newBuyItem =
                {
                    product: {

                        id: action.product.productId,
                        productName: action.product.productName,
                        size: "M",
                        unitPrice: action.product.unitPrice,
                        frontImg: action.product.frontImagePath
                    },
                    quanlity: 1
                }
                console.log(newBuyItem)

                state.push(newBuyItem);

            }
            else {

                state[index].quanlity += parseInt(action.quanlity);

            }
            localStorage.setItem('damua', JSON.stringify(state));

            return [...state];
        case type.DELETE_TO_CARD:
            // console.log();
            // console.log(state.product);
            var index = -1;
            console.log(action.product);
            index = FindID2(state, action.product);
            console.log(index);
            if (index !== -1) {
                console.log(state);

                state.splice(action[index], 1);

            }

            localStorage.setItem('damua', JSON.stringify(state));
            return [...state];
        case type.CHANGE_QUAN_ITEM:
            var index = -1;
            var index = FindID2(state, action.product);
            console.log(index);
            state[index].quanlity = action.change;
            localStorage.setItem('damua', JSON.stringify(state));
            return [...state];
        default: return state


    }

};

export default rootReducer;