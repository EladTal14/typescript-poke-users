import {useState} from "react";

export const useInputMax = (validateValue: (value: string) => boolean) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(e.target.value)
    }
    const inputBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsTouched(true)
    }
    return {
        value: enteredValue, hasError, valueChangeHandler, inputBlurHandler, isValid: valueIsValid
    }
}