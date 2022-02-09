function nextSlide() {
    currentSlide = document.getElementById("currentSlide").getAttribute("slide")

    document.getElementById(currentSlide).setAttribute("style", "display: none;")
    document.getElementById(parseInt(currentSlide) + 1 ).setAttribute("style", "display: block;")

    document.getElementById("currentSlide").setAttribute("slide", parseInt(currentSlide) + 1)
}

function slideBack() {
    currentSlide = document.getElementById("currentSlide").getAttribute("slide")

    document.getElementById(currentSlide).setAttribute("style", "display: none;")
    document.getElementById(parseInt(currentSlide) - 1 ).setAttribute("style", "display: block;")

    document.getElementById("currentSlide").setAttribute("slide", parseInt(currentSlide) - 1) 
}