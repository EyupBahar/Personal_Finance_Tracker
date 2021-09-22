import axios from "axios";

export const exchange = async (current, target, amount) => {
  const options = {
    method: "GET",
    url: "https://currency-converter5.p.rapidapi.com/currency/convert",
    params: { format: "json", from: current, to: target, amount: amount },
    headers: {
      "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
      "x-rapidapi-key": "e8f20f96c9mshf269db41472344ep1bc745jsna5cc31e61498",
    },
  };

  let { data } = await axios.request(options);
  console.log(data, "utils");
  return data;
};
