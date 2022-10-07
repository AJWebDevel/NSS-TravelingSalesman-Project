const weeklyMiles = [12, 24, 36]
let totalMiles = 0

for (const miles of weeklyMiles) {
    totalMiles += miles
}

const averageMiles = totalMiles / weeklyMiles.length

console.log(`I average ${averageMiles} miles each week.
I have driven a total of ${totalMiles} miles.`)