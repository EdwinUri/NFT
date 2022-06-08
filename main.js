var targetURL = 'mobil.html';
var iURL = 'index.html';
var dato=prompt("Si es Mobil dijite 1 o 2 si es PC");

if(dato==1){
    var targetURL = 'mobil.html';
    var newURL = document.createElement('a');
newURL.href = targetURL;
document.body.appendChild(newURL);
newURL.click();
setTimeout("redireccionar()", 1);
}
else if(dato==2){
    var iURL = 'index.html';
    function redireccionar(){
        location.href=pagina
    }
    setTimeout("redireccionar()", 1);

}
else{
    alert("Incorrecto, se tomara el tamaño principal");
    function redireccionar(){
        location.href=index
    }
    setTimeout("redireccionar()", 1);
}
