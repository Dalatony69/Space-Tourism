import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { useLocation } from 'react-router-dom';

function Destination_page() {
    const location = useLocation();
    const { selectedDestination } = location.state || {};
    
    const [planet, setPlanet] = useState('planet moon');
    const [title, setTitle] = useState('MOON');
    const [info, setInfo] = useState('See our closest celestial body up close, a destination full of craters and mystery.');
    const [time, setTime] = useState('3 DAYS');
    const [distance, setDistance] = useState('384,400 KILOMETERS');

    const updatePlanetData = (destination) => {
        switch (destination) {
            case 'Moon':
                setTitle('MOON');
                setPlanet('planet moon');
                setInfo('See our closest celestial body up close, a destination full of craters and mystery.');
                setTime('3 DAYS');
                setDistance('384,400 KILOMETERS');
                break;
            case 'Mars':
                setTitle('MARS');
                setPlanet('planet mars');
                setInfo('Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.');
                setTime('9 MONTHS');
                setDistance('225 MILLION KILOMETERS');
                break;
            case 'Europa':
                setTitle('EUROPA');
                setPlanet('planet europa');
                setInfo('A frozen moon of Jupiter, potentially hiding a vast ocean beneath its icy surface.');
                setTime('3 YEARS');
                setDistance('628 MILLION KILOMETERS');
                break;
            case 'Titan':
                setTitle('TITAN');
                setPlanet('planet titan');
                setInfo('Saturn’s largest moon, rich in hydrocarbons and lakes of liquid methane.');
                setTime('7 YEARS');
                setDistance('1.2 BILLION KILOMETERS');
                break;
            default:
                setTitle('MARS');
                setPlanet('planet mars');
                setInfo('Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.');
                setTime('9 MONTHS');
                setDistance('225 MILLION KILOMETERS');
                break;
        }
    };

    useEffect(() => {
        if (selectedDestination) {
            updatePlanetData(selectedDestination);
        }
    }, [selectedDestination]);

    return (
        <div className="destination">
            <Header />
            <div className="pick">
                <div>01</div>
                <div>PICK YOUR DESTINATION</div>
            </div>
            <div className="container">
                <main className={planet}>
                    {/* You could add more imagery or planet-specific content here */}
                </main>
                <main className="data">
                    <div className="list">
                        <ul>
                            <li onClick={() => updatePlanetData('Moon')}>Moon</li>
                            <li onClick={() => updatePlanetData('Mars')}>Mars</li>
                            <li onClick={() => updatePlanetData('Europa')}>Europa</li>
                            <li onClick={() => updatePlanetData('Titan')}>Titan</li>
                        </ul>
                    </div>

                    <div className="planet-info">
                        <span className="txt1">{title}</span>
                        <span className="txt2">{info}</span>
                    </div>

                    <div className="facts">
                        <div className="distance">
                            <span>AVG. DISTANCE</span>
                            <span>{distance}</span>
                        </div>
                        <div className="time">
                            <span>EST. TRAVEL TIME</span>
                            <span>{time}</span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Destination_page;
