// Global list 
var listOfNums = Array.from({length: 500}, () => Math.floor(Math.random() * 100));


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

// Called by sumRecursion()
function sumRecursionHelper(myList) {
    if (myList == undefined || myList.length == 0 ) {
        return 0;
    }
    return myList[0] + sumRecursionHelper(myList.slice(1))
}


function sumTheSimpleWay() {
    return _.reduce(listOfNums, function (memo, num) {
        return memo + num;
    });
}
window.onload = function(){
    var t0Before = performance.now()
    var result = sumFor();
    var t0After = performance.now();
    document.getElementById("sumFor").innerHTML = "<b>Sum For Loop: </b>" + (t0After - t0Before);

    var t1Before = performance.now()
    var result = sumWhile();
    var t1After = performance.now()
    document.getElementById("sumWhile").innerHTML = "<b>Sum While Loop: </b>" +  (t1After - t1Before);

    var t2Before = performance.now()
    var result = sumRecursion();
    var t2After = performance.now()
    document.getElementById("sumRecursion").innerHTML = "<b>Sum Recursion: </b>" + (t2After - t2Before);

    var t3Before = performance.now()
    var result = sumTheSimpleWay();
    var t3After = performance.now()
    document.getElementById("sumSimple").innerHTML = "<b>Sum Underscore JS: </b>" + (t3After - t3Before);
  };



