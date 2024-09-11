import React, { useState } from "react";
import Header from "../Components/Header";
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home_Page() {

    const navigate = useNavigate();
    const [minors, setMinors] = useState(false);

    // Function to handle navigation with the selected destination
    const handleNavigate = (destination) => {
        navigate('/Destination', { state: { selectedDestination: destination } });
    };

    return (
        <div className="home-page">
            <Header />
            <main className="home-main">
                <div className="data">
                    <div className="txt1">SO, YOU WANT TO TRAVEL TO</div>
                    <div className="txt2">SPACE</div>
                    <div className="txt3">
                        Let's face it; if you want to go to space, you might as well genuinely go to outer space 
                        and not hover kind of on the edge of it. Well sit back, and relax because we'll give you 
                        a truly out of this world experience!
                    </div>
                </div>
                <div className="explore-holder">
                    <div className="explore" onClick={() => setMinors(!minors)}>
                        EXPLORE
                    </div>

                    <div 
                        className="line one" 
                        style={{ transform: minors ? 'translate(-100%, -100%)' : 'translate(0, 0)', transition: 'all .5s ease' }}
                        onClick={() => handleNavigate('Moon')}
                    >
                        Moon
                    </div>

                    <div 
                        className="line two" 
                        style={{ transform: minors ? 'translate(100%, -100%)' : 'translate(0, 0)', transition: 'all .7s ease' }}
                        onClick={() => handleNavigate('Mars')}
                    >
                        Mars
                    </div>

                    <div 
                        className="line three" 
                        style={{ transform: minors ? 'translate(-100%, 100%)' : 'translate(0, 0)', transition: 'all .9s ease' }}
                        onClick={() => handleNavigate('Europa')}
                    >
                        Europa
                    </div>

                    <div 
                        className="line four" 
                        style={{ transform: minors ? 'translate(100%, 100%)' : 'translate(0, 0)', transition: 'all 1.1s ease' }}
                        onClick={() => handleNavigate('Titan')}
                    >
                        Titan
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home_Page;
