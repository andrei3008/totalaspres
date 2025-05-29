import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Reports({ auth }) {
    const [selectedMonth, setSelectedMonth] = useState('2025-05');
    
    // Sample report data
    const reports = [
        {
            id: 1,
            month: '2025-05',
            title: 'Raport lunar Mai 2025',
            status: 'finalized',
            income: 12500,
            expenses: 8300,
            balance: 4200,
            date: '2025-05-31'
        },
        {
            id: 2,
            month: '2025-04',
            title: 'Raport lunar Aprilie 2025',
            status: 'finalized',
            income: 11800,
            expenses: 9100,
            balance: 2700,
            date: '2025-04-30'
        },
        {
            id: 3,
            month: '2025-03',
            title: 'Raport lunar Martie 2025',
            status: 'finalized',
            income: 13200,
            expenses: 7800,
            balance: 5400,
            date: '2025-03-31'
        }
    ];

    const filteredReports = reports.filter(report => 
        selectedMonth ? report.month === selectedMonth : true
    );

    return (
        <MainLayout>
            <Head title="Rapoarte - SC TOTAL AS PRES SRL" />
            
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Rapoarte lunare
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            Accesați și descărcați rapoartele financiare pentru proprietatea dumneavoastră
                        </p>
                    </div>

                    {/* Filter */}
                    <div className="mb-6">
                        <label htmlFor="month-select" className="block text-sm font-medium text-gray-700 mb-2">
                            Filtrează după lună:
                        </label>
                        <select
                            id="month-select"
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            className="block w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        >
                            <option value="">Toate lunile</option>
                            <option value="2025-05">Mai 2025</option>
                            <option value="2025-04">Aprilie 2025</option>
                            <option value="2025-03">Martie 2025</option>
                            <option value="2025-02">Februarie 2025</option>
                            <option value="2025-01">Ianuarie 2025</option>
                        </select>
                    </div>

                    {/* Reports Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredReports.map((report) => (
                            <div key={report.id} className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {report.title}
                                    </h3>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                        report.status === 'finalized' 
                                            ? 'bg-green-100 text-emerald-800' 
                                            : 'bg-green-100 text-emerald-800'
                                    }`}>
                                        {report.status === 'finalized' ? 'Finalizat' : 'În lucru'}
                                    </span>
                                </div>
                                
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">Încasări</p>
                                        <p className="text-lg font-semibold text-emerald-600">
                                            {report.income.toLocaleString()} RON
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">Cheltuieli</p>
                                        <p className="text-lg font-semibold text-red-600">
                                            {report.expenses.toLocaleString()} RON
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">Sold</p>
                                        <p className={`text-lg font-semibold ${
                                            report.balance >= 0 ? 'text-emerald-600' : 'text-red-600'
                                        }`}>
                                            {report.balance.toLocaleString()} RON
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        Data: {new Date(report.date).toLocaleDateString('ro-RO')}
                                    </span>
                                    <div className="flex space-x-2">
                                        <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            Vezi
                                        </button>
                                        <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Descarcă
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredReports.length === 0 && (
                        <div className="text-center py-12">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-gray-900">
                                Nu există rapoarte disponibile
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Nu au fost găsite rapoarte pentru criteriile selectate.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
