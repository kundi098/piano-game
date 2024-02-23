// finding the length of each section
var length = document.querySelectorAll(".key").length;
// alert(length);

// for loop for applying event listener 
for (var i = 0; i < length; i++) {
    document.querySelectorAll(".key")[i].addEventListener("click", function () {     ///event listener function
        var characters = this.innerHTML;
    
    makesound(characters);

    //function 2 for btn animation
    btn_animation(characters);
});

// event listener for keyboard press
addEventListener("keypress",function(event){
    makesound(event.key);

    //function 2 btn animaiton
    btn_animation(event.key);
})

var a = new Audio("tunes/a.mp3");
var d = new Audio("tunes/d.mp3");
var e = new Audio("tunes/e.mp3");
var f = new Audio("tunes/f.mp3");
var g = new Audio("tunes/g.mp3");
var h = new Audio("tunes/h.mp3");
var j = new Audio("tunes/j.mp3");
var k = new Audio("tunes/k.mp3");
var l = new Audio("tunes/l.mp3");
var m = new Audio("tunes/m.mp3");
var o = new Audio("tunes/o.mp3");
var p = new Audio("tunes/p.mp3");
var s = new Audio("tunes/s.mp3");
var t = new Audio("tunes/t.mp3");
var u = new Audio("tunes/u.mp3");
var w = new Audio("tunes/w.mp3");
var y = new Audio("tunes/y.mp3");


//function one for clicking
function makesound(key) {
    


    switch (key) {
        case "a":
            
            a.play();

            break;

        case "s":
            
            s.play();

            break;
        case "d":
            
            d.play();

            break;
        case "f":
            
            f.play();

            break;
        case "g":
            
            g.play();

            break;
        case "h":
            
            h.play();

            break;
        case "j":
            
            j.play();

            break;
        case "k":
            
            k.play();

            break;
        case "l":
            
            l.play();

            break;
        case "m":
            
            m.play();

            break;
        case "w":
            
            w.play();

            break;
        case "e":
            
            e.play();

            break;
        case "t":
            
            t.play();

            break;
        case "y":
            
            y.play();

            break;
        case "u":
            
            u.play();

            break;
        case "o":
            
            o.play();

            break;
        case "p":
            
            p.play();

            break;


        default:
            alert("something went wrong please wait a moment!!!")
            break;
    }
}
}

function btn_animation(key){
    var btn = document.querySelector("."+ key);
    btn.classList.add("pressed");
    setTimeout(function() {
        btn.classList.remove("pressed");
}, 100);
}