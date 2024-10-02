import { CircleUserRound, Crown } from "lucide-react";
import { getGreeting } from "../util/getGreeting.js";
import React from "react";

const UserHeader = () => {
    return(
        <section className="mx-4 mt-1 mb-6 flex-row flex justify-start items-center">
            <CircleUserRound />
            <span className="pl-2 font-medium">{getGreeting()}, usuário!</span>
            <span className="ml-auto hidden lg:flex">Você está conectado como:</span>
            <span className="ml-2 font-medium hidden lg:flex">Administrador</span>
            <Crown className="ml-1 hidden sm:flex"/>
        </section>
    )
}

export default UserHeader;
