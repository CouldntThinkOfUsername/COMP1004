//Random generator as part of the password generator im working on

//defining variables
const passChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!?-#@&';
const password = [];
//password is a random length between 8 and 24 characters
passwordLength = Math.floor(Math.random() * (24 - 8) + 8 );

for (i = 0; i <= passwordLength; i++){ //loop to fill the password array one character at a time with a random one each time
    const passCharsLength = passChars.length;
    let x = Math.random() * passCharsLength;
    password[i] = passChars.charAt(x); 
    
    console.log(passChars.charAt(x)); //debug
}
GenPwd = password.join("");
console.log(GenPwd);