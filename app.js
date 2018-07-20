// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");

  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
    
    //Get position av senast elementet för att kunna placera nästa under
    var p = $("li:last").position(); 
        
    //Lägger till eget, så att nya element kan flyttas till schemat
    var uniq = 'id' + (new Date()).getTime();
    li.setAttribute("id", uniq);
    li.classList.add("ui-widget-content");
    li.classList.add("draggable");
    li.classList.add("absolute");
        
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
    
  document.getElementById("myInput").value = ""; //Nollställer rutan när man lagt till liksom

    $("li").resizable({
      maxHeight: 500,
      minHeight: 11.375,
      grid: 11.375,
      handles: 's, w', 
      start: function(event,ui){
      }
    });

    $("li").draggable({ 
        snap: ".droppable", 
        snapMode: "inner", 
        revert: "invalid",
        grid: [ 400, 11.375 ],
        stack: ".ui-draggable",
        });

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
    
       //Försöker skapa listelementen ovanpå varandra så att alla syns trots position: absolute 
    if (p.top == 0) {} 
    else {
        var y2 = p.top + 45.5;
        $(li).offset({top: y2 }); 
    }
    
}

