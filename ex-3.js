function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (isNaN(pin[i])) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
//ใช้Chat gpt ช่วย จำisNan(..)ไม่ได้

let result1 = validatePIN("1234");
console.log(result1); // true

let result2 = validatePIN("12345");
console.log(result2); // false

let result3 = validatePIN("a234");
console.log(result3); // false
