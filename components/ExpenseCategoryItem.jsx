"use client"
import React, { useContext } from "react";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "./ui/badge";
import { Trash2 } from "lucide-react";
import { financeContext } from "@/lib/store/finance-context";
import formatTimestamp from "@/lib/timeStampFormatter";

function ExpenseCategoryItem({ color, title, total, expense }) {
    const { deleteExpenseItem, deleteExpenseCategory } = useContext(financeContext);

    const deleteExpenseHandler = async () => {
        try {
            await deleteExpenseCategory(expense.id);
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteExpenseItemHandler = async (item) => {
        try {
            //  Remove the item from the list
            const updatedItems = expense.items.filter((i) => i.id !== item.id);

            // Update the expense balance
            const updatedExpense = {
                items: [...updatedItems],
                total: expense.total - item.amount,
            };

            await deleteExpenseItem(updatedExpense, expense.id);
        } catch (error) {
            console.log(error.message);
        }
    };


    return (

        <Sheet>
            <SheetTrigger asChild>
                <button>
                    <div className="flex items-center justify-between px-4 py-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-2xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        <div className="flex items-center gap-2">
                            <div
                                className="w-[25px] h-[25px] rounded-full"
                                style={{ backgroundColor: color }}
                            />
                            <h4 className="capitalize">{title}</h4>
                        </div>
                        <p>{currencyFormatter(total)}</p>
                    </div>
                </button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle><Badge className="p-2" variant="outline"><div className="mr-2 h-4 w-4 rounded-full" style={{ backgroundColor: expense.color }} />{expense.title}</Badge></SheetTitle>
                    <SheetDescription>
                        Recent expenses of {expense.title} category.
                    </SheetDescription>
                </SheetHeader>
                <div>
                    <h3 className="my-4 text-lg underline underline-offset-2">Expense history</h3>
                    {expense.items.map((item) => {
                        return (
                            <div key={item.id} className="flex items-center justify-between py-2">
                                <small>
                                    {formatTimestamp(item.createdAt.toMillis
                                        ? new Date(item.createdAt.toMillis()).toISOString()
                                        : item.createdAt.toISOString())}
                                </small>
                                <p className="">
                                    {item.name.length > 20
                                        ? item.name.substring(0, 10) + "..."
                                        : item.name}
                                </p>
                                <p className="flex items-center gap-2">
                                    {currencyFormatter(item.amount)}
                                    <button
                                        onClick={() => {
                                            deleteExpenseItemHandler(item);
                                        }}
                                    >
                                        <Trash2 className="text-red-600 hover:text-red-500 w-[4.5] h-[4.5]" />
                                    </button>
                                </p>
                            </div>
                        );
                    })}
                </div>
                <SheetFooter style={{ position: "fixed", bottom: "20px" }}>
                    <SheetClose asChild>
                        <Button onClick={deleteExpenseHandler} className="text-red-600 hover:text-red-500" variant="outline" type="submit">Delete Category</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>

    );
}

export default ExpenseCategoryItem;
