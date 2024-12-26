import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TariffsPage() {
    const [tariffs, setTariffs] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/tarification') // Recuperation des tarifications
            .then(response => setTariffs(response.data))
            .catch(error => console.error(error));
    }, []);

    const filteredTariffs = tariffs.filter(tariff =>
        tariff.description.toLowerCase().includes(search.toLowerCase()) ||
        tariff.code.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredTariffs)
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Tableau des Tarifs Douaniers</h2>
            <input
                type="text"
                placeholder="Rechercher un produit, code ou pays..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full p-2 border rounded-md mb-4"
            />
            <table className="w-full">
                <thead className="bg-gray-200">
                <tr>
                    <th className="p-3 text-left">Code Produit</th>
                    <th className="p-3 text-left">Description</th>
                    <th className="p-3 text-left">Tarif (%)</th>
                    <th className="p-3 text-left">Pays</th>
                </tr>
                </thead>
                <tbody>
                {filteredTariffs.map(tariff => (
                    <tr key={tariff.id}>
                        <td className="p-3">{tariff.code}</td>
                        <td className="p-3">{tariff.description}</td>
                        <td className="p-3">{tariff.rate}</td>
                        <td className="p-3">{tariff.country}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TariffsPage;
