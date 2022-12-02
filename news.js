// api used is Inshorts-News-API by cyberboysumanjay
// api url https://github.com/cyberboysumanjay/Inshorts-News-API


// variable to input valid request types from api that are in html in checkboxs' ids
var checkList = ["business","sports","world","technology","entertainment","science","automobile" ];
// func();
// variable that will hold user selections
var checked = [];
// variable which will hold articles
var data = [];
// variables that will hold data needed for each news segment
var author = [];
var title = [];
var content = [];
var image = [];
var url = [];
var date = [];

// function to read user's selections
function userSelect() {
  checked = [];
  checkList.forEach(item => {
    let box = document.getElementById(item)
    if (box.checked == 1) {
      checked.push(item);
    }
  });
};

// this function gets all the data needed to build page
async function articles() {
  // resetting variables
  data = [];
  date = [];
  url = [];
  image = [];
  content = [];
  title = [];
  author = [];
  // by default we get top articles if no catagory selected
  if (checked[0] == null) {
    // getting all top articles from api
    data = await fetch('https://inshorts.deta.dev/news?category=all');
    // converting to json
    var jason = await data.json(); 
    console.log(jason.data)

    // loop to sort data received by type
    for (let i = 0; i < 10; i++) {
      author.push(jason.data[i].author);
      title.push(jason.data[i].title);
      content.push(jason.data[i].content);
      image.push(jason.data[i].imageUrl);
      url.push(jason.data[i].readMoreUrl);
      date.push(jason.data[i].date);
    }
  }
    // getting data based on catagory
  else{
    // knowing how many articles per catagory
    let count = Math.ceil(10/checked.length);
    // go through every cheked item and generate link then get data and loop through the number of articles per item.
    for (let i = 0; i < checked.length; i++) {
      let type = checked[i];
      // generating url to get news by catagory
      let link = "https://inshorts.deta.dev/news?category="+type;
      data = await fetch(link);
      var jason = await data.json(); 
      // looping through and sorting data received by type
      for (let i = 0; i < count; i++) {
        author.push(jason.data[i].author);
        title.push(jason.data[i].title);
        content.push(jason.data[i].content);
        image.push(jason.data[i].imageUrl);
        url.push(jason.data[i].readMoreUrl);
        date.push(jason.data[i].date);
      }
      
    }
  }
}

// function that build the page and sorts the content
function generatePage() {
  console.log("success")
  var parent = document.getElementById("content");
  parent.innerHTML = ''
  for (let i = 0; i < title.length; i++) {
    parent.innerHTML += "<div id = 'holder'>"+
      "<div id = 'top'>" +
     "<div id = 'title'>" + title[i]+ "</div>"+
     "<div id = 'author'> By: " + author[i] + "</div>"+
      "<div id = 'date'>" + date[i] + "</div>" +
      "</div>" +
      "<div id = 'mid'>" + 
      "<div id = 'content'>" + content[i]+ "</div>"+
      "<div id = 'url'><a href ='" + url[i] + "' target = '_blank'>Learn More!</a></div>"+
      "</div>" +
      "<div id = 'bottom'>" +
      "<div id = 'image'> <img src='" + image[i]+ "'alt ='article image'></div>"
      + "</div>" +"</div>";
  }
}


// button that runs function to update page to user's selections
document.getElementById("getNews").onclick = async function(){
  userSelect();
  console.log(checked);
  await articles();
  generatePage();
}
// window.onload = async function(){
//   userSelect();
//   console.log(checked);
//   await articles();
//   generatePage();
// }




