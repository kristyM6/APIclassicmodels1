const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var dbConn  = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/1/clientemayor",
    (req, res) => {
        dbConn.query('SELECT * FROM Cliente_Mayor_Cantidad_De_Compras', function(err,rows) {
            if(err) {
               res.send(err)
            } else {
                res.send(rows)
            }
        })
    });
app.get("/1/producto_mas_vendido",
    (req, res) => {
        dbConn.query('SELECT * FROM Producto_Mas_Vendido', function(err,rows) {
            if(err) {
                res.send(err)
            } else {
                res.send(rows)
            }
        })
    });
app.use((req, res) => {
    res.status(404).send({
        success: false,
        data: {
            message: "Estás intentando hacer algo que no deberías"
        },
    })
});

app.listen(82, () => {
    console.log("Servidor ejecutándose...");
});
