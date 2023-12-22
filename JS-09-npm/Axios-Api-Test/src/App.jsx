import './App.css'
import axios from 'axios'
function App() {

  //Funcion async-await para consumir API
  const getUser = async () =>{
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log(response);
      console.log(response.data[1].name);//Output: "Erwin Howel"
    } catch(error) {
      console.log("Peligo", error);
    }
  }
//Funcion async-await para enviar un usuario
const PostUser = async () => {
  try{
    const url = "https://jsonplaceholder.typicode.com/posts";
    const user = {
      userId: 1986,
      title: "Java Fullstack dev",
      body: "Lizbeth Bolaños"
    }
    const response = await axios.post(url, user);
    console.log(response);
    //Para mostrar solamente la informacion en  consola
    console.log(response.data);
  }catch(error) {
    console.log("Cuidado", error);
  }
}
  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUser}>
          Get Method
        </button>
        <button onClick={PostUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
