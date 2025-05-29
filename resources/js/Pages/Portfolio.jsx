import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/MainLayout';
import { 
    BuildingOfficeIcon, 
    MapPinIcon, 
    UsersIcon, 
    StarIcon,
    ArrowRightIcon 
} from '@heroicons/react/24/outline';

export default function Portfolio({ buildings = [] }) {
    // Sample data for demonstration
    const sampleBuildings = [
        {
            id: 1,
            name: 'Complexul Rezidențial Green Park',
            address: 'Strada Florilor 15, Sector 1, București',
            description: 'Complex modern cu 4 blocuri, 200 de apartamente și spații verzi amenajate. Facilități premium: parcare subterană, spa, sală fitness.',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&crop=center',
            apartments: 200,
            year: 2019,
            rating: 4.9,
            features: ['Parcare subterană', 'Spații verzi', 'Securitate 24/7']
        },
        {
            id: 2,
            name: 'Ansamblul Aurora',
            address: 'Bulevardul Unirii 45, Sector 3, București',
            description: 'Ansamblul mixt de birouri și locuințe în centrul orașului cu acces facil la transportul public și zona comercială.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center',
            apartments: 150,
            year: 2020,
            rating: 4.8,
            features: ['Centrul orașului', 'Transport public', 'Zone comerciale']
        },
        {
            id: 3,
            name: 'Cartierul Soarelui',
            address: 'Strada Soarelui 8-12, Cluj-Napoca',
            description: 'Complex rezidențial cu facilitați moderne, parcare subterană și zone de recreere pentru copii și adulți.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center',
            apartments: 120,
            year: 2021,
            rating: 4.7,
            features: ['Zone recreere', 'Parcare subterană', 'Aproape de școli']
        },
        {
            id: 4,
            name: 'Rezidența Belvedere',
            address: 'Strada Belvedere 22, Brașov',
            description: 'Dezvoltare premium cu vedere la munte, finisaje de lux și facilitați exclusive pentru rezidenți.',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop&crop=center',
            apartments: 80,
            year: 2022,
            rating: 5.0,
            features: ['Vedere la munte', 'Finisaje premium', 'Concierge service']
        },
        {
            id: 5,
            name: 'Complex Titanium',
            address: 'Calea Victoriei 156, Sector 1, București',
            description: 'Clădire de birouri clasa A cu tehnologii smart building și certificare de sustenabilitate.',
            image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400&h=300&fit=crop&crop=center',
            apartments: 300,
            year: 2018,
            rating: 4.6,
            features: ['Smart building', 'Certificare verde', 'Locație premium']
        },
        {
            id: 6,
            name: 'Villa Gardens',
            address: 'Strada Primăverii 5-9, Constanța',
            description: 'Complex exclusivist de vile cu gradini private, aproape de plajă și cu facilitați resort-style.',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop&crop=center',
            apartments: 45,
            year: 2023,
            rating: 4.9,
            features: ['Gradini private', 'Aproape de plajă', 'Facilitați resort']
        }
    ];

    const displayBuildings = buildings.length > 0 ? buildings : sampleBuildings;

    return (
        <Layout>
            <Head title="Portofoliu - Total As Pres" />
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-500 to-teal-600 py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Portofoliul nostru de <span className="text-emerald-200">succes</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                        Peste 150 de imobile administrate cu profesionalism și dedicare în toată țara. 
                        Fiecare proiect reflectă angajamentul nostru pentru excelență.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">150+</div>
                            <div className="text-gray-600">Imobile administrate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">5000+</div>
                            <div className="text-gray-600">Apartamente gestionate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
                            <div className="text-gray-600">Ani de experiență</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">99%</div>
                            <div className="text-gray-600">Satisfacție clienți</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Imobile de referință
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Descoperă câteva dintre proiectele noastre de succes și vezi de ce 
                            proprietarii ne-au ales ca parteneri de încredere.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayBuildings.map((building) => (
                            <div key={building.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative">
                                    <img 
                                        src={building.image} 
                                        alt={building.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                                        <StarIcon className="h-4 w-4 text-emerald-400 fill-current" />
                                        <span className="text-sm font-semibold text-gray-700">{building.rating}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {building.year}
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {building.name}
                                    </h3>
                                    
                                    <div className="flex items-start space-x-2 text-gray-600 mb-3">
                                        <MapPinIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm">{building.address}</span>
                                    </div>
                                    
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {building.description}
                                    </p>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <UsersIcon className="h-4 w-4 text-emerald-600" />
                                            <span className="text-sm text-gray-600">{building.apartments} apartamente</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <BuildingOfficeIcon className="h-4 w-4 text-emerald-600" />
                                            <span className="text-sm text-gray-600">Premium</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <div className="text-sm font-semibold text-gray-700">Facilități:</div>
                                        <div className="flex flex-wrap gap-2">
                                            {building.features.map((feature, index) => (
                                                <span key={index} className="bg-green-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Vrei să te alături portofoliului nostru?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Contactează-ne astăzi pentru a afla cum putem transforma administrarea 
                        imobilului tău într-o experiență de succes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                        >
                            <span>Solicită o ofertă gratuită</span>
                            <ArrowRightIcon className="h-5 w-5" />
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
