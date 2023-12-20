const express =require('express')
const app = express()
const port = 4000
const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});//use function

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:<password>@cluster0.k6cuynu.mongodb.net/');
  //mongodb+srv://admin:<password>@cluster0.k6cuynu.mongodb.net/
  // my mongo
}
/* const [filmTitle, setfilmTitle] = useState('');
cosnt [poster, setposter] =useState('');
const [director, setDirector] = useState('');
*/
const filmSchema = new mongoose.Schema({
    
  filmTitle:String,
  poster:String,
  director:String
})

const filmModel = mongoose.model('my_films', filmSchema);

app.delete('/api/films:id',async (req,res,)=>
{
  console.log("delete: "+req.params.id);
  let film = await filmModel.findByIdAndDelete(req.params.id);
  res.send(film);
})

app.put('/api/films/:id', async(req,res)=>{
  console.log("Update: "+req.params.id);
  let film = await filmModel.findByIdAndUpdate(req,params.id, req.body,{new:true});
  res.send(film);
})

app.post('/api/films', (req,res)=>{
    console.log(req.body);

    filmModel.create({
      filmTitle:req.body.filmTitle,
      poster:req.body.poster,
      director:req.body.director
    })
    .then(()=>{ res.send("Film Created")})
    .catch(()=>{ res.send("Film NOT Created")});

})


app.get('/api/films', async(req, res)=>{
    
  let film = await filmModel.find({});
  res.json(film);
})//getting book

app.get('/api/films/:identifier',async (req,res)=>{
  console.log(req.params.identifier);

  let film = await filmModel.findById(req.params.identifier);
  res.send(film);
})



app.listen(port, () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  console.log(`Example app listening on port ${port}`)
})