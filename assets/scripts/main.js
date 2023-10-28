const shopping = document.querySelector(".store-bag")
const menuIcon = document.querySelector(".linear-icon")
const closeBox = document.querySelector(".close-menu")
const openLine = document.querySelector(".open-menu-line")
const scrollBarX = document.querySelector('.offer-slider-wrapper')
const hiddenMenu = document.querySelector('.hidden-big-menu')
const hiddenList = document.querySelectorAll('.hidden-menu-list a')
const hiddenMainMenu = document.querySelectorAll('.hidden-main-menu')
const sliderWrapper = document.querySelector('.big-slider-wrapper')
const bigSlider = document.querySelector('.big-slider-wrapper').children
const nextSlide = document.querySelector('.next')
const prevSlide = document.querySelector('.prev')
const control = document.querySelector('.control-box')
let totalSlider = bigSlider.length
let index = 0
const slideDuration = 5000
const sliderMenu = document.querySelector('.slider-menu')
const firstSlide = document.querySelector('.first-slide')
const lastSlide = document.querySelector('.last-slide')
const brandSliderMenu = document.querySelector('.brand-list')
const brandFirstSlide = document.querySelector('.brand-first-slide')
const brandLastSlide = document.querySelector('.brand-last-slide')




shopping.addEventListener('click', () => {
    document.querySelector(".open-store").classList.toggle('active');
})


menuIcon.addEventListener('click', () => {
    document.querySelector(".big-menu-wrapper").classList.add('active')
    document.querySelector(".main-menu").classList.add('active')
    document.querySelector(".category-main-menu").classList.add('active')
    closeBox.classList.add('active')
    document.querySelector(".open-store").classList.remove('active');
})

closeBox.addEventListener('click', () => {
    document.querySelector(".big-menu-wrapper").classList.remove('active')
    document.querySelector(".main-menu").classList.remove('active')
    document.querySelector(".category-main-menu").classList.remove('active')
    document.querySelector(".open-store").classList.remove('active')
    closeBox.classList.remove('active')
})

openLine.addEventListener('mouseover', () => {
    hiddenMenu.classList.add('active')
    document.querySelector(".open-store").classList.remove('active');
})


hiddenMenu.addEventListener('mousemove', () => {
    hiddenMenu.classList.add('active')
})

hiddenMenu.addEventListener('mouseout', () => {
    hiddenMenu.classList.remove('active')
})





for (let i = 0; i < hiddenList.length; i++) {
    hiddenList[i].onmouseover = () => {
        const displayList = hiddenList[i].getAttribute('data-filter')
        for (let j = 0; j < hiddenMainMenu.length; j++) {
            hiddenMainMenu[j].classList.remove('show')
            if (hiddenMainMenu[j].getAttribute('data-target') == displayList) {
                hiddenMainMenu[j].classList.add('show')
            }
        }
    }
}


sliderWrapper.addEventListener('mouseover' , () => {
    control.classList.add('active')
})




sliderWrapper.addEventListener('mouseout' , () => {
    control.classList.remove('active')
})



control.addEventListener('mouseover', () => {
    control.classList.add('active')
})


nextSlide.onclick = () => {
    changeSlide('next')
}


prevSlide.onclick = () => {
    changeSlide('prev')
}


function changeSlide(direction) {
    if (direction == 'next') {
        if (index == totalSlider - 1) {
            index = 0
        } else {
            index++
        }
    } else {
        if (index == 0) {
            index = totalSlider - 1
        } else {
            index--
        }
    }

    clearInterval(timer)
    timer = setInterval(autoSlide, slideDuration)

    for (let i = 0; i < bigSlider.length; i++) {
        bigSlider[i].classList.remove('active')
    }
    bigSlider[index].classList.add('active')

}


let timer = setInterval(autoSlide, slideDuration)

function autoSlide() {
    changeSlide('next')
}




firstSlide.addEventListener('click', () => {
    sliderMenu.scrollLeft += 310
    lastSlide.classList.add('active')


    if (sliderMenu.scrollLeft == 0) {
        firstSlide.classList.remove('active')
    } else {
        firstSlide.classList.add('active')
    }
})


lastSlide.addEventListener('click', () => {
    sliderMenu.scrollLeft -= 310
    firstSlide.classList.add('active')


    if (sliderMenu.scrollLeft == -maxScroll) {
        lastSlide.classList.remove('active')
    } else {
        lastSlide.classList.add('active')
    }

})


const maxScroll = sliderMenu.scrollWidth - sliderMenu.clientWidth









brandFirstSlide.addEventListener('click', () => {
    brandSliderMenu.scrollLeft += 310
    brandLastSlide.classList.add('active')


    if (brandSliderMenu.scrollLeft == 0) {
        brandFirstSlide.classList.remove('active')
    } else {
        brandFirstSlide.classList.add('active')
    }
})



brandLastSlide.addEventListener('click', () => {
    brandSliderMenu.scrollLeft -= 310
    brandFirstSlide.classList.add('active')


    if (brandSliderMenu.scrollLeft == -brandMaxScroll) {
        brandLastSlide.classList.remove('active')
    } else {
        brandLastSlide.classList.add('active')
    }

})


const brandMaxScroll = brandSliderMenu.scrollWidth - brandSliderMenu.clientWidth