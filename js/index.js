/*import { get } from "http";*/

let rowData = document.getElementById("rowData");
let posts = "";
let req;
let category="general";
let coun="us";
let links = document.getElementsByClassName("nav-link");
let country=document.getElementsByClassName("country");
getNews(category,coun);
for(let i =0  ; i <links.length ; i++)
{
    links[i].addEventListener("click", function(e){
        category  = e.target.innerHTML;
        getNews(category,coun);
        alert(category);
    });
}
for(let i =0  ; i <country.length ; i++)
{
    country[i].addEventListener("click", function(e){
        coun  = e.target.innerHTML;
        getNews(category,coun);
        alert(coun);
    });
}
function getNews(category,country)
{
        if(window.XMLHttpRequest)
            {
                req = new XMLHttpRequest();
            }
        else
            {
                req = new ActiveXObject('Microsoft.Xmlhttp');
            }
            req = new XMLHttpRequest();
            let url="http://newsapi.org/v2/top-headlines?country=" +country +"&category=" +category +"&apiKey=6aba64583ba8471e92ae0b53d6884d85";
    
        req.open('GET' , url );
        console.log(url);

        req.onreadystatechange =function()
        {

            if(req.status == 200 && req.readyState == 4)
                {
                    posts =  JSON.parse(req.response); 
                    posts = posts.articles;
                    displayData();
                }
        }

        req.send();

}
function displayData()
{
    let temp = ``;

    for(let i= 0 ;i<posts.length ; i++)
        {
            temp +=` <div class="col-md-4">
            <a href="${posts[i].url}">
                <div class="post">
                    <img class="img-fluid" src='${posts[i].urlToImage}'/>
                    <h1>Author:</h1>
                    <h3>${posts[i].author}.</h3>
                     <h5>${posts[i].title}</h5>
                     <p>${posts[i].content}</p>
                </div> 
                </a>
            </div>`
        }
        rowData.innerHTML = temp;
}
