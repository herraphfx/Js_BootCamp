//Exercise 2 Part 1 XP 

let watchedSeries = ["black mirror", "money heist", "the big bang theory"]

watchedSeriesLength = watchedSeries.length ;

myWatchedSeries = "I watched " + watchedSeriesLength + " series: " + watchedSeries;

console.log(myWatchedSeries);

//Part 2
watchedSeries.splice(2, 1, "Friends");
console.log(watchedSeries);

watchedSeries.push("24 Hours");
console.log(watchedSeries);

watchedSeries.unshift("Legends");
console.log(watchedSeries);

delete watchedSeries[1];
console.log(watchedSeries);