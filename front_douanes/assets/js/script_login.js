document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const loginError = document.getElementById('loginError');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const passwordToggleIcon = document.getElementById('passwordToggleIcon');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Vérification du token existant
    function checkExistingToken() {
        const token = localStorage.getItem('authToken');
        if (token) {
            verifyToken(token);
        }
    }

    // Vérification du token côté serveur
    async function verifyToken(token) {
        try {
            const response = await fetch('/api/auth/verify-token', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();
            if (data.valid) {
                // Token valide, redirection vers le dashboard
                window.location.href = '/dashboard';
            }
        } catch (error) {
            // Token invalide, déconnexion
            localStorage.removeItem('authToken');
        }
    }

    // Authentification
    async function login(username, password) {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Stockage du token
                localStorage.setItem('authToken', data.token);
                
                // Gestion de "Se souvenir de moi"
                if (rememberMeCheckbox.checked) {
                    localStorage.setItem('rememberedUsername', username);
                } else {
                    localStorage.removeItem('rememberedUsername');
                }

                // Redirection
                window.location.href = '/dashboard';
            } else {
                // Affichage de l'erreur
                loginError.textContent = data.error || 'Erreur de connexion';
                loginError.classList.remove('hidden');
            }
        } catch (error) {
            loginError.textContent = 'Erreur de réseau';
            loginError.classList.remove('hidden');
        }
    }

    // Validation du formulaire
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginError.classList.add('hidden');

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        // Validation basique
        if (!username) {
            document.getElementById('usernameError').classList.remove('hidden');
            return;
        }
        if (!password) {
            document.getElementById('passwordError').classList.remove('hidden');
            return;
        }

        // Tentative de connexion
        login(username, password);
    });

    // Gestion de la visibilité du mot de passe
    togglePasswordBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggleIcon.classList.remove('fa-eye-slash');
            passwordToggleIcon.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            passwordToggleIcon.classList.remove('fa-eye');
            passwordToggleIcon.classList.add('fa-eye-slash');
        }
    });

    // Restauration du nom d'utilisateur "Se souvenir de moi"
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
        usernameInput.value = rememberedUsername;
        rememberMeCheckbox.checked = true;
    }

    // Vérification initiale du token
    checkExistingToken();

    // Gestion des erreurs sur les champs
    usernameInput.addEventListener('input', () => {
        document.getElementById('usernameError').classList.add('hidden');
    });

    passwordInput.addEventListener('input', () => {
        document.getElementById('passwordError').classList.add('hidden');
    });
});