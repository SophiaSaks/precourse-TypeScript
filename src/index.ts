interface IPerson {
  name: string,
  birthYear: number,
};

type Address = {
    street: string,
    streetNo: number, 
    city: string
};

type Person = {
    name: string, 
    birthYear: number,
    address: Address
};

const greet = (name: string, birthYear: number) => {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

const isOld = (age: number) => {
    if(age >= 35) {
        return true
    }
    return false
  }

const countOdd = (array:number[]) => {
    return array.filter(num => num % 2 !==0).length
  }

  const sumEven = (array:number[]) => {
    return array
    .filter(num => num % 2 === 0)
    .reduce((sum, curr) => sum + curr, 0);
  }

  const getPersonStreetNo = (p : Person) => {
    return p.address.streetNo;
  }

  const getPersonNameString = (p:IPerson) => {
    return `${p.name}, ${p.birthYear.toString()}`;
  }

  const printThis = (p : Person | undefined | null) => {
    if(!p) {return 'no person supplied';};
    return p.name;
  }

export {
  greet, 
  isOld,
  countOdd,
  sumEven,
  Address,
  Person,
  getPersonStreetNo,
  IPerson,
  getPersonNameString,
  printThis,
};
