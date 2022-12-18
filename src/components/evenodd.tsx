import { useState } from "react";


export default function OddEven() {
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
        <div>
            <div>
                <div>{odd}</div>
                <button onClick={() => oddClick("-")}>
                    Prev
                </button>
                <button onClick={() => oddClick("+")}>
                    Next
                </button>
            </div>
            <div>
                <div>{even}</div>
                <button onClick={() => evenClick("-")}>
                    Prev
                </button>
                <button onClick={() => evenClick("+")}>
                    Next
                </button>
            </div>
        </div>
    )
}