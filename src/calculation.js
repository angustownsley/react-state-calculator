const operators= {
    "+": (a,b) => {return a+b},
    "-": (a,b) => {return a-b},
    "*": (a,b) => {return a*b},
    "/": (a,b) => {return a/b}
}

function calculate(num1, num2, operator) {
    const num1Conversion = Number(num1)
    const num2Conversion = Number(num2)

    return operators[operator](num1Conversion, num2Conversion)
}

export default calculate