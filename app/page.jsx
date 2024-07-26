const cargardatos=()=>{
return fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json()) 
}


async function page ()  {
  
    const datos= await cargardatos();
  return (
    <div className= "contenedor">
    <h1>Lista de datos</h1>
    <table className= "tabla">
        <thead>
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Cuerpo</th>
            </tr>
        </thead>
        <tbody>
            {/* Iteración sobre el array 'datos' para renderizar cada elemento */}
            {datos.map(({ id, title, body }) => (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default page
