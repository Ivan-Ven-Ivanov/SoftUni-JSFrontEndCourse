function solve(number) {
    
    const numberText = number.toString()

    let areSame = true;

    let sum = Number(numberText[0]);

    for (let i = 0; i < numberText.length - 1; i++) {
        if (numberText[i] !== numberText[i+1]) {
            areSame = false;
        }

        sum += Number(numberText[i+1]);
    }

    console.log(areSame);
    console.log(sum);
}

solve(1234);