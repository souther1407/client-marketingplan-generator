export const isNumberTooBig = (value) => {
  return parseInt(value) > 50000 ? "Max amount $50,000" : "";
};

export const isEmpty = (value) => {
  return value.length === 0 ? "Empty value not allowed" : "";
};
