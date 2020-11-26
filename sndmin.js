function tinhtong(){
    var tong=0;
    valn=1;
    while(tong<=10000){
        
        tong=(valn*(valn+1))/2;
        console.log(tong);
        if(tong>10000)
        {
            return valn;
        }
        valn++;
    }
}
document.getElementById("ketquasnd").addEventListener("click",function(){
    hienthi();
});
function hienthi(){
    tinhtong();
    document.getElementById("thongbaoketquasnd").innerHTML="Số n cần tìm là: "+ valn;
}
