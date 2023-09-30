import Header from "@/components/Header";
import ExpensesSection from "@/components/ExpensesSection";
import Modals from "@/components/Modals";
import ChartSection from "@/components/ChartSection";
export default function Home() {
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
