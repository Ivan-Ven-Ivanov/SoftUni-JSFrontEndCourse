function solve (groupCount, groupType, day) {
        
    let pricePerPerson;
    let totalPrice;

    if (groupType === 'Students') {
        if (day === 'Friday') {
            pricePerPerson = 8.45;
        } else if (day === 'Saturday') {
            pricePerPerson = 9.80;
        } else if (day === 'Sunday') {
            pricePerPerson = 10.46;
        }

        totalPrice = pricePerPerson * groupCount;

        if (groupCount >= 30) {
            totalPrice *= 0.85;
        }
    } else if (groupType === 'Business') {
        if (day === 'Friday') {
            pricePerPerson = 10.90;
        } else if (day === 'Saturday') {
            pricePerPerson = 15.60;
        } else if (day === 'Sunday') {
            pricePerPerson = 16;
        }

        totalPrice = pricePerPerson * groupCount;

        if (groupCount >= 100) {
            totalPrice -= 10 * pricePerPerson;
        }
    } else if (groupType === 'Regular') {
        if (day === 'Friday') {
            pricePerPerson = 15;
        } else if (day === 'Saturday') {
            pricePerPerson = 20;
        } else if (day === 'Sunday') {
            pricePerPerson = 22.50;
        }

        totalPrice = pricePerPerson * groupCount;

        if (groupCount >= 10 && groupCount <= 20) {
            totalPrice *= 0.95;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve (40,
    "Regular",
    "Saturday"
    );