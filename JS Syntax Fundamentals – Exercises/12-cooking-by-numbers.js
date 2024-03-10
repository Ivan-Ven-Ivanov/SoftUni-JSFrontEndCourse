function solve(number, op1, op2, op3, op4, op5) {
    
    let oprationsLetters = op1[0] + op2[0] + op3[0] + op4[0] + op5[0];
    let sum = Number(number);

    for (let i = 0; i < oprationsLetters.length; i++) {
        
        switch (oprationsLetters[i]) {
            case 'c':
                sum /= 2;
                break;
            case 'd':
                sum = Math.sqrt(sum);
                break;
            case 's':
                sum += 1;
                break;
            case 'b':
                sum *= 3;
                break;
            case 'f':
                sum *= 0.8;
                break;
        }

        console.log(sum);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');