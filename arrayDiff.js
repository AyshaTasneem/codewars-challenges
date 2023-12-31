// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//My solution

function arrayDiff(a, b) {
    for (let n of b) {
        a = a.filter(e => e != n)
    }
    return a
}

// thought process: go through each element of b and filter in only array a elements 
// that don't equal the element of b


//Best Practice solution

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}

//checks to see if array b has the element from array a, if not (!) it's filtered in