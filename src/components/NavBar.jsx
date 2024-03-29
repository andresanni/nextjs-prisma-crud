import Link from "next/link";

const NavBar = ()=>{
    return(
        <nav className="bg-slate-900">
            <div className="container mx-auto flex justify-between items-center py-3">
            <h3 className="font-bold text-3xl">NextCRUD</h3>
            <ul className="flex gap-x-6 text-lg font-bold">
                <li>
                    <Link 
                    className="text-slate-300 hover:text-slate-200"
                    href="/">
                        Tasks
                    </Link>
                </li>
                <li>
                    <Link 
                    className="text-slate-300 hover:text-slate-200"
                    href="/new">
                        New
                    </Link>
                </li>
                <li>
                    <Link 
                    className="text-slate-300 hover:text-slate-200"
                    href="/about">
                        About
                    </Link>
                </li>
            </ul>
            </div>
            
        </nav>
    )
}

export default NavBar;