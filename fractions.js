function properFractions(d){
  let count = 0;
  for (let i = 1; i < d; i++) {
    let test = gcd(i, d);
    if (test == 1) {
      count++;
    }
  }
  return count;
}

function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}
