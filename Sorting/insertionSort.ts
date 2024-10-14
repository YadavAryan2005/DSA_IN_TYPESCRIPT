let arr=[10,9,8,7,6,5,4,3,2,1];
function insertionSort(arr:number[]):number[]
{
  for(let i=0;i<arr.length;i++)
  { 
   for(let j=i;j>0;j--)
   {
     if(arr[j]<arr[j-1])
     {
       let temp=arr[j]
       arr[j]=arr[j-1]
       arr[j-1]=temp
     }
   }
  }
  return arr;
}
console.log(insertionSort(arr))