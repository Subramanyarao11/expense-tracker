"use client";
import React, { useContext } from 'react'
import ExpenseCategoryItem from './ExpenseCategoryItem'
import { financeContext } from "@/lib/store/finance-context";
const ExpensesSection = () => {
    const { expenses } = useContext(financeContext);
    return (
        <section className="py-6">
            <h3 className="text-2xl">My Expenses</h3>
            <div className="flex flex-col gap-4 mt-6">
                {expenses?.map((expense) => {
                    return (
                        <ExpenseCategoryItem
                            expense={expense}
                            color={expense.color}
                            title={expense.title}
                            total={expense.total}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default ExpensesSection
