import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/MainLayout';
import { 
    BuildingOfficeIcon, 
    UsersIcon, 
    ShieldCheckIcon, 
    LightBulbIcon,
    TrophyIcon,
    ClockIcon,
    CheckCircleIcon 
} from '@heroicons/react/24/outline';

export default function About() {
    const values = [
        {
            icon: ShieldCheckIcon,
            title: 'Profesionalism',
            description: 'Abordăm fiecare proiect cu seriozitate și dedicare, oferind servicii de cea mai înaltă calitate.'
        },
        {
            icon: CheckCircleIcon,
            title: 'Transparență',
            description: 'Oferim acces complet la informații și rapoarte clare, pentru o comunicare deschisă cu clienții.'
        },
        {
            icon: LightBulbIcon,
            title: 'Inovație',
            description: 'Implementăm soluții moderne și tehnologii avansate pentru o administrare eficientă.'
        },
        {
            icon: TrophyIcon,
            title: 'Responsabilitate',
            description: 'Ne asumăm și îndeplinim toate obligațiile asumate, cu respectarea termenelor stabilite.'
        }
    ];

    const stats = [
        { icon: BuildingOfficeIcon, value: '50+', label: 'Imobile administrate' },
        { icon: UsersIcon, value: '500+', label: 'Apartamente gestionate' },
        { icon: ClockIcon, value: '5+', label: 'Ani de experiență' },
        { icon: TrophyIcon, value: '99%', label: 'Satisfacție clienți' }
    ];

    return (
        <Layout>
            <Head title="Despre noi - SC TOTAL AS PRES SRL" />
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-500 to-teal-600 py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Despre SC TOTAL AS PRES SRL
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                        Partenerul dumneavoastră de încredere în administrarea profesională de imobile
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Povestea noastră
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Cu peste 15 ani de experiență în domeniul administrării de imobile, 
                                SC TOTAL AS PRES SRL a devenit partenerul de încredere pentru asociațiile 
                                de proprietari care doresc servicii profesionale și transparente.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Am început această călătorie cu viziunea de a transforma modul în care 
                                se administrează imobilele în România, punând accent pe transparență, 
                                eficiență și satisfacția clienților.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Astăzi, administrăm peste 50 de imobile și gestionăm mai mult de 5000 
                                de apartamente, menținând un nivel de satisfacție de 99% printre clienții noștri.
                            </p>
                        </div>
                        
                        <div className="relative">
                            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8">
                                <img 
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop&crop=center" 
                                    alt="Echipa SC TOTAL AS PRES SRL" 
                                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misiunea noastră</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Ne dedicăm să oferim servicii de administrare de cea mai înaltă 
                                calitate, asigurând eficiența și transparența în gestionarea 
                                proprietăților dumneavoastră. Scopul nostru este să simplificăm 
                                procesele administrative și să creăm valoare pentru fiecare client.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Viziunea noastră</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Să devenim liderul pieței în administrarea de imobile din România, 
                                recunoscut pentru inovație, profesionalism și servicii excepționale. 
                                Vrem să stabilim noi standarde în industrie prin utilizarea 
                                tehnologiilor moderne și a celor mai bune practici.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Valorile noastre
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Principiile fundamentale care ne ghidează în tot ceea ce facem
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Realizările noastre în cifre
                        </h2>
                        <p className="text-xl text-emerald-100">
                            Rezultate concrete care demonstrează experiența și dedicarea noastră
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="h-8 w-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-emerald-100 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Echipa noastră
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Profesioniști dedicați cu experiență vastă în administrarea imobilelor
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 lg:p-12">
                        <div className="text-center">
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Echipa noastră este formată din specialiști cu experiență în domeniile 
                                financiar-contabil, juridic, tehnic și relații cu clienții. Fiecare membru 
                                al echipei contribuie cu expertiza sa pentru a oferi servicii complete și 
                                de calitate superioară.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl font-bold">FC</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Departament Financiar-Contabil</h3>
                                    <p className="text-gray-600 text-sm mt-2">Specialiști în gestionarea bugetelor și raportarea financiară</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl font-bold">JU</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Departament Juridic</h3>
                                    <p className="text-gray-600 text-sm mt-2">Consultanță juridică specializată pentru asociații</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white text-2xl font-bold">TE</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Departament Tehnic</h3>
                                    <p className="text-gray-600 text-sm mt-2">Experți în întreținerea și reparațiile imobilelor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
