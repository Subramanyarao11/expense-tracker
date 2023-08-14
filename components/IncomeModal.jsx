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

export function IncomeModal() {
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
                        <Input type="number" min={1} step={1} id="amount" className="col-span-3" required placeholder="Enter the Income amount" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Description
                        </Label>
                        <Input type="text" id="description" placeholder="Enter a description for income" required className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Add Entry</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
