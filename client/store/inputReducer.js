import TYPES from "./types";

const inputReducer = (
  state = {
    toggle: false,
    filter: "",
    quantity: 0,
    page: 1,
  },
  action
) => {
  switch (action.type) {
    case TYPES.UPDATE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case TYPES.CLEAR_INPUT:
      return {
        toggle: false,
        filter: "",
        quantity: 0,
        page: 1,
      };
    default:
      return state;
  }
};

export default inputReducer;