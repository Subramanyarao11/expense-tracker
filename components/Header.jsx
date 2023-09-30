"use client";
import React, { useState, useEffect, useContext } from 'react'
import { financeContext } from "@/lib/store/finance-context";
import { currencyFormatter } from "@/lib/currencyFormatter";

const Header = () => {
    const { expenses, income } = useContext(financeContext);
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        const newBalance =
            income.reduce((total, i) => {
                return total + i.amount;
            }, 0) -
            expenses.reduce((total, e) => {
                return total + e.total;
            }, 0);

        setBalance(newBalance);
    }, [expenses, income]);
    return (
        <section className="py-3">
            <small className="text-gray-400 text-md">My Balance</small>
            <h2 className="text-3xl font-bold">{currencyFormatter(balance)}</h2>
        </section>
    )
}

export default Header
