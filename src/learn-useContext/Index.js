import React, { useState, useContext } from "react";
import "./Index.css";
const themes = {
    light: {
        id: 1,
        foreground: "#000000",
        background: "#eeeeee",

    },
    dark: {
        id: 2,
        foreground: "#ffffff",
        background: "#222222",
    },
}

export const anggota = {
    hilmi: {
        id: 1,
        nama: "Hilmi Ahmad",
        nim: "21120119130048",   
    },

    lukman: {
        id: 2,
        nama: "Lukman Ernandi",
        nim: "21120119130049",
    },

    peggy: {
        id: 3,
        nama: "Peggy Raihannisa Zakiyyahannas",
        nim: "21120119130111",
    },

    haickal: {
        id: 4,
        nama: "Haickal Fattih Pratama",
        nim: "21120119140131",
    }
}


const ThemeContext = React.createContext(themes.light);
export default function Index() {
    const [theme, setTheme] = useState(themes.dark);
    const changeTheme = () => {
        if (theme.id === themes.light.id) {
            setTheme(themes.dark);
        } else {
            setTheme(themes.light);
        }
    };
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div className="Main" style={{
                background:
                    theme.background, color: theme.foreground
            }}>
                <p className="Text">Theme by useContext</p>
                <p>KELOMPOK04</p>
                <ThemedButton />
            </div>
        </ThemeContext.Provider>
    );
}
function ThemedButton() {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
        <button
            className="Button"
            style={{
                background: theme.background, color:
                    theme.foreground
            }}
            onClick={changeTheme}>
            i am styled by theme context!
        </button>
    );
}