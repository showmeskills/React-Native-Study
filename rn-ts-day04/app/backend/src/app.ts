import express from "express";
import cors from "cors";
const app = express();
app.use(cors({origin:true}))
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.get("/",async(req,res)=>{
    try{
        console.log(req.url)
        res.send("ok")
       }catch(e){
    
       }
})
app.post("/api/sms",async (req,res)=>{
   try{
    const {sms} = req.body;
    
    sms === 123&&res.send("ok")
   }catch(e){

   }
})


app.listen(8080,()=>{
    console.log(8080)
});