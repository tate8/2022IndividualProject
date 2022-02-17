
let eraser = document.querySelector('.eraser')
let pencil = document.querySelector('.pencil')
let clear = document.querySelector('.clear')

let pencilActive = true;

let setEraserActive = function() {
    eraser.classList.add('active')
    pencil.classList.remove('active')
    pencilActive = false;
}
let setPencilActive = function() {
    eraser.classList.remove('active')
    pencil.classList.add('active')
    pencilActive = true;
}

// change drawing tool
eraser.addEventListener('click', setEraserActive);
pencil.addEventListener('click', setPencilActive);


// get handle to canvas element
const paintCanvas = document.querySelector( '.paint-canvas' );
const context = paintCanvas.getContext( '2d' );

// get flashcard dimensions and set canvas's dimensions to them
width = document.querySelector('.flashcard').clientWidth;
height = document.querySelector('.flashcard').clientHeight;
context.canvas.width = width;
context.canvas.height = height;


let clearCanvas = function()
{
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
clear.addEventListener('click', clearCanvas);



let x = 0, y = 0;
let isMouseDown = false;

// on mouse out/up
const stopDrawing = () => { isMouseDown = false; }

// on mouse down
const startDrawing = event =>
{
    isMouseDown = true;   
    [x, y] = [event.offsetX, event.offsetY];  
}

// on mouse move
const drawLine = event =>
{
    // checks if pencil mode is on
    if ( isMouseDown && pencilActive )
    {
        const newX = event.offsetX;
        const newY = event.offsetY;
        context.beginPath();
        context.strokeStyle = 'black'
        context.lineCap = 'round';
<<<<<<< HEAD
<<<<<<< HEAD
        context.lineWidth = 15;
=======
        context.lineWidth = 20;
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
=======
        context.lineWidth = 20;
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
        context.moveTo( x, y );
        context.lineTo( newX, newY );
        context.stroke();
        x = newX;
        y = newY;
    }
    // checks if erase mode is on
    else if (isMouseDown && !pencilActive)
    {
        const newX = event.offsetX;
        const newY = event.offsetY;
        context.beginPath();
        context.strokeStyle = 'white'   // drawing white to 'erase'
        context.lineCap = 'round';
        context.lineWidth = 30;         // slightly bigger
        context.moveTo( x, y );
        context.lineTo( newX, newY );
        context.stroke();
        x = newX;
        y = newY;
    }
}

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
=======
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
paintCanvas.addEventListener( 'mousedown', startDrawing );
paintCanvas.addEventListener( 'mousemove', drawLine );
paintCanvas.addEventListener( 'mouseup', stopDrawing );
paintCanvas.addEventListener( 'mouseout', stopDrawing );

function checkButtonClicked()
{
    let canvasHeight = context.canvas.clientHeight;
    let canvasWidth = context.canvas.clientWidth;
    let imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
<<<<<<< HEAD
<<<<<<< HEAD

=======
 
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
=======
 
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
    let greyImageData = []

    // each pixel in image data is              [R, G, B, A]
    // all black pixels are represented as      [0, 0, 0, 255]

<<<<<<< HEAD
<<<<<<< HEAD
    // this just parses out all the alpha channels and stores them into greyImageData
    console.log(imageData)
=======
    // this just parses out the all black pixels and stores them into greyImageData
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
=======
    // this just parses out the all black pixels and stores them into greyImageData
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
    for (let i = 3; i < imageData.data.length; i += 4) {
        let greyPixel = imageData.data[i]

        greyImageData.push(greyPixel)
    }

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
=======
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
    // send an ajax POST request to my flask server with all the pixel data
    $.ajax({
        url: '/post-pixel-data',
        type: 'POST',
        ContentType: 'application/json',
        data: {data: greyImageData}
<<<<<<< HEAD
<<<<<<< HEAD
      }).done(function()
      { // reload page
        window.location.href = '/cards';
=======
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
=======
>>>>>>> 991e8faedbd6d07713d6b15d1f9b424465cd45b7
      }).fail(function(jqXHR, textStatus, errorThrown)
      { // if ajax POST request fails
        alert('Something went wrong. error: ' + errorThrown);
      });
}

let checkButton = document.querySelector('.check-word');
checkButton.addEventListener( 'click', checkButtonClicked);