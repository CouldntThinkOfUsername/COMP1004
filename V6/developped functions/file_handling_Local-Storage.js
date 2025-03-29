//working on the revised file handling 


//defining the element variables
const inpSite = document.getElementById("site");
const inpUsername = document.getElementById("username");
const inpPassword = document.getElementById("password");
const save_btn = document.getElementById("save_btn");

//saves the details to the local storage 
 function saveValues(){
    const site = inpSite.value;
    const username = inpUsername.value;
    const password = inpPassword.value;

    //if every input is populated then it will save each of them into the local storage
    if (site && username && password) {
        localStorage.setItem("Website", site);
        localStorage.setItem("Username", username);
        localStorage.setItem("Password", password);
    }

};


//load button currently only shows in console 
function loadValues() {

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
    }
        
    pwd_ls = document.getElementById("pwd_list");
    query_inputs = document.getElementById("pwd_in");
    pwd_ls.style.display = "block";
    query_inputs.style.display = "none";

}
    

function goBack(){
    pwd_ls = document.getElementById("pwd_list");
    query_inputs = document.getElementById("pwd_in");
    pwd_ls.style.display = "none";
    query_inputs.style.display = "block";
}


/* citations:
    https://www.w3schools.com/jsref/prop_win_localstorage.asp
    https://www.youtube.com/watch?v=AUOzvFzdIk4
    https://www.youtube.com/watch?v=k8yJCeuP6I8


*/