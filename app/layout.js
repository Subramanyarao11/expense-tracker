import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import { ThemeProvider } from "@/components/theme-provider"
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Expense Tracker',
    description: 'Personailzed expense tracker to track Income and Expenses',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <NavBar />
                    {children}
                    <ToastContainer />
                </ThemeProvider>
            </body>
        </html>
    )
}
