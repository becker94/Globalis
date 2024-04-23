function foo(s) {
    s.sort((a, b) => a[0] - b[0]);
    const liste = [s[0]];

    for (let i = 0; i < s.length; i++) {

        let first_interval = s[i];
        let last_interval = liste[liste.length - 1];



        if (first_interval[0] <= last_interval[1]) {
            last_interval[1] = Math.max(last_interval[1], first_interval[1]);

        } else {
            liste.push(first_interval);
        }

    }
    return liste;

}

console.log("Sortie 1:")
console.log(foo([

    [0, 3],
    [6, 10]

]));
console.log("Sortie 2:")
console.log(foo([

    [0, 5],
    [3, 10]

]));
'\n';
console.log("Sortie 3:")
console.log(foo([

    [0, 5],
    [2, 4]

]));
'\n';
console.log("Sortie 4:")
console.log(foo([

    [7, 8],
    [3, 6],
    [2, 4]

]));
'\n';
console.log("Sortie 5:")
console.log(foo([

    [3, 6],
    [3, 4],
    [15, 20],
    [16, 17],
    [1, 4],
    [6, 10],
    [3, 6]

]));