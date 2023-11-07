let searchMatrix = (matrix, target) => {
    let start = 0;
    let end = matrix.length - 1;
    let rowLen = matrix[0].length;
    let mid;
    let middleRow;

    while(start <= end) {
        mid = parseInt((start + end) / 2);

        if(matrix[mid][0] > target && matrix[mid][rowLen - 1] > target) {
            end = mid - 1;
        }  else if(matrix[mid][0] < target && matrix[mid][rowLen - 1] < target) {
            start = mid + 1;
        } else {
            break;
        }
    }

    middleRow = mid;
    start = 0;
    end = rowLen - 1;

    while(start <= end) {
        mid = parseInt((start + end) / 2);

        if(matrix[middleRow][mid] > target) {
            end = mid - 1;
        } else if (matrix[middleRow][mid] < target)  {
            start = mid + 1;
        } else {
            return true;
        }
    }
    return false;
}