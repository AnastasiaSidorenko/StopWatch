import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

function Lapse(props){
    return (
        <div className="Lapse">
            <span># {props.number}</span>
            <Timer interval={props.end_time}/>
            <Timer interval={props.duration}/>
        </div>
    );
}

function LapsesList(props) {
    return (
        <div className="LapsesList">
            {props.lapses.length ?
                <div className="Lapse">
                <span>{props.numberHeader}</span>
                <span>{props.timeHeader}</span>
                <span>{props.durationHeader}</span>
                </div>
                : null
            }
            {props.lapses.map((lapse, index) => (
                <Lapse
                    end_time = {lapse.end_time}
                    duration = {lapse.duration}
                    key = {props.lapses.length - index}
                    number = {props.lapses.length - index}
                />
            ))}
        </div>
    );
}

function StopWatch({interval, isStopped}){
    let secondsStartDegree;
    let minutesStartDegree;
    const [duration, setDuration] = useState(moment.duration(interval));
    useEffect(() => {
        setDuration(moment.duration(interval));
    }, [interval]);
    let seconds = duration.seconds();
    let minutes = duration.minutes();
    let milliseconds = Math.round(duration.milliseconds() / 10);

        useEffect(() => {
        if(isStopped === true) {
            let elem = document.getElementById("style");
            if(elem) {
                elem.remove();
            }
            let stop_style = document.createElement('style');
            stop_style.setAttribute("id", "style");
            milliseconds = Math.round(duration.milliseconds() / 10);
            secondsStartDegree = 360 / 60 * seconds + 0.07 * milliseconds;
            minutesStartDegree = 360 / 60 * minutes + 6 / 60 * seconds;
            stop_style.innerHTML =
                '.clock__hand--minute {\
                     transform: rotate(' + minutesStartDegree + 'deg);\
                }\
                 .clock__hand--second {\
                 transform: rotate(' + secondsStartDegree + 'deg);\
                 }';
            document.getElementsByTagName("head")[0].appendChild(stop_style);
        }
        if(isStopped === false){
                let elem = document.getElementById("style");
                if(elem) {
                    elem.remove();
                }
                let style = document.createElement('style');
                style.setAttribute("id", "style");
                milliseconds = Math.round(duration.milliseconds() / 10);
                secondsStartDegree = 360 / 60 * seconds + 0.07 * milliseconds;
                let minutesStartDegree = 360 / 60 * minutes + 6 / 60 * seconds;
                style.innerHTML =
                '@keyframes clock-hand-rotate--minute {\
                    from {transform: rotate(' + minutesStartDegree + 'deg)}\
                    to {transform: rotate(' + (minutesStartDegree + 360) + 'deg)}\
                }\
                @keyframes clock-hand-rotate--second {\
                    from {transform: rotate(' + secondsStartDegree + 'deg)}\
                    to {transform: rotate(' + (secondsStartDegree + 360) + 'deg)}\
                }\
                .clock__hand--minute {\
                    animation: clock-hand-rotate--minute 3600s linear infinite;\
                }\
                .clock__hand--second {\
                    animation: clock-hand-rotate--second 60s linear infinite;\
                }' ;
                document.getElementsByTagName("head")[0].appendChild(style);
        }
        return () => {
            let elem = document.getElementById("style");
            if(elem) {
                elem.remove();
            }
        };
    }, [isStopped]);

    return (
        <div>
            <time className="clock">
                <span className="clock__stroke clock__stroke--small clock__stroke--1"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--2"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--3"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--4"></span>
                <span className="clock__stroke clock__stroke--5"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--6"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--7"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--8"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--9"></span>
                <span className="clock__stroke clock__stroke--10"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--11"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--12"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--13"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--14"></span>
                <span className="clock__stroke clock__stroke--15"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--16"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--17"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--18"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--19"></span>
                <span className="clock__stroke clock__stroke--20"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--21"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--22"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--23"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--24"></span>
                <span className="clock__stroke clock__stroke--25"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--26"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--27"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--28"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--29"></span>
                <span className="clock__stroke clock__stroke--30"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--31"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--32"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--33"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--34"></span>
                <span className="clock__stroke clock__stroke--35"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--36"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--37"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--38"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--39"></span>
                <span className="clock__stroke clock__stroke--40"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--41"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--42"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--43"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--44"></span>
                <span className="clock__stroke clock__stroke--45"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--46"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--47"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--48"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--49"></span>
                <span className="clock__stroke clock__stroke--50"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--51"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--52"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--53"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--54"></span>
                <span className="clock__stroke clock__stroke--55"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--56"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--57"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--58"></span>
                <span className="clock__stroke clock__stroke--small clock__stroke--59"></span>
                <span className="clock__stroke clock__stroke--60"></span>

                <span className="clock__hand clock__hand--minute"></span>
                <span className="clock__hand clock__hand--second"></span>
            </time>
        </div>
    )
}

function Timer({interval}) {
    const [duration, setDuration] = useState(moment.duration(interval));
    useEffect(() => setDuration(moment.duration(interval)), [interval]);
    //const milliseconds = Math.floor(duration.milliseconds() /10);
    const pad = (n) => n < 10 ? "0" + n : n ;
    //const milliseconds = pad()
    const milliseconds = Math.round(duration.milliseconds() / 10);
    return (
        <div>{pad(duration.minutes())}:{pad(duration.seconds())}.{pad(milliseconds)}</div>
    )
}

function App() {
    const [lapses, setLapses] = useState([]);
    const [now, setNow] = useState(0);
    const [start, setStart] = useState(0);
    const [isStopped, setStop] = useState(0);

    let interval = +now-(+start);
    const [myInterval, setMyInterval] = useState(null);

    const[StartB,setStartB] = useState("START");
    const[LapB,setLapB] = useState("LAP");
    const[ResetB,setResetB] = useState("RESET");
    const[StopB,setStopB] = useState("STOP");
    const[ResumeB,setResumeB] = useState("RESUME");
    const[LANG,setLANG] = useState("eng");
    const[TableDurationHeader, setDurationHeader] = useState("Duration");
    const[TableNumberHeader, setNumberHeader] = useState("Number");
    const[TableTimeHeader, setTimeHeader] = useState("Time");

    useEffect(() => {
        if (isStopped) {
            clearInterval(myInterval);
        }
        else if(start > 0){
            const id = setInterval(() => {
                setNow(new Date().getTime());
            }, 73);
            setMyInterval(id);
        }
        return () => clearInterval(myInterval);
    }, [isStopped]);

    let addLapse = () => {
        const timestamp = new Date().getTime();
        let duration;
        lapses.length > 0 ? duration = timestamp - (lapses[0]["end_time"] + start)
        : duration = timestamp - start;
        setLapses([{end_time:timestamp-start,duration:duration},...lapses]);
        setStop(false);
    };

    let handleStart = () => {
        setStart(new Date().getTime());
        setNow(new Date().getTime());
        setStop(false);
    };

    let handleResume = () => {
      setStart(new Date().getTime()-interval);
      setNow(new Date().getTime());
      setStop(false);
    };

    let handleReset = () => {
        setNow(0);
        setStart(0);
        setStop(0);
        setLapses([]);
    };

    let handleStop = () => {
        setStop(true);
    };

    let ENG = () => {
        if(LANG!=="eng") {
            setStartB("START");
            setLapB("LAP");
            setResetB("RESET");
            setStopB("STOP");
            setResumeB("RESUME");
            setDurationHeader("Duration");
            setNumberHeader("Number");
            setTimeHeader("Time");
            setLANG("eng");
        }
    };
    let RU = () => {
        if(LANG!=="ru") {
            setStartB("СТАРТ");
            setLapB("КРУГ");
            setResetB("СБРОС");
            setStopB("СТОП");
            setResumeB("ПРОДОЛЖИТЬ");
            setDurationHeader("Длительность");
            setNumberHeader("Номер");
            setTimeHeader("Общее время");
            setLANG("ru");
        }
    };

    return (
        <div className="App">
            <div className="lang_switcher">
            <button onClick={()=>RU()}>РУС</button><button onClick={()=>ENG()}>ENG</button>
            </div>
                <div className="Timer">
                    <Timer interval={interval} />
                </div>
                <div className="lapseTimer">
                    {lapses.length > 0 ? <Timer interval={interval-lapses[0]["end_time"]} /> : <Timer interval={interval} />}
                </div>
                <div className="ClockContainer">
                    <StopWatch isStopped={isStopped} interval={interval}/>
                </div>
            { (start > 0 && !isStopped)?
                (<div className="Buttons twoButtons">
                    <button onClick={()=>addLapse()} className="lapButton">{LapB}</button>
                    <button onClick={()=>handleStop()} className="stopButton">{StopB}</button>
                </div>)
                :
                (isStopped) ?
                    (<div className="Buttons twoButtons">
                        <button onClick={()=>handleResume()} className="startButton">{ResumeB}</button>
                        <button onClick={()=>handleReset()} className="resetButton">{ResetB}</button>
                    </div>)
                        :
                    (<div className="Buttons twoButtons">
                        <button onClick={()=>handleStart()} className="startButton">{StartB}</button>
                        <button onClick={()=>handleReset()} className="resetButton">{ResetB}</button>
                    </div> )
            }
            <LapsesList lapses={lapses} numberHeader={TableNumberHeader} timeHeader={TableTimeHeader} durationHeader={TableDurationHeader}/>
        </div>
       );
}

ReactDOM.render(<App />, document.getElementById("root"));