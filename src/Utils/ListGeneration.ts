export const generateValues = () => {
  let returnValues = [];
  for (let i = 0; i < 10; i++) {
    returnValues.push(Math.floor(Math.random() * 100 + 1));
  }
  return returnValues;
};
