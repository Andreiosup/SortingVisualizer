export default function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations,array.length);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
    arrayLength
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations,arrayLength);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
    arrayLength
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
     
      animations.push([i, j,"change-color","red"]);
  
      animations.push([i, j,"change-color","turquoise"]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      
        animations.push([k, auxiliaryArray[i],"overwrite-value"]);
        
        mainArray[k++] = auxiliaryArray[i++];
      } else {
       
        animations.push([k, auxiliaryArray[j],"overwrite-value"]);
        
        if(middleIdx===Math.floor(arrayLength/2)){
            animations.push([i,j,"change-color","purple"]);
        }
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {

         
        animations.push([i, i,"change-color","red"]);
  
        animations.push([i, i,"change-color","turquoise"]);
     
      animations.push([k, auxiliaryArray[i],"overwrite-value"]);
      
      if(middleIdx===Math.floor(arrayLength/2)){
        animations.push([i, i,"change-color","purple"]);
      }
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
     
           
        animations.push([j, j,"change-color","red"]);
  
        animations.push([j, j,"change-color","turquoise"]);
      
      animations.push([k, auxiliaryArray[j],"overwrite-value"]);
      if(middleIdx===Math.floor(arrayLength/2)){
        animations.push([j,j,"change-color","purple"]);
    }
      mainArray[k++] = auxiliaryArray[j++];
    }
  }