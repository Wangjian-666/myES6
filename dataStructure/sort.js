/**
 * Created by wangjian on 2019/9/28.
 */
const test_arr = [9,1,8,2,7,3,4,6,5];
const { log } = console;

//exchange
const exchange = function(arr,i,j) {
    [arr[i],arr[j]] = [arr[j],arr[i]];
};

//check
const check = function (arr) {
    if(arr.length < 2) {
        return true;
    }
};

//1,bubbleSort
let bubbleSort = function(arr) {
    if(check(arr)) {
        return arr;
    }
    else {
        let len = arr.length;
        let head = 0,tail = len - 1;
        while(head < tail) {
            for (let i = head; i < tail; i++) {
                if (arr[i] > arr[i + 1]) {
                    exchange(arr, i, i + 1);
                }
            }
            tail -= 1;
            for (let j = tail; j > head; j--) {
                if (arr[j] < arr[j - 1]) {
                    exchange(arr, j, j - 1);
                }
            }
            head += 1;
        }
    }
};

//2,selectSort
let selectSort = function(arr) {
    if(check(arr)) {
        return arr;
    }
    else {
        for(let i = 0;i < arr.length;i++) {
            let min = i;
            for(let j = i + 1;j < arr.length;j++) {
                if(arr[j] < arr[min]) {
                    min = j;
                }
            }
            if(min !== i) {
                exchange(arr,i,min);
            }
        }
    }
};

//3,insertSort
let insertSort = function(arr) {
    if(check(arr)) {
        return arr;
    }
    else {
        for(let i = 1;i < arr.length;i++) {
            let temp = arr[i];
            let pre = i - 1;
            while(arr[pre] > temp) {
                arr[pre + 1] = arr[pre];
                pre -= 1;
            }
            arr[pre + 1] = temp;
        }
    }
};

//4,shellSort
let shellSort = function(arr) {
    if(check(arr)) {
        return arr;
    }
    else {
        let gap = Math.floor(arr.length / 2);
        while(gap > 0) {
            for(let i = gap;i < arr.length;i++) {
                let temp = arr[i];
                let pre = i - gap;
                while(arr[pre] > temp) {
                    arr[pre + gap] = arr[pre];
                    pre -= gap;
                }
                arr[pre + gap] = temp;
            }
            gap = Math.floor(gap / 2);
        }
    }
};

//5,midd_insert_sort
let findInsert = function (arr,value,end) {
    let min = 0;
    let max = end;
    while(min <= max) {
        let midd = Math.floor((min + max) / 2);
        if(value > arr[midd]) {
            min = midd + 1;
        }
        else {
            max = midd - 1;
        }
    }
    return min;
};
let MIS = function (arr) {
    if(check(arr)) {
        return arr;
    }
    else {
        for(let i = 1;i < arr.length;i++) {
            let temp = arr[i];
            let insertIndex = findInsert(arr,arr[i],i - 1);
            for(let j = i;j >= insertIndex;j--) {
                arr[j] = arr[j - 1];
            }
            arr[insertIndex] = temp;
        }
    }
};

//6,quickSort
let quickSort = function (arr) {
    if(check(arr)) {
        return arr;
    }
    else {
        quickSortAct(arr,0,arr.length - 1);
    }

};
let quickSortAct = function(arr,left,right) {
    let index = position(arr,left,right);
    if(left < index - 1) {
        quickSortAct(arr,left,index - 1);
    }
    if(index < right) {
        quickSortAct(arr,index,right);
    }
};
let position = function(arr,left,right) {
    let i = left;
    let j = right;
    while(i <= j) {
        let midd = Math.floor((i + j) / 2);
        while(arr[i] < arr[midd]) {
            i++;
        }
        while(arr[j] > arr[midd]) {
            j--;
        }
        if(i <= j) {
            exchange(arr,i,j);
            i++;
            j--;
        }
    }
    return i;
};

//7,mergeSort
let mergeSort = function(arr) {
    if(check(arr)) {
        return arr;
    }
    else {
        let left = [],right = [];
        let aux = arr[0];
        for(let i = 1,j = 0,k = 0;i < arr.length;i++) {
            if(arr[i] < aux) {
                left[j++] = arr[i];
            }
            else {
                right[k++] = arr[i];
            }
        }
       return [...mergeSort(left),aux,...mergeSort(right)];
    }
};