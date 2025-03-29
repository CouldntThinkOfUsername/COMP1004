const OutputList = document.querySelector('ul');

let savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];

document.getElementById('LoginInput').addEventListener('submit', function(event) {
    event.preventDefault();

    const site = document.getElementById('site').value;
    const username = document.getElementById('name').value;
    const password = document.getElementById('pwd').value;

    const newPassword = {
        Website: site,
        Username: username,
        Password: password
    };

    savedPasswords.push(newPassword);

    localStorage.setItem('passwords', JSON.stringify(savedPasswords));

    const jsonBlob = new Blob([JSON.stringify(savedPasswords, null, 2)], { type: 'application/json' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(jsonBlob);
    downloadLink.download = 'passwords.json';
    downloadLink.click();
    displaySavedPasswords();
});

function displaySavedPasswords() {
    const savedDetailsElement = document.getElementById('SavedDetails');
    if (savedDetailsElement) {
        let displayText = "";
        savedPasswords.forEach((password) => {
            displayText += `Site: ${password.Website}\n`;
            displayText += `Username: ${password.Username}\n`;
            displayText += `Password: ${password.Password}\n\n`;
        });
        savedDetailsElement.textContent = displayText;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    displaySavedPasswords(); 
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        const jsonContent = e.target.result;
        const parsedContent = JSON.parse(jsonContent);

        if (Array.isArray(parsedContent)) {
            savedPasswords = parsedContent; 
            localStorage.setItem('passwords', JSON.stringify(savedPasswords)); 
            displaySavedPasswords(); 
        } 
    }
    reader.readAsText(file);
});


/* Citations
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
https://developer.mozilla.org/en-US/docs/Web/API/FileReader
https://developer.mozilla.org/en-US/docs/Web/API/Blob
https://w3c.github.io/FileAPI/#blob-section
https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static
https://www.youtube.com/watch?v=iiADhChRriM&t=398s
https://www.youtube.com/watch?v=r4MLHHLctKw
*/