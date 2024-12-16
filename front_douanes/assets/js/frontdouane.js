function navigateTo(page) {
    const content = document.getElementById('content');

    switch(page) {
        case 'accueil':
            content.innerHTML = `
                        <section class="text-center">
                            <h2 class="text-3xl font-bold mb-4 text-gray-800">Bienvenue sur Mon Application</h2>
                            <p class="text-gray-600 mb-6">Découvrez nos services innovants</p>
                            
                            <div class="grid md:grid-cols-3 gap-6">
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h3 class="text-xl font-semibold mb-3">Service 1</h3>
                                    <p class="text-gray-600">Description du service 1</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h3 class="text-xl font-semibold mb-3">Service 2</h3>
                                    <p class="text-gray-600">Description du service 2</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h3 class="text-xl font-semibold mb-3">Service 3</h3>
                                    <p class="text-gray-600">Description du service 3</p>
                                </div>
                            </div>
                        </section>
                    `;
            break;

        case 'services':
            content.innerHTML = `
                        <section>
                            <h2 class="text-3xl font-bold mb-6 text-center">Nos Services</h2>
                            <div class="space-y-6">
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h3 class="text-xl font-semibold mb-3">Détail Service 1</h3>
                                    <p class="text-gray-600">Description détaillée du service 1</p>
                                </div>
                                <div class="bg-white p-6 rounded-lg shadow-md">
                                    <h3 class="text-xl font-semibold mb-3">Détail Service 2</h3>
                                    <p class="text-gray-600">Description détaillée du service 2</p>
                                </div>
                            </div>
                        </section>
                    `;
            break;

        case 'contact':
            content.innerHTML = `
                        <section class="max-w-lg mx-auto">
                            <h2 class="text-3xl font-bold mb-6 text-center">Contactez-nous</h2>
                            <form class="bg-white p-8 rounded-lg shadow-md">
                                <div class="mb-4">
                                    <label class="block text-gray-700 mb-2">Nom</label>
                                    <input 
                                        type="text" 
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        placeholder="Votre nom"
                                    >
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        placeholder="Votre email"
                                    >
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 mb-2">Message</label>
                                    <textarea 
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        rows="4"
                                        placeholder="Votre message"
                                    ></textarea>
                                </div>
                                <button 
                                    class="w-full bg-brand-primary text-white py-2 rounded-md hover:bg-blue-700 transition"
                                >
                                    Envoyer
                                </button>
                            </form>
                        </section>
                    `;
            break;

        case 'connexion':
            content.innerHTML = `
                        <section class="max-w-md mx-auto">
                            <h2 class="text-3xl font-bold mb-6 text-center">Connexion</h2>
                            <form class="bg-white p-8 rounded-lg shadow-md">
                                <div class="mb-4">
                                    <label class="block text-gray-700 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        placeholder="Votre email"
                                    >
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 mb-2">Mot de passe</label>
                                    <input 
                                        type="password" 
                                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        placeholder="Votre mot de passe"
                                    >
                                </div>
                                <button 
                                    class="w-full bg-brand-primary text-white py-2 rounded-md hover:bg-blue-700 transition"
                                >
                                    Se connecter
                                </button>
                                <p class="text-center mt-4 text-gray-600">
                                    Pas de compte ? 
                                    <a href="#" class="text-brand-primary hover:underline">Inscrivez-vous</a>
                                </p>
                            </form>
                        </section>
                    `;
            break;
    }
}

// Charger la page d'accueil par défaut
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('accueil');
});