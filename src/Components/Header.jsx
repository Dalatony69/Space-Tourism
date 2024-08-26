import React, { useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Header() {

    const [anchor, setAnchor] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="header">
            <main>
                <div className="logo"></div>
                <div className="line"></div>

                {/* Anchor Button */}
                <div className="anchor" 
                    style={{ display: anchor ? 'none' : 'block' }} 
                    onClick={() => setAnchor(!anchor)}>
                </div>

                {/* Anchor List */}
                <div className="anchor-list" 
                    style={{ width: anchor ? '60%' : '0%' }}>
                    <div className="x-holder">
                        <div className="x" onClick={() => setAnchor(!anchor)}></div>
                    </div>
                    <ul>
                        <li className="list-home" onClick={() => navigate('/')}>
                            <span>00</span>
                            <span>Home</span>
                        </li>

                        <li className="list-destination" onClick={() => navigate('/Destination')}>
                            <span>01</span>
                            <span>Destination</span>
                        </li>

                        <li className="list-crew" onClick={() => navigate('/Crew')}>
                            <span>02</span>
                            <span>Crew</span>
                        </li>

                        <li className="list-technology" onClick={() => navigate('/Technology')}>
                            <span>03</span>
                            <span>Technology</span>
                        </li>
                    </ul>
                </div>

                {/* Regular List */}
                <div className="list">
                    <ul>
                        <li className="list-home" onClick={() => navigate('/')}>
                            <span>00</span>
                            <span>Home</span>
                        </li>

                        <li className="list-destination" onClick={() => navigate('/Destination')}>
                            <span>01</span>
                            <span>Destination</span>
                        </li>

                        <li className="list-crew" onClick={() => navigate('/Crew')}>
                            <span>02</span>
                            <span>Crew</span>
                        </li>

                        <li className="list-technology" onClick={() => navigate('/Technology')}>
                            <span>03</span>
                            <span>Technology</span>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default Header;
