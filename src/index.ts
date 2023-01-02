function greet(name: string, birthYear: number) : string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

function isOld(age: number) {
    if(age >= 35) {
        return true
    }
    return false
  }

  function countOdd(age: number) {
    
  }
export {
  greet, 
  isOld,
  countOdd,
};
