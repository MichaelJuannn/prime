import { use, useState } from "react";

export default function PrimeNumber() {
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

    function primeClick() {

    }

    return (
        <div>
            <button onClick={() => nextPrime(prime)}>{prime}</button>
        </div>
    )
}