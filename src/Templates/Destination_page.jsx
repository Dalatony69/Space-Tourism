import React, { useState } from "react";
import Header from "../Components/Header";

function Destination_page() {
    const [planet, setPlanet] = useState('planet mars');
    const [title, setTitle] = useState('MARS');
    const info = useState('Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.');
    const [time, setTime] = useState('9 MONTHS');
    const [distance, setDistance] = useState('225 KILOMETERS');

    return (
        <div className="destination">
            <Header />
            <div className="pick">
                <div>01</div>
                <div>PICK YOUR DESTINATION</div>
            </div>
            <div className="container">
                <main 
                    className={planet} 
                >
                </main>
                <main className="data">
                    <div className="list">
                        <ul>
                            <li onClick={() => {
                                setTitle('MOON');
                                setTime('3 DAYS');
                                setDistance('384,400 KILOMETERS');
                                setPlanet('planet moon');
                            }}>Moon</li>
                            <li onClick={() => {
                                setTitle('MARS');
                                setTime('9 MONTHS');
                                setDistance('225 MILLION KILOMETERS');
                                setPlanet('planet mars');
                            }}>Mars</li>
                            <li onClick={() => {
                                setTitle('EUROPA');
                                setTime('3 YEARS');
                                setDistance('628 MILLION KILOMETERS');
                                setPlanet('planet europa');
                            }}>Europa</li>
                            <li onClick={() => {
                                setTitle('TITAN');
                                setTime('7 YEARS');
                                setDistance('1.2 BILLION KILOMETERS');
                                setPlanet('planet titan');
                            }}>Titan</li>
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
