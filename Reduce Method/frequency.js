let box = [11, 11, 14, 14, 14, 19, 19, 19, 19];

let frequency = box.reduce((acc, e) => {
    acc[e] = (acc[e] || 0) + 1;
    return acc;
}, {});

console.log(frequency);
