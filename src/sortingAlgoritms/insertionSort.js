export default function insertionSort(array) {
    const animations=[]
    for(let i=1;i<array.length;i++){
          let j=i;
          while(j>0 && array[j]<array[j-1]){

            animations.push([j,j-1,"change-color","red"])
            animations.push([j,j-1,"change-color","turquoise"])
            animations.push([j,j-1,"change-color","purple"])

            swap(j,j-1,array)

            animations.push([j,j-1,"swap",""])
            j-=1
          }
           
        
      }
      return animations;
  }
  function swap(i,j,array){
          const temp=array[j]
          array[j]=array[i]
          array[i]=temp
  }
  