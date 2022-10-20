let returnSmaller = (arr, num) => {
  return arr.reduce((acc, curr)=>{ 
    if(curr < num){
      return acc.concat(curr)
    }else{
      return acc
    }
  }, []) 
}
 
 
console.log(returnSmaller([6, 46, 54, 6, 56, 54, 65, 4, 65], 18))