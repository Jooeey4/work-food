const express = require("express");
const app = express();
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});
app.get('/listAll', function (req, res) {
  res.send('<table><tr><th>Persona</th><th>Fecha</th>' + 
           '</tr><tr><td>Joan</td><td>26/07</td></tr>'+ 
           '</tr><tr><td>Gold</td><td>02/08</td></tr>'+ 
           '</tr><tr><td>Juan</td><td>09/08</td></tr>'+ 
           '</tr><tr><td>Poio</td><td>16/08</td></tr>'+ 
           '</tr><tr><td>Fede</td><td>23/08</td></tr>'+ 
           '</tr><tr><td>Claudi</td><td>30/08</td></tr>'+ 
           '</tr><tr><td>Naty</td><td>06/09</td></tr>'+ 
           '</tr><tr><td>Martin</td><td>13/09</td></tr>'+ 
           '</tr><tr><td>Gnew</td><td>20/09</td></tr>'+ 
           '</tr><tr><td>Ron</td><td>27/09</td></tr>'+ 
           '</tr><tr><td>Dani</td><td>04/10</td></tr>'+ 
           '</tr><tr><td>Nacho</td><td>11/10</td></tr>'+ 
           '</tr><tr><td>Damian</td><td>18/10</td></tr>'+ 
           '</tr><tr><td>Claudia</td><td>25/10</td></tr></table>')

});

