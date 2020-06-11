
const findInput = document.querySelector('.find-input')
const replaceInput = document.querySelector('.replace-input')
const replaceAllButton = document.querySelector('.replace-all-button')

const rowElements = document.querySelectorAll('.row')

// When you call the function below, it will get and return an INNER ARRAY containing the cell elements for a given row.

// Call this function from WITHIN your row elements loop. Then you will, in turn, need to loop over the resulting cell elements. 

//But where should this whole NESTED LOOP go? Think through the user's experience: when should WHAT happen? 

//Inside this loop, use the getCellElements() function (already provided in the starter code) and assign the resulting array of cell elements to a variable.

function getCellElements(currentRowElement){ 
   return currentRowElement=document.querySelectorAll('.cell');
}


// YOUR CODE GOES HERE

//search and replace inputs
replaceAllButton.addEventListener('click',function(){
    const searchString = findInput.value.toLowerCase().trim();

    const replaceString=replaceInput.value;

//outerLoop
for (let rowIndex=0; rowIndex<rowElements.length; rowIndex+=1){
  const rowSection= getCellElements(rowElements[rowIndex]);

 //innerLoop
   for (let cellIndex=0; cellIndex<rowSection.length; cellIndex +=1){        
        const cellItem=rowSection[cellIndex].innerHTML;

        const cellSearch =cellItem.toLowerCase()

       //console.log(rowSection[cellIndex].innerHTML)

   if(cellSearch.includes(searchString)){

    const res=cellSearch.replace(searchString, replaceString)

    rowSection[cellIndex].innerHTML=res

}     
}       
}
})



