export const getTotal = (arr, prop, prop2) => {
  
  return arr.reduce((a, b) => {
    if (prop2) return a + Number(b[prop]) * Number(b[prop2]);

    return a + Number(b[prop]);
  }, 0);
};
