// Event Listeners
document.getElementById('get-text').addEventListener('click', getText);
document.getElementById('get-json').addEventListener('click', getJson);
document.getElementById('get-api').addEventListener('click', getApi);

// Get local text file data
function getText() {
    fetch('test.txt')
    .then(res => res.text())
    .then(data => {
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

// Get local json data
function getJson() {
    fetch('post.json')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(post => {
            output += `<li>
                            ${post.title} <br>
                            ${post.body}
                       </li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Get api data
function getApi() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(function(user) {
            output += `<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}