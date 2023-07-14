//controlador de usuarios
import axios from 'axios';
import pg from 'pg'

const pool = new pg.Pool({
   connectionString: process.env.POSTGRES_URL
})

export function Inicio(req,res){
   res.render('index')
}

export async function Usuarios(req,res){
   
   let response = await axios.get("https://jsonplaceholder.typicode.com/users");
   let listaUsuarios = response.data
   console.log(listaUsuarios);
   res.render('usuarios',{listaUsuarios})
}

export function Clientes(req,res){
   res.json({
      data:[
         {nombre:'leo'},
         {nombre:'angel'},
         {nombre:'pedro'},
         {nombre:'juan'},
      ]
   })
}

export const clientesActivos = (req,res) => {
   pool.query('SELECT * FROM USERS',(err,data) => {
      console.log(data.rows);
      res.json(data.rows)
   })
}