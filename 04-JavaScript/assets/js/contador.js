var atual=0;

function increment(){
    atual=atual+1;
    if(atual >= 0){
        document.getElementById("numero").style.color = "green";
    }
    document.getElementById('numero').innerHTML=atual;
    
}
function decrement(){
    atual=atual-1;
    if(atual < 0){
        document.getElementById("numero").style.color = "red";
    }
    document.getElementById('numero').innerHTML=atual;
}