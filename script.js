/*
 * Complete the 'waiter' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY number
 *  2. INTEGER q
 */

const generatePrimes = (n) => {
  let primes = [2];
  //generate the amount of primes equal to number of iterations (q) in each test
  for(let num = 3; primes.length < n; num += 2) {
    if(primes.every(prime => num % prime)) {
      primes.push(num);
    }
  }
  return primes;
}

const waiter = (number, q) => {
  //spread plates stack into A, so that it is possible to just remove qualifying Bs from it directly
    let answers = [];
    let A = [...number];
    let B = [];
    const primes = generatePrimes(q);
    // console.log(primes);
    
    for(let i = 0; i < primes.length; i++) {
      for(let a = A.length - 1; a >= 0; a--) {
        //if num (A[a]) is divisable by current prime, remove it from A and push to B
        if(!(A[a] % primes[i])) {
          B.push(...A.splice(a, 1))
        }
      }
      console.log("A", A);
      console.log("B", B);
      //need to reverse A stack to be stacked top-to-bottom
      A.reverse();
      // remove all plates from B, reverse order to be top-to-bottom, and push to answers
      answers.push(...B.splice(0, B.length).reverse());
      console.log("answers", answers)
    }
    answers.push(...A.reverse());
    console.log(answers);
    return answers;
}
