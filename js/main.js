const {createApp}=Vue 

  createApp({
    data() {
      return {
        url:"https://manliowydler23010.pythonanywhere.com/productos",
        products:[],
        error:false,
        cargando:true
      }
    },
    // Se llama después de que la instancia haya 
    // terminado de procesar todas las opciones relacionadas con el estado.
    created() {
        this.fetchData(this.url)  // Invocando a la funcion
    },
    methods: {
        
        fetchData(url) {
           
            // Acá se consume la Api
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.products = data;
                    this.cargando=false
                    console.log(this.products);
                    
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        // producto; es el id que necesita para buscar en la DB y eliminarlo
        eliminar(product) {
            const url = 'https://manliowydler23010.pythonanywhere.com/productos/' + product;
            var options = {
                method: "DELETE",
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        }


    },
    



  }).mount("#app")