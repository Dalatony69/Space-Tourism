import React from "react";
import Header from "../Components/Header";
import '../App.css'

function Home_Page(){
    return(
        <div className="home-page">
            <Header/>
            <main className="home-main">
                <div className="data">
                    <div className="txt1">SO, YOU WANT TRAVEL TO</div>
                    <div className="txt2">SPACE</div>
                    <div className="txt3">Let's face it; if you want to go to space, 
                        you might as well genuinely go to outer space and not hover 
                        kind of on the edge of it Well sit back, and relax because 
                        we'll give you a truly out of this world experience!
                    </div>
                </div>
                <div className="explore-holder">
                    <div className="explore">EXPLORE</div>
                </div>
            </main>
        </div>
    );
}
export default Home_Page;