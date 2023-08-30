

export const Formvalidation = (userData) => {

  const {fname,lname,email,password} = userData

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const specialChars = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '[',
    '{',
    ']',
    '}',
    ':',
    ';',
    '<',
    '>',
  ]

  if(fname.length === 0){
    alert('First name cannot be empty')
    return false
  }
  if(lname.length === 0){
    alert('Last name cannot be empty')
    return false
  }

  if(!emailRegex.test(email) || email.length === 0){
    alert('Enter valid email address')
    return false;
  }
  if(password.length < 8){
    alert('Password length must be greater than 8')
    return false;
  }

  let countUpperCase = 0
  let countLowerCase = 0
  let countDigit = 0
  let countSpecialCharacters = 0

  for(let i=0; i<password.length; i++){
    if(specialChars.includes(password[i])){
      countSpecialCharacters++;
    }
    else if(!isNaN(password[i]*1)){
      countDigit++;
    } else {
      if(password[i] === password[i].toUpperCase()){
        countUpperCase++;
      }
      if(password[i] === password[i].toLowerCase()){
        countLowerCase++;
      }
    }
  }
  if(countLowerCase === 0){
    alert('Atleast 1 LowerCase character is required')
    return false;
  }
  if(countUpperCase === 0){
    alert('Atleast 1 UpperCase character is required')
    return false;
  }

  if(countDigit === 0){
    alert('Atlease 1 Digit character is required')
    return false;
  }
  if(countSpecialCharacters === 0){
    alert('Atleast 1 Special character is required')
    return false;
  }

  return true;
  
}
