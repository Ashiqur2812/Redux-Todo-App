import Logo from "@/assets/Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-4 px-5">
            <div className="flex items-center">
                <Logo size={40} animated={true} /><span className="font-bold ml-1">Task</span>Master
            </div>
            <Link to='/user'>User</Link>
            <Link to='/tasks'>Tasks</Link>
            <div className="ml-0 md:ml-96 lg:ml-[42rem] xl:ml-[60rem]">
                <ModeToggle />
            </div>
        </nav>
    );
}

export default Navbar;