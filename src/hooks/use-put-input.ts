import {useEffect, useState} from "react";
import {IComputer} from "../interfaces/computer";

export const usePutInput = (computerToEdit: IComputer, param: string) => {
    const [inputToPut, setInputToPut] = useState<number | string>(param === 'title' ? '' : 0);

    useEffect(() => {
        if (param === 'title') {
            setInputToPut(computerToEdit[param]);
        } else if (param === 'price') {
            setInputToPut(computerToEdit[param]);
        }
        // console.log(computerToEdit[param as keyof typeof computerToEdit]);
        // }
    }, [computerToEdit, param]);

    return {inputToPut, setInputToPut};
}