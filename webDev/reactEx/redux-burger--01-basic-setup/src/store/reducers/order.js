import * as actionsTypes from "../actions/actionsTypes";

const initialState = { orders: [], loading: false, purchased: false };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.PURCHASE_INIT:
      return { ...state, purchased: false };
    case actionsTypes.PURCHASE_START:
      return { ...state, loading: true };

    case actionsTypes.PURCHASE_SUCCESS:
      const newOrder = { ...action.orderData, id: action.orderId };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      };

    case actionsTypes.PURCHASE_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default reducer;