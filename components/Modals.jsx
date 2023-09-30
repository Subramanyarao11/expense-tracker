import React from 'react'
import { ExpenseModal } from './ExpenseModal'
import { IncomeModal } from './IncomeModal'

const Modals = () => {
    return (
        <section className="flex items-center gap-2 py-3">
            <ExpenseModal />
            <IncomeModal />
        </section>
    )
}

export default Modals
