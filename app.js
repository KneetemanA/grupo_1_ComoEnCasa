const express = require("express");
const app = express();
const port = 3030;
const path = require("path");
const cookieParser = require('cookie-parser');
const partials = require('express-partials');
const methodOverride = require("method-override");
const session = require("express-session");
const recordarmeCookie = require("./middleware/recordarmeCookie")
const cors = require('cors');


app.use(express.static('public'));
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, './views'));



const homeRoutes = require ('./routes/home.routes');
const authenticationRoutes = require('./routes/user.routes');
const productCartRoutes = require('./routes/productCart.routes');
const productRoutes = require('./routes/product.routes');
const adminRoutes = require("./routes/admin.routes");
const errorPagina = require("./routes/error.routes");
const search= require("./routes/search.routes");
const apiUser = require("./routes/api/user.api");
const apiAdmin = require("./routes/api/admin.api");
const apiProduct = require("./routes/api/product.api");
const apiList = require("./routes/api/lists.api");
const apiCart = require("./routes/api/cart.api")







app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(methodOverride("_method"))
app.use(partials())
app.use(session({secret: "esto es secreto", resave:true, saveUninitialized:true}))
app.use(recordarmeCookie)
app.use(cors());

app.use('/', homeRoutes);
app.use('/user', authenticationRoutes);
app.use('/carrito', productCartRoutes);
app.use('/productos', productRoutes);
app.use('/detalle', productRoutes)
app.use('/admin', adminRoutes);
app.use("/",search)


app.use("/api/user",apiUser);
app.use("/api/admin",apiAdmin);
app.use("/api/product",apiProduct)
app.use("/api/list",apiList);
app.use("/api/carrito", apiCart)


app.use("*", errorPagina)

app.listen(port,() => console.log(`http://localhost:${port}`));

