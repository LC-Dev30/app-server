export const clientesPrimium = (req,res) => {
    res.json({
        data:[
        {nombre:'leo',
         estado:'primium'
        },
           {nombre:'angel',
           estado:'primium'
        },
           {nombre:'pedro',
           estado:'primium'
        },
           {nombre:'juan',
           estado:'primium'
        },
        ]
     })
}

export const prueba = (req,res) => {
    res.render('index')
}