const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  const mergeArr = arr1.concat(arr2);
  console.log(mergeArr)
  mergeArr.forEach((element,index) => {
    if(element == arr1.find((i2) =>  = element))
  })
  
  return arr1
}

console.log(getUniqueNumbers(arr1,arr2))