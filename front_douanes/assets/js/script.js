document.addEventListener('DOMContentLoaded', () => {
        // Gestion de la sidebar
        const sidebar = document.getElementById('sidebar');
        const toggleSidebarBtn = document.getElementById('toggleSidebar');
        
        toggleSidebarBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });

        // Gestion de la connexion à l'API Spring Boot
        class DouaneService {
            constructor() {
                this.baseUrl = 'http://localhost:8080/api/douanes';
                this.token = localStorage.getItem('authToken');
            }

            async login(username, password) {
                try {
                    const response = await fetch(`${this.baseUrl}/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ username, password })
                    });

                    if (!response.ok) {
                        throw new Error('Identifiants incorrects');
                    }

                    const data = await response.json();
                    localStorage.setItem('authToken', data.token);
                    this.token = data.token;
                    return true;
                } catch (error) {
                    console.error('Erreur de connexion:', error);
                    return false;
                }
            }

            async fetchTariffs() {
                try {
                    const response = await fetch(`${this.baseUrl}/tariffs`, {
                        headers: {
                            'Authorization': `Bearer ${this.token}`
                        }
                    });
                    return await response.json();
                } catch (error) {
                    console.error('Erreur lors du chargement des tarifs:', error);
                }
            }

            async createTariff(tariffData) {
                try {
                    const response = await fetch(`${this.baseUrl}/tariffs`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${this.token}`
                        },
                        body: JSON.stringify(tariffData)
                    });
                    return await response.json();
                } catch (error) {
                    console.error('Erreur lors de la création du tarif:', error);
                }
            }
        }

        // Initialisation du service
        const douaneService = new DouaneService();

        // Gestion du formulaire de connexion
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = loginForm.querySelector('input[type="text"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            
            const loginSuccess = await douaneService.login(username, password);
            
            if (loginSuccess) {
                document.getElementById('loginModal').classList.add('hidden');
                // Charger les données initiales
                const tariffs = await douaneService.fetchTariffs();
                updateTariffsTable(tariffs);
            } else {
                alert('Échec de la connexion');
            }
        });

        // Fonction pour mettre à jour le tableau des tarifs
        function updateTariffsTable(tariffs) {
            const tableBody = document.getElementById('tariffsTableBody');
            tableBody.innerHTML = ''; // Vider le tableau

            tariffs.forEach(tariff => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="p-3">${tariff.country}</td>
                    <td class="p-3">${tariff.product}</td>
                    <td class="p-3">${tariff.rate}%</td>
                    <td class="p-3">${tariff.startDate}</td>
                    <td class="p-3">
                        <button class="text-blue-500 mr-2"><i class="fas fa-edit"></i></button>
                        <button class="text-red-500"><i class="fas fa-trash"></i></button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Bouton d'ajout de tarif
        const addTariffBtn = document.getElementById('addTariffBtn');
        addTariffBtn.addEventListener('click', () => {
            // Logique pour ouvrir un formulaire d'ajout de tarif
            // À implémenter selon vos besoins spécifiques
        });
    });