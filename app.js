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
        //div.style.display = "none";
        $(div).detach();
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
    var p = $("#myUL li:last").position(); 
    
    li.classList.add("ui-widget-content");
    li.classList.add("draggable");
    li.classList.add("absolute");
        
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    
    document.getElementById("myInput").value = "";

    $("li").resizable({
      maxHeight: 500,
      minHeight: 12,
      grid: [0, 12],
      handles: "s",
      create: function( event, ui ) {
            $(".ui-resizable-s").css("cursor","ns-resize");
      }
    });

    $("li").draggable({ 
        snap: ".droppable", 
        snapMode: "inner", 
        revert: "invalid",
        grid: [ 400, 12],
        stack: ".ui-draggable"
    });

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            var index = $(div).index();
            var i;
            var toDoElements = document.getElementById("myUL").children;
            for(i=index+1; i<$('#myUL li').length; i++) {
                var p3 = $(toDoElements[i]).position();
                var y4=p3.top;
                $(toDoElements[i]).offset({top: y4 -48});            
            }      
            $(div).detach();
        }
    }
    
    //Skapa listelementen ovanpå varandra så att alla syns trots position: absolute 
    if (p.top == 0) {} 
    else if(p.top==undefined) {}
    else {
        var y2 = p.top + 48;
        $(li).offset({top: y2 }); 
    }
    
}
