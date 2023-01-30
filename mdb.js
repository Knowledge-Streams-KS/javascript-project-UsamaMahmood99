const name=document.getElementById("Mname");
const year=document.getElementById("Myear");
const button=document.getElementById("btn");

button.addEventListener("click",()=>{getMovie(name)});
async function getMovie(pname)
{
    const movieDet=document.getElementById("disp");
    movieDet.innerHTML="";
    const resp=await fetch(`http://www.omdbapi.com/?s=${pname.value}&apikey=2883cf86`);
    const data=await resp.json();
    
    let marr=data.Search.map(function(element){return element});
   
    if(year.value!="")
    {
     marr=marr.filter(function(element){if(element.Year==year.value){return element;}});
    }
    console.log(marr);
    

    

     marr.map(addMovies)
    // marr.map((element)=>{
    //     const pos=document.getElementById("disp");
        
    //      const Tba=`<div class="movieCard"><img class="imgWork" src=${data.Poster}/>     
    //      <h2>${data.Title}</h2>
    //      <h3>${data.Year}</h3>        
    //      </div>`
    //      pos.insertAdjacentElement("beforeend",Tba)

    // })
    // (element)=>
    // {   const pos=document.getElementById("disp");
        
    //     const Tba=`<div class="movieCard"><img class="imgWork" src=${data.Poster}/>     
    //     <h2>${data.Title}</h2>
    //     <h3>${data.Year}</h3>        
    //     </div>`
    //     pos.insertAdjacentElement("beforeend",Tba)
    // }
}
  function addMovies(data){
      const movieDet=document.getElementById("disp");

      const movieDetails=` <div class="movieCard">
      <img class="imgWork" src=${data.Poster}    alt="movieImg">
      <h2>${data.Title}</h2>
      <h3>${data.Year}</h3>
    
     </div>`
   
     movieDet.insertAdjacentHTML("afterbegin",movieDetails);
 }