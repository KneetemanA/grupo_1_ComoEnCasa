const { loadData } = require("../../database")


module.exports= (req,res) => {
    const datos= loadData('productos')
    const datosHamb = datos.filter(p => p.category === "Hamburguesas")

    const userlogueado = req.session.user
        
    res.render('home', {datosProductos: datos, datosHamb, userlogueado})


}