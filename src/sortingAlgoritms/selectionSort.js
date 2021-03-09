export default function selectionSort(array) {
    
    const animations=[]
    for (let i=0;i<array.length-1;i++){
           let minIndex=i
            for (let j=i+1;j<array.length;j++){
               
                animations.push([i,j,"change-color","red"])
                animations.push([i,j,"change-color","turquoise"])
                
                  if(array[minIndex]>array[j]){
                      minIndex=j   
                  }     
          }
          swap(i,minIndex,array)
          animations.push([i,minIndex,"swap",""])
          if(i===array.length-2){
            animations.push([i,array.length-1,"change-color","purple"])
          }else{
            animations.push([i,minIndex,"change-color","purple"])
          }
      }
      
      return animations;
  }
function swap(i,j,array){
	const temp=array[j]
	array[j]=array[i]
	array[i]=temp
}