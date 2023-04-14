document.getElementById('search-form').addEventListener('submit', search);

function search() {
    const query = document.getElementById('query').value;
    fetch(`/search?query=${query}`)
        .then(response => response.json())
        .then(results => displayResults(results));
}

function displayResults(results) {
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });
}
