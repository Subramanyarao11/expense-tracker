import React from 'react'
import { currencyFormatter } from "@/lib/currencyFormatter";

const Header = () => {
    return (
        <section className="py-3">
            <small className="text-gray-400 text-md">My Balance</small>
            <h2 className="text-3xl font-bold">{currencyFormatter(1000)}</h2>
        </section>
    )
}

export default Header
