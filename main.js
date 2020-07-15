

// var item = ['this is it'/*, 'Tayo', 'Sunday', 'Ola', 'Adebare','Tayo', 'Sunday', 'Ola', 'Adebare','Tayo', 'Sunday', 'Ola', 'Adebare','Tayo', 'Sunday', 'Ola', 'Adebare'*/]

function listNew(item, image) {
    var newLi = document.createElement('li')
    var span1 = document.createElement('span')
    var span2 = document.createElement('span')
    span2.className ='ml-3'
    span1.innerHTML= item
    span2.innerHTML='<img class="imgy" src="'+ image +'" alt="IMG">'
    newLi.className = "list-group-item d-flex justify-content-between bg-light text-dark rounded my-2"


    newLi.appendChild(span1)
    newLi.appendChild(span2)

    console.log(newLi)
    document.querySelector('.News-list').appendChild(newLi)
}

document.querySelector('.date').style.display = 'none'






// axios.get(`http://api.icndb.com/jokes/random/${val}`).then(res =>{/* Reset btn*/}).catch(err => {/* Reset btn*/}) 


axios.get(`https://api.breakingapi.com/news?q=climate&type=headlines&locale=en-NG&api_key=699F361FF61F406582CB05D9556E3281`).then(res =>{
    /* Reset btn*/
    console.log(res.data)
    var display = res.data.articles
    for (var i = 0; i < display.length; i++){
        var upDisplay = display[i].snippet
        headLines(upDisplay)
        console.log(upDisplay)
    }
    for (var i = 0; i < display.length; i++){
        var upDisplay = display[i].title
        var upImage = display[i].image_links
        listNew(upDisplay, upImage)
    }
    document.querySelector('.News-list').addEventListener('click',function(e){
        var textUpdate = document.querySelector('.topic')
        textUpdate.innerHTML =  e.path[0].textContent
        document.querySelector('.date').style.display = 'block'
        
    
    })
}).catch(err => {
    /* Reset btn*/
    console.log(err)
})

function headLines(item){
    var newP = document.createElement('p')
    var span1 = document.createElement('span')
    span1.textContent = '. '
    newP.className = 'd-inline'
    newP.textContent = item

    newP.appendChild(span1)    

    document.querySelector('.text-update').appendChild(newP)
}



