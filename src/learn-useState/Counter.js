import React, { useState, useContext } from "react";
import logo from "../logo.svg";
import "./Counter.css";
import { anggota } from "../learn-useContext/Index.js";



const AnggotaContext = React.createContext(anggota.hilmi);

export default function Counter() {
    const [inputValue, setInputValue] = useState('')
    const [showImage, setShowImage] = useState(true);
    const [count, setCount] = useState(0);
    const [teks, setTeks] = useState('');
    //buat useContext
    const [angkel, setAnggota] = useState(anggota.hilmi);


    const countUp = () => {
        setCount(count + 1);
        probAnggota();
    };
    const countDown = () => {
        setCount(count - 1);
        probAnggota();

    };
    const hideImage = () => {
        setShowImage(!showImage);
    };

    const inputHandler = (event) => {
        setInputValue(event.target.value)
    }

    const probAnggota = () => {
        if (count % 4 === 3) {
            setAnggota(anggota.haickal);

        }

        if (count % 4 === 2) {
            setAnggota(anggota.peggy);

        }

        if (count % 4 === 1) {
            setAnggota(anggota.lukman);

        }

        if (count % 4 === 0) {
            setAnggota(anggota.hilmi);

        }

    }

    return (
        <div className="Main">
            <p className="Text">Counter with useState</p>
            <input type='text' onChange={inputHandler}/>
            <p>{ inputValue }</p>
            <p>KELOMPOK 04</p>
            

            <div className="ViewImage">
                <div className="ViewImage1">
                    <img className="App-logo"
                        style={{
                            display: showImage === true ? "flex" :
                                "none"
                        }}
                        src={logo}
                        alt="logo" />
                </div>
                <button className="Button" onClick={hideImage}>
                    {showImage !== true ? "show" : "hide"}
                </button>
            </div>
            <p className="Text">{count}</p>
            <p>Data dari useContext</p>

            <AnggotaContext.Provider value={{ angkel, probAnggota }}>
                <div className="predict">
                    <AnggotaCard />
                </div>
            </AnggotaContext.Provider>


            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={countUp}>
                        Up
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={countDown}>
                        Down
                    </button>
                </div>
            </div>



        </div>
    );
}



function AnggotaCard() {
    const { angkel, probAnggota } = useContext(AnggotaContext);
    return (
        <div >
            <h2 style={{ textAlign: "center", }}> Nama:{angkel.nama} </h2>
            <h2 style={{ textAlign: "center", }}> NIM: {angkel.nim}</h2>
        </div>

    )

} 