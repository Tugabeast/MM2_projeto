
function openFact(p1){
    document.getElementById("factBox").style.display = "block";
    if(p1 == 1){
        document.getElementById("texto").innerHTML = "curiosidade 1";
    }else{
        document.getElementById("texto").innerHTML = "curiosidade 2";
    }
}