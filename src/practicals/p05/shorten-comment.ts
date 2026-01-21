const comment = "TypeScript is a strongly typed programming language"

export function shortenComment(comment: string): string {
  const stringArr = comment.split(" ")

  const temp = stringArr.filter((element) => {
    return element.length>=5&&element.length<=10
  })

  return temp.join(" ")

}

// console.log(shortenComment(comment))