//read JSON to html using fetch to get the password file and seperate each element, making it readable

fetch('../passwords.json')
        .then(response => response.json())
        .then(userInfo => {
            userInfo.forEach(post => {
                OutputList.insertAdjacentHTML('beforeend', `<li><br/><strong>Website:</strong> ${post.Website}<br/><strong>Username:</strong> ${post.Username}<br/><strong>Password:</strong> ${post.Password}<br/></li>`);
            });
        });

/*citations
https://www.youtube.com/watch?v=Oage6H4GX2o

*/