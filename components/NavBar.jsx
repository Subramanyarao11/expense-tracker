import { BarChart4 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from './modeToggle';


function Nav() {
    return (
        <header className="container max-w-2xl px-6 py-6 mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>

                    {/* name */}
                    <small>Shad!</small>
                </div>

                {/* Right side of our navigation */}
                <nav className="flex items-center gap-4">
                    <div>
                        <BarChart4 className="text-2xl cursor-pointer" />
                    </div>
                    <div>
                        <ModeToggle />
                    </div>
                    <div>
                        <Button variant="destructive">Log out</Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
