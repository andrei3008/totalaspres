import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Payments({ auth }) {
    const [selectedPayment, setSelectedPayment] = useState(null);
    
    const { data, setData, post, processing, errors } = useForm({
        payment_type: '',
        amount: '',
        description: '',
        payment_method: 'card'
    });

    // Sample payment types
    const paymentTypes = [
        {
            id: 1,
            type: 'intretinere',
            name: 'Întreținere lunară',
            amount: 450,
            dueDate: '2025-06-10',
            status: 'pending'
        },
        {
            id: 2,
            type: 'reparatii',
            name: 'Contribuție reparații urgente',
            amount: 200,
            dueDate: '2025-06-15',
            status: 'pending'
        },
        {
            id: 3,
            type: 'curatenie',
            name: 'Servicii curățenie suplimentară',
            amount: 75,
            dueDate: '2025-06-20',
            status: 'optional'
        }
    ];

    const handlePaymentSelect = (payment) => {
        setSelectedPayment(payment);
        setData({
            ...data,
            payment_type: payment.type,
            amount: payment.amount.toString(),
            description: payment.name
        });
    };

    const submit = (e) => {
        e.preventDefault();
        
        // In a real application, you would integrate with a payment processor
        // For now, we'll simulate the payment process
        post('/payments/process', {
            onSuccess: () => {
                alert('Plata a fost procesată cu succes!');
                setSelectedPayment(null);
                setData({
                    payment_type: '',
                    amount: '',
                    description: '',
                    payment_method: 'card'
                });
            }
        });
    };

    return (
        <MainLayout>
            <Head title="Plăți Online - SC TOTAL AS PRES SRL | Întreținere și Contribuții">
                <meta name="description" content="Efectuați plăți online pentru întreținere lunară, contribuții reparații și alte taxe asociație. Plăți securizate cu card bancar prin platforma SC TOTAL AS PRES SRL." />
                <meta name="keywords" content="plăți online, întreținere lunară, contribuții reparații, taxe asociație, plată securizată, card bancar, administrare imobile" />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="author" content="SC TOTAL AS PRES SRL" />
                <link rel="canonical" href="https://totalaspres.ro/payments" />
            </Head>
            
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Plăți online
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            Efectuați plăți pentru întreținere și servicii în mod securizat
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Payment Types */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                                Selectați tipul de plată
                            </h2>
                            <div className="space-y-4">
                                {paymentTypes.map((payment) => (
                                    <div 
                                        key={payment.id}
                                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                            selectedPayment?.id === payment.id
                                                ? 'border-green-500 bg-emerald-50'
                                                : 'border-gray-200 hover:border-gray-300 bg-white'
                                        }`}
                                        onClick={() => handlePaymentSelect(payment)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-medium text-gray-900">
                                                    {payment.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    Scadență: {new Date(payment.dueDate).toLocaleDateString('ro-RO')}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-semibold text-gray-900">
                                                    {payment.amount} RON
                                                </p>
                                                <span className={`text-xs px-2 py-1 rounded-full ${
                                                    payment.status === 'pending' 
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-green-100 text-emerald-800'
                                                }`}>
                                                    {payment.status === 'pending' ? 'Obligatoriu' : 'Opțional'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Payment Form */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                                Detalii plată
                            </h2>
                            
                            {selectedPayment ? (
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <form onSubmit={submit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Serviciu selectat
                                            </label>
                                            <div className="p-3 bg-gray-50 rounded-md">
                                                <p className="font-medium">{selectedPayment.name}</p>
                                                <p className="text-sm text-gray-600">{selectedPayment.amount} RON</p>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Metodă de plată
                                            </label>
                                            <div className="space-y-2">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="payment_method"
                                                        value="card"
                                                        checked={data.payment_method === 'card'}
                                                        onChange={(e) => setData('payment_method', e.target.value)}
                                                        className="h-4 w-4 text-emerald-600 focus:ring-green-500 border-gray-300"
                                                    />
                                                    <span className="ml-2 text-sm text-gray-700">
                                                        Card bancar (Visa/Mastercard)
                                                    </span>
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="payment_method"
                                                        value="bank_transfer"
                                                        checked={data.payment_method === 'bank_transfer'}
                                                        onChange={(e) => setData('payment_method', e.target.value)}
                                                        className="h-4 w-4 text-emerald-600 focus:ring-green-500 border-gray-300"
                                                    />
                                                    <span className="ml-2 text-sm text-gray-700">
                                                        Transfer bancar
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        {data.payment_method === 'card' && (
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Numărul cardului
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="1234 5678 9012 3456"
                                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            Data expirării
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="MM/YY"
                                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                                            CVV
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="123"
                                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                                        Numele titularului
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Nume Prenume"
                                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {data.payment_method === 'bank_transfer' && (
                                            <div className="p-4 bg-emerald-50 rounded-md">
                                                <h4 className="font-medium text-emerald-900 mb-2">
                                                    Detalii transfer bancar
                                                </h4>
                                                <div className="text-sm text-emerald-700 space-y-1">
                                                    <p><strong>Beneficiar:</strong> SC TOTAL AS PRES SRL</p>
                                                    <p><strong>CUI:</strong> 48721770</p>
                                                    <p><strong>IBAN:</strong> În curând disponibil</p>
                                                    <p><strong>Banca:</strong> În curând disponibil</p>
                                                    <p><strong>Descriere:</strong> {selectedPayment.name}</p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="border-t pt-4">
                                            <div className="flex items-center justify-between text-lg font-semibold">
                                                <span>Total de plată:</span>
                                                <span className="text-emerald-800">{selectedPayment.amount} RON</span>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                                        >
                                            {processing ? 'Se procesează...' : `Plătește ${selectedPayment.amount} RON`}
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        Selectați o plată
                                    </h3>
                                    <p className="text-gray-600">
                                        Alegeți tipul de plată din lista din stânga pentru a continua.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
