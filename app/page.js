import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import ExpenseCategoryItem from "@/components/ExpenseCategoryItem";
import DUMMY_DATA from "@/lib/dummydata";
import ChartSection from "@/components/ChartSection";
export default function Home() {

    return (
        <div>
            <main className="container max-w-2xl px-6 mx-auto">
                <section className="py-3">
                    <small className="text-gray-400 text-md">My Balance</small>
                    <h2 className="text-3xl font-bold">{currencyFormatter(1000)}</h2>
                </section>
                <section className="flex items-center gap-2 py-3">
                    <Button variant="secondary">+ Expenses</Button>
                    <Button variant="secondary">+ Income</Button>
                </section>

                {/* Expenses Section */}

                <section className="py-6">
                    <h3 className="text-2xl">My Expenses</h3>
                    <div className="flex flex-col gap-4 mt-6">
                        {DUMMY_DATA?.map((expense) => {
                            return (
                                <ExpenseCategoryItem
                                    color={expense.color}
                                    title={expense.title}
                                    total={expense.total}
                                />
                            );
                        })}
                    </div>
                </section>

                {/* Chart Section */}
                <ChartSection />

            </main>
        </div>
    )
}
