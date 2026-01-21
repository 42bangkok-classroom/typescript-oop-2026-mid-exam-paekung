// Write your code below
const args = process.argv

if(args[2]){
    const score = Number(args[2])

    if(score<0){
        console.log("Invalid input")
    }else if (score<=49){
        console.log("Grade is F")
    }else if (score<=59){
        console.log("Grade is D")
    }else if (score<=69){
        console.log("Grade is C")
    }else if (score<=79){
        console.log("Grade is B")
    }else if (score<=100){
        console.log("Grade is A")
    }else{
        console.log("Invalid input")
    }
} else {
    console.log("Invalid input")
}