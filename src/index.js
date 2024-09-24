const phoneNumber = prompt('Enter your phone number');
let phoneCode;

/*if (phoneNumber.includes('+380')) {
  phoneCode = 'Ukraine';
} else {
  phoneCode = 'Other';
}

alert(phoneCode);
*/

phoneNumber.includes('+380') ? phoneCode = 'Ukraine' : phoneCode = 'Other';

alert(phoneCode);
