
let rowData = document.getElementById("rowData");
let posts = "";
let req;
let links = document.getElementsByClassName("nav-link");


for(let i =0  ; i <links.length ; i++)
    {
        links[i].addEventListener("click", function(e){

            let category  = e.target.innerHTML;
            getNews(category);
            
        })
    }


getNews('technology');

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
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d34d49ce3a794aca80d1ae821239b0eb`
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

            temp +=` 
            
            <div class="col-md-3">
            <a href="${posts[i].url}">
                <div class="post">
                    <img class="img-fluid" src='${posts[i].urlToImage}' />
                     <h3>${posts[i].title}</h3>       
                     <p>post desc</p>
                </div> 
                </a>
            </div>
        `
        }
        rowData.innerHTML = temp;
}




