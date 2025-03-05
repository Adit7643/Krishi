const express=require("express");
const admin=require("firebase-admin");
const dotnenv=require("dotenv");

dotnenv.config();

const app=express();
const port=3000;
app.use(express.json());

const serviceAccount=require('./config/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

});

app.get('/',(req,res)=>{
    res.send("firebase is intitialized");
})
//signup 
app.post("/signup",async (req,res)=>{
    try{
        const {name,email,password,phone,address,city}=req.body;

        const userRecord=await admin.auth().createUser({
            email,
            password,
            displayName:name,
        });

        const db=admin.firestore();

        await db.collection("users").doc(userRecord.uid).set({
            name,
            email,
            phone,
            address,
            city,
            createdAt: new Date().toISOString(),
        });

        res.status(201).json({
            uid: userRecord.uid,
            message:"User created successfully with extra details",
        });
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
