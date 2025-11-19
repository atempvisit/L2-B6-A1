type TValue = string | number | boolean;

const formatValue = (value: TValue): TValue => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
};



const getLength = (input: string | any[]): number => {
  if (typeof input === "string" || Array.isArray(input)) {
    return input.length;
  }
};



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}



interface IFilterRating {
  title: string;
  rating: number;
}

const filterByRating = (input: IFilterRating[]): IFilterRating[] => {
  return input.filter((item) => item.rating >= 4);
};


interface IActiveUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[];

const filterActiveUsers = (input: IActiveUser[]): IActiveUser[] => {
  return input.filter((user) => (typeof user.isActive === "boolean") && user.isActive );

};



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};




type TUniqueValues = string[] | number[];

const getUniqueValues = (
  arrOne: TUniqueValues,
  arrTwo: TUniqueValues
): TUniqueValues => {

  const uniqueArr = [];
  let count = 0;
  
  for (const item of arrOne) {
    let isUnique = true;
    for (const item2 of arrTwo) {
      if (item === item2) {
        isUnique = false;
        break;
      }
    }
    if (isUnique){ 
      uniqueArr[count++] = item; 
    }
  }

    for (const item2 of arrTwo ) {
      let isUnique = true;
      for (const item of uniqueArr) {
        if (item2 === item) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        uniqueArr[count++] = item2;
      }
    }

  return uniqueArr;
};


interface IProduct {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}[];

const calculateTotalPrice = (arr: IProduct[]): number => {
  if (arr.length === 0) {
    return 0;
  }

  let totalPrice = 0;

  arr.map(product =>  totalPrice += product.discount ? product.price * product.quantity * (1 - product.discount / 100) : product.price * product.quantity
  );

  return totalPrice;
};

