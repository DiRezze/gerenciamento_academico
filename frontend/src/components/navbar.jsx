import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, ArrowLeft } from 'lucide-react';

const NavBar = () => {
    const navLinks = [
        { name: "Início", path: "/" },
        { name: "Alunos", path: "/alunos" },
        { name: "Suporte", path: "/suporte" },
    ];

    const location = useLocation();

    return(
        <nav className="bg-neutral-900 p-4 w-dvw top-0 fixed space-x-4 flex flex-row">
            <ul className="flex space-x-4 justify-left w-full flex-row">
                <li>
                    <GraduationCap color="#fefefe" />
                </li>
                {navLinks.map((link, index)=>(
                    <li key={index}>
                        <Link 
                            to={link.path}
                            className="text-white hover:text-blue-400 transition duration-200"
                        >
                            {link.name}</Link>
                    </li>
                ))}
            </ul>
                {location.pathname !== '/' && (
                        <Link
                            to={"/"}
                            className="text-white hover:text-blue-400 transition duration-200 ml-auto justify-self-end"
                        >
                            <div className="flex group items-center">
                                <ArrowLeft 
                                    color="#fefefe" 
                                    className="text-white group-hover:text-blue-400 transition duration-200 group-hover:-translate-x-1" />
                                <span>Voltar</span>
                            </div>
                        </Link>
                )}
        </nav>
    )
}

export default NavBar;
