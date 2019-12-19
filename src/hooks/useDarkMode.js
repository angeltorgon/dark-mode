import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (bool) => {
    const [setToStorage, deleteFromStorage, getFromStorage] = useLocalStorage();
    const [darkMode, setDarkMode] = useState(JSON.parse(getFromStorage("darkMode")))
    const body = document.querySelector("body")


    const toggle = (bool) => {
        body.classList.toggle("dark-mode")
        setDarkMode(bool)
        setToStorage("darkMode", bool)
    }

    const setToLocal = () => {
        const dm = JSON.parse(getFromStorage("darkMode"))
        if (dm == false) {
            body.classList.add("dark-mode")
            toggle(false)
        } else {
            body.classList.remove("dark-mode")
            toggle(true)
        }
    }

    return [darkMode, toggle, setToLocal]
}