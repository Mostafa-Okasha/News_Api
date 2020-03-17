/*import { get } from "http";*/

let rowData = document.getElementById("rowData");
let posts = "";
let req;
let category;
let links = document.getElementsByClassName("nav-link");
for(let i =0  ; i <links.length ; i++)
{
    links[i].addEventListener("click", function(e){
        category  = e.target.innerHTML;
        getNews(category);
    });
}
getNews("general");
function getNews(category)
{
        if(window.XMLHttpRequest)
            {
                req = new XMLHttpRequest();
            }
        else
            {
                req = new ActiveXObject('Microsoft.Xmlhttp');
            }
            let url=`http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6aba64583ba8471e92ae0b53d6884d85`;
    
        req.open('GET' , url );

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
