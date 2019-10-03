/**
 * Created by wangjian on 2019/4/16.
 */

/*remove Duplicates from arrayI
 1
 Given a sorted array, remove the
 duplicates in place such that each element
 appear only once and return the new length.
 Do not allocate extra space for another array,
 you must do this in place with constant memory.
 For example, Given input array A = [1,1,2],
 Your function should return length = 2, and A is now [1,2]
 */
function removeDuplicatesArray1(array) {
    let len = array.length, result = [];
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (array[i] - array[j] === 0) {
                i++;
                j = i;
            }
        }
        result.push(array[i]);
    }
    return result;
}
//checked
function removeDulplicatesArray2(array) {
    if (array.length <= 1) {
        return array;
    }
    else {
        let len = array.length, median, left = [], right = [];
        median = array[Math.floor(len / 2)];
        for (let i = 0; i < len; i++) {
            if (array[i] - median < 0) {
                left.push(array[i]);
            }
            if (array[i] - median > 0) {
                right.push(array[i]);
            }
        }
        return [].concat(removeDulplicatesArray2(left), median, removeDulplicatesArray2(right));
    }
}
//checked
function removeDulplicatesArray3(array) {
    let len = array.length, middleChange;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (array[i] - array[j] === 0) {
                middleChange = array[j];
                array[j] = array[array.length - 1];
                array[array.length - 1] = middleChange;
                array.length--;
            }
        }
    }
    return array;
}
//check-notSort
function removeDulplicatesArray4(array) {
    if (array.length < 2) {
        return array;
    }
    let len = array.length, result = [];
    for (let i = 0, index = 0; i < len; i++) {
        if (array[i] !== array[i + 1]) {
            result[index++] = array[i];
        }
    }
    return result;
}
//checked
/*remove Duplicates of arrayII
 2
 Follow up for ”Remove Duplicates”:
 What if duplicates are allowed at most twice?
 For example, Given sorted array A = [1,1,1,2,2,3],
 Your function should return length = 5, and A is now [1,1,2,2,3]
 */
function allowedDuplicatesArray1(array, times) {
    let len = array.length, count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (array[i] - array[j] === 0) {
                count += 1;
            }
            else {
                count = 0;
                i++;
                j = i;
            }
            if (count - times === 0) {
                array.splice(j, 1, 'del');
                count -= 1;
            }
        }
    }
    return array.filter((item) => item !== 'del');
}
//checked
function allowedDuplicatesArray2(array, times) {
    let count = 0, len = array.length, result = [];
    for (let i = 0, index = 0; i < len; i++) {
        if (array[i] - array[i + 1] === 0) {
            count += 1;
        }
        else {
            count = 0;
        }
        if (count - times < 0) {
            result[index++] = array[i];
        }
    }
    return result;
}
function allowedDuplicatesArray3(array, times) {

}
//checked
/*search target in array
 3
 Suppose a sorted array is rotated at some
 pivot unknown to you beforehand.
 (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 You are given a target value to search.
 If found in the array return its index,
 otherwise return -1.
 You may assume no duplicate exists in the array.
 */
function findTargetInArray1(array, target) {//Two way traversal
    let len = array.length;
    for (let i = 0, j = len - 1; i < j; i++, j--) {
        if (array[i] - target === 0) {
            return i;
        }
        else if (array[j] - target === 0) {
            return j;
        }
    }
    return -1;
}
//checked
function findTargetInArray2(array, target) {//dichotomy
    let len = array.length, middleNumer;
    middleNumer = Math.floor(len / 2);
    if (target - array[middleNumer] < 0) {
        for (let i = 0; i < middleNumer; i++) {
            if (array[i] - target === 0) {
                return i;
            }
        }
    }
    else {
        for (let j = middleNumer; j < len; j++) {
            if (array[j] - target === 0) {
                return j;
            }
        }
    }
    return -1;
}
//checked
function findTargetInArray3(array, target) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        if (array[i] - target === 0) {
            return i;
        }
    }
    return -1;
}
//checked
function findTargetInArray4(array, target) {
    let len = array.length, obj = {};
    for (let i = 0; i < len; i++) {
        obj[array[i]] = i;
    }
    if (obj[target]) {
        return obj[target];
    }
    else {
        return -1;
    }
}
//checked
function findTargetInArray5(array, target) {
    let begin = 0, end = array.length, midle;
    if (target > array[end] || target < array[begin]) {
        return -1;
    }
    while (end != begin) {
        midle = Math.floor(begin + (end - begin) / 2);

        if (target === array[midle]) {
            return midle;
        }
        if (target > array[midle]) {
            begin = midle + 1
        }
        else {
            end = midle;
        }
    }
    return -1;
}
//checked

/*Search in Rotated Sorted Array II
 4
 Follow up for ”Search in Rotated Sorted Array”:
 What if duplicates are allowed?
 Would this affect the run-time complexity? How and why?
 Write a function to determine if a given target is in the array.
 */
function findRotatedInarray(array, rotated) {

}


/*Median of Two Sorted Arrays
 5
 There are two sorted arrays A and B of size m and n respectively.
 Find the median of the two sorted arrays.
 The overall run time complexity should be O(log(m + n)).
 */
function findMedianTwoArray1(array1, array2) {
    array1 = array1.sort((a, b) => a - b);
    array2 = array2.sort((a, b) => a - b);
    let mergeArray = [...array1, ...array2], median;
    if (mergeArray.length % 2 !== 0) {//奇数
        median = mergeArray[Math.floor(mergeArray.length / 2)];
    }
    else {
        let middleNumer = Math.floor(mergeArray.length / 2);
        median = (mergeArray[middleNumer] + mergeArray[middleNumer - 1]) / 2;
    }
    return median;
}
//check-O(log(m+n))

/*Longest Consecutive Sequence
 6
 Given an unsorted array of integers,
 find the length of the longest consecutive elements sequence.
 For example, Given [100, 4, 200, 1, 3, 2],
 The longest consecutive elements sequence is [1, 2, 3, 4].
 Return its length: 4.
 */

function longestConsecutiveSequence1(array) {
    //quickSort
    const quickSort = function (array) {
        if (array.length <= 1) {
            return array;
        }
        let target = array[0], len = array.length, left = [], right = [];
        for (let i = 1; i < len; i++) {
            if (array[i] - target < 0) {
                left.push(array[i]);
            }
            else {
                right.push(array[i]);
            }
        }
        return [].concat(quickSort(left), target, quickSort(right));
    };
    // traverseArray
    let sortArray = quickSort(array), len = sortArray.length;
    for (let i = 0; i < len; i++) {
        if (sortArray[i + 1] - sortArray[i] !== 1) {
            sortArray.length = i + 1;
            break;
        }
    }
    return sortArray;
}
//checked
function longestConsecutiveSequence2(array) {
    //sortArray
    const quickSort2 = function (array) {
        if (array.length <= 1) {
            return array;
        }
        let len = array.length, storage, left = [], right = [];
        storage = array[Math.floor(len / 2)];
        for (let i = 0; i < len; i++) {
            if (array[i] - storage < 0) {
                left.push(array[i]);
            }
            if (array[i] - storage > 0) {
                right.push(array[i]);
            }
        }
        return [].concat(quickSort2(left), storage, quickSort2(right));
    };
    //dichotomy(二分法）
    let sortArray = quickSort2(array), len = sortArray.length, middle;
    middle = Math.floor(len / 2);
    for (let i = 0; i < middle; i++) {
        if (sortArray[i + 1] - sortArray[i] !== 1) {
            sortArray.length = i + 1;
            return sortArray;
        }
    }
    for (let j = middle; j < len; j++) {
        if (sortArray[j + 1] - sortArray[j] !== 1) {
            sortArray.length = j + 1;
            return sortArray;
        }
    }
}
//checked

/*Two Sum
 7
 Given an array of integers,
 find two numbers such that they add up to a specific target number.
 The function twoSum should return indices of the
 two numbers such that they add up to the target,
 where index1 must be less than index2.
 Please note that your
 returned answers (both index1 and index2) are not zero-based.
 You may assume that each input would have exactly one solution.
 Input: numbers={2, 7, 11, 15}, target=9
 Output: index1=1, index2=2
 */
function twoSum1(array, target) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (target - array[i] === array[j]) {
                return {index1: i, index2: j}
            }
        }
    }
    return -1;
}
//checked
function twoSum2(array, target) {
    let obj = {}, len = array.length;
    for (let i = 0; i < len; i++) {
        obj[array[i]] = i;
    }
    for (let key in obj) {
        if (obj[(target - parseInt(key))]) {
            return {index1: obj[key], index2: obj[(target - key)]};
        }
    }
    return -1;
    // return obj;
}
//checked

/*3Sum
 8
 Given an array S of n integers, are there elements a,b,c
 in S such that a + b + c = 0? Find all unique triplets in the array
 which gives the sum of zero.
 Note:
 • Elements in a triplet (a, b, c) must be in non-descending order.
 (ie, a ≤ b ≤ c)
 • The solution set must not contain duplicate triplets.
 For example, given array S = {-1 0 1 2 -1 -4}.
 A solution set is:
 (-1, 0, 1)
 (-1, -1, 2)
 */
function threeSum1(array, target) {
    //quickSort
    if (isNaN(target)) {
        return [];
    }
    const quickSort = function (array) {
        if (array.length <= 1) {
            return array;
        }
        let len = array.length, left = [], right = [], storage = array[0];
        for (let i = 1; i < len; i++) {
            if (array[i] - storage < 0) {
                left.push(array[i]);
            }
            else {
                right.push(array[i]);
            }
        }
        return [].concat(quickSort(left), storage, quickSort(right));
    };
    //The two sides sum include four pointer
    let sortArray = quickSort(array);
    let len = sortArray.length;
    let sum1, sum2, sum3;
    let result = [];
    console.log(sortArray);
    if (sortArray[len - 1] + sortArray[len - 2] - target < 0) {
        return result;
    }
    for (let i = 0, j = i + 1, f = len - 1, k = f - 1, m = 0; i < f; i++, j++, f--, k--) {
        sum1 = sortArray[i] + sortArray[f];
        sum2 = sortArray[i] + sortArray[k] + sortArray[f];
        sum3 = sortArray[i] + sortArray[j] + sortArray[f];
        // console.log(`sum1:${sum1},sum2:${sum2},sum3:${sum3}`);
        if (sum1 <= target) {
            if (sum2 > target) {
                i--;
                j--;
                f++;
            }
            else if (sum2 < target) {
                f++;
                k++;
            }
            else {
                result[m++] = [sortArray[i], sortArray[k], sortArray[f]];
                f++;
                k = f - 1;
            }
        }
        else {
            if (sum3 > target) {
                i--;
                j--;

            }
            else if (sum3 < target) {
                i--;
                f++;
                k++;
            }
            else {
                result[m++] = [sortArray[i], sortArray[j], sortArray[f]];
                i--;
                j = i + 1;
            }
        }
    }
    return result;
}
//checked
function threeSum2(array, target) {
    let len = array.length, sortArray, middle, zeroIndex = false;
    //quickSort
    const qucikSort = function (array) {
        if (array.length <= 1) {
            return array;
        }
        let left = [], right = [], storage = array[0], len = array.length;
        for (let i = 1; i < len; i++) {
            if (array[i] - storage < 0) {
                left.push((array[i]));
            }
            else {
                right.push(array[i]);
            }
        }
        return [].concat(qucikSort(left), storage, qucikSort(right));
    };
    sortArray = qucikSort(array);
    // sortArray = array.sort((a,b) => a - b);
    if (sortArray[-1] + sortArray[len - 2] - target < 0) {
        return []
    }
    middle = Math.floor(len / 2);
    //dichotomySearch
    if (sortArray[middle] < 0) {
        for (let i = middle; i < len; i++) {
            if (sortArray[i] === 0) {
                zeroIndex = i;
            }
        }
    }
    else {
        for (let j = middle; j >= 0; j--) {
            if (sortArray[j] === 0) {
                zeroIndex = j;
            }
        }
    }
    // zeroIndex = sortArray.indexOf(0);
    console.log(zeroIndex);
    return sortArray;
}
//unfinished

/*3Sum Closest(最接近)
 9
 Given an array S of n integers, find three integers in S such that
 the sum is closest to a given number, target.
 Return the sum of the three integers.
 You may assume that each input would have exactly one solution.
 For example, given array S = {-1 2 1 -4}, and target = 1.
 The sum that is closest to the target is 2. (-1+2+1=2).
 */
function threeSumClosest(arrray, target) {

}


/*4Sum
 10
 Given an array S of n integers, are there elements a, b, c,
 and d in S such that a + b + c + d = target?
 Find all unique quadruplets in the array which gives the sum of target.
 Note:
 • Elements in a quadruplet (a, b, c, d) must
 be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
 • The solution set must not contain duplicate quadruplets.
 For example, given array S = {1 0 -1 0 -2 2}, and target = 0.
 A solution set is:
 (-1,  0, 0, 1)
 (-2, -1, 1, 2)
 (-2,  0, 0, 2)
 */
function fourSum(array, target) {


}


/*Remove Element
 11
 Given an array and a value, remove all instances of that
 value in place and return the new length.
 The order of elements can be changed.
 It doesn’t matter what you leave beyond the new length.
 */
function removeValue1(array, value) {
    let len = array.length, result = [];
    // result = array.filter((item) => item - value !== 0);
    for (let i = 0; i < len; i++) {
        if (array[i] - value !== 0) {
            result.push(array[i])
        }
    }
    return result;
}
//checked
function removeValue2(array, value) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        if (array[i] - value === 0) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}
//checked
function removeValue3(array, value) {
    let len = array.length, index = 0, result;
    for (let i = 0; i < len; i++) {
        if (array[i] !== value) {
            array[index++] = array[i];
        }
    }
    return index;//return new length
}
//checked

/*Next Permutation(排列)
 12
 Implement next permutation, which rearranges numbers into the lexicographically
 next greater permu- tation of numbers.
 If such arrangement is not possible,
 it must rearrange it as the lowest possible order (ie, sorted in ascend- ing order).
 The replacement must be in-place, do not allocate extra memory.
 Here are some examples.
 Inputs are in the left-hand column and its
 corresponding outputs are in the right-hand column.
 1,2,3 → 1,3,2
 3,2,1 → 1,2,3
 1,1,5 → 1,5,1
 */
function nextPermutation(array) {
    let len = array.length, middleChange;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (array[j] - array[i] === 1) {
                middleChange = array[i];
                array[i] = array[j];
                array[j] = middleChange;
                i++;
                j = i;
            }
        }
    }
    return array;
}

/*Trapping Rain Water
 15
 Given n non-negative integers representing
 an elevation map where the width of each bar is 1,
 compute how much water it is able to trap after raining.
 For example, Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
 */
function rainWater(array) {
    if (array.length < 3) {
        return 'this array is no water'
    }
    let len = array.length, max = array[0], index = 0, water = 0;
    for (let i = 1; i < len; i++) {
        if (array[i] > max) {
            max = array[i];
            index = i
        }
    }
    let current = array[1];
    for (let i = 2; i < index; i++) {
        if (array[i] > current) {
            current = array[i];
        }
        else {
            water += current - array[i];
        }
    }
    let current2 = array[len - 1];
    for (let i = len - 2; i > index; i--) {
        if (array[i] > current2) {
            current2 = array[i];
        }
        else {
            water += current2 - array[i];
        }
    }
    return water;
}
//checked

/*Candy
 22
 There are N children standing in a line.
 Each child is assigned a rating value.
 You are giving candies to these children subjected to the following requirements:
 • Each child must have at least one candy.
 • Children with a higher rating get more candies than their neighbors.
 What is the minimum candies you must give?
 */
function candy(array) {
    if(array.length < 1) {
        return 0;
    }
    if(array.length === 1) {
        return 1;
    }
    let len = array.length, left = [], right = [], sum = 0;
    left[0] = 1;
    right[len - 1] = 1;
    for (let i = 1, index = 1; i < len; i++, index++) {
        if (array[i] > array[i - 1]) {
            left[index] = left[index - 1] + 1;
        }
        else {
            left[index] = 1;
        }
    }
    for (let i = len - 2, index = len - 2; i >= 0; i--, index--) {
        if (array[i] > array[i + 1]) {
            right[index] = right[index + 1] + 1;
        }
        else {
            right[index] = 1;
        }
    }
    for (let index = 0; index < len; index++) {
        sum += Math.max(left[index], right[index]);
    }
    return sum;
}
//checked

/*

 */

function gas(array) {
    let len = array.length,pre = 0,index,tatol = 0;
    for(let i = 0;i < len;i++) {
        pre += array[i][0] - array[i][1];
        if(array[i][0] - array[i][1] >= tatol) {
            tatol = array[i][0] - array[i][1];
        }
        if(pre >= 0 && (array[i][0] - array[i][1]) >= tatol) {
            index = i;
        }
    }
    if(pre >= 0) {
        return index;
    }
    return false;
}

//第二部分

   function uniq(arry) {
       var temp = {},r = [],len = arry.length,val,type;
       for(var i=0;i<len;i++){
           val = arry[i];
           type = typeof val;
           console.log(type);
           if(!temp[val]){
               temp[val] = [type];
               r.push(val);
           }
           else if(temp[val].indexOf(type)<0){
               temp[val].push(type);
               r.push(val)
           }
       }
       console.log(temp);
       return r;

   }
//    var arrTest = [33,7,53,29,10,4,33,29,30];
//    console.log(uniq(arrTest));
//function getMaxProfit(arr) {
//     arr.sort(function (a,b) {
//        return a-b;
//    });
//    return arr[arr.length-1] - arr[0];
//}
//    console.log(getMaxProfit([4,5,32,6,84,3,2,23,332,2,1,124]));
//function toSumTheMax(str) {
//    if(str.length<=1){
//        return str+'/'+str.length;
//    }
//    else {
//        let obj = {},maxStr='',maxVa=1;
//        for(let i=0;i<str.length;i++){
//            if(!obj[str.charAt(i)]){
//                obj[str.charAt(i)] = 1;
//
//            }
//            else {
//                obj[str.charAt(i)]+=1;
//            }
//        }
//        for(k in  obj){
//            if(obj[k] > maxVa){
//                maxVa = obj[k];
//                maxStr = k;
//            }
//        }
//        return maxStr+'/'+maxVa;
//
//    }
//}
//    console.log(toSumTheMax('hkjkjsjjljlaj24sn90'));

//function bubbleSort(arr) {//冒泡排序
//    let middle;
//    for(let i=0;i<arr.length-1;i++){
//        for(let j=i+1;j<arr.length;j++){
//            if(arr[i]>arr[j]){
//                middle = arr[i];
//                arr[i] = arr[j];
//                arr[j] = middle;
//            }
//        }
//    }
//    return arr;
//}
//    console.log(bubbleSort([5,2,4,2,6,9,6,4]));

//function quickSort(arr) {
//    let leftArr=[],rightArr=[],q=arr[0];
//    if(arr.length<=1){
//        return arr;
//    }
//    else {
//        for(let i=1;i<arr.length;i++){
//            if(arr[i]>q){
//                rightArr.push(arr[i]);
//            }
//            else {
//                leftArr.push(arr[i]);
//            }
//        }
//    }
//    return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
//}
//    console.log(quickSort([4]));

//function swap(a,b) {
//    b = b-a;
//    a = a+b;
//    b = a-b;
//    return [a,b];
//}
//    console.log(swap(4,5));

//function foboliccArr(n) {
//    let fibbArr=[],i=0;
//    while (i<n){
//        if(i<=1){
//            fibbArr.push(i);
//        }
//        else {
//            fibbArr.push(fibbArr[i-1]+fibbArr[i-2]);
//        }
//        i++;
//    }
//    return fibbArr;
//
//}
//    console.log(foboliccArr(4));

//function randomStr(n) {
//    let str = 'abcdefghijklmnopqrstuvwxyz1234567890';
//    let tmp = '',i = 0;
//    for(i;i<n;i++){
//        tmp+=str.charAt(Math.random()*str.length);
//    }
//    return tmp;
//}
//    console.log(randomStr(8));
//    var testobj = {
//        name: 'wangjian'
//    };
//    console.log(testobj.hasOwnProperty('name'));

//function uniqIndex(arr) {
//    let tem=[];
//    for(let i=0;i<arr.length;i++){
//        if(arr.indexOf(arr[i]) == i){
//            tem.push(arr[i])
//        }
//    }
//    return tem;
//}
//    console.log(uniqIndex([3,4,6,3,4,5,6,2,1]));

//function uniqDouble(arr) {
//    let temp=[],index=[];
//    for(let i=0;i<arr.length;i++){
//        for(let j=i+1;j<arr.length;j++){
//            if(arr[i] == arr[j]) {
//                i++;
//                j = i;
//            }
//        }
//        temp.push(arr[i]);
//        index.push(i);
//    }
//    return temp;
//}
//    console.log(uniqDouble([2,3,5,4,7,3,8,9,6,1,2]));
//    function duobleAdd(firstString,secondString) {
//        let stringArr1= firstString.split('->');
//        let stringArr2= secondString.split('->');
//        let numb1='',numb2='',sum,finalString,reSt='';
//
//       for(let i=stringArr1.length-1;i>=0;i--){
//           numb1+=stringArr1[i];
//       }
//       for(let j=stringArr2.length-1;j>=0;j--){
//            numb2+=stringArr2[j];
//        }
//        numb1=Number(numb1);
//        numb2=Number(numb2);
//        sum = numb1+numb2;
//        sum =sum+'';
//        finalString = sum.split('');
//
//        for(let i=1;i<finalString.length;i++){
//            finalString.splice(i,0,'->');
//            i++;
//        }
//        finalString=finalString.reverse();
//        for(let j=0;j<finalString.length;j++){
//            reSt+=finalString[j]
//        }
//
//        return reSt;
//
//
//    }
//    console.log(duobleAdd('1->2->3','4->5->6'))//output:9->7->5
//    function theMaxLength(str) {
//        let arr1=[],arr2=[];
//        for(let i=0;i<str.length;i++){
//           if(arr1.indexOf(str[i])==-1){
//               arr1.push(str[i]);
//           }
//           else {
//                if(arr1.length>arr2.length) {
//                    arr2 = arr1;
//                    arr1 = [];
//                    arr1.push(str[i]);
//                }
//               else {
//                    arr1 = [];
//                    arr1.push(str[i]);
//                }
//           }
//        }
//       if(arr1.length>arr2.length){
//           return arr1;
//       }
//        else {
//           return arr2;
//       }
//        return Math.max(arr1.length,arr2.length);
//    }
//    console.log(theMaxLength('abcddecfgghilopm'));

//    function toFindTheMidelnumber(arr1,arr2) {
//
//        let finnalArr=[],numberM;
//        finnalArr=arr1.concat(arr2);
//        finnalArr=finnalArr.sort();
//        numberM=Math.floor(finnalArr.length/2);
//        if(finnalArr.length%2==0){
//            return ((finnalArr[numberM]+finnalArr[numberM-1])/2);
//        }
//        else {
//            return finnalArr[numberM];
//        }
//    }
//     console.log(toFindTheMidelnumber([1,2],[3,4]));//output:2.5

//    function toFindTarget(arr,target) {
//        for(let i=0;i<arr.length;i++){
//            for(let j=i+1;j<arr.length;j++){
//                if(arr[i]+arr[j]==target){
//                    return[i,j];
//                }
//            }
//        }
//        return 'No find';
//    }
//    console.log(toFindTarget([2,7,11,15],26));//output:[2,3]

//    function toFindTarget2(arr,target) {
//        for(let i=0;i<arr.length;i++){
//            if(arr.indexOf(target-arr[i])!=-1){
//                return [i,arr.indexOf(target-arr[i])];
//            }
//        }
//        return 'No find';
//    }
//    console.log(toFindTarget2([2,7,11,15],26));//output:[2,3]


//    function Manncher(str) {
//        if(str.split('').reverse().join('')==str){
//            return str;
//        }
//        else {
//            let strArr=str.split('');
//            let strLength=strArr.length;
//            let mid=Math.floor(strLength/2);
//            for(let i=strLength-1;i>0;i--) {
//                console.log(i);
//               if(strArr.indexOf(strArr[i])!=i){
//                   console.log(strArr.indexOf(strArr[i]));
//                   return str.slice(strArr.indexOf(strArr[i]),i+1);
//               }
//            }
//        }
//    }
//   console.log(Manncher('abdccdbh'));

//    function convert(str,num) {
//
//    }

//    function reverseNu(num) {
//        let min=-(1<<30)*2;
//        let max=(1<<30)*2;
//        console.log(min+'/'+max);
//        if(num<0){
//            num+='';
//            num=num.slice(1);
//            num ='-'+num.split('').reverse().join('');
//
//            return Number(num);
//
//        }
//        else {
//            num = num + '';
//            num = num.split('').reverse().join('');
//            return Number(num);
//        }
//    }
//    console.log(reverseNu(1230));

//    function checkTheManncher(str) {
//        str=str+'';
//        if(str.split('').reverse().join('')==str){
//            return true;
//        }
//        else {
//            return false;
//        }
//    }
//    console.log(checkTheManncher('-123321-'));

//    function findArrMax(arr) {
//        let arrMax=[];
//        for(let i=0;i<arr.length;i++){
//
//
//
//
//
//
//
//        }
//
//        return arrMax;
//
//
//    }
//    console.log(findArrMax([1, -2, 3, 10, -4, 7, 2, -5]));
//    function theRadomN(n) {
//        let arrT=[],mid,len;
//        for(let i=0;i<=n;i++){
//            arrT.push(i);
//        }
//        len=arrT.length;
//        for(len;len>0;len--){
//            let num=Math.round(Math.random()*(len-1));//0-len
//            mid=arrT[num];
//            arrT[num]=arrT[len-1];
//            arrT[len-1]=mid;
//        }
//        return arrT;
//    }
//
//    function uniqArr(arr) {
//        for(let i=0;i<arr.length;i++){
//            for(let j=i+1;j<arr.length;j++){
//                if(arr[i]==arr[j]){
//                    arr.splice(i,1);
//                    j=i;
//                }
//            }
//        }
//        return arr;
//    }
//    console.log(uniqArr([6,7,7,8,9,4,6,4]));

//    function insert(value) {
//        return{
//            into: function (arry) {
//                return {
//                    after: function (afterValue) {
//                        arry.splice(arry.indexOf(afterValue)+1,0,value);
//                        return arry;
//                    }
//                }
//            }
//        }
//    }
//unction quickSor(array) {
//        if(array.length <= 1){
//            return array
//        }
//        let left=[], right=[], midle,length;
//        length = array.length;
//        midle =array[Math.floor(length/2)];
//        for(let i = 0;i<length;i++) {
//            if(array[i]< midle){
//                left.push(array[i]);
//            }
//            if(array[i]>midle) {
//                right.push(array[i]);
//            }
//        }
//        return [].concat(quickSor(left),midle,quickSor(right));
//    }
//    console.log(quickSor([2,3,47,89,123,4,56,7,11,-10]));
//    function quickSor(array) {
//        if(array.length <= 1) {
//            return array
//        }
//        let left = [],right = [],midle , len;
//        midle = array[0];
//        len = array.length;
//        for(let i = 1;i<len;i++) {
//            if(array[i]<midle) {
//                left.push(array[i]);
//            }else {
//                right.push(array[i]);
//            }
//            console.log(left,right);
//        }
//        return [].concat(quickSor(left),midle,quickSor(right));
//    }
//    console.log(quickSor([2,3,47,89,123,4,56,7,11,-10]));

//    var n = parseInt(readline());
//    var ans = 0;
//    for(var i = 0;i < n; i++){
//        lines = readline().split(" ")
//        for(var j = 0;j < lines.length; j++){
//            ans += parseInt(lines[j]);
//        }
//    }
//    print(ans);



//特征提取,array参数表示要输入的二维数组
//    function deal2(array) {
//        let len = array.length,count = 0,arr = [];//设置累加器,缓存arr
//        for(let k = 0;k<len;k++) {
//            for (let i = 0, j = 1; j< array[k].length; i++, j++) {
//                if (array[k][i] === array[k][j]) {
//                    arr.push(array[k][i]);
//                    count ++;
//                }
//                else {
//                    arr = [];
//                    count = 0
//                }
//            }
//        }
//        return count;
//    }
//    console.log(deal2([[1,1,2,3,4,4],[2,3,2,1,2,1]]));




//机器人游戏问题，需要输入一个len代表长度，一个array代表这个高度两个参数
//    function deal3(len,array) {
//        if(len<1 || len >Math.pow(10,5)){
//            return 'error';
//        }
//        array.length = len;//s输入超出长度的值无效
//        let result,cont = 0,y;//返回值result,中间换算量y
//        for(let i = 0,j = len -1; i < len; i++) {
//            cont += array[i]*Math.pow(2,j--);
//        }
//        y = Math.pow(2,len);
//        result = Math.ceil(cont/y);
//        console.log(result);
//        return result;
//    }
//    deal3(3,[1,6,2,4]);//console.log(4)


//统计一个数组重复出现的数字的次数没有重复的就返回1
//    function sumArray(array) {
//        let arr, count = 1, len = array.length, result = 1;
//            arr = array.sort((a,b) => a-b);
//        for (let i = 0, j = 1; j < len; j++, i++) {
//            if (arr[i] === arr[j]) {
//                count += 1;
//            }
//            else {
//                result = Math.max(result,count);
//                count = 1;
//            }
//        }
//        result = Math.max(result,count);
//        console.log(result);
//        return result;
//    }
//    sumArray([3,3,3,3]);
//    let arr =[1,0,4,5];
//    let arr = [{name:'wangjian',title: "Fe"},{name:'wangjie',title:'start'}]
//    let result = arr.reduce(function (previousValue,currentValue,index,thisArray) {
//        return previousValue + currentValue;
//    });
//    let result = arr.find(function (item) {
//       return item.name == 'wangjie';
//    });
//
//
//    console.log(result);

//计算一个鼠标到对角线的距离
//    function angle(start,end) {
//        let diff_x = end.x - start.x;
//        let diff_y = end.y - start.y;
//        return Math.abs(360*Math.atan(diff_y/diff_x)/(2*Math.PI));
//    }
//    let rectangle = document.getElementById('rectangle');
//    let y1 = rectangle.getBoundingClientRect().bottom;
//    let x1 = rectangle.getBoundingClientRect().left;
//    let y2 = rectangle.getBoundingClientRect().top;
//    let x2 = rectangle.getBoundingClientRect().right;
//    rectangle.onmousemove = function (event) {
//
//        let e = event || window.event,result;
//        let x3 = e.clientX,y3 = e.clientY;
//        let len = Math.pow(x3-x1,2) + Math.pow(y3-y1,2);
//        len = Math.sqrt(len);
//        let angleValue = angle({x:x1,y:y1},{x:x3,y:y3});
//        angleValue = Math.abs(45-angleValue);
//        result = len * Math.sin(angleValue*Math.PI/180);
//        console.log(result);
//
//    };
function indexTarget(array,target) {//顺序查找
    let len = array.length;
    for(let i =0; i<len;i++) {
        if(array[i] - target === 0) {
            return i;
        }
    }
    return -1;
}
function indexTarget2(array,target) {//二分查找，二分查找的前提是已拍好序的数组
    let len = 0;
    let head = 0;
    let tail = len - 1;
    while(head < tail) {
        let middl = Math.floor((head + tail) / 2);
        if(target > array[middl]) {
            head = middl + 1;
        }
        else if(target < array[middl]) {
            tail = middl - 1;
        }
        else {
            return middl;
        }
    }
    return -1;
}
// let arr = [1,2,3,4,4,5,6,7,8,9];
// console.log(indexTarget(arr,5));
//统计字符串中出现次数最多的字符
function statistical(str) {//使用对象（哈希表）存储
    let len = str.length;
    let obj = {};
    let max = 1, result;
    for (let i = 0; i < len; i++) {
        if (obj[str[i]]) {
            obj[str[i]] += 1;
        }
        else {
            obj[str[i]] = 1;
        }
        if (obj[str[i]] > max) {
            max = obj[str[i]];
            result = str[i];
        }
    }
    return `${result} -> ${max}`;
}
// console.log(statistical('ammafffgkllssaap'));

//第三部分
/**
 * Created by wangjian on 2019/4/18.
 */

/*
 1冒泡排序(buddingSOrt)-O(n2)
 */
function bubbleSort(array) {
    if(array.length <2 ) {
        return array;
    }
    let len = array.length;
    for(let i = 0;i < len;i++) {
        for(let j = i+1;j < len;j++) {
            if(array[i] > array[j]){
                let middle = array[j];
                array[j] = array[i];
                array[i] = middle;
            }
        }
    }
    return array;
}

/*
 2选择排序(selectSort)-O(n2)
 */
function selectionSort(array) {
    if(array.length < 2) {
        return array;
    }
    let len = array.length;
    for(let i = 0;i < len-1;i++) {
        let index = i,middle;
        for(let j = i+1;j < len;j++) {
            if(array[j] < array[index]) {
                index = j;
            }
        }
        middle = array[i];
        array[i] = array[index];
        array[index] = middle;
    }
    return array;
}

/*
 3插入排序(insertSort)-O(n2)
 */
function insertionSort(array) {
    if(array.length < 2) {
        return array;
    }
    let len = array.length;
    for(let i =0;i < len-1;i++) {
        let current = array[i+1],preIndex = i;//这一步很关键目的就是缓存下一个值
        while (preIndex >= 0 && current < array[preIndex]) {
            array[preIndex+1] = array[preIndex];
            preIndex --;
        }
        array[preIndex+1] = current;
    }
    return array;
}

/*
 4希尔排序(shellSort)
 */
function shellSort(array) {
    let len = array.length,gap = Math.floor(len / 2);
    while (gap > 0) {
        for(let i = gap;i < len;i++) {
            let temp = array[i];//关键步骤storage缓存当前的数
            let preIndex = i - gap;
            while (preIndex >=0 && array[preIndex] > temp) {
                array[preIndex + gap] = array[preIndex];
                preIndex -= gap;
            }
            array[preIndex + gap] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return array;
}

/*
 5归并排序(mergeSort)
 */
function mergeSort(array) {
    if(array.length < 2) {
        return array;
    }
    let left = [],right = [],
        len = array.length,
        lenLeft = Math.floor(len / 2);
    for(let i = 0; i < lenLeft; i++) {
        left[left.length] = array[i];
    }
    for(let j = lenLeft;j < len;j++) {
        right[right.length] = array[j];
    }
    function merge(left,right) {
        let result = [];
        result.length = left.length + right.length;
        let len = result.length;
        for(let index = 0,i = 0,j = 0;index < len;index++) {
            if(i >= left.length) {
                result[index] = right[j++];
            }
            else if(j >= right.length) {
                result[index] = left[i++];
            }
            else if(left[i] > right[j]) {
                result[index] = right[j++];
            }
            else {
                result[index] = left[i++];
            }
        }
        return result;
    }
    return merge(mergeSort(left),mergeSort(right));
}

/*
 6快速排序(quickSort)
 */
function quickSort(array) {
    if(array.length <2) {
        return array
    }
    let len = array.length,left = [],right = [],temp = array[0];;
    for(let i = 1;i < len;i++) {
        if(array[i] < temp) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return [].concat(quickSort(left),temp,quickSort(right));
}
let te = [2,3,7,1,3,9,2];
// console.log(quickSort(te));

/*
 7堆排序(heapSort)
 */
function heapSort(array) {

}

/*
 8计数排序countingSort
 */
function countingSort(array) {
    if(array.length < 2) {
        return array;
    }
    let len = array.length;
    let min = array[0],max = array[0];
    let bias;
    for(let i = 1;i < len;i++) {
        if(array[i] < min) {
            min = array[i];
            array.splice(i,1);
        }
        if(array[i] > max) {
            max = array[i];
            array.splice(i,1);
        }
        else {
            array.splice(0,1);
        }
        // console.log([min,max]);
    }
    return countingSort(array);
}
let tss = [1,3,5,2,1,7,9,6,8];
countingSort(tss);


//test
function test0(array) {
    if(array.length < 2) {
        return array;
    }
    let len = array.length;
    for(let i = 0;i < len;i++) {
        for(let j = i+ 1;j < len;j++) {
            if(array[j] < array[i]) {
                let middle = array[i];
                array[i] = array[j];
                array[j] = middle;
            }
        }
    }
    return array;
}
function test1(array) {
    if(array.length === 0) {
        return array;
    }
    let len = array.length;
    for(let i = 0;i < len-1;i++) {
        let current = array[i+1];
        let preIndex = i;
        while (preIndex >= 0 && array[preIndex] > current) {
            array[preIndex+1] = array[preIndex];
            preIndex --;
        }
        array[preIndex+1] = current;
    }
    return array;
}
function test2(array) {
    let len = array.length,gap = Math.floor(len / 2);
    while (gap > 0) {
        for(let i = gap;i < len; i++) {
            let temp = array[i];
            let preIndex = i - gap;
            while (preIndex >= 0 && array[preIndex] > temp) {
                array[preIndex + gap] = array[preIndex];
                preIndex -= gap;
            }
            array[preIndex + gap] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return array;
}
function test3(array) {
    if(array.length <= 1) {
        return array;
    }
    let len = array.length;
    for(let i = 0;i < len;i++) {
        let index = i;
        for(let j = i+1;j < len;j++) {
            if (array[j] < array[index]) {
                index = j;
            }
        }
        let middle = array[i];
        array[i] = array[index];
        array[index] = middle;
    }
    return array;
}
function test4(array) {
    if(array.length < 2) {
        return array;
    }
    let left = [],right = [],len = array.length,middle = Math.floor(len / 2);
    for(let i = 0;i < middle;i++) {
        left[left.length] = array[i];
    }
    for(let j = middle;j < len;j++) {
        right[right.length] = array[j];
    }
    function merge(left,right) {
        let result = [],len;
        result.length = left.length + right.length;
        len = result.length;
        for(let index = 0,i = 0,j = 0;index < len;index++) {
            if(i >= left.length) {
                result[index] = right[j++];
            }
            else if(j >=right.length) {
                result[index] = left[i++];
            }
            else if(left[i] < right[j]) {
                result[index] = left[i++];
            }
            else {
                result[index] = right[j++];
            }
        }
        return result;
    }
    return merge(mergeSort(left),mergeSort(right));
}


function tt(array) {
    if(array.length < 2) {
        return array;
    }
    let len = array.length;
    for(let i = 0;i < len-1;i++) {
        let current = array[i+1],preIndex = i;
        while (preIndex >= 0 && current < array[preIndex]) {
            array[preIndex+1] = array[preIndex];
            preIndex --;
        }
        array[preIndex+1] = current;
    }
    return array;
}
function ts(array) {
    if(array.length < 2) {
        return array;
    }
    let len = array.length;
    for(let i = 0;i < len;i++) {
        let index = i;
        for(let j = i+1;j < len;j++) {
            if(array[j] < array[index]){
                index = j;
            }
        }
        let middle = array[i];
        array[i] = array[index];
        array[index] = middle;
    }
    return array;
}
function tm(array) {
    if(array.length < 2) {
        return array;
    }
    let len = array.length;
    let gap = Math.floor(len / 2);
    while (gap > 0) {

        for (let i = gap; i < len; i++) {
            let temp = array[i];
            let preIndex = i - gap;
            while (preIndex > -1 && array[preIndex] > temp) {
                array[preIndex + gap] = array[preIndex];
                preIndex -= gap;
            }
            array[preIndex + gap] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return array;
}




//search

function lcs(word1,word2) {
    let max = 0,index = 0;
    let lcsarr = new Array(word1.length + 1);
    for(let i = 0;i < word1.length + 1;i++) {
        lcsarr[i] = new Array(word2.length + 1);
        for(let j = 0;j <word2.length + 1;j++) {
            lcsarr[i][j] = 0;
        }
    }
    for(let i = 0;i <= word1.length;i++) {
        for(let j = 0;j <= word2.length;j++) {
            if(i === 0 || j === 0) {
                lcsarr[i][j] = 0;
            }
            else {
                if(word1[i - 1] === word2[j - 1]) {
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
                }
                else {
                    lcsarr[i][j] = 0;
                }
            }
            if(max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
        console.log(lcsarr);
    }
    console.log(index,max,word1.substr(index - max,max));
}
// lcs('reverse','caverse');

function findMaxString(str) {
    if(str.length < 2) {
        return str;
    }
    let obj = {},len = str.length,max = 1;
    for(let i = 0;i < len;i++) {
        if(obj[str[i]]) {
            obj[str[i]] += 1;
        }
        else {
            obj[str[i]] = 1;
        }
        if(obj[str[i]] > max) {
            max = obj[str[i]];
        }
    }
    // console.log(max);
    // console.log(obj);
    // return obj;
}
// findMaxString('abca');

function selectSort(arr) {
    let len = arr.length;
    if(len < 2) return arr;
    for(let i = 0;i < len;i++) {
        let min = i;
        for(let j = i+1;j< len;j++) {
            if(arr[j] < arr[i]) {
                min = j;
            }
        }
        if(min !== i) {
            [arr[i],arr[min]] = [arr[min],arr[i]];
        }
    }
    return arr;
}
let _test = [5,4,3,2,1];
// console.log(selectSort(_test));
/*
 输入一串字符，请编写一个字符串压缩程序，将字符串中连续出现的重复字母进行压缩，并输出压缩后的字符串。
 例如：
 aac 压缩为 1ac
 xxxxyyyyyyzbbb 压缩为 3x5yz2b
 */
let compressStr = function(str) {
    let result = '';
    for(let i = 0,acc = 0;i < str.length;i++) {
        if(str[i] === str[i+1]) {
            acc++;
        }
        else {
            if(acc === 0) {
                result += str[i];
            }
            else {
                result += acc + str[i];
            }
            acc = 0;
        }
    }
    return result;
};
// console.log(compressStr('aac'));

/*

 计算任意一个正整数n(0<n<=2147483647)，
 从1到n（包括n）的所有整数数字里含有多少个1

 */

let findNumber1 = function (num) {
    if(num > 0 && num < 2147483647) {
        num = num+'';
        let times = 0;
        for(let item of num) {
            if(item === '1') {
                times += 1;
            }
        }
        return times;
    }
};
// console.log(findNumber1(122111));

