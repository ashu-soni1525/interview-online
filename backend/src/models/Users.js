 import mongoose from "mongoose";       
 const  UserSchema = new mongoose.Schema({          
name: {
     type: String,        
     required: true,      
   },        
   email: {        
     type: String,        
     required: true,        
     unique: true,        
   },        
   profileImages:{
        type: [String],
        default: [],

   },
//    password: {        
//      type: String,        
//      required: true,        
//    },  
clarkId: {
     type: String,
     required: true,
     unique: true,
   },
//     role: {        
//      type: String,        
//      enum: ["user", "admin"],        
//      default: "user",        
//    },      
   createdAt: {        
     type: Date,        
     default: Date.now,        
   },
 },
   {timestamps: true} 
  );        
            
 const User = mongoose.model("User", UserSchema); 

 export default User;