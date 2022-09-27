const http = require('http')
http.createServer((req,res) =>{
    res.end('hello world')
}).listen(1500)

const express = require('express')
const { INSPECT_MAX_BYTES } = require('buffer')
const app = express()

const items =[]

app.use(express.json()) 

app.get('/items',(req,res) => {
    res.send(items);
});

//create item record
app.post('/items',(req,res) =>{
   try{
    const item = req.body;
    items.push(item);
    res.send(items);
}
catch (error) {
    res.send(error);
}}
)

//update item record
app.put('/items/:id',(req,res) =>{
    try{  
     const id = req.params.id;
     const index = items.findIndex(item =>
     item.id == id);
     items[index] = req.body;
     res.send(items);
  } catch(error) {
      res.send(error);
  }
  })

  
  
  


//delete student record
app.delete("/items/:id", (req,res) => {
    try{
     const index = items.findIndex((item) =>
     item.id == req.params.id);
     items.splice(index,1)
     res.send(items)
     } catch (error) {
        res.send(error);
     }
})

//read item records
app.get('/items',(req,res) => {           // tO read what was earlier
    try{                                     
    res.send(items);
    } catch (error) {
        res.send(error);
    }
})

//read student record using id
app.get('/items/:id', (req,res) => {
    try{
    const item = items.find((item) => 
    item.id == req.params.id);
    res.send(item);
    } catch (error){
        res.send(error)
    }
        
})


app.listen(5000,() =>{
    console.log("SErver is running on port 1500");
})