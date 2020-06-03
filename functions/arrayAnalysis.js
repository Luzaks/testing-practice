/* eslint-disable prefer-destructuring */
function arrayAnalysis(array) {
  const { length } = array;
  let average = 0;
  let minNum = 0;
  let maxNum = 0;
  let sum = 0;
  if (length !== 0) {
    minNum = array[0];
    maxNum = array[0];
    for (let i = 0; i < length; i += 1) {
      if (minNum > array[i]) minNum = array[i];
      if (maxNum < array[i]) maxNum = array[i];
      sum += array[i];
    }
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