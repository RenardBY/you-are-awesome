

const createEnumerableProperty = () => {};

const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
        enumerable: false,
        value: 'value'
    });
    return property;
};

const createProtoMagicObject = () => {
    let magicObject = () => {};
    magicObject.prototype = magicObject.__proto__;
    return magicObject;
};

let counter = 0;
const incrementor = () => {
    counter++
    Function.prototype.valueOf = () => {
        return counter;
    }
    return incrementor;
};


const asyncIncrementor = () => {
    if(asyncIncrementor.counter == undefined) 
        asyncIncrementor.counter = 0;
    asyncIncrementor.counter++;
    return asyncIncrementor.counter;
};

const createIncrementer = () => {
    let incrementer = {
        value: 0,
        next: function() {
            this.value++;        
            return this;
        }
    };

    incrementer[Symbol.iterator] = function*() {
        return this.next();
    }

    return incrementer;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (parametr) => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(parametr);
        }, 1000)
    })
};
const getDeepPropertiesCount = (parametr) => {
    let count = Object.getOwnPropertyNames(parametr).length;
    Object.getOwnPropertyNames(parametr).forEach(property => {
        if(Object.getOwnPropertyNames(parametr[property]).length > 0)
        count += getDeepPropertiesCount(parametr[property]);
    });
    return count;
};

const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};

const sortByProto = (array) => {
    return array.sort( (a,b) => a.__proto__ - b.__proto__);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;