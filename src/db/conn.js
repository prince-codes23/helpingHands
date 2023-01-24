const mongoose =require("mongoose")

//creating a database
mongoose.connect("mongodb+srv://shrey:patel714Shrey@cluster0.dbouk.mongodb.net/fullwebsite?retryWrites=true&w=majority",{

}).then(()=>{
    console.log("succesfully");
}).catch((error)=>{
    console.log("not connected");
})


