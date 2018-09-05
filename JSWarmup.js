function isOldEnoughToVote(age) {
    return(age >= 18);
}

function getProperty(obj, key) {
    return obj[key];
}

function addProperty(obj, key) {
    obj[key] = true;
}

function removeProperty(obj, key) {
    delete obj[key]
}

function isEven(num) {
    return num % 2 == 0;
}

function isOdd(num) {
    return num % 2 == 1;
}

function addToFront(arr, element) {
    arr.splice(0,0,element);
    return arr;
}

function addToBack(arr, element) {
    arr.push(element);
    return arr;
}

function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function getAllWords(str) {
    if(str.length == 0) {
        return [];
    }
    return str.split(" ");
}

function extend(obj1, obj2) {
    for (var key in obj2) {
        if (!obj1[key]) {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

function removeStringValues(obj) {
    for (var key in obj) {
        if(typeof obj[key] == "string") {
            delete obj[key];
        }
    }
}

function getIndexOf(char, str) {
    for(var i = 0; i < str.length; i++){
        if (str[i] == char){
            return i;
        }
    }
    return -1;
}

function keep(array, keeper) {
    var outputArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] == keeper) {
            outputArray.push(keeper);
        }
    }
    return outputArray;
}

function getLargestElementAtProperty(obj, key) {
    var arr = obj[key];
    if(!Array.isArray(arr)) {
        return undefined;
    }
    var largest = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

function calculateBillTotal(preTaxAndTipAmount) {
    var tipMultiplier = 0.15;
    var taxMultiplier = 0.095;

    var correctUnRounded = preTaxAndTipAmount * tipMultiplier + preTaxAndTipAmount * taxMultiplier + preTaxAndTipAmount

    return correctUnRounded;
}

function sumDigits(num) {
    if((num < 10 && num > 0) || (num > -10 && num < 0)) {
        console.log(num)
        return num;
    } else {
        var currentDigit = num % 10;
        var parameter = Math.floor(num/10)
        if (num < 0) {
            currentDigit *= -1
            parameter = Math.ceil(num/10);
        }
        console.log(currentDigit)
        return (currentDigit) + sumDigits(parameter);
    }
}

function listAllValues(obj) {
    var values = [];
    for (var key in obj) {
        values.push(obj[key]);
    }
    return values;
}

function detectOutlierValue(string){
    var array = string.split(" ");
    var evenCount = 0;
    var oddCount = 0;
    for(var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            if(oddCount > 1) {
                return i + 1
            }
            evenCount++
        } else {
            if (evenCount > 1) {
                return i + 1
            }
            oddCount++;
        }

    }
    return 1;
}

function search(array, value) {
    var leftIndex = 0;
    var rightIndex = array.length - 1;
    var midPoint;
    while(array[leftIndex] != value) {
        midPoint = Math.floor((leftIndex + rightIndex)/2);
        if(leftIndex == rightIndex) {
            return null;
        }
        if(array[midPoint] == value) {
            return midPoint;
        } else if(array[midPoint] < value) {
            leftIndex = midPoint;
        } else {
            rightIndex = midPoint;
        }
    }
    return leftIndex;
}

