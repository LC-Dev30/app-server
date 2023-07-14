//controlador de usuarios
import axios from 'axios';
import pg from 'pg'

const pool = new pg.Pool({
   connectionString: 'psql "postgres://default:VCA3IQOJl5gE@ep-dark-truth-652239.us-east-1.postgres.vercel-storage.com:5432/verceldb"',
   database: 'dbusuarios3005',
   port:5432,
   password: '43u9Usf8D0dUF7eWTtNkapTAMt9LIEWh',
   user: 'leo3005'
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
      if(err){
         res.send("hubo un error")
      }
      res.json({datos: data.rows})
   })
}