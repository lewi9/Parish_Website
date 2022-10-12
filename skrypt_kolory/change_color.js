function changeColor(col1, col2, col3)
{
  var a = document.getElementsByClassName("main_button");
  for(var i = 0; i<a.length; i++)
  {
    a[i].style.backgroundColor = col1;
  }
  a = document.getElementsByTagName("h1");
  for(var i = 0; i < a.length; i++)
  {
    a[i].style.backgroundColor = col1;
  }
  a = document.getElementsByTagName("ul");
  for(var i = 1; i < a.length; i++)
  {
    a[i].style.backgroundColor = col2;
  }
  a = document.getElementsByClassName("center_text");
  for(var i = 0; i<a.length; i++)
  {
    a[i].style.backgroundColor = col2;
    a[i].style.border = 'solid '+col1+' 2px';
  }
  a = document.getElementsByClassName("right_menu");
  for(var i = 0; i<a.length; i++)
  {
    a[i].style.backgroundColor = col2;
  }
  a = document.getElementsByClassName("open");
  for(var i = 0; i<a.length; i++)
  {
    a[i].style.backgroundColor = col3;
  }
  a = document.getElementsByClassName("close");
  for(var i = 0; i<a.length; i++)
  {
    a[i].style.backgroundColor = col3;
  }
  //dodane nowe
  a = document.getElementsByClassName("panel");
  for(var i = 0; i<a.length; i++)
  {
    a[i].style.backgroundColor = col1;
  }
  a = document.getElementsByClassName("tab");
  for(var i = 0; i<a.length; i++)
  {
    a[i].style.backgroundColor = col3;
  }
}

switch(color){
  case "White": changeColor("#cccccc", "#e6e6e6", "#b3b3b3"); break;
  case "Red":   changeColor("#ff9999", "#ffcccc", "#ff6666"); break;
  case "Rose":  changeColor("#ffb3e6", "#ffe6f7", "#ff80d5"); break;
  case "Green": changeColor("#9fdf9f", "#c6ecc6", "#79d279"); break;
  case "Purple":changeColor("#eb99ff", "#f5ccff", "#e066ff"); break;
  default:      changeColor("#cccccc", "#e6e6e6", "#b3b3b3");
}
