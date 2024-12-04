<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para extraer datos
$sql = "SELECT id, nombre, apellido FROM tu_tabla";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Salida de datos de cada fila
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Nombre: " . $row["nombre"]. " " . $row["apellido"]. "<br>";
    }
} else {
    echo "0 resultados";
}
$conn->close();
?>