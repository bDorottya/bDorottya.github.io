function closeMenu(){
    document.getElementById("menu").style.display = 'none';
}

function openNav(){
    document.getElementById("menu").style.display = 'block';
}

function toggleChip(skill){
    if(document.getElementById(skill).style.display == 'block'){
        document.getElementById(skill).style.display = 'none';
        document.getElementById(skill).style.opacity = 0;
    }else{
        document.getElementById(skill).style.display = 'block';
        document.getElementById(skill).style.opacity = 1;
    }
}

var modal1 = document.getElementById('firstModal');
var btn1 = document.getElementById("firstInfobtn");

var modal2 = document.getElementById('second-modal');
var btn2 = document.getElementById("secondInfobtn");

var modal3 = document.getElementById('third-modal');
var btn3 = document.getElementById("thirdInfobtn");


    btn1.onclick = function(){
        modal1.style.display = 'block'
    }

    btn2.onclick = function(){
        modal2.style.display = 'block'
    }

    btn3.onclick = function(){
        modal3.style.display = 'block'
    }
    
    window.onclick = function(event){
        if(event.target == modal1 || event.target == modal2 || event.target == modal3){
            modal1.style.display = 'none';
            modal2.style.display = 'none';
            modal3.style.display = 'none';
        }
    }


