//function that hides the password input page by setting the display to block when pressed
    function PasswordPage() {
        //variables defining the tab content items representing the pages
        var pwd_page = document.getElementById("Passwords");
        var home_page = document.getElementById("Home");
        var abt_page = document.getElementById("About");
        var lgn_page = document.getElementById("Login");
        var gen_page = document.getElementById("Generate");

        if (pwd_page.style.display === "none") {
            pwd_page.style.display = "block";
            home_page.style.display = "none";
            abt_page.style.display = "none";
            lgn_page.style.display = "none";
            gen_page.style.display = "none";
        } 

        else {
            pwd_page.style.display = "block";
            home_page.style.display = "none";
            abt_page.style.display = "none";
            lgn_page.style.display = "none";
            gen_page.style.display = "none";
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
        
        } 
        else {
            home_page.style.display = "block";
            pwd_page.style.display = "none";
            abt_page.style.display = "none";
            lgn_page.style.display = "none";
            gen_page.style.display = "none";
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
        
        } 
        else {
            lgn_page.style.display = "block";
            pwd_page.style.display = "none";
            abt_page.style.display = "none";
            home_page.style.display = "none";
            gen_page.style.display = "none";
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
        
        } 
        else {
            gen_page.style.display = "block";
            pwd_page.style.display = "none";
            abt_page.style.display = "none";
            home_page.style.display = "none";
            lgn_page.style.display = "none";
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
        
        } 
        else {
            abt_page.style.display = "block";
            pwd_page.style.display = "none";
            gen_page.style.display = "none";
            home_page.style.display = "none";
            lgn_page.style.display = "none";
        }
    }
