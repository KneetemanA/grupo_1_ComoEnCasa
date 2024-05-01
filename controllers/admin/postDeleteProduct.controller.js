const db = require('../../database/models');
const path = require('path');
const fs = require('fs');

module.exports = async (req, res) => {
    const { id } = req.params;

    try {
        // Buscar el producto por su id en la base de datos
        const productDeleted = await db.Product.findByPk(id);

        // Verificar si el producto existe
        if (!productDeleted) {
            return res.status(404).send("El producto no fue encontrado");
        }

        // Eliminar la imagen si existe
        if (productDeleted.image != "/images/default.jpg") {
            const filePath = path.join(__dirname, `../../public${productDeleted.image}`);
            const existFile = fs.existsSync(filePath);
            if (existFile) {
                fs.unlinkSync(filePath);
            }
        }

        // Eliminar el producto de la base de datos
        await db.Product.destroy({
            where: {
                id: productDeleted.id
            }
        });

        res.redirect("/admin");
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).send("Error interno del servidor");
    }
};