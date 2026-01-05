// Не решено

const getMatrixSum = (matrix) => {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum+=matrix[i][j];
        }
    }

    return sum;
};

const getNeighbors = (matrix, y, x) => {
    return [matrix[y]?.[x + 1], matrix[y + 1]?.[x] || 0];
};

const getMinNeighbor = (matrix, y, x) => {
    const [xNeighbor = 0, yNeighbor = 0] = getNeighbors(matrix, y, x);

    if (xNeighbor < yNeighbor && (x + 1) < matrix.length) {
        return {
            value: xNeighbor,
            coords: [y, x + 1]
        };
    }

    if (yNeighbor < xNeighbor && (y + 1) < matrix.length) {
        return {
            value: yNeighbor,
            coords: [y + 1, x]
        };
    }

    if (yNeighbor === xNeighbor && (y + 1) < matrix.length && x + 1 < matrix.length) {
        return {
            value: xNeighbor,
            coords: [y, x + 1]
        };
    }

    return null;
};

/**
 * @param {number[][]} matrix
 * @return {number}
 */

const maxMatrixSum = function (matrix) {
    let minSum = 0;
    let neighbors = []; //[[x1,y1], [x2, y2]]
    // нужно умножить на -1, если оба соседа отрицательные и равные
    let needMultiplyNeighbors;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const minNeighbor = getMinNeighbor(matrix, i, j);

            if (minNeighbor) {
                const currSum = matrix[i][j] + minNeighbor.value;

                if (currSum < minSum) {
                    minSum = currSum;
                    neighbors = [[i, j], minNeighbor.coords]
                }
            }

            const [firstNeighbor, secondNeighbor] = getNeighbors(matrix, i, j);

            if (firstNeighbor < 0 && firstNeighbor === secondNeighbor) {
                needMultiplyNeighbors = [[i, j], [i, j + 1]]
            }
        }
    }

    if (minSum < 0) {
        const [firstNeighbor, secondNeighbor] = neighbors;

        matrix[firstNeighbor[0]][firstNeighbor[1]] *= -1;
        matrix[secondNeighbor[0]][secondNeighbor[1]] *= -1;

        return maxMatrixSum(matrix);
    }

    if (needMultiplyNeighbors) {
        const [firstNeighbor, secondNeighbor] = needMultiplyNeighbors;

        matrix[firstNeighbor[0]][firstNeighbor[1]] *= -1;
        matrix[secondNeighbor[0]][secondNeighbor[1]] *= -1;

        return maxMatrixSum(matrix);
    }

    return getMatrixSum(matrix);
};
module.exports = maxMatrixSum;