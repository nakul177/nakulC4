async function apiCall(url) {

    try{
        let res = await fetch(url)

        let data = await res.json()
        
         let datamain = data.articles 
  
        return datamain


    }
catch(err){
    console.log(err)
}
  


}


function appendArticles(articles, main) {


articles.forEach((elem) => {


    let div = document.createElement("div")

    let div1  =  document.createElement("div")

    let img = document.createElement("img")
    img.src=elem.image

    let p1 = document.createElement("h3")
    p1.innerHTML=elem.title

    let p2 = document.createElement("p")
    p2.innerHTML=elem.description

    div1.append(p1,p2)
     div.append(img,div1)

      main.append(div)



})

}

export { apiCall, appendArticles }