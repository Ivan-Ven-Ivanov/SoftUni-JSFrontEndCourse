function solve(num1, num2) {

    let numbersText = '';
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        numbersText += i + ' ';
        sum += i;
    }

    console.log(numbersText.trimEnd());
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);