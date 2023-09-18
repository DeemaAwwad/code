var nums=[2,7,11,15];

target=9;

function twoSum(nums,target){
    
    for(var i=0;i<nums.length;i++){
      
        var value=target - nums[i];
      
        if(nums.includes(value)&&nums.indexOf(value)!==i){
        console.log(i,nums.indexOf(value));
        return;
    } 
   
    }

 
  
}

