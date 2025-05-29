import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <MainLayout>
            <Head title="Autentificare - SC TOTAL AS PRES SRL" />
            
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Autentificare
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Accesați contul dumneavoastră pentru a vedea rapoartele online
                        </p>
                    </div>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-emerald-600 text-center">
                            {status}
                        </div>
                    )}

                    <form className="mt-8 space-y-6" onSubmit={submit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Adresa de email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                    placeholder="Adresa de email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && (
                                    <div className="text-red-600 text-sm mt-1">{errors.email}</div>
                                )}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Parola
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                                    placeholder="Parola"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                {errors.password && (
                                    <div className="text-red-600 text-sm mt-1">{errors.password}</div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember"
                                    type="checkbox"
                                    className="h-4 w-4 text-emerald-600 focus:ring-green-500 border-gray-300 rounded"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Ține-mă minte
                                </label>
                            </div>

                            {canResetPassword && (
                                <div className="text-sm">
                                    <Link
                                        href={route('password.request')}
                                        className="font-medium text-emerald-600 hover:text-emerald-500"
                                    >
                                        Ați uitat parola?
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                            >
                                {processing ? 'Se încarcă...' : 'Autentificare'}
                            </button>
                        </div>

                        <div className="text-center">
                            <span className="text-sm text-gray-600">
                                Nu aveți cont?{' '}
                                <Link
                                    href={route('register')}
                                    className="font-medium text-emerald-600 hover:text-emerald-500"
                                >
                                    Înregistrați-vă aici
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
