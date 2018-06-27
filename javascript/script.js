//var sub = document.getElementById('submit');
var time = document.getElementById('time');
var body =document.getElementsByName('body');
var des = document.getElementById('des');
var add = document.getElementById('add-item');
var bar = document.getElementById('bar');
var plus = document.getElementById('plus');
var addmenu = document.getElementById('add-item-menu');
var data = document.getElementById('data');
var slidebox=document.getElementById('slider-box');
var counter = 0;
var color=[['green','yellow'],['blue','violet'],['dodgerblue','pink'],['violet','gold']];
function submit() {
    //alert(time.value + ' ' + des.value);
    var node = createNode(time.value,des.value);
    var e  =document.createElement('span');
    e.innerHTML =node;
    data.append(e);
    
}

function addItem() {
    counter++;
    if (counter == 1) {
        addmenu.style.marginTop = '48px';
        plus.className = 'fa fa-close';
    } else {
        addmenu.style.marginTop = '-110px';
        plus.className = 'fa fa-plus';
    }
    if (counter > 1) {
        counter = 0
    }
}

function createNode(time,todo)
{
    var random =Math.floor((Math.random()*10)/2.5);
    console.log(random);
    var element = `<div id="container" class="${todo}${time}" style="background-image: linear-gradient(45deg,${color[random][0]},${color[random][1]})">
        
                   <div id="content">
                   <div id="time-block"> <p>${time}</p></div>
                   <div id="do-block"><p>${todo}</p></div>
                   </div>
               
                   <div id="close-btn"><i class="fa fa-close fa-2x" aria-hidden="true" id="close-task"></i></div>
               
                   </div>`;
    return element;
}

function sliderOpen()
{
    slidebox.style.marginLeft='0%';
}
function sliderClose()
{
    slidebox.style.marginLeft='-85%';
}


var start = document.getElementById('DayStart');
var end = document.getElementById('DayEnd');
var inter =document.getElementById('TimeInter');
function submit2()
{
    if(start.value < end.value)
    {
        console.log(start.value,end.value,inter.value);    
    }
    else
    {
        notify('wrong choise');
    }
}

function notify(str)
{
    alert(str);
    var box = `<div id="not-box">
                    <p id="noti">${str}</p>
               </div>`;
    var element = document.createElement('span');
    element.innerHTML =box;
    
}