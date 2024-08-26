import React,{useState} from "react";
import Header from "../Components/Header";

function Crew(){

    const [type,settype] = useState('COMMANDER');
    const [name,setname] = useState('DOUGLAS HURLEY');
    const [pic,setpic] = useState('character douglas');

    return(
        <div className="crew">
            <Header/>
            <div className="container">
                <div className="title">
                    <span>02</span>
                    <span>MEET YOUR CREW</span>
                </div>
                <div className="sub-container">
                    <main className="data">
                        <div className="info">
                            <span className="txt1">{type}</span>
                            <span className="txt2">{name}</span>
                            <span className="txt3">
                                Douglas Ge ald Hurley is an American engineer, 
                                former Marine Corps pilot and fo mer NASA astronaut. 
                                He leunched into space for the third time as 
                                commander of Crew Dragon Domo-2.
                            </span>
                        </div>
                        <div className="selector">
                            <div onClick={() =>{
                                 setname('DOUGLAS HURLEY');
                                 settype('COMMANDER');
                                 setpic('character douglas');
                            }}
                            style={{ backgroundColor: name === 'DOUGLAS HURLEY' ? 'white' : 'grey' }}
                            > 
                            </div>

                            <div onClick={() =>{
                                 setname('MARK SHUTTLEWORTH');
                                 settype('MISSION SPEACIALIST');
                                 setpic('character mark');
                            }}
                            style={{ backgroundColor: name === 'MARK SHUTTLEWORTH' ? 'white' : 'grey' }}
                            >

                            </div>

                            <div onClick={() =>{
                                 setname('VICTOR GLOVER');
                                 settype('PILOT');
                                 setpic('character victor');
                            }}
                            style={{ backgroundColor: name === 'VICTOR GLOVER' ? 'white' : 'grey' }}
                            >
                            </div>

                            <div onClick={() =>{
                                 setname('ANOUSHEH ANSARI');
                                 settype('FLIGHT ENGINNER');
                                 setpic('character ansari');
                            }}
                            style={{ backgroundColor: name === 'ANOUSHEH ANSARI' ? 'white' : 'grey' }}
                            >

                            </div>
                        </div>
                    </main>
                    <main className={pic}></main>
                </div>
            </div>
        </div>
    );
}
export default Crew;