module.exports = function reverse (n) {
    if(n < 0){
        n *= -1;
    }
    n += "";
    let result = "";
    for(let i = n.length - 1; i >= 0; i--){
        result += n[i];
    }
    return parseInt(result)
}
