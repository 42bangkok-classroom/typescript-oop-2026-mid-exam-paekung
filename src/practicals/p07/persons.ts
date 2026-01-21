export interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];


export function sortPersons(persons: Person[]): Person[] {
  const fileredData = persons.filter((person) => person.firstName!='' && person.firstName!=undefined && person.age!=undefined && person.age>=1 && person.age<100)

  const SortedAge = fileredData.sort((a,b) => {
    if(a.age&&b.age){
      if (a.age < b.age) {
        return -1;
      }
      if (a.age > b.age) {
        return 1;
      }
      return 0;
    }
    return 0;
  })

  const SortedFname = SortedAge.sort((a,b) => {
    if(a.firstName && b.firstName){
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    }
    return 0
  })

  const SortedLname = SortedFname.sort((a,b) => {
    if(a.lastName && b.lastName){
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    }
    return 0
  })

  return SortedLname
}

// console.log(sortPersons(persons))