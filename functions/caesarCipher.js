const caesar = (string, shift) => {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    const char = string.charCodeAt(i);

    const mod = (num) => ((char - num + shift) % 26) + num;

    if (char >= 65 && char <= 90) {
      result += String.fromCharCode(mod(65));
    } else if (char >= 97 && char <= 122) {
      result += String.fromCharCode(mod(97));
    } else {
      result += string.charAt(i);
    }
  }

  return result;
};

export default caesar;