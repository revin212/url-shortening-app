import Hero from "./Hero";
import MainApp from "./MainApp";
import Features from "./Features";

function Main() {
    return ( 
        <div className="main-content mt-20 lg:mt-6 mx-6 md:mx-auto max-w-[750px] lg:max-w-[1024px]">
            <main>
                <Hero />
                <MainApp />
                <Features />
            </main>
        </div>
     );
}

export default Main;