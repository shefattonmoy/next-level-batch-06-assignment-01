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
  const uniqueValue: T[] = [];
  const combinedArray = [...array1, ...array2];

  for (let i = 0; i < combinedArray.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueValue.length; j++) {
      if (combinedArray[i] === uniqueValue[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueValue[uniqueValue.length] = combinedArray[i];
    }
  }

  return uniqueValue;
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