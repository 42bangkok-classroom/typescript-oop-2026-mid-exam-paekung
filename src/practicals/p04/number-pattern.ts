// Write your code below
const argsp04 = process.argv

if(!argsp04){
    process.exit()
}

const inputp04 = Number(argsp04[2])

//     1
//    21
//   321
//  4321
// 54321


if(inputp04 <= 0){
    process.exit()
}

let pattern = ""

for(let i = 1; i<= inputp04; i++){ // แถว
    for(let j = inputp04-i; j>0; j--){
        pattern += "x"
    }
    // for(let k = 1; k<=i; k++){
    //     pattern += k
    // }
    for (let num = 1; num <= inputp04; num++) {
        pattern += num
    }

    pattern += "\n"
}

console.log(pattern)