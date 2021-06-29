export const getItemFromStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string)
}

export const SetItemToStorage = (key: string, value: any)  => {
    localStorage.setItem(key, JSON.stringify(value))
}

