const express = require("express")
const app = express()
const dirname = "C:\Users\kevin\VsCode\Htmlcss\Rest API"
const path = require('path')
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/scripts.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'scripts.js'));
  });
  



// db router
const dbRouter = require("./routes/post-data-SQL")
app.post('/submitForm',dbRouter)

// mainPages router
app.use(express.static(path.join(__dirname,"public")))
const mainPagesRouter = require("./routes/get-mainPages")
app.use('/',mainPagesRouter)




// Serve static file
app.get('/scripts.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'scripts.js'));
  });
// Server start
app.listen(3000, () => {
    console.log("API sever listening on port 3000...")
})
