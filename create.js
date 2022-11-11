// credit for confeti to https://forum.squarespace.com/topic/167799-add-confetti-to-a-page/?do=findComment&comment=448254

function autofill(){
  document.getElementById("title").value="My Amazing Blog";
  document.getElementById("info").value="by:Amazing Student";
  document.getElementById("date").valueAsDate= new Date();
  document.getElementById("introt").value="What is Amazing";
  document.getElementById("introb").value="Amazing is something that is great. Amazing is something that is Amazing. Amazing is AmazingAmazing is something that is great. Amazing is something that is Amazing. Amazing is AmazingAmazing is something that is great. Amazing is something that is Amazing. Amazing is AmazingAmazing is something that is great. Amazing is something that is Amazing. Amazing is AmazingAmazing is something that is great. Amazing is something that is Amazing. Amazing is AmazingAmazing is something that is great. Amazing is something that is Amazing. Amazing is AmazingAmazing is something that is great. Amazing is something that is Amazing. Amazing is AmazingAmazing is something that is great. Amazing is something that is Amazing. Amazing is AmazingAmazing is something that is great. Amazing is something that is Amazing. Amazing is Amazing";
  document.getElementById("introimg").value="https://logos.textgiraffe.com/logos/logo-name/Amazing-designstyle-amazing-m.png";
  document.getElementById("body1t").value="Amazing 1";
  document.getElementById("body1b").value="I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.I like being amazing. Amazing people are amazing. being amazing is fun.";
  document.getElementById("body1img").value="https://kbimages1-a.akamaihd.net/51439e7b-e162-4696-8e0a-54e1134bf0ea/353/569/90/False/you-are-amazing.jpg";
  document.getElementById("body2t").value="Why be Amazing?";
  document.getElementById("body2b").value="Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.Because being amazing is fun. Because being amazing is amazing. Wohoo. Amazingness.";
  document.getElementById("body2img").value="https://m.media-amazon.com/images/I/41U5UWCOXzL._AC_SY780_.jpg";
  document.getElementById("footer").value="Remember to stay amazing because being amazing is amazing and being amazing is fun yall.";
}

function publish(){
  var newWin = open('url','windowName',);
  newWin.document.write('<!DOCTYPE html> <html lang="en">  <head>   <meta charset="utf-8">   <meta name="viewport" content="width=device-width">   <title>New</title>   <link href="blog.css" rel="stylesheet" type="text/css"> </head>  <body>  <header id = head>  <a href=personal.html><b>Home Page</b></a>  | <a href="new.html">Blogs</a>  | <a href="contact.html">Contact Me</a>  | <a href="https://nicholasaly.github.io/create.html">Publish Blog</a>  </header> <br>    <div id="titles"></div>    <div id="info"><br></div>   <br>   <div class="pl"><h1 id = "introt"></h1><img id="introimg" class="imr" src="" alt="blog pictue"><p id="introb"></p>  </div>   <div class="pr"><img id="body1img" src="" alt="blog picture" class="iml"><h2 id="body1t"></h2><p id="body1b"></p></div>      <div class="pl"><img id="body2img" class="imr" src="" alt="blog picture"><h2 id="body2t"></h2><p id="body2b"></p> <br>   </div>   <br>   <br> <script src="https://www.wpromotions.eu/confetti.min.js"></script><script>confetti.start()</script><script>setTimeout(function(){confetti.stop();},3000)</script> </body>  ');
  newWin.document.getElementById("titles").innerText = document.getElementById("title").value;
  newWin.document.getElementById("info").innerText = document.getElementById("info").value + "\n" + document.getElementById("date").value;
  newWin.document.getElementById("introt").innerText = document.getElementById("introt").value;
  newWin.document.getElementById("introb").innerText = document.getElementById("introb").value;
  newWin.document.getElementById("body1t").innerText = document.getElementById("body1t").value;
  newWin.document.getElementById("body1b").innerText = document.getElementById("body1b").value;
  newWin.document.getElementById("body2b").innerText = document.getElementById("body2b").value;
  newWin.document.getElementById("body2t").innerText = document.getElementById("body2t").value;
  newWin.document.getElementById("introimg").setAttribute("src", document.getElementById("introimg").value);
  newWin.document.getElementById("body1img").setAttribute("src", document.getElementById("body1img").value);
  newWin.document.getElementById("body2img").setAttribute("src", document.getElementById("body2img").value);
}

const btn1 = document.getElementById("auto");
const btn2 = document.getElementById("publish");

btn1.addEventListener("click", autofill);
btn2.addEventListener("click", publish);