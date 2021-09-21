import * as types from "../constants/constants";

export const entriesReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return { ...state, data: [...state.data, action.payload] };
    case types.DELETE_ITEM:
      return {
        ...state,
        data: [...state.data.filter((i) => i.item !== action.payload)],
      };
    case types.UPDATE_ITEM:
      return {
        ...state,
        data: [
          ...state.data.map((i) =>
            i.id === action.payload.id ? action.payload : i
          ),
        ],
      };
    default:
      return state;
  }
};
