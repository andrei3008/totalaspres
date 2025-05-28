import React from 'react';

export default function Test() {
    console.log('🎯 Componenta Test se renderează!');
    
    return (
        <div style={{ 
            padding: '50px', 
            textAlign: 'center', 
            fontSize: '24px',
            backgroundColor: '#f0f0f0',
            color: '#333'
        }}>
            <h1>React Test Page</h1>
            <p>Dacă vezi acest text, React funcționează corect!</p>
            <p>Datetime: {new Date().toLocaleString()}</p>
        </div>
    );
}
