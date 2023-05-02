// Write your solution here!
const cats = [`Milo`, `Otis`, `Garfield`];

function destructivelyAppendCat() {
    cats.push(`Ralph`);
    return cats;
};

function destructivelyPrependCat() {
    cats.unshift(`Bob`);
    return cats;
};

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
};

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
};

function appendCat() {
    const appCat = [...cats,`Broom`];
    return appCat;
};

function prependCat() {
    const preCat = [`Arnold`,...cats];
    return preCat;
};

function removeLastCat() {
    const lastCat = cats.slice(0,cats.length-1);
    return lastCat;
};

function removeFirstCat() {
    const firstCat = cats.slice(1);
    return firstCat;    
};