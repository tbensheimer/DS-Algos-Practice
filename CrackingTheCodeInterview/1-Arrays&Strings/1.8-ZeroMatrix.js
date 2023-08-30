let zeroMatrix = (m) => {
    let hash = {};
    let rows = m.length;
    let cols = m[0].length;

    for(let i = 0; i < rows; i++) {         //time - O(N)
        for(let j = 0; j < cols; j++) {     //time - O(N)
            let char = m[i][j];
            if(char == 0) hash[i] = j;      //space - O(N)
        }
    }

    for(let key of Object.keys(hash)) {     //time - O(N)
        for(let i = 0; i < cols; i++) {     //time - O(N)
            m[key][i] = 0;
        }
        for(let j = 0; j < rows; i++) {     //time - O(N)
            m[j][hash[key]] = 0;
        }
    }
    return m;
};

console.log(zeroMatrix([[0, 2, 3], [4, 5, 6], [7, 8, 9]])) //[[0, 0, 0], [0, 5, 6], [0, 8, 9]]

//time - O(N^2);
//space - O(N)
