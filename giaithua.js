function giaithua(valgt){
    if(valgt==1)
    {
        return 1;
    }else{
        return valgt*giaithua(valgt-1);
    }
}
function giatrigt(){
    var valgt=document.getElementById("gt").value;
    console.log(valgt);
    ketqua=giaithua(valgt);  
    return ketqua;
}
document.getElementById("ketquagt").addEventListener("click",function(){
    hienthigt();
});
function hienthigt(){
    giatrigt();
    document.getElementById("tbketquagt").innerHTML="Kết quả giai thừa là: "+ ketqua;
}