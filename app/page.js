"use client";
import { useContext } from "react";
import Signin from "@/components/Signin";
import Header from "@/components/Header";
import ExpensesSection from "@/components/ExpensesSection";
import Modals from "@/components/Modals";
import ChartSection from "@/components/ChartSection";
import { authContext } from "@/lib/store/auth-context";
export default function Home() {
    const { user } = useContext(authContext)
    if (!user) return <Signin />
    return (
        <div>
            <main className="container max-w-2xl px-6 mx-auto">
                <Header />
                <ExpensesSection />
                <Modals />
                <ChartSection />
            </main>
        </div>
    )
}
