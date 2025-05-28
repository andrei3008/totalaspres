import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/MainLayout';
import { 
    DocumentTextIcon,
    ScaleIcon,
    CurrencyDollarIcon,
    CogIcon,
    ClipboardDocumentListIcon,
    FolderIcon,
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function Documents({ documents = {} }) {
    const [selectedCategory, setSelectedCategory] = useState('toate');
    const [searchTerm, setSearchTerm] = useState('');
    // Convert object of arrays to flat array if needed
    const flatDocuments = Object.keys(documents).length > 0 
        ? Object.values(documents).flat() 
        : [];

    // Sample documents for demonstration if no real data
    const sampleDocuments = [
        {
            id: 1,
            title: 'Model proces-verbal adunare generală',
            category: 'Juridice',
            description: 'Model standard pentru procesul-verbal al adunării generale a asociației de proprietari.',
            file_path: '/storage/documents/proces-verbal-model.pdf'
        },
        {
            id: 2,
            title: 'Formular cerere lucrări',
            category: 'Administrative',
            description: 'Formular pentru solicitarea efectuării de lucrări în imobil.',
            file_path: '/storage/documents/cerere-lucrari.pdf'
        },
        {
            id: 3,
            title: 'Contract administrare',
            category: 'Contracte',
            description: 'Model contract de administrare între asociație și firma de administrare.',
            file_path: '/storage/documents/contract-administrare.pdf'
        },
        {
            id: 4,
            title: 'Regulament intern',
            category: 'Regulamente',
            description: 'Model de regulament intern pentru asociația de proprietari.',
            file_path: '/storage/documents/regulament-intern.pdf'
        },
        {
            id: 5,
            title: 'Declarație venituri',
            category: 'Financiare',
            description: 'Formular pentru declararea veniturilor asociației.',
            file_path: '/storage/documents/declaratie-venituri.pdf'
        },
        {
            id: 6,
            title: 'Fișă tehnică imobil',
            category: 'Tehnice',
            description: 'Model fișă tehnică pentru caracteristicile imobilului.',
            file_path: '/storage/documents/fisa-tehnica.pdf'
        }
    ];

    const displayDocuments = flatDocuments.length > 0 ? flatDocuments : sampleDocuments;

    // Group documents by category - handle both object and array inputs
    const groupedDocuments = Object.keys(documents).length > 0 && typeof documents === 'object' && !Array.isArray(documents)
        ? documents
        : displayDocuments.reduce((acc, doc) => {
            if (!acc[doc.category]) {
                acc[doc.category] = [];
            }
            acc[doc.category].push(doc);
            return acc;
        }, {});

    const categoryTranslations = {
        'reglementari': 'Reglementări',
        'contracte': 'Contracte',
        'ghiduri': 'Ghiduri',
        'formulare': 'Formulare',
        'financiar': 'Financiare',
        'proceduri': 'Proceduri',
        'Juridice': 'Juridice',
        'Administrative': 'Administrative',
        'Financiare': 'Financiare',
        'Tehnice': 'Tehnice',
        'Contracte': 'Contracte',
        'Regulamente': 'Regulamente'
    };

    const getIconForCategory = (category) => {
        const lowerCategory = category.toLowerCase();
        if (lowerCategory.includes('juridic') || lowerCategory.includes('reglementar') || lowerCategory.includes('contract')) {
            return <ScaleIcon className="h-6 w-6" />;
        } else if (lowerCategory.includes('financiar')) {
            return <CurrencyDollarIcon className="h-6 w-6" />;
        } else if (lowerCategory.includes('tehnic') || lowerCategory.includes('procedur')) {
            return <CogIcon className="h-6 w-6" />;
        } else if (lowerCategory.includes('administrativ') || lowerCategory.includes('formular')) {
            return <ClipboardDocumentListIcon className="h-6 w-6" />;
        } else {
            return <DocumentTextIcon className="h-6 w-6" />;
        }
    };

    // Filter documents based on search and category
    const filteredDocuments = Object.entries(groupedDocuments).reduce((acc, [category, docs]) => {
        if (selectedCategory !== 'toate' && category.toLowerCase() !== selectedCategory.toLowerCase()) {
            return acc;
        }
        
        const filteredDocs = docs.filter(doc => 
            doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if (filteredDocs.length > 0) {
            acc[category] = filteredDocs;
        }
        
        return acc;
    }, {});

    const categories = ['toate', ...Object.keys(groupedDocuments)];

    return (
        <Layout>
            <Head title="Documente utile - Total As Pres" />
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-800 py-24">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Documente <span className="text-emerald-200">utile</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                        Acces gratuit la toate formularele și documentele necesare pentru 
                        administrarea eficientă a asociației de proprietari.
                    </p>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Caută documente..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                        
                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                        selectedCategory === category
                                            ? 'bg-green-600 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {categoryTranslations[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {Object.keys(filteredDocuments).length === 0 ? (
                        <div className="text-center py-12">
                            <FolderIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Nu au fost găsite documente</h3>
                            <p className="text-gray-500">Încearcă să modifici criteriile de căutare.</p>
                        </div>
                    ) : (
                        Object.entries(filteredDocuments).map(([category, docs]) => (
                            <div key={category} className="mb-16">
                                <div className="flex items-center mb-8">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white mr-4">
                                        {getIconForCategory(category)}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {categoryTranslations[category] || category}
                                        </h2>
                                        <p className="text-gray-600">{docs.length} documente disponibile</p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {docs.map((document) => (
                                        <div key={document.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                                            <div className="p-6">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                                        <DocumentTextIcon className="h-6 w-6 text-emerald-600" />
                                                    </div>
                                                    <span className="bg-green-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded-full">
                                                        {document.file_path?.split('.').pop()?.toUpperCase() || 'PDF'}
                                                    </span>
                                                </div>
                                                
                                                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                                                    {document.title}
                                                </h3>
                                                
                                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                                    {document.description}
                                                </p>
                                                
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-2 text-emerald-600">
                                                        <CheckCircleIcon className="h-4 w-4" />
                                                        <span className="text-sm font-medium">Gratuit</span>
                                                    </div>
                                                    
                                                    <a
                                                        href={`/documents/${document.id}/download`}
                                                        className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                                                    >
                                                        <ArrowDownTrayIcon className="h-4 w-4" />
                                                        <span>Descarcă</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Aveți nevoie de un document specific?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Dacă nu găsiți documentul de care aveți nevoie, echipa noastră de specialiști 
                        vă poate ajuta să obțineți toate documentele necesare.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Contactează specialiștii
                        </Link>
                        <Link
                            href="/services"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
                        >
                            Vezi serviciile noastre
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
