
export default function quickSort(array)
{
    const animations=[]

    quick_sort(0,array.length -1,animations,array);

    return animations
}

function quick_partition (start, end,animations,array)
{
    var i = start + 1;
    var piv = array[start] ;
    animations.push([start,start,"change-color","yellow"])

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (array[j]  < piv)
            {
               

                animations.push([i,j,"change-color","red"])

                swap(i,j,array)
                animations.push([i,j,"swap" ])
                animations.push([i,j,"change-color","turquoise"])

                i += 1;
            }
    }
    
    // animations.push([start,start,"change-color","red"])
    // animations.push([i-1,i-1,"change-color","red"])
    animations.push([i-1,start,"change-color","red"])
    animations.push([i-1,start,"change-color","turquoise"])
    
    swap(i-1,start,array)
    animations.push([i-1,start,"swap" ])

    return i-1;//return the position of the pivot
}

function quick_sort (start, end,animations,array )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end,animations,array ) ;     
        quick_sort (start, piv_pos -1,animations,array);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end,animations,array) ;//sorts the right side of pivot.
    }
 }
 function swap(i,j,array){
     console.log(i,j,array)
    const temp=array[i]
    array[i]=array[j]
    array[j]=temp
}