document.getElementById("form-celular").addEventListener("submit", function(event) {
    event.preventDefault();


    // llamar a la base de datos

    
    const nuevaFila = document.createElement("tr");


    const celdaNombre = document.createElement("td");
    const celdaMarca = document.createElement("td");
    const celdaPrecio = document.createElement("td");
    const celdaStock = document.createElement("td");


    celdaNombre.textContent = nombre;
    celdaMarca.textContent = marca;
    celdaPrecio.textContent = `$${precio}`;
    celdaStock.textContent = stock;


    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaMarca);
    nuevaFila.appendChild(celdaPrecio);
    nuevaFila.appendChild(celdaStock);


    document.querySelector("#tabla-celulares tbody").appendChild(nuevaFila);

    document.getElementById("form-celular").reset();
});
