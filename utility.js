const validateArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return false;
  }
  return true;
};

const validString = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return false;
  }
  return true;
};

const validateNumber = (num) => {
  if (typeof num !== "number") {
    return false;
  }
  return true;
};

module.exports.validateArray = validateArray;
module.exports.validString = validString;
module.exports.validateNumber = validateNumber;
