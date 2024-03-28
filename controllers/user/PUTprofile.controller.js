const {loadData, saveData} = require('../../database');
const bcrypt = require("bcrypt");
const {validationResult} = require("express-validator");
module.exports=(req,res)=>{
    const users = loadData("users")
    const image = req.file
    const {name,user,street,phone,email,province,city,num} = req.body
    const userEdit = req.params.user
    const usersMap = users.map((u) => {
        if (u.user === userEdit) {
            const userEdiedt = {
                ...u,
                name: name ? name.trim() : u.name,
                user: user ? user.trim() : u.user,
                phone: phone? +phone : "", 
                email: email? email.trim() : u.email,
                province: province? province.trim() : "",
                city: city? city.trim() : "",
                street: street? street.trim() : "",
                num: num? +num : "",
                image: image ? `/images/${image.filename}` : u.image
              };
              if(image?.filename){
                const pathBefore = path.join(__dirname, `../../public${u.image}`);
                const existsFile = fs.existsSync(pathBefore);
      
                if(existsFile){
                  fs.unlinkSync(pathBefore)
                }
              }
          
            return userEdiedt;
          }
      
          return u;
        });
        saveData(usersMap,"users")
        res.redirect("/user/perfil/"+ user)
    }
  