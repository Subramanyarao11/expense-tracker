"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import Footer from '@/components/Footer';
import { ThemeProvider } from "@/components/theme-provider"
import { ToastContainer } from 'react-toastify';
import FinanceContextProvider from '@/lib/store/finance-context';
import AuthContextProvider from '@/lib/store/auth-context';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Expense Tracker | Personalized Expense Tracker</title>
                <meta name='description' content='Personailzed expense tracker to track Income and Expenses' />
            </head>
            <body className={`${inter.className} flex flex-col`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <AuthContextProvider>
                        <FinanceContextProvider>
                            <div className='flex flex-col min-h-screen'>
                                <NavBar />
                                <div className="flex-grow">{children}</div>
                                <Footer />
                            </div>
                            <ToastContainer />
                        </FinanceContextProvider>
                    </AuthContextProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
