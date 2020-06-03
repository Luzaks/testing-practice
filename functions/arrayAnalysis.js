function arrayAnalysis(array) {
  const { length } = array;
  let average = 0;
  let minNum = 0;
  let maxNum = 0;
  let sum = 0;
  if (length !== 0) {
    sum = array.reduce((a, b) => a + b);
    minNum = Math.min(...array);
    maxNum = Math.max(...array);
    average = sum / length;
  }
  return {
    average,
    min: minNum,
    max: maxNum,
    length,
  };
}
export default arrayAnalysis;