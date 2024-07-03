/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /**
 1.- initialize an empty hash table.
 2.- iterate nums where each num is a key that's going to be added.
         *if the key is new, initialize the key with a val of 1.
         *otherwise if the key already exists, increment its value 

 3.-lastly, create the list of values from the hash table, and find if there's
 a number higher than 1.

  */
  const numCounter = {}
     for(var i =0; i < nums.length; i++){
         if(numCounter[nums[i]] === undefined){
         // console.log("allocating new number:",nums[i])
         numCounter[nums[i]]=1
         // console.log("printing numCounter: ",numCounter[nums[i]])
         }
         else{
             // console.log("incrementing new number")
             numCounter[nums[i]] = numCounter[nums[i]] + 1;
             // console.log("printing numCounter: ",numCounter[nums[i]])
         }
     }  
     // console.log("outputting counted values")
     for(const [key, val] of Object.entries(numCounter)){
         if (val > 1){
             return true
         }
     }
     return false;
     //get the keys of the numCounter
};