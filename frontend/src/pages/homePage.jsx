import { BookUser, CalendarRange, ChartColumnBig, IdCard } from "lucide-react";
import { homeCarousel } from "../constants/homeConst.js";
import HomeButton from "../components/homeButton.jsx";
import UserHeader from "../components/userHeader.jsx";
import Carousel from "../components/carousel.jsx";
import React from "react";

const HomePage = () => {
    return(
        <main className="pt-4">
            <UserHeader />
            <Carousel contentArray={homeCarousel}/>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-11/12 mx-auto my-8">
                <HomeButton targetLink={"/alunos"} icon={<BookUser />} text={"Alunos"} />
                <HomeButton targetLink={"/alunos"} icon={<ChartColumnBig />} text={"Notas e Frequência"} />
                <HomeButton targetLink={"/alunos"} icon={<CalendarRange />} text={"Eventos"} />
                <HomeButton targetLink={"/alunos"} icon={<IdCard />} text={"Meus dados"} />
            </section>
        </main>
    )
}

export default HomePage;
