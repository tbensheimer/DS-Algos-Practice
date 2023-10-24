// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

let fruitsIntoBaskets = (fruits) => {
    let maxLength = 0;
    let start = 0;
    let hash = {};

    for(let end = 0; end < fruits.length; end++) {
      let rightC = fruits[end];
      if(!(rightC in hash)) hash[rightC] = 0;
      hash[rightC]++;

      while(Object.keys(hash).length > 2) {
        let leftC = fruits[start];
        hash[leftC]--;
        if(hash[leftC] == 0) delete hash[leftC];
        start++;
      }

    maxLength = Math.max(maxLength, end - start + 1);


    }


    return maxLength;
}