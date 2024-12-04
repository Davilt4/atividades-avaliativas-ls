const jsonPath = '../country-flags/json/paises.json';

async function loadFlagsAndNames() {
  try {
    const response = await fetch(jsonPath);
    const countryNames = await response.json();

    const githubResponse = await fetch('https://api.github.com/repos/hampusborgos/country-flags/contents/svg');
    const files = await githubResponse.json();

    const flagsContainer = document.getElementById('flags');

    files.forEach(file => {
      if (file.name.endsWith('.svg')) {
        const countryCode = file.name.replace('.svg', '').toUpperCase();
        const countryName = countryNames[countryCode] || 'Nome Desconhecido';

        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const img = document.createElement('img');
        img.src = file.download_url;
        img.alt = `Bandeira do país ${countryName}`;

        const nameLabel = document.createElement('p');
        nameLabel.textContent = countryName;


        countryDiv.appendChild(img);
        countryDiv.appendChild(nameLabel);
        flagsContainer.appendChild(countryDiv);
      }
    });
  } catch (error) {
    console.error('Erro ao carregar as bandeiras e nomes:', error);
  }
}

loadFlagsAndNames();