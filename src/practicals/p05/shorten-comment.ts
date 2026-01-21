const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  const stringArr = comment.split(" ")

  const temp = stringArr.forEach((element,index) => {
    if(element.length >= 5 && element.length <= 10){
      stringArr.splice(index,1)
    }
  })

  console.log(temp)

  return '1'

}

shortenComment("Typescript is a Strongly type programming language")