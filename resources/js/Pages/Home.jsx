import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Layout from '@/Layouts/MainLayout';
import { 
    BuildingOfficeIcon, 
    DocumentTextIcon, 
    CurrencyDollarIcon, 
    UsersIcon,
    CheckCircleIcon,
    StarIcon,
    PhoneIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function Home() {
    const services = [
        {
            icon: CurrencyDollarIcon,
            title: 'Administrare financiar-contabilă',
            description: 'Gestionarea eficientă a bugetelor, cheltuielilor și încasărilor asociației cu transparență totală.'
        },
        {
            icon: BuildingOfficeIcon,
            title: 'Administrare tehnică',
            description: 'Întreținerea și reparațiile necesare pentru funcționarea optimă a imobilului.'
        },
        {
            icon: DocumentTextIcon,
            title: 'Servicii juridice',
            description: 'Consultanță juridică specializată pentru asociații de proprietari și probleme legale.'
        },
        {
            icon: UsersIcon,
            title: 'Relații cu proprietarii',
            description: 'Comunicare eficientă și transparentă cu toți proprietarii din asociație.'
        }
    ];

    const benefits = [
        'Transparență totală în gestionarea fondurilor',
        'Raportare lunară detaliată',
        'Echipă de specialiști cu experiență',
        'Suport tehnic 24/7',
        'Prețuri competitive',
        'Servicii personalizate'
    ];

    const stats = [
        { value: '150+', label: 'Imobile administrate' },
        { value: '5000+', label: 'Apartamente gestionate' },
        { value: '15+', label: 'Ani de experiență' },
        { value: '99%', label: 'Satisfacție clienți' }
    ];

    return (
        <Layout>
            <Head title="SC TOTAL AS PRES SRL - Administrare Profesională Imobile" />
            
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Administrare <span className="text-emerald-200">profesională</span>
                            <br />pentru imobilul dumneavoastră
                        </h1>
                        <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Servicii complete de administrare pentru asociații de proprietari, 
                            cu focus pe transparență, eficiență și satisfacția clienților.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/contact" 
                                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Solicită o ofertă gratuită
                            </Link>
                            <Link 
                                href="/services" 
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
                            >
                                Vezi serviciile noastre
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full opacity-10 -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-400 rounded-full opacity-10 translate-x-24 translate-y-24"></div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Servicii complete pentru imobilul dumneavoastră
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Oferim soluții integrate pentru toate nevoile de administrare ale asociației de proprietari
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                                    <service.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                De ce să alegeți TOTAL AS PRES?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Cu peste 15 ani de experiență în administrarea imobilelor, 
                                suntem partenerul de încredere pentru asociațiile de proprietari.
                            </p>
                            
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircleIcon className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8">
                                <img 
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop&crop=center" 
                                    alt="Echipa SC TOTAL AS PRES SRL" 
                                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                                />
                            </div>
                            {/* Decorative card */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-xl border border-gray-100">
                                <div className="flex items-center space-x-3">
                                    <div className="flex -space-x-2">
                                        {[1,2,3].map((i) => (
                                            <div key={i} className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full border-2 border-white"></div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">150+ clienți mulțumiți</div>
                                        <div className="flex items-center">
                                            {[1,2,3,4,5].map((i) => (
                                                <StarIcon key={i} className="h-4 w-4 text-emerald-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Gata să începem colaborarea?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Contactați-ne astăzi pentru o consultație gratuită și o ofertă personalizată 
                        pentru nevoile asociației dumneavoastră.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link 
                            href="/contact" 
                            className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Solicită ofertă gratuită
                        </Link>
                        
                        <div className="flex items-center space-x-6 text-white">
                            <a href="tel:0123456789" className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
                                <PhoneIcon className="h-5 w-5" />
                                <span>0123 456 789</span>
                            </a>
                            <a href="mailto:contact@totalaspres.ro" className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
                                <EnvelopeIcon className="h-5 w-5" />
                                <span>contact@totalaspres.ro</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
