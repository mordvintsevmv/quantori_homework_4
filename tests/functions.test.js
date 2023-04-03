const {
    getOddValues,
    getSmallestValue,
    getBiggestValue,
    getShorterStrings,
    getComputedStrings,
    mergeObjects,
    getSmallestValue2,
    getOddValues2,
    calculateTotal,
    getUniqueValues,
    getErrorMessage,
    get2SmallestValues,
    getFullName,
    multiplyTo,
    getCharacterNames,
    getSmallestRow,
    getSmallestColumn,
    get2BiggestValues,
    getNumberOfVowels,
    getCapitalizedStrings,
    getCorrectString,
    getFlattenedArray,
    getNotUniqueValues
} = require('../HW4_v2.js');

/*
Exercise 1
*/
describe('getOddValues', () => {
    test('should return an array with odd values', () => {
        const numbers = [1, 2, 3, 4, 5];
        const expected = [1, 3, 5];
        const result = getOddValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if there are no odd values', () => {
        const numbers = [2, 4, 6, 8, 10];
        const expected = [];
        const result = getOddValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if the input array is empty', () => {
        const numbers = [];
        const expected = [];
        const result = getOddValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = getOddValues(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([1, 2, 3, 4, 5]);
    });
});


/*
Exercise 2
*/
describe('getSmallestValue', () => {
    test('should return the smallest value of an array', () => {
        const numbers = [4, 2, 10, 27];
        const expected = 2;
        const result = getSmallestValue(numbers);
        expect(result).toEqual(expected);
    });

    test('should return undefined if the input array is empty', () => {
        const numbers = [];
        const expected = undefined;
        const result = getSmallestValue(numbers);
        expect(result).toEqual(expected);
    });

    test('should return the same value if the input array has only one element', () => {
        const numbers = [5];
        const expected = 5;
        const result = getSmallestValue(numbers);
        expect(result).toEqual(expected);
    });

    test('should return the smallest value even if there are negative numbers in the array', () => {
        const numbers = [4, -2, 10, -27];
        const expected = -27;
        const result = getSmallestValue(numbers);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [4, 2, 10, 27];
        const result = getSmallestValue(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([4, 2, 10, 27]);
    });
});


/*
Exercise 3
*/
describe('getBiggestValue', () => {
    test('should return the biggest value of an array', () => {
        const numbers = [5, 22, 9, 43];
        const expected = 43;
        const result = getBiggestValue(numbers);
        expect(result).toEqual(expected);
    });

    test('should return undefined if the input array is empty', () => {
        const numbers = [];
        const expected = undefined;
        const result = getBiggestValue(numbers);
        expect(result).toEqual(expected);
    });

    test('should return the same value if the input array has only one element', () => {
        const numbers = [5];
        const expected = 5;
        const result = getBiggestValue(numbers);
        expect(result).toEqual(expected);
    });

    test('should return the biggest value even if there are negative numbers in the array', () => {
        const numbers = [5, -22, 9, -403];
        const expected = 9;
        const result = getBiggestValue(numbers);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [5, 22, 9, 43];
        const result = getBiggestValue(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([5, 22, 9, 43]);
    });
});


/*
Exercise 4
*/
describe('getShorterStrings', () => {
    test('should return an array with strings shorter than 20 characters', () => {
        const strings = ['I am a short string', 'I seem to be short too', 'And I am a long string'];
        const expected = ['I am a short string'];
        const result = getShorterStrings(strings, 20);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if all strings are longer than 20 characters', () => {
        const strings = ['And I am a long string', 'I am a longer string too'];
        const expected = [];
        const result = getShorterStrings(strings, 20);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if string length equals 20 (not shorter then 20)', () => {
        const strings = ['20 characters 20 cha'];
        const expected = [];
        const result = getShorterStrings(strings, 20);
        expect(result).toEqual(expected);
    });

    test('should return an array with all strings if none are longer than the specified number of characters', () => {
        const strings = ['I am a short string', 'I am another short string'];
        const expected = ['I am a short string', 'I am another short string'];
        const result = getShorterStrings(strings, 30);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const strings = ['I am a short string', 'I seem to be short too', 'And I am a long string'];
        const result = getShorterStrings(strings);
        expect(result).not.toBe(strings);
        expect(strings).toEqual(['I am a short string', 'I seem to be short too', 'And I am a long string']);
    });
});


/*
Exercise 5
*/
describe('getComputedStrings', () => {
    test('should return an array of strings with "likes" concatenated to "name"', () => {
        const fish = [{name: 'shark', likes: 'ocean'}, {name: 'turtle', likes: 'pond'}, {
            name: 'otter', likes: 'fish biscuits'
        }];
        const expected = ['shark likes ocean', 'turtle likes pond', 'otter likes fish biscuits'];
        const result = getComputedStrings(fish);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if the input array is empty', () => {
        const fish = [];
        const expected = [];
        const result = getComputedStrings(fish);
        expect(result).toEqual(expected);
    });

    test('should return an array with one string if the input array has only one object', () => {
        const fish = [{name: 'shark', likes: 'ocean'}];
        const expected = ['shark likes ocean'];
        const result = getComputedStrings(fish);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const fish = [{name: 'shark', likes: 'ocean'}, {name: 'turtle', likes: 'pond'}, {
            name: 'otter', likes: 'fish biscuits'
        }];
        const result = getComputedStrings(fish);
        expect(result).not.toBe(fish);
        expect(fish).toEqual([{name: 'shark', likes: 'ocean'}, {name: 'turtle', likes: 'pond'}, {
            name: 'otter', likes: 'fish biscuits'
        }]);
    });
});


/*
Exercise 6
*/
describe('mergeObjects', () => {
    test('should return an object with common properties of two input objects', () => {
        const objects = [{name: 'Alice'}, {age: 11}]
        const expected = {name: 'Alice', age: 11};
        const result = mergeObjects(objects);
        expect(result).toEqual(expected);
    });

    test('should overwrite properties with the same keys', () => {
        const objects = [{name: 'Alice', age: 10}, {age: 11}];
        const expected = {name: 'Alice', age: 11};
        const result = mergeObjects(objects);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const objects = [{name: 'Alice'}, {age: 11}];
        const result = mergeObjects(objects);
        expect(result).not.toBe(objects);
        expect(objects).toEqual([{name: 'Alice'}, {age: 11}]);
    });
});


/*
Exercise 7
*/
describe('getSmallestValue2', () => {
    test('should return the smallest value of an array', () => {
        const numbers = [5, 200, -5, 41];
        const expected = -5;
        const result = getSmallestValue2(numbers);
        expect(result).toEqual(expected);
    });

    test('should return undefined if the input array is empty', () => {
        const numbers = [];
        const expected = undefined;
        const result = getSmallestValue2(numbers);
        expect(result).toEqual(expected);
    });

    test('should return the only value of an array with one element', () => {
        const numbers = [42];
        const expected = 42;
        const result = getSmallestValue2(numbers);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [5, 22, 9, 43];
        const result = getSmallestValue2(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([5, 22, 9, 43]);
    });
});


/*
Exercise 8
*/
describe('getOddValues2', () => {
    test('should return an array of odd numbers', () => {
        const numbers = [77, 2, 30, 51];
        const expected = [77, 51];
        const result = getOddValues2(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if there are no odd numbers', () => {
        const numbers = [2, 4, 6, 8];
        const expected = [];
        const result = getOddValues2(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if the input array is empty', () => {
        const numbers = [];
        const expected = [];
        const result = getOddValues2(numbers);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [5, 22, 9, 43];
        const result = getOddValues2(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([5, 22, 9, 43]);
    });
});

/*
Exercise 9
*/
describe('calculateTotal', () => {
    test('should return the total price of the basket', () => {
        const products = [{price: 10, count: 2}, {price: 100, count: 1}, {price: 2, count: 5}, {price: 15, count: 6}];
        const expected = 220;
        const result = calculateTotal(products);
        expect(result).toEqual(expected);
    });

    test('should return 0 if the basket is empty', () => {
        const products = [];
        const expected = 0;
        const result = calculateTotal(products);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const products = [{price: 10, count: 2}, {price: 100, count: 1}, {price: 2, count: 5}, {price: 15, count: 6}];
        const result = calculateTotal(products);
        expect(result).not.toBe(products);
        expect(products).toEqual([{price: 10, count: 2}, {price: 100, count: 1}, {price: 2, count: 5}, {
            price: 15, count: 6
        }]);
    });
});


/*
Exercise 10
*/
describe('getUniqueValues', () => {
    test('should return an array with unique values 1', () => {
        const numbers = [1, 2, 2, 4, 5, 5];
        const expected = [1, 2, 4, 5];
        const result = getUniqueValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an array with unique values 2', () => {
        const numbers = [1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 5, 5, 7, 9, 9];
        const expected = [1, 2, 4, 5, 7, 9];
        const result = getUniqueValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an array with unique values 3', () => {
        const numbers = [1, 2, 3, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4];
        const result = getUniqueValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if input is empty', () => {
        const numbers = [];
        const expected = [];
        const result = getUniqueValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an array with one element if input contains only one element', () => {
        const numbers = [1];
        const expected = [1];
        const result = getUniqueValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [5, 22, 9, 43];
        const result = getUniqueValues(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([5, 22, 9, 43]);
    });
});


/*
Exercise 11
*/
describe('getErrorMessage', () => {
    test('should return "Server Error" for input 500', () => {
        const code = 500;
        const expected = 'Server Error';
        const result = getErrorMessage(code);
        expect(result).toEqual(expected);
    });

    test('should return "Authorization failed" for input 401', () => {
        const code = 401;
        const expected = 'Authorization failed';
        const result = getErrorMessage(code);
        expect(result).toEqual(expected);
    });

    test('should return "Server Error" for input 402', () => {
        const code = 402;
        const expected = 'Server Error';
        const result = getErrorMessage(code);
        expect(result).toEqual(expected);
    });

    test('should return "Access denied" for input 403', () => {
        const code = 403;
        const expected = 'Access denied';
        const result = getErrorMessage(code);
        expect(result).toEqual(expected);
    });

    test('should return "Not found" for input 404', () => {
        const code = 404;
        const expected = 'Not found';
        const result = getErrorMessage(code);
        expect(result).toEqual(expected);
    });

    test('should return "Unknown error code" for unknown codes', () => {
        const code = 999;
        const expected = 'Unknown error code';
        const result = getErrorMessage(code);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const code = 999;
        const result = getErrorMessage(code);
        expect(result).not.toBe(code);
        expect(code).toEqual(999);
    });

});


/*
Exercise 12
*/
describe('get2SmallestValues', () => {
    test('should return the 2 smallest values', () => {
        const numbers = [4, 3, 2, 1];
        const expected = [1, 2];
        const result = get2SmallestValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return the 2 smallest values when there are duplicates', () => {
        const numbers = [4, 3, 2, 1, 1, 2];
        const expected = [1, 1];
        const result = get2SmallestValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return the same value twice if there is only one unique value', () => {
        const numbers = [1, 1, 1, 1];
        const expected = [1, 1];
        const result = get2SmallestValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if the input is empty', () => {
        const numbers = [];
        const expected = [];
        const result = get2SmallestValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [5, 22, 9, 43];
        const result = get2SmallestValues(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([5, 22, 9, 43]);
    });
});


/*
Exercise 13
*/
describe('getFullName', () => {
    test('should return a full name with patronymic', () => {
        const person = {firstName: 'Peter', secondName: 'Vasiliev', patronymic: 'Ivanovich'};
        const expected = 'Name: Peter Ivanovich Vasiliev';
        const result = getFullName(person);
        expect(result).toEqual(expected);
    });

    test('should return a full name without patronymic', () => {
        const person = {firstName: 'John', secondName: 'Doe', patronymic: null};
        const expected = 'Name: John Doe';
        const result = getFullName(person);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const person = {firstName: 'Peter', secondName: 'Vasiliev', patronymic: 'Ivanovich'};
        const result = getFullName(person);
        expect(result).not.toBe(person);
        expect(person).toEqual({firstName: 'Peter', secondName: 'Vasiliev', patronymic: 'Ivanovich'});
    });
});


/*
Exercise 14
*/
describe('multiplyTo', () => {
    test('should multiply all numbers by the multiplier', () => {
        const numbers = [1, 2, 3, 4];
        const multiplier = 5;
        const expected = [5, 10, 15, 20];
        const result = multiplyTo(numbers, multiplier);
        expect(result).toEqual(expected);
    });

    test('should return an empty array if numbers is empty', () => {
        const numbers = [];
        const multiplier = 5;
        const expected = [];
        const result = multiplyTo(numbers, multiplier);
        expect(result).toEqual(expected);
    });

    test('should return zero array if multiplier is 0', () => {
        const numbers = [1, 2, 3, 4];
        const multiplier = 0;
        const expected = [0, 0, 0, 0];
        const result = multiplyTo(numbers, multiplier);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [5, 22, 9, 43];
        const multiplier = 2;
        const result = multiplyTo(numbers, multiplier);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([5, 22, 9, 43]);
    });
});


/*
Exercise 15
*/
describe('getCharacterNames', () => {
    test('should return names of heroes from the given franchise', () => {
        const characters = [{name: 'Batman', franchise: 'DC'}, {name: 'Ironman', franchise: 'Marvel'}, {
            name: 'Thor', franchise: 'Marvel'
        }, {name: 'Superman', franchise: 'DC'}];
        const franchise = 'Marvel';
        const expected = 'Ironman, Thor';
        const result = getCharacterNames(characters, franchise);
        expect(result).toEqual(expected);
    });

    test('should return an empty string if no heroes belong to the given franchise', () => {
        const characters = [{name: 'Batman', franchise: 'DC'}, {name: 'Superman', franchise: 'DC'}];
        const franchise = 'Marvel';
        const expected = '';
        const result = getCharacterNames(characters, franchise);
        expect(result).toEqual(expected);
    });

    test('should return an empty string if the input array is empty', () => {
        const characters = [];
        const franchise = 'Marvel';
        const expected = '';
        const result = getCharacterNames(characters, franchise);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const characters = [{name: 'Batman', franchise: 'DC'}, {name: 'Superman', franchise: 'DC'}];
        const franchise = 'Marvel';
        const result = getCharacterNames(characters, franchise);
        expect(result).not.toBe(characters);
        expect(characters).toEqual([{name: 'Batman', franchise: 'DC'}, {name: 'Superman', franchise: 'DC'}]);
    });
});


/*
Exercise 16
*/
describe('getSmallestRow', () => {
    test('returns an array with the smallest values of each row 1', () => {
        const numbers = [[10, 1, 300, 4], [20, 2, 300, 400], [30, 3, 300, 4], [40, 4, 300, 4]];
        const expected = [1, 2, 3, 4];
        const result = getSmallestRow(numbers);
        expect(result).toEqual(expected);
    });

    test('returns an array with the smallest values of each row 2', () => {
        const numbers = [[10, 1, 300, 4]];
        const expected = [1];
        const result = getSmallestRow(numbers);
        expect(result).toEqual(expected);
    });

    test('returns an empty array if the input is empty', () => {
        const numbers = [];
        const expected = [];
        const result = getSmallestRow(numbers);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [[10, 1, 300, 4], [20, 2, 300, 400], [30, 3, 300, 4], [40, 4, 300, 4]];
        const result = getSmallestRow(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([[10, 1, 300, 4], [20, 2, 300, 400], [30, 3, 300, 4], [40, 4, 300, 4]]);
    });
});


/*
Exercise 17
*/
describe('getSmallestColumn', () => {
    test('returns an array of the smallest column values of a two-dimensional array 1', () => {
        const numbers = [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 30, 4], [1, 2, 3, 40]];
        const expected = [1, 2, 3, 4];
        const result = getSmallestColumn(numbers);
        expect(result).toEqual(expected);
    });

    test('returns an array of the smallest column values of a two-dimensional array 2', () => {
        const numbers = [[1, 8, 12, 15], [2, 7, 9, 14], [3, 6, 10, 13], [4, 5, 11, 16]];
        const expected = [1, 5, 9, 13];
        const result = getSmallestColumn(numbers);
        expect(result).toEqual(expected);
    });

    test('returns an empty array if input is an empty array', () => {
        const numbers = [];
        const expected = [];
        const result = getSmallestColumn(numbers);
        expect(result).toEqual(expected);
    });

    test('returns an array with first array if input is a one-dimensional array', () => {
        const numbers = [[1, 2, 3, 4]];
        const expected = [1, 2, 3, 4];
        const result = getSmallestColumn(numbers);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const input = [[1, 8, 12, 15], [2, 7, 9, 14], [3, 6, 10, 13], [4, 5, 11, 16]];
        const result = getSmallestColumn(input);
        expect(result).not.toBe(input);
        expect(input).toEqual([[1, 8, 12, 15], [2, 7, 9, 14], [3, 6, 10, 13], [4, 5, 11, 16]]);
    });
});


/*
Exercise 18
*/
describe('get2BiggestValues', () => {
    test('should return an array with the two biggest values 1', () => {
        const numbers = [4, 3, 2, 1];
        const expected = [4, 3];
        const result = get2BiggestValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an array with the two biggest values 2', () => {
        const numbers = [40, 300, -12, 250, 500, 7];
        const expected = [500, 300];
        const result = get2BiggestValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an array with the two biggest values when there are duplicates', () => {
        const numbers = [4, 4, 2, 1];
        const expected = [4, 4];
        const result = get2BiggestValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return an empty array when the input array is empty', () => {
        const numbers = [];
        const expected = [];
        const result = get2BiggestValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return only 1 element if array contain 1 element', () => {
        const numbers = [5];
        const expected = [5];
        const result = get2BiggestValues(numbers);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [5, 4, 9, 1];
        const result = get2BiggestValues(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([5, 4, 9, 1]);
    });
});


/*
Exercise 19
*/
describe("getNumberOfVowels", () => {
    test("should return 0 when input is empty string", () => {
        const string = "";
        const expected = 0;
        const result = getNumberOfVowels(string);
        expect(result).toBe(expected);
    });

    test("should return 0 when input has no vowels", () => {
        const string = "qwrty";
        const expected = 0;
        const result = getNumberOfVowels(string);
        expect(result).toBe(expected);
    });

    test("should return 1 when input has one vowel", () => {
        const string = "step";
        const expected = 1;
        const result = getNumberOfVowels(string);
        expect(result).toBe(expected);
    });

    test("should return correct number of vowels in string", () => {
        const string = "Return the number (count) of vowels in the given string.";
        const expected = 15;
        const result = getNumberOfVowels(string);
        expect(result).toBe(expected);
    });

    test("should ignore case when counting vowels", () => {
        const string = "AbCdEfGhIjKlMnOpQrStUvWxYz";
        const expected = 5;
        const result = getNumberOfVowels(string);
        expect(result).toBe(expected);
    });

    test('should return a new string and not modify the original string', () => {
        const string = "AbCdEfGhIjKlMnOpQrStUvWxYz";
        const result = getNumberOfVowels(string);
        expect(result).not.toBe(string);
        expect(string).toEqual("AbCdEfGhIjKlMnOpQrStUvWxYz");
    });
});


/*
Exercise 20
*/
describe('getCapitalizedStrings', () => {
    test('should return an array with two elements', () => {
        const string = 'abcdef';
        const expected = 2;
        const result = getCapitalizedStrings(string);
        expect(result).toHaveLength(expected);
    });

    test('should capitalize even letters in first element', () => {
        const string = 'abcdef';
        const expected = 'AbCdEf';
        const result = getCapitalizedStrings(string);
        expect(result[0]).toBe(expected);
    });

    test('should capitalize odd letters in second element', () => {
        const string = 'abcdef';
        const expected = 'aBcDeF';
        const result = getCapitalizedStrings(string);
        expect(result[1]).toBe(expected);
    });

    test('should return empty array for empty string', () => {
        const string = '';
        const result = getCapitalizedStrings(string);
        expect(result).toHaveLength(2);
        expect(result[0]).toBe('');
        expect(result[1]).toBe('');
    });

    test('should return a new string and not modify the original string', () => {
        const string = 'abcdef';
        const result = getCapitalizedStrings(string);
        expect(result).not.toBe(string);
        expect(string).toEqual('abcdef');
    });
});


/*
Exercise 21
*/
describe("getCorrectString", () => {
    test("should remove one repeated letter", () => {
        const string = 'eedaaad';
        const expected = 'eedaad';
        const result = getCorrectString(string);
        expect(result).toEqual(expected);
    });

    test("should remove all repeated letters 1", () => {
        const string = 'xxxtxxx';
        const expected = 'xxtxx';
        const result = getCorrectString(string);
        expect(result).toEqual(expected);
    });

    test("should remove all repeated letters 2", () => {
        const string = 'uuuuxaaaaxuuu';
        const expected = 'uuxaaxuu';
        const result = getCorrectString(string);
        expect(result).toEqual(expected);
    });

    test("should remove all repeated letters 3", () => {
        const string = 'uauauauauauauauauau';
        const expected = 'uauauauauauauauauau';
        const result = getCorrectString(string);
        expect(result).toEqual(expected);
    });

    test("should remove all repeated letters 4", () => {
        const string = 'uuauuauuauuaauuaauuaauauauuu';
        const expected = 'uuauuauuauuaauuaauuaauauauu';
        const result = getCorrectString(string);
        expect(result).toEqual(expected);
    });

    test("should not remove any letters", () => {
        const string = 'abcdefg';
        const expected = 'abcdefg';
        const result = getCorrectString(string);
        expect(result).toEqual(expected);
    });

    test("should return an empty string", () => {
        const string = '';
        const expected = '';
        const result = getCorrectString(string);
        expect(result).toEqual(expected);
    });

    test('should return a new string and not modify the original string', () => {
        const string = "uuuuxaaaaxuuu";
        const result = getCorrectString(string);
        expect(result).not.toBe(string);
        expect(string).toEqual("uuuuxaaaaxuuu");
    });
});


/*
Exercise 22
*/
describe('getFlattenedArray', () => {
    test('should return an array with all elements without nesting', () => {
        const number_1 = [1, 2, [3, 4], 5, [[6, 7], 8], 9];
        const expected_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result_1 = getFlattenedArray(number_1);

        const number_2 = [1, [2, [3, [4]]], 5, [[[[[6]]]]], 7];
        const expected_2 = [1, 2, 3, 4, 5, 6, 7];
        const result_2 = getFlattenedArray(number_2);

        const number_3 = [1, [2, 3], [4, [5, 6]], 7, [8, 9, [10, [11, 12]]]];
        const expected_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const result_3 = getFlattenedArray(number_3);

        expect(result_1).toEqual(expected_1);
        expect(result_2).toEqual(expected_2);
        expect(result_3).toEqual(expected_3);
    });

    test('should return an empty array if input is empty', () => {
        const number = [];
        const expected = [];
        const result = getFlattenedArray(number);
        expect(result).toEqual(expected);
    });

    test('should return the same array if it is already flattened', () => {
        const number = [1, 2, 3];
        const expected = [1, 2, 3];
        const result = getFlattenedArray(number);
        expect(result).toEqual(expected);
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [1, 2, [3, 4], 5, [[6, 7], 8], 9];
        const result = getFlattenedArray(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([1, 2, [3, 4], 5, [[6, 7], 8], 9]);
    });
});


/*
Exercise 23
*/
describe('getNotUniqueValues', () => {
    test('returns an array of not unique values 1', () => {
        const numbers = [1, 2, 2, 4, 5, 5];
        const expected = [2, 5];
        const result = getNotUniqueValues(numbers);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('returns an array of not unique values 2', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3];
        const expected = [3, 4, 5, 6];
        const result = getNotUniqueValues(numbers);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('returns an array of not unique values 3', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 4, 5, 6, 5, 4, 3];
        const expected = [3, 4, 5, 6];
        const result = getNotUniqueValues(numbers);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('returns an empty array when all values are unique', () => {
        const numbers = [1, 2, 3, 4, 5];
        const expected = [];
        const result = getNotUniqueValues(numbers);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('handles empty input arrays', () => {
        const numbers = [];
        const expected = [];
        const result = getNotUniqueValues(numbers);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('should return a new array and not modify the original array', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3];
        const result = getNotUniqueValues(numbers);
        expect(result).not.toBe(numbers);
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3]);
    });
});
