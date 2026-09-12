const searchBtn = document.getElementById('searchBtn');
const countryInput = document.getElementById('countryInput');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', () => {
  const name = countryInput.value.trim();
  if (!name) return alert('Please enter a country name!');
  
  resultDiv.innerHTML = ''; // clear previous results

  // Fetch main country
  fetch(`https://restcountries.com/v2/name/${name}`)
    .then(res => {
      if (!res.ok) throw new Error('Country not found');
      return res.json();
    })
    .then(data => {
      const country = data[0];

      // Render main country card
      resultDiv.innerHTML = `
        <div class="card main-country">
          <img class="flag" src="${country.flag}" alt="Flag of ${country.name}">
          <div class="country-name">${country.name}</div>
          <div class="region">${country.region}</div>
          <div class="info">👬🏻 <span>${(country.population/1e6).toFixed(1)}M people</span></div>
          <div class="info">🗣️ <span>${country.languages.map(l => l.name).join(', ')}</span></div>
          <div class="info">💰 <span>${country.currencies.map(c => c.name + ' (' + c.symbol + ')').join(', ')}</span></div>
        </div>
      `;

      // Check neighbors
      if (!country.borders || country.borders.length === 0) {
        resultDiv.innerHTML += `<p>No neighboring countries found.</p>`;
        return;
      }

      // Fetch all neighbors
      country.borders.forEach(code => {
        fetch(`https://restcountries.com/v2/alpha/${code}`)
          .then(res => res.json())
          .then(neighbor => {
            resultDiv.innerHTML += `
              <div class="card neighbor">
                <img class="flag" src="${neighbor.flag}" alt="Flag of ${neighbor.name}">
                <div class="country-name">${neighbor.name}</div>
                <div class="region">${neighbor.region}</div>
                <div class="info">👬🏻 <span>${(neighbor.population/1e6).toFixed(1)}M people</span></div>
                <div class="info">🗣️ <span>${neighbor.languages.map(l => l.name).join(', ')}</span></div>
                <div class="info">💰 <span>${neighbor.currencies.map(c => c.name + ' (' + c.symbol + ')').join(', ')}</span></div>
              </div>
            `;
          })
          .catch(err => {
            resultDiv.innerHTML += `<p style="color:red;">Error: ${err.message}</p>`;
          });
      });
    })
    .catch(err => {
      resultDiv.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
    });
});
