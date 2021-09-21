export const sum = (arr, type) => {
  let toplam = arr
    .filter((i) => i.type === type)
    .reduce((acc, cur) => acc + Number(cur.amount), 0);
  return toplam;
};
