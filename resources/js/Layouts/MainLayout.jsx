import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Layout({ children }) {
    const { auth } = usePage().props;
    const user = auth?.user;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Navigation */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">TAP</span>
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                                    Total As Pres
                                </span>
                            </Link>
                            
                            {/* Desktop Menu */}
                            <div className="hidden md:ml-10 md:flex md:space-x-8">
                                <Link href="/about" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    Despre noi
                                </Link>
                                <Link href="/services" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    Servicii
                                </Link>
                                <Link href="/portfolio" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    Portofoliu
                                </Link>
                                <Link href="/documents" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    Documente
                                </Link>
                                <Link href="/contact" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        
                        {/* Desktop Auth */}
                        <div className="hidden md:flex md:items-center md:space-x-4">
                            {user ? (
                                <div className="flex items-center space-x-4">
                                    <Link 
                                        href="/dashboard" 
                                        className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                    >
                                        Dashboard
                                    </Link>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-medium">
                                                {user.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                        <span className="text-gray-700 text-sm font-medium">
                                            {user.name}
                                        </span>
                                    </div>
                                    <Link 
                                        href="/logout" 
                                        method="post" 
                                        as="button"
                                        className="text-gray-500 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                    >
                                        Ieșire
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <Link href="/login" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                        Autentificare
                                    </Link>
                                    <Link 
                                        href="/register" 
                                        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                                    >
                                        Înregistrare
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-emerald-600 p-2 rounded-md transition-colors duration-200"
                            >
                                {isMenuOpen ? (
                                    <XMarkIcon className="h-6 w-6" />
                                ) : (
                                    <Bars3Icon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link href="/about" className="block text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                                Despre noi
                            </Link>
                            <Link href="/services" className="block text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                                Servicii
                            </Link>
                            <Link href="/portfolio" className="block text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                                Portofoliu
                            </Link>
                            <Link href="/documents" className="block text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                                Documente
                            </Link>
                            <Link href="/contact" className="block text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                                Contact
                            </Link>
                            {user ? (
                                <>
                                    <Link href="/dashboard" className="block text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                                        Dashboard
                                    </Link>
                                    <Link href="/logout" method="post" as="button" className="block text-red-600 hover:bg-red-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left">
                                        Ieșire
                                    </Link>
                                </>
                            ) : (
                                <div className="border-t border-gray-200 pt-4 space-y-1">
                                    <Link href="/login" className="block text-gray-700 hover:text-emerald-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">
                                        Autentificare
                                    </Link>
                                    <Link href="/register" className="block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-2 rounded-md text-base font-medium mx-3">
                                        Înregistrare
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>

            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">TAP</span>
                                </div>
                                <span className="text-xl font-bold">Total As Pres</span>
                            </div>
                            <p className="text-gray-400 mb-4 max-w-md">
                                Administrare profesională pentru imobile, cu focus pe transparență, 
                                eficiență și satisfacția clienților noștri.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
                            <div className="space-y-2 text-gray-400">
                                <p className="flex items-center space-x-2">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>contact@totalaspres.ro</span>
                                </p>
                                <p className="flex items-center space-x-2">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>0123 456 789</span>
                                </p>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Program</h3>
                            <div className="space-y-2 text-gray-400">
                                <p>Luni - Vineri</p>
                                <p className="text-sm">09:00 - 18:00</p>
                                <p className="mt-2">Sâmbătă - Duminică</p>
                                <p className="text-sm">Închis</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Total As Pres. Toate drepturile rezervate.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
