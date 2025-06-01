import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/MainLayout';
import { 
    CurrencyDollarIcon,
    BuildingOfficeIcon,
    DocumentTextIcon,
    UsersIcon,
    WrenchScrewdriverIcon,
    ChartBarIcon,
    CheckCircleIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function Services() {
    const mainServices = [
        {
            icon: CurrencyDollarIcon,
            title: 'Administrare financiar-contabilă',
            description: 'Gestionăm toate aspectele financiare ale asociației dumneavoastră cu transparență și eficiență, inclusiv întocmirea listelor de plată.',
            features: [
                'Întocmirea și colectarea listelor de plată pentru personal',
                'Calcularea salariilor, sporurilor și contribuțiilor sociale',
                'Evidența contabilă completă conform normelor legale',
                'Raportări financiare lunare detaliate',
                'Gestionarea furnizorilor și plăților',
                'Recuperarea debitelor restante prin metode legale',
                'Întocmirea bugetelor anuale',
                'Declarații fiscale și contribuții către stat'
            ],
            benefits: [
                'Transparență totală în gestionarea fondurilor',
                'Rapoarte financiare clare și detaliate',
                'Reducerea debitelor restante cu până la 80%'
            ]
        },
        {
            icon: WrenchScrewdriverIcon,
            title: 'Administrare tehnică',
            description: 'Asigurăm buna funcționare a tuturor instalațiilor și echipamentelor din imobil.',
            features: [
                'Mentenanță preventivă planificată',
                'Reparații urgente și intervenții',
                'Modernizări și îmbunătățiri',
                'Verificări tehnice periodice obligatorii',
                'Consultanță tehnică specializată',
                'Coordonarea lucrărilor de reparații capitale'
            ],
            benefits: [
                'Reducerea costurilor de reparații cu până la 40%',
                'Prelungirea duratei de viață a instalațiilor',
                'Intervenții rapide în situații de urgență'
            ]
        },
        {
            icon: DocumentTextIcon,
            title: 'Consultanță juridică',
            description: 'Oferim asistență juridică completă pentru toate aspectele legale ale asociației.',
            features: [
                'Consultanță pentru modificarea regulamentului',
                'Asistență în recuperarea debitelor',
                'Reprezentare în fața instanțelor',
                'Consultanță în domeniul legislației imobiliare',
                'Întocmirea contractelor și documentelor legale',
                'Soluționarea conflictelor între proprietari'
            ],
            benefits: [
                'Conformitate legală 100%',
                'Soluționarea rapidă a problemelor juridice',
                'Costuri legale reduse prin prevenție'
            ]
        },
        {
            icon: UsersIcon,
            title: 'Relații cu proprietarii',
            description: 'Facilităm comunicarea eficientă între administrație și proprietari.',
            features: [
                'Organizarea adunărilor generale',
                'Comunicare transparentă și regulată',
                'Gestionarea reclamațiilor și solicitărilor',
                'Informări periodice despre activități',
                'Portal online pentru proprietari',
                'Serviciu de call center dedicat'
            ],
            benefits: [
                'Satisfacție crescută a proprietarilor',
                'Comunicare îmbunătățită cu 95%',
                'Rezolvarea rapidă a problemelor'
            ]
        }
    ];

    const additionalServices = [
        {
            icon: ChartBarIcon,
            title: 'Raportare și analiză',
            description: 'Rapoarte detaliate și analize pentru optimizarea costurilor'
        },
        {
            icon: ShieldCheckIcon,
            title: 'Servicii de securitate',
            description: 'Coordonarea serviciilor de pază și monitorizare'
        },
        {
            icon: ClockIcon,
            title: 'Suport 24/7',
            description: 'Disponibilitate non-stop pentru situații de urgență'
        }
    ];

    return (
        <Layout>
            <Head title="Servicii Administrare Imobile - SC TOTAL AS PRES SRL Craiova">
                <meta name="description" content="Servicii complete de administrare imobile în Craiova: gestionare financiară, întreținere tehnică, consultanță juridică, raportare transparentă. Contactați-ne la 0787444874." />
                <meta name="keywords" content="servicii administrare imobile, gestionare financiară, întreținere tehnică, consultanță juridică, raportare transparentă, Craiova, România, administrator profesional" />
                <meta name="author" content="SC TOTAL AS PRES SRL" />
                <meta property="og:title" content="Servicii Complete Administrare Imobile | SC TOTAL AS PRES SRL" />
                <meta property="og:description" content="Servicii profesionale de administrare imobile: gestionare financiară, întreținere tehnică, consultanță juridică, raportare transparentă în Craiova și România." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://totalaspres.ro/services" />
                <meta property="og:locale" content="ro_RO" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Servicii Administrare Imobile | SC TOTAL AS PRES SRL" />
                <meta name="twitter:description" content="Servicii complete de administrare imobile: gestionare financiară, întreținere tehnică, consultanță juridică, raportare transparentă." />
                <link rel="canonical" href="https://totalaspres.ro/services" />
            </Head>
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-500 to-teal-600 py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Serviciile noastre
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                        Soluții complete și integrate pentru administrarea profesională a imobilelor
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Servicii principale
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Oferim servicii complete pentru toate nevoile asociației dumneavoastră
                        </p>
                    </div>

                    <div className="space-y-20">
                        {mainServices.map((service, index) => (
                            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                                            <service.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            {service.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    <div className="mb-8">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Ce include:</h4>
                                        <ul className="space-y-3">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start">
                                                    <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="bg-emerald-50 rounded-lg p-6">
                                        <h4 className="text-lg font-semibold text-emerald-900 mb-3">Beneficii principale:</h4>
                                        <ul className="space-y-2">
                                            {service.benefits.map((benefit, benefitIndex) => (
                                                <li key={benefitIndex} className="flex items-center text-emerald-800">
                                                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8">
                                        <img 
                                            src={`https://images.unsplash.com/${
                                                index === 0 ? 'photo-1554224155-8d04cb21cd6c' : // financial documents and calculator
                                                index === 1 ? 'photo-1581091226825-a6a2a5aee158' : // technical maintenance  
                                                index === 2 ? 'photo-1521791136064-7986c2920216' : // professional office team
                                                'photo-1600880292203-757bb62b4baf' // client relations
                                            }?w=500&h=400&fit=crop&crop=center`}
                                            alt={service.title}
                                            className="rounded-lg shadow-lg w-full h-64 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Servicii suplimentare
                        </h2>
                        <p className="text-xl text-gray-600">
                            Servicii complementare pentru o administrare completă
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-48">
                                    <img 
                                        src={`https://images.unsplash.com/photo-${
                                            index === 0 ? '1551836022-d5d88e9218df' : // business charts and analytics on laptop
                                            index === 1 ? '1568605114967-8130f3a36994' : // security camera system
                                            '1553484771-371a605b060b' // 24/7 customer support center
                                        }?w=400&h=300&fit=crop&crop=center`}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                                        <service.icon className="h-6 w-6 text-white" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Cum funcționează procesul?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Pași simpli pentru a începe colaborarea cu noi
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Consultația inițială',
                                description: 'Analizăm nevoile asociației și oferim o consultație gratuită',
                                image: '1600267185624-ac61ac7d47ed' // business consultation meeting
                            },
                            {
                                step: '02',
                                title: 'Propunerea de colaborare',
                                description: 'Elaborăm o ofertă personalizată conform nevoilor identificate',
                                image: '1586297135537-5018fdee1621' // business proposal documents
                            },
                            {
                                step: '03',
                                title: 'Semnarea contractului',
                                description: 'Formalizăm colaborarea prin contract transparent și clar',
                                image: '1556742044-3c52d6e88c62' // business handshake contract
                            },
                            {
                                step: '04',
                                title: 'Implementarea serviciilor',
                                description: 'Începem administrarea cu preluarea tuturor responsabilităților',
                                image: '1552581234-26160f608093' // professional team working
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center">
                                <div className="relative mb-6">
                                    <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                                        <img 
                                            src={`https://images.unsplash.com/photo-${process.image}?w=300&h=200&fit=crop&crop=center`}
                                            alt={process.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto -mt-8 relative z-10 shadow-lg">
                                        <span className="text-white font-bold text-xl">{process.step}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {process.title}
                                </h3>
                                <p className="text-gray-600">
                                    {process.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Sunteți gata să începeți?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Contactați-ne astăzi pentru o consultație gratuită și o ofertă personalizată.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact" 
                            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Solicită ofertă gratuită
                        </Link>
                        <a 
                            href="mailto:totalaspres@gmail.com" 
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center justify-center"
                        >
                            <EnvelopeIcon className="h-5 w-5 mr-2" />
                            Contactează-ne: totalaspres@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
