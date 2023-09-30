"use client";
import React, { useContext, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { financeContext } from "@/lib/store/finance-context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from "uuid";
import { useTheme } from 'next-themes'

export function ExpenseModal() {
    const { expenses, addExpenseItem, addCategory } = useContext(financeContext);
    const [expenseAmount, setExpenseAmount] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showAddExpense, setShowAddExpense] = useState(false);

    const titleRef = useRef();
    const colorRef = useRef();
    const { theme } = useTheme()

    const addExpenseItemHandler = async () => {
        console.log(expenses)
        const expense = expenses.find((e) => {
            return e.id === selectedCategory;
        });

        const newExpense = {
            color: expense.color,
            title: expense.title,
            total: expense.total + +expenseAmount,
            items: [
                ...expense.items,
                {
                    amount: +expenseAmount,
                    createdAt: new Date(),
                    id: uuidv4(),
                },
            ],
        };

        try {
            await addExpenseItem(selectedCategory, newExpense);
            toast.success('Expense added successfully!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                className: theme === 'dark' ? 'dark-toast' : 'light-toast',
            });
            console.log(newExpense);
            setExpenseAmount("");
            setSelectedCategory(null);
        } catch (error) {
            console.log(error.message);
        }
    };

    const addCategoryHandler = async () => {
        const title = titleRef.current.value;
        const color = colorRef.current.value;

        try {
            await addCategory({ title, color, total: 0 });
            setShowAddExpense(false);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">+ Expenses</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Expense</DialogTitle>
                    <DialogDescription>
                        Add a new expense to your budget.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Amount
                        </Label>
                        <Input name="amount" value={expenseAmount}
                            onChange={(e) => {
                                setExpenseAmount(e.target.value);
                            }} type="number" min={10} step={10} id="amount" className="col-span-3" required placeholder="Enter the Expense amount" />
                    </div>

                    {expenseAmount > 0 && (
                        <>
                            <div className="flex items-center justify-between p-2">
                                <p className="text-center font-medium text-sm">Add New Category</p>
                                <Button onClick={() => setShowAddExpense(true)} className="text-lime-400" variant="link">+ New Category</Button>
                            </div>


                            {showAddExpense && (
                                <div className="flex flex-col items-center justify-between px-2 space-y-2">
                                    <Input type="text" placeholder="Enter Title" ref={titleRef} />
                                    <div className="inline-flex items-center justify-between p-2 space-x-4">
                                        <Label>Pick Color</Label>
                                        <Input type="color" className="w-24 h-10" ref={colorRef} />
                                        <Button variant="outline" onClick={addCategoryHandler} className="py-1 px-2 ">Add</Button>
                                        <Button variant="destructive" onClick={() => setShowAddExpense(false)} className="py-1 px-2 ">Cancel</Button>
                                    </div>

                                </div>
                            )}

                            <p className="text-center font-medium text-muted-foreground">Select Expense Category</p>
                            <div className="grid grid-cols-2 items-center gap-4">
                                {expenses.map((expense) => {
                                    return (
                                        <Button key={expense.id} onClick={() => setSelectedCategory(expense.id)} variant="outline" className="py-1 px-2 rounded-full">
                                            <div className="mr-2 h-4 w-4 rounded-full" style={{ backgroundColor: expense.color }} />
                                            {expense.title}
                                        </Button>
                                    )
                                })}

                            </div>
                        </>

                    )}

                </div>
                <DialogFooter>
                    {expenseAmount > 0 && selectedCategory && (<Button onClick={addExpenseItemHandler} type="submit">Save changes</Button>)}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
