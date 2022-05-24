// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const table= document.getElementById('pixelCanvas');
const gridHeight= document.getElementById('inputHeight');
const gridWidth= document.getElementById('inputWidth');
const form = document.getElementById('sizePicker');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // the below code will help to clear the table
  table.innerHTML="";
  //  jquery code comment out below
  // $("#pixelCanvas tr").remove();

  // retrieve the inputHeight and inputWidth
//   const text = document.getElementById('formInput').value;
  
  // create grid
  // based on inputHeight, create rows in the table
  // based on inputWidth, create the cells in each row
  
  const tableElem = document.getElementById('pixelCanvas');
  
  let numberOfRows = gridHeight.value;
   let numberOfCols = gridWidth.value;
  for (let i = 0; i < numberOfRows; i++) {
      let rows= table.insertRow(i);
      
      
      for (let j = 0; j < numberOfCols; j++) {
       
        let Cols=rows.insertCell(j);
        let cell = document.querySelectorAll('td');
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function (event) {
    

//wanna add color to the background of the cell
            
    const colorValue = document.getElementById('colorPicker').value;
    event.target.style.backgroundColor = colorValue;
        
 
  });

  }
}


}
});



  


  

 

  