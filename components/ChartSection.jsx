"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement);
ChartJS.register(Tooltip);
ChartJS.register(Legend);
import { Doughnut } from "react-chartjs-2";
import React,{useContext} from 'react'
import { financeContext } from "@/lib/store/finance-context";

const ChartSection = () => {
    const { expenses } = useContext(financeContext);
    return (
        <div>
            {/*  */}
            <section className="py-6">
                <h3 className="text-2xl">Stats</h3>
                <div className="w-1/2 mx-auto">
                    <Doughnut
                        data={{
                            labels: expenses?.map((expense) => expense.title),
                            datasets: [
                                {
                                    label: "Expenses",
                                    data: expenses?.map((expense) => expense.total),
                                    backgroundColor: expenses?.map((expense) => expense.color),
                                    borderColor: ["#18181b"],
                                    borderWidth: 5,
                                },
                            ],
                        }}
                    />
                </div>
            </section>
        </div>
    )
}

export default ChartSection
