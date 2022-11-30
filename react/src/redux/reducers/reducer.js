const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const ItemIndex = state.carts.findIndex(
        (Item) => Item._id === action.payload._id
      );

      if (ItemIndex >= 0) {
        state.carts[ItemIndex].quantity += 1;
        console.log([ItemIndex]);
      }
      else {
        const temp = { ...action.payload, quantity: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
      console.log(action.payload);

    // return{
    //     ...state,
    //     carts: [...state.carts, action.payload]
    // }

    case "RMV_CART":
      const data = state.carts.filter(
        (element) => element.id !== action.payload
      );
      return {
        ...state,
        carts: data,
      };

    case "RMV_ONE":
      const ItemIndex_decrement = state.carts.findIndex(
        (Item) => Item.id === action.payload.id
      );

      if (state.carts[ItemIndex_decrement].quantity >= 1) {
        const dltitem = (state.carts[ItemIndex_decrement].quantity -= 1);
        console.log([...state.carts, dltitem]);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[ItemIndex_decrement].quantity === 1) {
        const data = state.carts.filter(
          (element) => element.id !== action.payload
        );
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
