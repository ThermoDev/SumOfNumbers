// Global list 
var listOfNums = [1, 2, 4, 12, 32];


function sumFor() {
    count = 0
    for (var i = 0; i < listOfNums.length; i++) {
        count += listOfNums[i];
    }

    return count;
}


function sumWhile() {
    i = 0;
    count = 0;

    while (i < listOfNums.length) {
        count += listOfNums[i];
        i++;
    }

    return count;
}


function sumRecursion() {
    var copyList = [...listOfNums];
    var count = sumRecursionHelper(copyList);
    return count;
}

function sumRecursionHelper(myList) {
    if (myList.length == 0) {
        return 0;
    }
    return myList[0] + sumRecursionHelper(myList.slice(1))
}


function sumTheSimpleWay() {
    return _.reduce(listOfNums, function (memo, num) {
        return memo + num;
    });
}