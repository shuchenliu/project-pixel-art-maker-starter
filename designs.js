// select sizePicker
const sizePicker = document.getElementById('sizePicker');

// add event listener to sizePicke and trigger canvas painting
sizePicker.addEventListener('submit', (e) => {
  e.preventDefault();
  makeGrid();
});


// function that creates the table per user's customization
function makeGrid() {
    //remove previous table if exists
    $('#gridTable').remove();
    const height = document.getElementById('input_height').value;
    const width = document.getElementById('input_width').value;


    // create table
    const table = document.createElement('table');
    table.id = "gridTable";

    // add rows and columns to the table
    for (let i = 0; i < height; ++i) {
      const row = table.insertRow(i);
      for (let j = 0; j < width; ++j) {
        const cell = row.insertCell(j);

        // add event listener to each cell such that
        // it is fillied with selected color when clicked
        cell.addEventListener('click', (e) => {
          changeColor(e);
        });
      }
    }

    // append the table to the canvas
    document.getElementById('pixel_canvas').append(table);
}

// helper module that actually adds event listener to cll
const changeColor = (e) => {
  const color = document.getElementById('colorPicker').value;
  e.target.style.backgroundColor = color;
}
