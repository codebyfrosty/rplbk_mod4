import React, { useState, useEffect } from "react";
import "./Index.css";
export default function Index() {
    const [count, setCount] = useState(0);
    // const [data, setData] = useState([]);
    const [message, setMessage]=useState('Ayo Tebak ada berapa');
    //dijalankan 1 kali
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);
    //dijalankan terus setiap ada perubahan count
    // useEffect(() => {
    //     if (count > 0) {
    //         alert('component will update & count ${count}');
    //     }
    // }, [count]);
    //dijalankan terus menerus
    // useEffect(() => {
    //     console.log('spam console kuy');
    // });
    const countUp = () => {
        setCount(count + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        if (count==12){
            setMessage("Yak Bener")
        }
    
        
        else if (count<0){
            setMessage("Yakali masa fakultasnya mines")
        }
        
        else if (count>12){
            setMessage("Kelebihan gan")
        }

        else if (count>0){
            setMessage("Kurang gan")
        }
        
    
      });


    return (
        <div className="Main">
            <p className="Text"> Learn useEffect</p>
            <p>KELOMPOK04</p>
            {/* <ul>
                {data.slice(0, 10).map((value) => (
                    <li key={value.id}>{value.title}</li>
                ))}
            </ul> */}
            <h1>Coba Tebak ada berapa fakultas di Undip</h1>
            <p className="Text">{count}</p>
            <div className="ViewButton">

                <div className="ViewButton2">
                    <button className="Button"
                        onClick={countDown}>
                        Kurang
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button"
                        onClick={countUp}>
                        Tambah
                    </button>
                    
                </div>
                
            </div>
            <h1>{message}</h1>
        </div>
    );
}
