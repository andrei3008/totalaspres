import React from 'react';
import { Head } from '@inertiajs/react';

export default function Test() {
    console.log('🎯 Componenta Test se renderează!');
    
    return (
        <>
            <Head title="Test Page - SC TOTAL AS PRES SRL | Development">
                <meta name="description" content="Pagină de test pentru dezvoltarea aplicației SC TOTAL AS PRES SRL. Verificarea funcționalității React și Inertia.js." />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="author" content="SC TOTAL AS PRES SRL" />
            </Head>
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
        </>
    );
}
