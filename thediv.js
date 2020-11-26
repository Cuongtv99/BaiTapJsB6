function change_backgroud()
{
    document.getElementById("the1").style.display='block';
    document.getElementById("the2").style.display='block';
    document.getElementById("the3").style.display='block';
    document.getElementById("the4").style.display='block';
    document.getElementById("the5").style.display='block';
    document.getElementById("the6").style.display='block';
    document.getElementById("the7").style.display='block';
    document.getElementById("the8").style.display='block';
    document.getElementById("the9").style.display='block';
    document.getElementById("the10").style.display='block';
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++){
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0){
            divs[i].style.background = "red";
        }
        else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
        }
    }
}