// Javascript program to answer queries for 
// count of primes in given range.

let MAX = 10000;

// prefix[i] is going to store count 
// of primes till i (including i).
let prefix = [];

function buildPrefix() {

    // Create a boolean array "prime[0..n]". A
    // value in prime[i] will finally be false
    // if i is Not a prime, else true.
    let prime = [];
    for (let p = 1; p <= MAX + 1; p++) {
        prime[p] = true;
    }

    for (let p = 2; p * p <= MAX; p++) {

        // If prime[p] is not changed, then
        // it is a prime
        if (prime[p] == true) {

            // Update all multiples of p
            for (let i = p * 2; i <= MAX; i += p)
                prime[i] = false;
        }
    }

    // Build prefix array
    prefix[0] = prefix[1] = 0;
    for (let p = 2; p <= MAX; p++) {
        prefix[p] = prefix[p - 1];
        if (prime[p])
            prefix[p]++;
    }
}

// Returns count of primes in range 
// from L to R (both inclusive).
function query(L, R) {
    return prefix[R] - prefix[L - 1];
}

// driver program 

buildPrefix();
let L = 5, R = 10;
console.log(query(L, R));

L = 1; R = 10;
console.log(query(L, R));
