import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/MainLayout';
import { 
    PhoneIcon, 
    EnvelopeIcon, 
    MapPinIcon, 
    ClockIcon,
    ChatBubbleLeftRightIcon,
    UserIcon,
    BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        association_name: '',
        building_units: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Handle form submission here - în viitor se va conecta la backend
            console.log('Form submitted:', formData);
            alert('Mulțumim pentru mesaj! Vă vom contacta în cel mai scurt timp.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                association_name: '',
                building_units: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            alert('A apărut o eroare. Vă rugăm să încercați din nou.');
        }
        
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: PhoneIcon,
            title: 'Telefon',
            details: ['0787444874', 'Urgențe NON-STOP'],
            description: 'Luni - Vineri: 09:00 - 18:00'
        },
        {
            icon: EnvelopeIcon,
            title: 'Email',
            details: ['totalaspres@gmail.com', 'Contact principal'],
            description: 'Răspundem în maximum 24 ore'
        },
        {
            icon: MapPinIcon,
            title: 'Adresă',
            details: ['ALEEA I BANU MARACINE, NR. 5', 'CARCEA, DOLJ'],
            description: 'Program vizite: doar cu programare'
        },
        {
            icon: ClockIcon,
            title: 'Program',
            details: ['Luni - Vineri: 09:00 - 18:00', 'Sâmbătă: 09:00 - 14:00'],
            description: 'Duminică: Închis'
        }
    ];

    return (
        <Layout>
            <Head title="Contact - SC TOTAL AS PRES SRL" />
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-500 to-teal-600 py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Contactați-ne
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                        Suntem aici să vă ajutăm cu toate întrebările despre serviciile noastre de administrare
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Informații de contact
                        </h2>
                        <p className="text-xl text-gray-600">
                            Alegeți modalitatea care vă convine pentru a ne contacta
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <info.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {info.title}
                                </h3>
                                <div className="space-y-2 mb-4">
                                    {info.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="text-gray-700 font-medium">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                                <p className="text-gray-500 text-sm">
                                    {info.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <div className="flex items-center mb-6">
                                    <ChatBubbleLeftRightIcon className="h-8 w-8 text-emerald-600 mr-3" />
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        Trimiteți-ne un mesaj
                                    </h2>
                                </div>
                                
                                <p className="text-gray-600 mb-8">
                                    Completați formularul de mai jos și vă vom contacta în cel mai scurt timp pentru a discuta despre nevoile asociației dumneavoastră.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Nume complet *
                                            </label>
                                            <div className="relative">
                                                <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                                    placeholder="Numele dumneavoastră"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <div className="relative">
                                                <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                                    placeholder="email@exemplu.ro"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Telefon *
                                            </label>
                                            <div className="relative">
                                                <PhoneIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                                    placeholder="0787 444 874"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="association_name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Numele asociației
                                            </label>
                                            <div className="relative">
                                                <BuildingOfficeIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="association_name"
                                                    name="association_name"
                                                    value={formData.association_name}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                                    placeholder="Asociația de proprietari..."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="building_units" className="block text-sm font-medium text-gray-700 mb-2">
                                                Numărul de apartamente
                                            </label>
                                            <select
                                                id="building_units"
                                                name="building_units"
                                                value={formData.building_units}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                            >
                                                <option value="">Selectați...</option>
                                                <option value="1-20">1-20 apartamente</option>
                                                <option value="21-50">21-50 apartamente</option>
                                                <option value="51-100">51-100 apartamente</option>
                                                <option value="100+">Peste 100 apartamente</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                Subiect *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                            >
                                                <option value="">Selectați subiectul...</option>
                                                <option value="oferta">Solicitare ofertă</option>
                                                <option value="informații">Informații generale</option>
                                                <option value="consultanță">Consultanță gratuită</option>
                                                <option value="colaborare">Propunere de colaborare</option>
                                                <option value="altceva">Altceva</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Mesaj *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                                            placeholder="Descrieți pe scurt nevoile asociației dumneavoastră sau întrebările pe care le aveți..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Map & Quick Contact */}
                        <div className="space-y-8">
                            {/* Map placeholder */}
                            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500">Hartă interactivă</p>
                                    <p className="text-gray-400 text-sm">ALEEA I BANU MARACINE, NR. 5, CARCEA</p>
                                </div>
                            </div>

                            {/* Quick Contact */}
                            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Contactați-ne direct
                                </h3>
                                
                                <div className="space-y-4">
                                    <a 
                                        href="mailto:totalaspres@gmail.com" 
                                        className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                                            <EnvelopeIcon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Trimite email</p>
                                            <p className="text-emerald-600">totalaspres@gmail.com</p>
                                        </div>
                                    </a>

                                    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                                            <PhoneIcon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Telefon</p>
                                            <p className="text-emerald-600">0787 444 874</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-white bg-opacity-50 rounded-lg">
                                    <p className="text-sm text-gray-700">
                                        <strong>Timp de răspuns:</strong> Răspundem la toate mesajele în maximum 24 ore în zilele lucrătoare.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Întrebări frecvente
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    question: "Cât costă serviciile de administrare?",
                                    answer: "Costurile variază în funcție de mărimea imobilului și serviciile solicitate. Oferim consultanță gratuită și oferte personalizate."
                                },
                                {
                                    question: "Cât durează procesul de preluare?",
                                    answer: "Procesul de preluare durează în medie 2-4 săptămâni, în funcție de complexitatea documentației și procedurilor necesare."
                                },
                                {
                                    question: "Ce documente sunt necesare?",
                                    answer: "Avem nevoie de documentația asociației, bilanțurile financiare, contractele în derulare și hotărârile adunării generale."
                                },
                                {
                                    question: "Oferiți servicii de urgență?",
                                    answer: "Da, avem o linie de urgență disponibilă 24/7 pentru situații critice care necesită intervenție imediată."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
