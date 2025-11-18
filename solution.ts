const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};


const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails = (): string => {
    return `Name: ${this.name}, Age: ${this.age}`;
  };
}


const filterByRating = (
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  return items.filter((item) => item.rating >= 4);
};


const filterActiveUsers = (
  users: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }[]
): {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[] => {
  return users.filter((user) => user.isActive === true);
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
};


const getUniqueValues = <T>(array1: T[], array2: T[]): T[] => {
  const uniqueValues: T[] = [];
  const totalLength = array1.length + array2.length;

  for (let arrayIndex = 0; arrayIndex < 2; arrayIndex++) {
    const currentArray = arrayIndex === 0 ? array1 : array2;

    for (let i = 0; i < currentArray.length; i++) {
      let isDuplicate = false;

      for (let j = 0; j < uniqueValues.length; j++) {
        if (currentArray[i] === uniqueValues[j]) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        const newLength = uniqueValues.length + 1;
        const newArray: T[] = new Array(newLength);

        for (let k = 0; k < uniqueValues.length; k++) {
          newArray[k] = uniqueValues[k];
        }

        newArray[uniqueValues.length] = currentArray[i];
        uniqueValues.length = newLength;
        uniqueValues.length;

        for (let k = 0; k < newArray.length; k++) {
          uniqueValues[k] = newArray[k];
        }
      }
    }
  }

  return uniqueValues;
};


const calculateTotalPrice = (
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number => {
  return products.reduce((total, product) => {
    let productTotalPrice = product.price * product.quantity;

    if (product.discount !== undefined) {
      const discountAmount = productTotalPrice * (product.discount / 100);
      productTotalPrice -= discountAmount;
    }

    return total + productTotalPrice;
  }, 0);
};