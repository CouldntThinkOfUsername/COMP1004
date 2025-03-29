const passChars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!?-#@&';

function GenerateNewPass(){
    var password = [];
    passwordLength = Math.floor(Math.random() * (24 - 8) + 8 ); //random length (min 8, max 24)

    for (i = 0; i <= passwordLength; i++){ //loop to fill the password array one character at a time with a random one each time
        const passCharsLength = passChars.length;
        let x = Math.random() * passCharsLength;
        password[i] = passChars.charAt(x); //filling an array with the random characters
    }
    GenPwd = password.join(""); //makes the array into a string
    document.getElementById("Pword").innerHTML = GenPwd;

}

/* referenced:
https://www.w3schools.com/js/js_random.asp
https://dev.to/gaelgthomas/array-to-string-without-commas-in-javascript-4mg6#:~:text=In%20JavaScript%2C%20all%20arrays%20have,join(%22%22)%20).
https://www.w3schools.com/tags/tag_span.asp
*/