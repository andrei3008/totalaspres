import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { 
    DocumentTextIcon,
    CreditCardIcon,
    BellIcon,
    ChartBarIcon,
    CheckCircleIcon,
    PhoneIcon,
    ClockIcon,
    ArrowRightIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function Dashboard({ auth }) {
    const { user } = auth;

    return (
        <MainLayout>
            <Head title="Panou de administrare - SC TOTAL AS PRES SRL" />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Bun venit, <span className="text-emerald-200">{user.name}</span>!
                        </h1>
                        <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                            Accesați toate serviciile și informațiile pentru proprietatea dumneavoastră
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <CheckCircleIcon className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">La zi</div>
                            <div className="text-sm text-gray-600">Plăți întreținere</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <DocumentTextIcon className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">3</div>
                            <div className="text-sm text-gray-600">Documente noi</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <BellIcon className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">2</div>
                            <div className="text-sm text-gray-600">Notificări active</div>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <ChartBarIcon className="h-6 w-6 text-purple-600" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">Mai</div>
                            <div className="text-sm text-gray-600">Ultimul raport</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Reports Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                                <DocumentTextIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Rapoarte lunare</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Vizualizați rapoartele lunare de administrare, situația financiară și 
                                toate documentele importante.
                            </p>
                            <Link
                                href="/reports"
                                className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold group"
                            >
                                <span>Vezi rapoartele</span>
                                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Payments Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                                <CreditCardIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Plăți online</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Efectuați plăți pentru întreținere și servicii online, 
                                simplu, rapid și securizat.
                            </p>
                            <Link
                                href="/payments"
                                className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold group"
                            >
                                <span>Efectuează plată</span>
                                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Notifications Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                                <BellIcon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Notificări</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Configurați notificările prin email și SMS pentru 
                                a fi mereu la curent cu informațiile importante.
                            </p>
                            <Link
                                href="/notifications"
                                className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-semibold group"
                            >
                                <span>Configurează</span>
                                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Recent Activity */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Activitate recentă</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <DocumentTextIcon className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900">Raport lunar generat</p>
                                        <p className="text-gray-600 text-sm">Raportul pentru luna mai 2025 este disponibil pentru descărcare</p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <ClockIcon className="h-4 w-4 text-gray-400" />
                                            <span className="text-xs text-gray-400">Acum 2 ore</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircleIcon className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900">Plată procesată cu succes</p>
                                        <p className="text-gray-600 text-sm">Plata pentru întreținerea lunii mai a fost confirmată</p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <ClockIcon className="h-4 w-4 text-gray-400" />
                                            <span className="text-xs text-gray-400">Ieri</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <ExclamationTriangleIcon className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold text-gray-900">Notificare importantă</p>
                                        <p className="text-gray-600 text-sm">Întrerupere programată a apei în data de 30 mai</p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <ClockIcon className="h-4 w-4 text-gray-400" />
                                            <span className="text-xs text-gray-400">3 zile în urmă</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Acțiuni rapide</h3>
                            <div className="space-y-4">
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg hover:bg-green-100 transition-colors group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <PhoneIcon className="h-5 w-5 text-emerald-600" />
                                        <span className="font-medium text-gray-900">Contactează administratorul</span>
                                    </div>
                                    <ArrowRightIcon className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                
                                <Link
                                    href="/documents"
                                    className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg hover:bg-green-100 transition-colors group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <DocumentTextIcon className="h-5 w-5 text-emerald-600" />
                                        <span className="font-medium text-gray-900">Descarcă documente</span>
                                    </div>
                                    <ArrowRightIcon className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                
                                <Link
                                    href="/services"
                                    className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                                >
                                    <div className="flex items-center space-x-3">
                                        <ChartBarIcon className="h-5 w-5 text-purple-600" />
                                        <span className="font-medium text-gray-900">Vezi toate serviciile</span>
                                    </div>
                                    <ArrowRightIcon className="h-4 w-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            
                            {/* Emergency Contact */}
                            <div className="mt-8 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                                <h4 className="font-semibold text-gray-900 mb-2">Contact de urgență</h4>
                                <p className="text-sm text-gray-600 mb-3">Pentru situații de urgență, sunați:</p>
                                <a
                                    href="tel:0787444874"
                                    className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold"
                                >
                                    <PhoneIcon className="h-4 w-4" />
                                    <span>0787 444 874</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
