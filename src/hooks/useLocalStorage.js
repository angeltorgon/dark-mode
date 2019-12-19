export const useLocalStorage = () => {
    const setToStorage = (key, value) => {
        localStorage.setItem(key, value)
    }

    const deleteFromStorage = (key) => {
        localStorage.removeItem(key)
    }

    return [setToStorage, deleteFromStorage]
}