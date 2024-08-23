import React, { useState } from 'react';

const SearchList = ({ names }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredNames, setFilteredNames] = useState(names);

    // Funktion zur Aktualisierung der Filterliste
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            // Filtert die Namen basierend auf dem Suchbegriff
            const filtered = names.filter(name => name.toLowerCase().includes(value.toLowerCase()));
            setFilteredNames(filtered);
        } else {
            // Zeigt die ursprüngliche Liste an, wenn das Eingabefeld leer ist
            setFilteredNames(names);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search..."
            />
            <ul>
                {filteredNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchList; 
