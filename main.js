
let theInput = document.querySelector('.get-repos input')
let getButton = document.querySelector('.get-button')
let reposDate = document.querySelector('.show-data span')

getButton.onclick = function(){
    getRepose()
}

function getRepose(){
    if(theInput.value == ""){
        reposDate.innerHTML = '<span> Please Write Github User name.</span> '
    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((res)=>res.json())
        .then((repositories)=>{
            reposDate.innerHTML=''
            repositories.forEach(rep =>{
                console.log(rep.name)
                //creat The main Div
                let mainDiv = document.createElement('div')
                let textDiv = document.createTextNode(rep.name)
                //append the Text To Div
                mainDiv.append(textDiv)
                //CREAT Repo Url 
                let link = document.createElement('a')
                let textLink = document.createTextNode('visit')
                //Append link to text lInk
                link.append(textLink)
                // href
                link.href =`https://github.com/${theInput.value}/${rep.name} `
                //open windo new
                link.setAttribute('target','_blank')
                // append link to main DIv 
                mainDiv.appendChild(link)
                // add to start
                let startSpan = document.createElement('span')
                let textStart= document.createTextNode(`Start ${rep.stargazers_count}`)
                // append start 
                startSpan.appendChild(textStart)
                //append start to main div
                mainDiv.appendChild(startSpan)

                // add class to mainDiv
                mainDiv.className = 'repo-box'
                // append the name to Container
                reposDate.appendChild(mainDiv)
            })
        })
    }
}

