import react from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import TariffsPage from './components/TariffsPage';

function App() {
    return (
        <Router>
            <div className="bg-custom-light min-h-screen text-gray-800">
                <nav className="bg-custom-blue text-white p-4 shadow-md">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link to="/" className="text-2xl font-bold">Tarifs Douaniers</Link>
                        <div className="space-x-4">
                            <Link to="/" className="hover:text-gray-300">Accueil</Link>
                            <Link to="/tariffs" className="hover:text-gray-300">Tarifs</Link>
                        </div>
                    </div>
                </nav>
                <main className="container mx-auto mt-8 p-4">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/tariffs" element={<TariffsPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
