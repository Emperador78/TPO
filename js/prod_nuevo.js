function guardar() {
    let c = document.getElementById("category").value
    let n = document.getElementById("name").value
    let i = document.getElementById("image").value
    let d = document.getElementById("description").value
    let e = document.getElementById("descriptionExt").value
    let p = parseFloat(document.getElementById("price").value)
    
    

   

    let producto = {
        category: c,
        name: n,
        image: i,
        description: d,
        descriptionExt: e,
        price: p
          
    }
    let url = `https://manliowydler23010.pythonanywhere.com/productos`
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "./admin.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
