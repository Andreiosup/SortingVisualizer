export default function bubbleSort(array) {
    const animations=[]
    
      for (var i=0;i<array.length-1;i++){
         
          for (var j=0;j<array.length-1-i;j++){
              var next=j+1

              animations.push([j,next,"change-color","red"])
              animations.push([j,next,"change-color","turquoise"])

              if (array[j]>array[next]){
                  animations.push([j,next,"swap",""])
                  swap(j,next,array)
              }
          }
          animations.push([j-1,j,"change-color","purple"])

      }
     
      return animations
  }
  function swap(i,j,array){
      const temp=array[j]
      array[j]=array[i]
      array[i]=temp
  }