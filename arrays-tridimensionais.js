
let month =  []

let fisrtWeeks = []
let lastWeeks = []

let avgTempWeek1 = [33, 15, 18, 44, 76, 90, 150]
let avgTempWeek2 = [41, 80, 90, 55, 77, 33, 28]

let avgTempWeek3 = [12, 74, 20, 35, 60, 48, 89, 91]
let avgTempWeek4 = [24, 26, 58, 86, 45, 90, 81, 71]

fisrtWeeks = [avgTempWeek1, avgTempWeek2 ]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month =  [fisrtWeeks, lastWeeks]


console.log(month[1][0][2])

for(var x = 0; x < month.length; x++){
    for( var y = 0; y < month[x].length; y++){
        for( var z = 0; z < month[x][y].length; z++){
            console.log(month[x][y][z])
        }
    }
}