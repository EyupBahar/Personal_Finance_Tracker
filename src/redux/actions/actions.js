import * as types from "../constants/constants";

export const addEntry = (value) => (dispatch, getState) => {
  let { allEntries } = getState();

  localStorage.setItem("Entries", JSON.stringify([...allEntries.data, value]));
  dispatch({ type: types.ADD_ITEM, payload: value });
};

export const editEntry = (value) => (dispatch, getState) => {
  let { allEntries } = getState();
  let currentId = value.id;

  localStorage.setItem(
    "Entries",
    JSON.stringify([
      ...allEntries.data.map((i) => (i.id === currentId ? value : i)),
    ])
  );
  dispatch({ type: types.UPDATE_ITEM, payload: value });
};

export const deleteItem = (value) => (dispatch, getState) => {
  let { allEntries } = getState();
  localStorage.setItem(
    "Entries",
    JSON.stringify([...allEntries.data.filter((i) => i.item !== value)])
  );

  dispatch({ type: types.DELETE_ITEM, payload: value });
};
