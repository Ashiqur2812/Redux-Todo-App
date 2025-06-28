import Logo from "@/assets/Logo";
import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-4 px-5">
            <div className="flex items-center">
                <Logo size={40} /><span className="font-bold ml-1">Task</span>Master
            </div>
            <Link to='/user'>User</Link>
            <Link to='/tasks'>Tasks</Link>
        </nav>
    );
}

export default Navbar;