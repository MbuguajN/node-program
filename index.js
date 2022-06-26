
const express = require("express") //importing express
const path = require('path')
const app = express() //initializing express
const port = 3000
const dirname = path.resolve('./')
app.use(express.static(dirname))
app.get("/hello", (req, res) => {
    // handling request on hello route 
    res.status(200).sendFile(`${dirname}/index.html`);
    console.log(req.url);
})
app.get("/about",(req,res)=>{
    res.status(200).sendFile(`${dirname}/about.html`);
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
