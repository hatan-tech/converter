const EUR_TO_JPY = 160;
function convertCurrency(amount, from, to) {
    let result=0
    if (from === "EUR" && to ==="JPY") {
        result = amount* EUR_TO_JPY;
    } else if (from ==="JPY" && to ==="EUR") {
        result = amount/ EUR_TO_JPY;
    } else if (from ===to) {
        result = amount ;
    }
     else {
        console.log("invalid");
        return;
    }

    console.log(`${amount} ${from} =${result.toFixed(2)} ${to}`);
    return result;

}convertCurrency(1,"EUR", "JPY") ;
convertCurrency(1600,"JPY", "EUR");