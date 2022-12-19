
import { useState } from "react";

type Input = {
    number: number
}

export default function CheckPrime() {
    const [prime, setPrime] = useState("PRIME")


    function isPrime(number: number) {
        if (number <= 1)
            return false
        if (number <= 3)
            return true
        if (number % 2 == 0 || number % 3 == 0)
            return false
        for (let index = 5; index * index <= number; index += 6) {
            if (number % index == 0 || number % (index + 2) == 0)
                return false;
        }
        return true
    }
    function handleChange(e: any) {
        const primeInput: number = e.currentTarget.value
        if (!isPrime(primeInput))
            return setPrime("NOT PRIME")
        return setPrime("PRIME")
    }

    function handleClick() {
        alert("Send me your number NOW 😠😠😠")
    }

    return (
        <div className="inline-block p-2 my-2">
            <div className="text-center">
                <div className="font-bold text-lg">Prime Checker</div>
                <div><input type="number" onChange={handleChange} className="input" /></div>
                <button className="btn btn-primary mt-2" onClick={handleClick}>{prime}</button>
            </div>
        </div>
    )
}