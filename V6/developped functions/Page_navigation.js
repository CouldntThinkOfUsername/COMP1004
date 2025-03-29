//function that hides the password input page by setting the display to block when pressed
    function PasswordPage() {
        //variables defining the tab content items representing the pages
        var pwd_page = document.getElementById("Passwords");
        var home_page = document.getElementById("Home");
        var abt_page = document.getElementById("About");
        var lgn_page = document.getElementById("Login");
        var gen_page = document.getElementById("Generate");
        var pwd_ls = document.getElementById("pwd_list");

        if (pwd_page.style.display === "none") {
            pwd_page.style.display = "block";
            home_page.style.display = "none";
            abt_page.style.display = "none";
            lgn_page.style.display = "none";
            gen_page.style.display = "none";
            pwd_ls.style.display = "none";
        } 

        else {
            pwd_page.style.display = "block";
            home_page.style.display = "none";
            abt_page.style.display = "none";
            lgn_page.style.display = "none";
            gen_page.style.display = "none";
            pwd_ls.style.display = "none";
        }

        if (query_inputs.style.display === "none"){ //bug fix for password page disappearing if clicked off without pressing 'back' on the list
            query_inputs.style.display = "block";
        }
    }

    //same function but for the home button on the nav bar
    function HomePage() {
        var pwd_page = document.getElementById("Passwords");
        var home_page = document.getElementById("Home");
        var abt_page = document.getElementById("About");
        var lgn_page = document.getElementById("Login");
        var gen_page = document.getElementById("Generate");
      
        if (home_page.style.display === "none") {
            home_page.style.display = "block";
            pwd_page.style.display = "none";
            abt_page.style.display = "none";
            lgn_page.style.display = "none";
            gen_page.style.display = "none";
            pwd_ls.style.display = "none";
        
        } 
        else {
            home_page.style.display = "block";
            pwd_page.style.display = "none";
            abt_page.style.display = "none";
            lgn_page.style.display = "none";
            gen_page.style.display = "none";
            pwd_ls.style.display = "none";
        }
    }

    function LoginPage() {
        var pwd_page = document.getElementById("Passwords");
        var home_page = document.getElementById("Home");
        var abt_page = document.getElementById("About");
        var lgn_page = document.getElementById("Login");
        var gen_page = document.getElementById("Generate");
      
        if (lgn_page.style.display === "none") {
            lgn_page.style.display = "block";
            pwd_page.style.display = "none";
            abt_page.style.display = "none";
            home_page.style.display = "none";
            gen_page.style.display = "none";
            pwd_ls.style.display = "none";
        
        } 
        else {
            lgn_page.style.display = "block";
            pwd_page.style.display = "none";
            abt_page.style.display = "none";
            home_page.style.display = "none";
            gen_page.style.display = "none";
            pwd_ls.style.display = "none";
        }
    }

    function GeneratorPage() {
        var pwd_page = document.getElementById("Passwords");
        var home_page = document.getElementById("Home");
        var abt_page = document.getElementById("About");
        var lgn_page = document.getElementById("Login");
        var gen_page = document.getElementById("Generate");
      
        if (gen_page.style.display === "none") {
            gen_page.style.display = "block";
            pwd_page.style.display = "none";
            abt_page.style.display = "none";
            home_page.style.display = "none";
            lgn_page.style.display = "none";
            pwd_ls.style.display = "none";
        
        } 
        else {
            gen_page.style.display = "block";
            pwd_page.style.display = "none";
            abt_page.style.display = "none";
            home_page.style.display = "none";
            lgn_page.style.display = "none";
            pwd_ls.style.display = "none";
        }
    }

    function AboutPage(){
        var pwd_page = document.getElementById("Passwords");
        var home_page = document.getElementById("Home");
        var abt_page = document.getElementById("About");
        var lgn_page = document.getElementById("Login");
        var gen_page = document.getElementById("Generate");
      
        if (abt_page.style.display === "none") {
            abt_page.style.display = "block";
            pwd_page.style.display = "none";
            gen_page.style.display = "none";
            home_page.style.display = "none";
            lgn_page.style.display = "none";
            pwd_ls.style.display = "none";
        
        } 
        else {
            abt_page.style.display = "block";
            pwd_page.style.display = "none";
            gen_page.style.display = "none";
            home_page.style.display = "none";
            lgn_page.style.display = "none";
            pwd_ls.style.display = "none";
        }
    }

    //hide/show password list
    function showList() {
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

