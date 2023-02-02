const cart = [];

const handleFav = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDFAV":
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

        case "DELFAV":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === exist1.qty) {
                return state.filter((x) => x.id !== exist1.id);
            }
            break;


        default:
            return state;
            break;
    }
}

export default handleFav;