/**
 *
 * Library: Zuk.js
 * Author: Nicolo Sirbildze
 * Website: https://felfets.com/zukjs
 * donate link: 
 * Github: https://github.com/Nicolooo/zuk.js
 * Buymeacoffe:
 * Description: Feel free to customize and contribute to the project our main mission is to Simplify Boring Tasks and create community driven library 
 *
 */

function _(selector)
{
  const self = {
    element: document.querySelector(selector),
    html: ()=> self.element,
    eye: (event, callback) => {
      self.element.addEventListener(event, callback)
    },
    hide: ()=> {
      self.element.style.display = 'none'
    },
    show: (type)=>{
        self.element.style.display = type
    },
    align: (val)=>{
        self.element.style.textAlign = val
    },
    typeEfffect:(txt,speed)=>{
        var i = 0;
        function ty(){
            if (i < txt.length) {
                self.element.innerHTML += txt.charAt(i);
                i++;
                setTimeout(ty, speed);
            }
        }
        ty();
    },
    randomColor:()=>{
       var Clqadwefe = Math.floor(Math.random()*16777215).toString(16);
        self.element.style.color = "#"+ Clqadwefe;
    },
    randomBgColor:()=>{
       var Clqadwefea = Math.floor(Math.random()*16777215).toString(16);
        self.element.style.backgroundColor = "#"+ Clqadwefea;
    },
    randomVal:(arr)=>{
        const random = Math.floor(Math.random() * arr.length);
         self.element.innerHTML = arr[random];
    },
    clock:()=>{
        function runClock(){
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes(); 
            var s = date.getSeconds(); 
            var session = "AM";
            
            if(h == 0){
                h = 12;
            }
            
            if(h > 12){
                h = h - 12;
                session = "PM";
            }
            
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
            
            var time = h + ":" + m + ":" + s + " " + session;
            self.element.innerText = time;
            self.element.textContent = time;
            
            setTimeout(runClock, 1000);
            
        }

        runClock();
    },

    // Fetch Api and Console log it
    xab:(inpt)=>{
        fetch(inpt)
        .then(response => response.json())
        .then(data => console.log(data));
    },

    lizz:(date,expiredtxt)=>{
        var countDownDate = new Date(date).getTime();
        // Update the count down every 1 second
        var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element with id="demo"
        self.element.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            self.element.innerHTML = expiredtxt;
        }
        }, 1000);
    },
  }
  return self
}