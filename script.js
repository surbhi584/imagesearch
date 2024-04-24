const accessKey="SwyqFw40Q8Msnko13jlZ1Sg5R_WIwsuphmwiV7LYGGk";
const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMore=document.getElementById("show-more-btn");

let keyword="";
let page=1;

async function searchImages(){
    keyword=searchBox.value;
    const url='https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}';
    
    const response=await fetch(url);
    const data=await response.json();
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=results.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=results.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
}
searchForm.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})