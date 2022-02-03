let selectedColor = 'blue'

const changeColor = e => selectedColor = e.target.id
    

const blue = document.querySelector("#blue")
blue.style.cursor = 'pointer'
blue.addEventListener('click', changeColor)

const red = document.querySelector("#red")
red.style.cursor = 'pointer'
red.addEventListener('click', changeColor)

const yellow = document.querySelector("#yellow")
yellow.style.cursor = 'pointer'
yellow.addEventListener('click', changeColor)

const green = document.querySelector("#green")
green.style.cursor = 'pointer'
green.addEventListener('click', changeColor)

const pixels = document.querySelectorAll('.pixel');
for(let i = 0; i < pixels.length; i++){
    let color = pixels[i].style.backgroundColor
    pixels[i].addEventListener('mouseover', (e) => {
         e.target.style.backgroundColor = 'grey'
    })
    pixels[i].addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = color
   })

   pixels[i].addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
    color = selectedColor
})
}


green.style.border = '1px solid black'

red.style.border = '1px solid black'

blue.style.border = '1px solid black'

yellow.style.border = '1px solid black'


