
var args = location.search.substr(1).split('&');  



var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(parts[0][1]);


document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("category").value = decodeURIComponent(parts[1][1])
document.getElementById("name").value = decodeURIComponent(parts[1][1])
document.getElementById("image").value =decodeURIComponent( parts[5][1])
document.getElementById("description").value =decodeURIComponent( parts[3][1])
document.getElementById("descriptionExt").value =decodeURIComponent( parts[4][1])
document.getElementById("price").value = decodeURIComponent(parts[2][1])



function modificar() {
    let id = document.getElementById("id").value
    let c = document.getElementById("category").value
    let n = document.getElementById("name").value
    let i = document.getElementById("image").value
    let d = document.getElementById("description").value
    let e = document.getElementById("descriptionExt").value
    let p = parseFloat(document.getElementById("price").value)
    
    
   
    let producto = {
        category:c,
        name: n,
        image:i,
        description:d,
        descriptionExt:e,
        price: p
        
    }
    let url = "https://manliowydler23010.pythonanywhere.com/productos/"+id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "./admin.html";  
        //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
