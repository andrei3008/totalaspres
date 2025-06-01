import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Notifications({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        email_notifications: true,
        sms_notifications: false,
        phone_number: '',
        notification_types: {
            payment_reminders: true,
            maintenance_updates: true,
            emergency_alerts: true,
            monthly_reports: false
        }
    });

    const submit = (e) => {
        e.preventDefault();
        post('/notifications/update', {
            onSuccess: () => {
                alert('Setările de notificare au fost actualizate!');
            }
        });
    };

    const toggleNotificationType = (type) => {
        setData('notification_types', {
            ...data.notification_types,
            [type]: !data.notification_types[type]
        });
    };

    return (
        <MainLayout>
            <Head title="Setări Notificări - SC TOTAL AS PRES SRL | Preferințe Comunicare">
                <meta name="description" content="Configurați setările de notificare pentru alertele despre plăți, întreținere, urgențe și rapoarte lunare. Primiți notificări prin email sau SMS de la SC TOTAL AS PRES SRL." />
                <meta name="keywords" content="setări notificări, alerte plăți, notificări întreținere, alertele urgență, rapoarte lunare, email, SMS, preferințe comunicare" />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="author" content="SC TOTAL AS PRES SRL" />
                <link rel="canonical" href="https://totalaspres.ro/notifications" />
            </Head>
            
            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Setări notificări
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            Configurați modul în care doriți să fiți notificat despre evenimente importante
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md">
                        <form onSubmit={submit}>
                            <div className="px-6 py-4 border-b border-gray-200">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Canale de notificare
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    Alegeți cum doriți să primiți notificările
                                </p>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Email Notifications */}
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="email_notifications"
                                            type="checkbox"
                                            checked={data.email_notifications}
                                            onChange={(e) => setData('email_notifications', e.target.checked)}
                                            className="h-4 w-4 text-emerald-600 focus:ring-green-500 border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <label htmlFor="email_notifications" className="text-sm font-medium text-gray-700">
                                            Notificări prin email
                                        </label>
                                        <p className="text-sm text-gray-500">
                                            Primiți notificări pe adresa de email înregistrată
                                        </p>
                                    </div>
                                </div>

                                {/* SMS Notifications */}
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="sms_notifications"
                                            type="checkbox"
                                            checked={data.sms_notifications}
                                            onChange={(e) => setData('sms_notifications', e.target.checked)}
                                            className="h-4 w-4 text-emerald-600 focus:ring-green-500 border-gray-300 rounded"
                                        />
                                    </div>
                                    <div className="ml-3 flex-1">
                                        <label htmlFor="sms_notifications" className="text-sm font-medium text-gray-700">
                                            Notificări prin SMS
                                        </label>
                                        <p className="text-sm text-gray-500 mb-3">
                                            Primiți notificări urgente prin SMS
                                        </p>
                                        {data.sms_notifications && (
                                            <div>
                                                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                                                    Număr de telefon
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone_number"
                                                    value={data.phone_number}
                                                    onChange={(e) => setData('phone_number', e.target.value)}
                                                    placeholder="0712345678"
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm max-w-xs"
                                                />
                                                {errors.phone_number && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.phone_number}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 border-t border-gray-200">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">
                                    Tipuri de notificări
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700">
                                                Amintiri plăți
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                Notificări pentru plățile scadente sau în întârziere
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => toggleNotificationType('payment_reminders')}
                                            className={`${
                                                data.notification_types.payment_reminders
                                                    ? 'bg-green-600'
                                                    : 'bg-gray-200'
                                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
                                        >
                                            <span
                                                className={`${
                                                    data.notification_types.payment_reminders
                                                        ? 'translate-x-6'
                                                        : 'translate-x-1'
                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700">
                                                Actualizări întreținere
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                Informații despre lucrări de întreținere planificate
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => toggleNotificationType('maintenance_updates')}
                                            className={`${
                                                data.notification_types.maintenance_updates
                                                    ? 'bg-green-600'
                                                    : 'bg-gray-200'
                                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
                                        >
                                            <span
                                                className={`${
                                                    data.notification_types.maintenance_updates
                                                        ? 'translate-x-6'
                                                        : 'translate-x-1'
                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700">
                                                Alerte urgente
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                Notificări pentru situații de urgență (avarii, întreruperi utilități)
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => toggleNotificationType('emergency_alerts')}
                                            className={`${
                                                data.notification_types.emergency_alerts
                                                    ? 'bg-green-600'
                                                    : 'bg-gray-200'
                                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
                                        >
                                            <span
                                                className={`${
                                                    data.notification_types.emergency_alerts
                                                        ? 'translate-x-6'
                                                        : 'translate-x-1'
                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-700">
                                                Rapoarte lunare
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                Notificare când raportul lunar este disponibil
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => toggleNotificationType('monthly_reports')}
                                            className={`${
                                                data.notification_types.monthly_reports
                                                    ? 'bg-green-600'
                                                    : 'bg-gray-200'
                                            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
                                        >
                                            <span
                                                className={`${
                                                    data.notification_types.monthly_reports
                                                        ? 'translate-x-6'
                                                        : 'translate-x-1'
                                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                                >
                                    {processing ? 'Se salvează...' : 'Salvează setările'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
