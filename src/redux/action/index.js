
// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For Delete from Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

// For CompleteDeleteCard from Cart
export const delAllCart = (product) => {
    return {
        type: "DELALLITEM",
        payload: product
    }
}


// For Add Item to fav
export const addFav = (product) => {
    return {
        type: "ADDFAV",
        payload: product
    }
}

// For Delete Item from fav
export const delFav = (product) => {
    return {
        type: "DELFAV",
        payload: product
    }
}