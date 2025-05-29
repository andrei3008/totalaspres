import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from '@/Layouts/MainLayout';
import { DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Terms() {
    return (
        <Layout>
            <Head title="Termeni și condiții - SC TOTAL AS PRES SRL" />
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-500 to-teal-600 py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Termeni și condiții
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                        Condițiile generale de utilizare pentru serviciile SC TOTAL AS PRES SRL
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-emerald-50 rounded-lg p-6 mb-8">
                        <div className="flex items-center mb-4">
                            <DocumentTextIcon className="h-8 w-8 text-emerald-600 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900">
                                Informații generale
                            </h2>
                        </div>
                        <div className="text-gray-700 space-y-2">
                            <p><strong>Denumire:</strong> SC TOTAL AS PRES SRL</p>
                            <p><strong>CUI:</strong> 48721770</p>
                            <p><strong>Nr. reg. com.:</strong> J16/1854/2023</p>
                            <p><strong>Adresă:</strong> ALEEA I BANU MARACINE, NR. 5, CARCEA</p>
                            <p><strong>Email:</strong> totalaspres@gmail.com</p>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Dispoziții generale</h2>
                        <p className="text-gray-700 mb-4">
                            Prezentii termeni și condiții ("Termenii") reglementează utilizarea serviciilor oferite de 
                            SC TOTAL AS PRES SRL, înregistrată cu CUI 48721770, nr. reg. com. J16/1854/2023, 
                            cu sediul în ALEEA I BANU MARACINE, NR. 5, CARCEA.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">2. Servicii oferite</h2>
                        <p className="text-gray-700 mb-4">
                            SC TOTAL AS PRES SRL oferă următoarele tipuri de servicii:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                            <li>Administrare financiar-contabilă pentru asociații de proprietari</li>
                            <li>Administrare tehnică și întreținere imobile</li>
                            <li>Consultanță juridică specializată</li>
                            <li>Servicii de relații cu proprietarii</li>
                            <li>Raportare și analize financiare</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">3. Obligațiile părților</h2>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Obligațiile SC TOTAL AS PRES SRL</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Prestarea serviciilor conform standardelor profesionale</li>
                            <li>Respectarea confidențialității datelor clientului</li>
                            <li>Furnizarea rapoartelor și documentelor în termenele stabilite</li>
                            <li>Asigurarea transparenței în gestionarea fondurilor</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Obligațiile clientului</h3>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li>Furnizarea informațiilor necesare prestării serviciilor</li>
                            <li>Plata la termen a contravalorii serviciilor</li>
                            <li>Respectarea dispozițiilor contractuale</li>
                            <li>Comunicarea promptă a oricăror modificări relevante</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">4. Tarife și plăți</h2>
                        <p className="text-gray-700 mb-4">
                            Tarifele pentru serviciile prestate sunt stabilite prin contract individual 
                            și pot fi actualizate anual. Plata se efectuează conform termenelor stabilite 
                            în contractul de prestări servicii.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">5. Confidențialitatea</h2>
                        <p className="text-gray-700 mb-4">
                            SC TOTAL AS PRES SRL se angajează să mențină confidențialitatea tuturor 
                            informațiilor obținute în timpul prestării serviciilor, conform prevederilor 
                            legale în vigoare privind protecția datelor cu caracter personal.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">6. Răspunderea</h2>
                        <p className="text-gray-700 mb-4">
                            SC TOTAL AS PRES SRL își asumă răspunderea pentru prestarea serviciilor 
                            conform standardelor profesionale. Răspunderea este limitată la valoarea 
                            contractului și nu include daunele indirecte sau consecutive.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">7. Forța majoră</h2>
                        <p className="text-gray-700 mb-4">
                            Părțile nu sunt răspunzătoare pentru neexecutarea obligațiilor contractuale 
                            din cauza unor evenimente de forță majoră, conform definiției din legislația română.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">8. Modificarea termenilor</h2>
                        <p className="text-gray-700 mb-4">
                            SC TOTAL AS PRES SRL își rezervă dreptul de a modifica prezentii termeni 
                            și condiții cu notificare prealabilă de minimum 30 de zile.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">9. Soluționarea litigiilor</h2>
                        <p className="text-gray-700 mb-4">
                            Eventualele litigii vor fi soluționate pe cale amiabilă. În cazul în care 
                            aceasta nu este posibilă, litigiile vor fi soluționate de instanțele competente 
                            din România, conform legislației în vigoare.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">10. Dispoziții finale</h2>
                        <p className="text-gray-700 mb-4">
                            Prezentii termeni și condiții intră în vigoare de la data publicării și se 
                            aplică tuturor contractelor încheiate ulterior acestei date.
                        </p>

                        <div className="bg-gray-50 rounded-lg p-6 mt-8">
                            <div className="flex items-center mb-4">
                                <CheckCircleIcon className="h-6 w-6 text-emerald-600 mr-2" />
                                <h3 className="text-lg font-semibold text-gray-900">Contact pentru întrebări</h3>
                            </div>
                            <p className="text-gray-700">
                                Pentru orice întrebări privind termenii și condițiile, ne puteți contacta 
                                la adresa de email: <a href="mailto:totalaspres@gmail.com" className="text-emerald-600 hover:text-emerald-700">totalaspres@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-sm text-gray-500">
                            Ultima actualizare: Ianuarie 2025
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
