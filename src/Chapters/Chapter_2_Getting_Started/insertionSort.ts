const randomNumberArray: number[] = [];

for(let i = 0; i < 100000; i++) {
    randomNumberArray.push(Math.ceil(Math.random() * 100000));
}

const time: number = Date.now();

for(let i = 1; i < randomNumberArray.length; i++) {
    const key = randomNumberArray[i];
    let j = i - 1;
    while(j > -1 && randomNumberArray[j] > key) {
        randomNumberArray[j+1] = randomNumberArray[j];
        j = j - 1;
    }
    randomNumberArray[j + 1] = key;
}

const diff: number = Date.now() - time;

console.log("DIF: ", diff / 1000)
