function tinhtong(soNguyen, soMu){
    var valtong=0;
    var vallt=1;
    for(var i=0; i<soMu;i++)
    {
        vallt=soNguyen*vallt
        valtong+=vallt;
    }
    console.log(valtong,vallt,soNguyen,soMu,i);
    return valtong;
}
function Nhap()
{
    var soNguyen=parseInt(document.getElementById("stn").value);
    var soMu=parseInt(document.getElementById("luythua").value);
    ketqua=tinhtong(soNguyen,soMu);
}
document.getElementById("ketqualt").addEventListener("click", function(){
    hienthi();
});
function hienthi(){
    Nhap();
    document.getElementById("thongbaolt").innerHTML="Tổng là: "+ketqua;
}
