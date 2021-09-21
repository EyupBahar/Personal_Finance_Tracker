export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

export const getId = () => Math.ceil(Math.random() * 100000);

export const initial = { type: "", item: "", amount: "", currency: "" };
export const types = [
  {
    value: "income",
    label: "Income",
  },
  {
    value: "expense",
    label: "Expense",
  },
];

export const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "TL",
    label: "₺",
  },
];
