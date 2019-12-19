export const useLocalStorage = () => {
    const setToStorage = (key, value) => {
        window.localStorage.setItem(key, value);
    };

    const deleteFromStorage = (key) => {
        window.localStorage.removeItem(key);
    };
    
    const getFromStorage = (key) => {
        return window.localStorage.getItem(key);
    };

    return [setToStorage, deleteFromStorage, getFromStorage]
}