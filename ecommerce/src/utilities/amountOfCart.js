export const amount = (data) => {
  const response = data.reduce((result, cur) => {
    result += cur.amount;

    return result;
  }, 0);

  return response;
};