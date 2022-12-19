import { useState } from "react";


export function OddEven() {
    const [odd, setOdd] = useState(1)
    const [even, setEven] = useState(0)

    function oddClick(operator: String) {
        if (operator == "+") {
            setOdd(odd + 2)
        }
        else {
            setOdd(odd - 2)
        }
    }
    function evenClick(operator: String) {
        if (operator == "+") {
            setEven(even + 2)
        }
        else {
            setEven(even - 2)
        }
    }

    return (
        <div className="p-2 inline-block mx-2">
            <div className="inline-block mx-3 p-2">
                <div>ODD NUMBER</div>
                <div>{odd}</div>
                <button onClick={() => oddClick("-")} className='btn-primary rounded px-2 mr-2'>
                    -
                </button>
                <button onClick={() => oddClick("+")} className='btn-primary rounded px-2'>
                    +
                </button>
            </div>
            <div className="inline-block mx-3 p-2">
                <div>EVEN NUMBER</div>
                <div>{even}</div>
                <button onClick={() => evenClick("-")} className='btn-primary rounded px-2 mr-2'>
                    -
                </button>
                <button onClick={() => evenClick("+")} className='btn-primary rounded px-2'>
                    +
                </button>
            </div>
        </div>
    )
}

export function PrimeNumber() {
    const [prime, setPrime] = useState(2)

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

    function nextPrime(number: number) {
        if (number <= 1)
            setPrime(2)

        let prime = number
        let found = false
        while (!found) {
            prime++
            if (isPrime(prime)) {
                found = true
            }
        }
        setPrime(prime)
    }

    return (
        <div className="p-2 inline-block mx-2">
            <div className="text-lg text-center font-bold">{prime}</div>
            <button onClick={() => nextPrime(prime)} className='btn-primary rounded p-2 mt-4'>Next Prime Number</button>
        </div>
    )
}