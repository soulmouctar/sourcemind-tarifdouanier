// Definition des constantes
const baseUrl = 'http://localhost:8080/api/'

// Fonction de recuperation des Tarifications
async function getTariffs() {
  try {
    //const response = await fetch(baseUrl + 'tarification');
    //const data = await response.json();
    let datas = [];
    let url = baseUrl + 'tarification';
    fetch(url).then((response) => {
      response.json().then((data) => {
        datas = JSON.stringify(data);
        datas = JSON.parse(datas);
        return datas;
      });
    })
  } catch (error) {
    console.log(error);
  }
}

const tariffDatas = getTariffs();
console.log(tariffData);


const tariffData = [
  { code: "8701.20", description: "Tracteurs routiers", tarif: 22, pays: "UE" },
  {
    code: "8703.21",
    description: "Véhicules de tourisme",
    tarif: 10,
    pays: "Japon",
  },
  {
    code: "2204.21",
    description: "Vin en bouteilles",
    tarif: 15,
    pays: "France",
  },
  {
    code: "8407.31",
    description: "Moteurs à piston",
    tarif: 18,
    pays: "Allemagne",
  },
  {
    code: "9898.31",
    description: "Moto TVS",
    tarif: 1200,
    pays: "Inde",
  },
];


// Gestion de la navigation
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const page = this.getAttribute("data-page");
    navigateTo(page);
  });
});

// Fonction de navigation
function navigateTo(page) {
  const content = document.getElementById("content");
  content.innerHTML = ""; // Vider le contenu précédent

  switch (page) {
    case "home":
      const homeTmpl = document.getElementById("home-page");
      content.appendChild(homeTmpl.content.cloneNode(true));

      // Événement bouton de recherche sur page d'accueil
      document.getElementById("start-search")?.addEventListener("click", () => {
        navigateTo("tariffs");
      });
      break;

    case "tariffs":
      const tariffsTmpl = document.getElementById("tariffs-page");
      content.appendChild(tariffsTmpl.content.cloneNode(true));

      // Remplir le tableau
      const tariffBody = document.getElementById("tariffs-body");
      tariffData.forEach((tariff) => {
        const row = document.createElement("tr");
        row.classList.add("border-b", "hover:bg-gray-100");
        row.innerHTML = `
                    <td class="p-3">${tariff.code}</td>
                    <td class="p-3">${tariff.description}</td>
                    <td class="p-3">${tariff.prix}%</td>
                    <td class="p-3">${tariff.pays}</td>
                `;
        tariffBody.appendChild(row);
      });

      // Recherche dans le tableau
      const searchInput = document.getElementById("tariff-search");
      searchInput.addEventListener("keyup", function () {
        const filter = this.value.toLowerCase();
        const rows = document.querySelectorAll("#tariffs-body tr");

        rows.forEach((row) => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(filter) ? "" : "none";
        });
      });
      break;

    case "search":
      // Page de recherche avancée (à implémenter)
      content.innerHTML =
        '<p class="text-center">Fonctionnalité de recherche avancée à venir...</p>';
      break;
  }
}

// Charger la page d'accueil par défaut
navigateTo("home");
