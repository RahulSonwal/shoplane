const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //Check if product is already exist
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // Increase the qty
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );

            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
            break;

        case "DELALLITEM":
            const exist2 = state.find((x) => x.id === product.id);
            if (exist2.qty === exist2.qty) {
                return state.filter((x) => x.id !== exist2.id);
            }
            break;


        default:
            return state;
            break;
    }
}

export default handleCart;