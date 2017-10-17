// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const submitButton = $(':submit');

submitButton.on('click', (e) => {
  e.preventDefault();
  makeGrid(setListener);
});


function makeGrid(callback) {
// Your code goes here!
    const height = $('#input_height').val();
    const width = $('#input_width').val();

    let canvas = "<table id='gridTable'>";

    for (let i = 0; i < height; ++i) {
      let row = "<tr>";
      for (let j = 0; j < width; ++j) {
        row += "<td></td>";
      }
      row += "</tr>";
      canvas += row;
    }

    if ($('#gridTable') !== null) {
        $('#gridTable').remove();
    }

    $('#pixel_canvas').append(canvas);
    callback();
}

const setListener = () => {
  const canvas = $('#pixel_canvas');
  canvas.on('click', 'td', (e) => {
    const color = $('#colorPicker').val();
    $(e.target).css('background-color', color);
  });
}
