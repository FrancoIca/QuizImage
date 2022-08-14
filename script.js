
// obj function
const obj = [
    {
        img: ['img_1/bottle-g6a08408a6_1920.jpg', 'img_1/family-gcbd7f30c4_1920.jpg', 'img_1/mask-g4b521cba5_1920.jpg', 'img_1/pandemic-g76ad2db7d_1920.jpg'],
        key: 'Pandemia',
    },
    {
        img: ['img_2/cold-g6ec49bc88_1920.jpg', 'img_2/hd-wallpaper-ga4efb9779_1920.jpg', 'img_2/iceberg-g4534132b1_1920.jpg', 'img_2/soap-bubble-ga295c4689_1920.jpg'],
        key: 'Invierno',
    },
    {
        img: ['img_3/cat-ge70a90e41_1920.jpg', 'img_3/jaguar-g7fb27f316_1920.jpg', 'img_3/lion-gb5896ca3c_1920.jpg', 'img_3/tiger-g1ea05d459_1920.jpg'],
        key: 'Felino',
    },
    {
        img: ['img_4/air-2260_1920.jpg', 'img_4/beach-2836300 (1).jpg', 'img_4/ice-cream-1274894_1920.jpg', 'img_4/thermometer-3581190_1920.jpg'],
        key: 'Verano',
    }
]

function objIterate(){
    let result = []
    for (objets in obj){
        result.push(obj[objets])
    }
    return result
}

const imgCont = document.querySelector('.img__cont')

// this function create a innerHTML whit the element that pass in his parameter
function appendImg(elem){
    let appendToHtml = ''
    let images = objIterate()[number].img
    for (let img in images){
        appendToHtml += `
            <div><img class='img' src='${images[img]}'></div>
        `
    }
    elem.innerHTML = appendToHtml
}

// this function return the key word of image
function keywords(){
    let keyword = objIterate()[number].key
        
    return keyword
}

function levelCount(elem){
    let appendToHtml = ''
    let levelArr = []
    for (levels in obj){
        levelArr.push(parseInt(levels) + 1)
    }
    appendToHtml += `
    <div class='level'>
        <p>
            level ${number + 1} / ${levelArr.length}
        </p>
    </div>
`
    elem.innerHTML = appendToHtml
}


const text = document.getElementById('input-text')
const send = document.querySelector('.btn-submit')

const winMsg = document.getElementById('win-msg')
const errMsg = document.getElementById('error-msg')

const titleContent = document.getElementById('title-content')

let number = 0

appendImg(imgCont)
levelCount(titleContent)


const WIN_MSG = '<p>¡Bien! Has pasado al siguiente nivel</p>'

const WRONG_MSG = '<p>Intentalo de nuevo</p>'

const INFO_MSG = '<p>¡Felicitaciones! Has pasado todos los niveles disponibles</p>'

send.addEventListener('click', ()=> {
    if(text.value.toUpperCase() === keywords().toUpperCase().trim() && number + 1 < 4){
        number += 1
        winMsg.classList.add('show')
        text.value = ''
        winMsg.innerHTML = WIN_MSG
        load.style.opacity = '1'
        load.style.visibility = 'visible' 
        let notification = setTimeout(()=>{
            winMsg.classList.remove('show') 
        }, 2000)
        
        let change = setTimeout(()=>{
            load.style.opacity = '0'
            load.style.visibility = 'hidden'
            keywords()
            appendImg(imgCont)
            levelCount(titleContent)
        }, 1000)


    } else if (text.value.toUpperCase() != keywords().toUpperCase() && number + 1 <= 4) {
        text.value = ''
        errMsg.classList.add('show')
        errMsg.innerHTML = WRONG_MSG
        setTimeout(()=>{
            errMsg.classList.remove('show')
        }, 2000)
    } else{
        winMsg.classList.add('show')
        winMsg.innerHTML = INFO_MSG
        setTimeout(()=>{
            winMsg.classList.remove('show')
        }, 2000)
    }
})

window.addEventListener('load', ()=>{
  const load = document.getElementById('load')
  
  load.style.opacity = '0'
  load.style.visibility = 'hidden'
})

// TODOs thigns to do

// - Puntuation system
// - more levels