function printDigitValue(n) {
    let digit = n.replace(/[^\d]/g, "");
    let newArr = digit.split("");

    console.log(digit);

    for (let i = 0; i < newArr.length; i++) {
        let multiply = Math.pow(10, newArr.length - i);
        console.log(newArr[i] * multiply);
    }
}

printDigitValue("9.86-A5.321");
