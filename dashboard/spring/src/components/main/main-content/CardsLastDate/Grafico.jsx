import {LineChart,Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts"

function Grafico() {
    const data = [
       {name:"Lunes",
        usuarios: 0,
       },
       {name:"Martes",
        usuarios: 2,
       },
       {name:"Miercoles",
        usuarios: 2,
       },
       {name:"Jueves",
        usuarios: 3,
       },
       {name:"Viernes",
        usuarios: 3,
       },
       {name:"Sabado",
        usuarios:8,
       },
       {name:"Domingo",
        usuarios: 2,
       }
      ];

    
  return (
<>  

<ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      
      <CartesianGrid strokeDasharray="3 3" stroke="white" />
      <XAxis dataKey="name" tick={{ fontSize: 12, fill: "white" }} />
      <YAxis tick={{ fontSize: 12, fill: "white" }} />
      <Tooltip   />
      <Line type="monotone" dataKey="usuarios" stroke="#FF0000"  />
    </LineChart>
  </ResponsiveContainer>
  
</>
  )
}

export default Grafico