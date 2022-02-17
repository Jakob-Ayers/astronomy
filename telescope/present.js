function nextSlide() {
    if (isLastSlide()) {
        console.log("Last Slide!")
    }
    else {
        currentSlide = parseInt(getCurrentSlide())

        document.getElementById(currentSlide).setAttribute("style", "display: none;")
        document.getElementById(currentSlide + 1).setAttribute("style", "display: block;")

        document.getElementById("slideInfo").setAttribute("currentslide", currentSlide + 1)
    }
}

function slideBack() {
    currentSlide = parseInt(getCurrentSlide()) 

    document.getElementById(currentSlide).setAttribute("style", "display: none;")
    document.getElementById(currentSlide - 1).setAttribute("style", "display: block;")

    document.getElementById("slideInfo").setAttribute("currentslide", currentSlide - 1)
}

function getCurrentSlide() {
    return (document.getElementById("slideInfo").getAttribute("currentslide"))
}

function isLastSlide() {
    totalSlides = document.getElementById("slideInfo").getAttribute("totalslides")
    currentSlide = parseInt(getCurrentSlide())
    if (currentSlide == totalSlides) {
        return (true)
    }
    else {
        return (false)
    }
}

function isFirstSlide() {
    if (parseInt(getCurrentSlide()) == 0) {
        return (true)
    }
    else {
        return (false)
    }
}