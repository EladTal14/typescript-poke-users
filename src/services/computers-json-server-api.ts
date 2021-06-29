import {IComputer} from "../interfaces/computer";


let API_REQUESTS: string = '';
if (process.env.NODE_ENV === 'development') {
    API_REQUESTS  = process.env.REACT_APP_API_COMPUTERS_JSON_SERVER as string
} else {
    API_REQUESTS = process.env.REACT_APP_API_COMPUTERS_INTERNET as string
}

export const getAllComputers = async (): Promise<IComputer[]> => {
    const res = await fetch(`${API_REQUESTS}/computers`)
    return await res.json()
}

export const editComputer = async (computer: IComputer) => {
    const res = await fetch(`${API_REQUESTS}/computers/${computer.id}`, {
        method: `PATCH`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(computer)
    })
    return res.json()
}

export const addComputer = async (computer: IComputer) => {
    const res = await fetch(`${API_REQUESTS}/computers`, {
        method: `POST`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(computer)
    })
    return res.json()
}

export const removeComputer = async (id: number) => {
    try {
        let res = await fetch(
            `${API_REQUESTS}/computers/${id}`
            , {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
        if (!res.ok) {
            const message = `An error has occured: ${res.status}`;
            throw new Error(message);
        }
        return res.ok;
    } catch (err) {
        console.log(err);
        return false;
    }
};