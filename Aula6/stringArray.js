console.clear();
let times = ["Palmeiras", "Corinthians", "Santos", "São Paulo"]

console.log(times.indexOf("Remo"))


for (let i = 0; i < times.length; i++) {
    for (let j = 0; j < times.length; j++) {
        if (i !== j) {
            console.log(`${times[i]} x ${times[j]}`);
        }
    }
}
