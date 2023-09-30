"use client";
import { Button } from "@/components/ui/button"
import { useState, useContext } from "react"
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
import incomeSchema from "@/lib/incomeSchema";
import { financeContext } from "@/lib/store/finance-context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from 'next-themes'




export function IncomeModal() {
    const { theme } = useTheme()
    const { addIncomeItem } = useContext(financeContext);
    const [formData, setFormData] = useState({
        amount: '',
        description: '',
    });
    const [validationErrors, setValidationErrors] = useState({});
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const addIncomeHandler = async (e) => {
        e.preventDefault();

        try {
            incomeSchema.parse(formData);
            const newIncome = {
                amount: parseInt(formData.amount),
                description: formData.description,
                createdAt: new Date(),
            };
            await addIncomeItem(newIncome);
            toast.success('Income added successfully!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                className: theme === 'dark' ? 'dark-toast' : 'light-toast',
              });
            setFormData({
                amount: '',
                description: '',
            });
            setValidationErrors({});
        } catch (error) {
            console.error(error);
            const errors = {};
            error.issues.forEach((issue) => {
                const fieldName = issue.path[0];
                errors[fieldName] = issue.message;
            });

            setValidationErrors(errors);
        }
    };



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary">+ Income</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Income</DialogTitle>
                    <DialogDescription>
                        Add a new income to your budget.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Amount
                        </Label>
                        <Input name="amount" value={formData.amount} onChange={handleInputChange} type="number" min={10} step={10} id="amount" className="col-span-3" required placeholder="Enter the Income amount" />
                    </div>
                    {validationErrors.amount && (
                        <span className="text-red-500 text-center">{validationErrors.amount}</span>
                    )}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Description
                        </Label>
                        <Input name="description" value={formData.description}
                            onChange={handleInputChange} type="text" id="description" placeholder="Enter a description for income" required className="col-span-3" />
                    </div>
                    {validationErrors.description && (
                        <span className="text-red-500 text-center">{validationErrors.description}</span>
                    )}
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={addIncomeHandler}>Add Entry</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
