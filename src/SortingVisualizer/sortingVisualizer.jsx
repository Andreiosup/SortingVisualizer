
 import React,{useState,useEffect} from 'react';
 import './styles.css'

import selectionSort from '../sortingAlgoritms/selectionSort'
import bubbleSort from '../sortingAlgoritms/bubbleSort'
import insertionSort from '../sortingAlgoritms/insertionSort'
import quickSort from '../sortingAlgoritms/quickSort'
import mergeSort from '../sortingAlgoritms/mergeSort'

var arraySize=10

var sortingSpeed=1

function SortingVisualizer() {
  
  const [array,setArray]=useState([])
  

  useEffect(()=>{
    generateNewArray()
  },[])

  function generateNewArray(event){
    
    const array=[];
    
    console.log(arraySize)
    for(let i=1;i<=arraySize;i++){
      array.push(randomNumberFromIntevals(10,500))
    }

    setArray(array)
  }
  function generateNewArrayByPressingButton(event){
    if(event.target.classList.contains("disabled"))return;
    generateNewArray()
  }
  function changeArraySize(event){
    
    if(event.target.classList.contains("disabled"))return;
    arraySize=event.target.value
    generateNewArray()
  }
  function changeSortingSpeed(event){
    // console.log(sortingSpeed)
    // console.log(event.target)
    if(event.target.classList.contains("disabled"))return;
    let newSpeed=0
    switch(event.target.value){
      case "1":
        newSpeed=150
        break
      case "2":
        newSpeed=100
        break
      case "3":
        newSpeed=50
        break
      case "4":
        newSpeed=10
        break
      case "5":
        newSpeed=1
        break
      default:
        break;
      
    }
    sortingSpeed=newSpeed
    // console.log(sortingSpeed)
  } 
  
  const buttons=document.getElementsByClassName("header-buttons")

  function visualizeAlgorithm(algorithm){

    const algorithmButton=buttons[algorithm]
    console.log(algorithmButton)

    if(algorithmButton.classList.contains("disabled"))return;

    let animations=[]
    switch(algorithm){
      case 1:
        animations=selectionSort(array)
        console.log(animations)
        break;
      case 2:
        animations=bubbleSort(array)
        break
      case 3:
        animations=insertionSort(array)
        break
      case 4:
         animations=quickSort(array)
        break
      case 5:
        animations=mergeSort(array)
        break
      default:
        break;
      
    }
    animateAlgorithm(animations)
  }
  function disableButtons(){
   
    for(let button of buttons){
      button.classList.add("disabled")
      button.style.color="red"
    }
    console.log(buttons)
  }
  function animateAlgorithm(animations){

    disableButtons()

    const arrayBars=document.getElementsByClassName('array-bar')

    for (var i=0; i< animations.length;i++){

      const[barOneIndex,barTwoIndex,animationType,color]=animations[i]

      if(animationType==="change-color"){
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * sortingSpeed);
      }else if(animationType==="swap"){
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        setTimeout(() => {
       
         const temp=barOneStyle.height
         barOneStyle.height=barTwoStyle.height
         barTwoStyle.height=temp
       
        }, i * sortingSpeed);
      }else if (animationType==="overwrite-value"){
        const newHeight=barTwoIndex
        setTimeout(() => {
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * sortingSpeed);
      }
    }
    setTimeout(() => {
      for (let i=0;i<=arrayBars.length-1;i++){
        const barStyle=arrayBars[i].style
        barStyle.backgroundColor="lightgreen"
      }
     }, animations.length * sortingSpeed + 500);
    setTimeout(() => {
      for (let i=0;i<=arrayBars.length-1;i++){
        const barStyle=arrayBars[i].style
        barStyle.backgroundColor="turquoise"
      }
      for (let button of buttons){
        button.style.color="white"
        button.classList.remove("disabled")
      }
     }, animations.length * sortingSpeed +1500);
 
  }
 
  return (
    <div>
      <div className="header">
        <div className='logo'>Sorting Visualizer</div>
        <button className="header-buttons generate-new-array-button" onClick={generateNewArrayByPressingButton}>Generate new array</button>
        <div className="sorting-buttons">
          <button className="header-buttons sorting-button" onClick={() =>visualizeAlgorithm(1)}>Selection</button>
          <button className="header-buttons sorting-button" onClick={() =>visualizeAlgorithm(2)}>Bubble</button>
          <button className="header-buttons sorting-button" onClick={() =>visualizeAlgorithm(3)}>Insertion</button>
          <button className="header-buttons sorting-button" onClick={() =>visualizeAlgorithm(4)}>Quick</button>
          <button className="header-buttons sorting-button" onClick={() =>visualizeAlgorithm(5)}>Merge</button>
        </div>
       <div className="inputs">
          <div className="input">
              <label for="size" className="header-buttons">Array size</label>
              <input type="range" className="header-buttons" id="size" name="size" min="10" max="260"  onChange={changeArraySize} />
            </div>
          <div className="input">
            <label for="speed" className="header-buttons">Sorting speed</label>
            <input type="range" className="header-buttons"id="speed" name="size" min="1" max="5" onChange={changeSortingSpeed}/>
          </div>
       </div>
      </div>
     <div className="array-container" >
       {array.map((value,idx)=>(
       <div 
         className="array-bar" 
         style={{height:`${value}px`, width:`${(100/arraySize-0.2)}%`,margin:'0 0.1%'}} 
         key={idx}> 
      </div>
       ))}
      </div>
    
   </div>
  );
}
function randomNumberFromIntevals(minimum,maximum){
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
}
export default SortingVisualizer
