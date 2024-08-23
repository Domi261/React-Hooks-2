import React, { useEffect, useState } from 'react';


export default function HogwartsHouse({ name }) {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const fetchHouseData = async () => {
            try {
                const response = await fetch(`https://hp-api.onrender.com/api/characters/house/${name}`);
                const data = await response.json();
                setMembers(data);
                setLoading(false); 
            } catch (error) {
                setError('Fehler beim Laden der Hausdaten');
                setLoading(false);
            }
        };

        fetchHouseData();
    }, [name]);

    if (loading) return <p>Laden...</p>;   
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>
                        <p>Name: {member.name}</p>
                        {member.image && <img src={member.image} alt={member.name} width="100" />}
                    </li>
                ))}
            </ul>
        </div>
    );
}
