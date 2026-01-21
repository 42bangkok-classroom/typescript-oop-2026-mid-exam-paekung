// Write your code below
const argsp03 = process.argv

if(!argsp03){
    process.exit()
}

const inputp03 = Number(argsp03[2])

for(let i = 1;i<=inputp03; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz")
    } else if (i%3 == 0){
        console.log("Fizz")
    } else if (i%5 == 0){
        console.log("Buzz")
    } else {
        console.log(i)
    }
}