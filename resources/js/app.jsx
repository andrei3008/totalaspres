import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

console.log('🚀 React app.jsx se încarcă...');

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        console.log('🔍 Încărcare componentă:', name);
        return resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        );
    },
    setup({ el, App, props }) {
        console.log('⚙️ Setup React app cu props:', props);
        console.log('📦 Element container:', el);
        const root = createRoot(el);
        root.render(<App {...props} />);
        console.log('✅ React app renderizat!');
    },
    progress: {
        color: '#4B5563',
    },
});
