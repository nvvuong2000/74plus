import * as type from "../contains/ManageCart";

var data = JSON.parse(localStorage.getItem('damua',));
const items = (data) ? data : [];

const initialState = {

    total: 0,

};

const showTotal = (cart) => {
    console.log(cart);
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].product.unitPrice * cart[i].quanlity;
        
    }
    return total;
}


var FindID = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {

            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    //  console.log(index);
    return index;
}

var rootReducer = (state = initialState, action) => {

    switch (action.type) {
      
        case type.TOTAL_CART:
            state.total = showTotal(items);
            console.log(showTotal(items));
            return {...state}
        default: return state


    }

};

export default rootReducer;