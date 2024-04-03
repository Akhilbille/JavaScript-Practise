function sumPrices(discount, ...prices){
    let sumOfPrices = prices.reduce((a,c) => a+c);
    let total = sumOfPrices-(sumOfPrices*0.2)
    // let total = sumOfPrices * (1-discount);
    return total;
}

console.log(sumPrices(0.2,1,2,3,5,6));