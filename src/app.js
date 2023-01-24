const express =require('express');
const path=require("path")
require("./db/conn");
const User=require("./models/usermessage")
const Accepted=require("./models/acceptedmessage")
const app=express();
const hbs =require("hbs");
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;

//setting the path
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../templates/views");
// const partialpath=path.join(__dirname,"../templates/partials"); delete
//middleware
// app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
// app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jshello',express.static(path.join(__dirname,"../templates/views")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use('/js',express.static(path.join(__dirname,"../src/javascript")));
app.use('/css',express.static(path.join(__dirname,"../public/css")));
app.use('/images',express.static(path.join(__dirname,"../public/images")));
app.use('/api',express.static(path.join(__dirname,"../public/api")));
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("views",templatepath);
app.set('view engine','hbs');
// hbs.registerPartials(partialpath);
//routing
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/index2/:id",(req,res)=>{
    res.render("index2",{
        userid:req.params.id
    });
})
app.get("/features/:id",(req,res)=>{
    User.find({"email":req.params.id }, function(err,users){
        if(err) console.warn(err);
        res.render("features",{
            userinfo : users,
            userid:req.params.id
        });
    }) 
})

//rewards
app.get("/reward/:id",(req,res)=>{
    Accepted.find({"acceptedby":`${req.params.id}`},function(err,users2){
        if(err){
            console.warn(err);
        }else{
            res.render("reward",{
                totalboxes:users2,
                userid:req.params.id,
            });
        }
    })
})



app.get("/doc2/:id",(req,res)=>{
    User.find({"status":"pending"}, function(err,users1){
        if(err) {console.warn(err);
        }else{
            Accepted.find({"acceptedby":`${req.params.id}`},function(err,users2){
                if(err){
                    console.warn(err);
                }else{
                    res.render("doc2",{
                        userinfo : users1,
                        historyuserinfo:users2,
                        userid:req.params.id
                    });
                }
            })
        }

    }) 
})

//post
app.post("/features/:id", (req,res)=>{
    const output = `
    <h3>HELLO ${req.body.name}</h3>
    <h3>YOUR REGISTRATION FORM HAS BEEN SUBMITTED.....</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Contact Number: ${req.body.number}</li>

    </ul>
    <h3>HELP YOU NEED....</h3>
    <ul><li>${req.body.helptext}</li></ul>
    <h3>STAY TUNED FOR HELP.....</h3>
  `;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pshrey714@gmail.com', // generated ethereal user
        pass: 'Helping@Hands001'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'pshrey714@gmail.com', // sender address
      to: `${req.body.email}`, // list of receivers
      subject: 'helping hands registration', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  })
  

        var userdata = new User(req.body);
        userdata.save().then(()=>{
        res.status(201).render("features",{
            userid:req.params.id
        });
        // res.send(req.body);
    }).catch((error)=>{
        res.status(500).send(error);
    })
})


 app.post("/doc2/:id", (req,res)=>{

    var userdata = new User(req.body);
    // console.log(userdata.acceptedby)

    const updateDocument = async (_id)=>{
        try{
            const result = await User.updateOne({_id},{
                $set : {status : "acceped"}
            });
        }catch(err){
            console.log(err);
        }
    }
    updateDocument(userdata.id);

     User.findById(userdata.id).then(doc =>  {
        //   doc.remove();
          doc.acceptedby = userdata.acceptedby;
          doc.status="accepted";
         var acceptedmessage = new Accepted(doc);
        const output = `
        <h3>you have accepted the requiest from ${acceptedmessage.name}</h3>
        <h3><a href="${acceptedmessage.locate}">get location by tapping here<a/></h3>
        <ul>  
          <li>Name: ${acceptedmessage.name}</li>
          <li>gender: ${acceptedmessage.gender}</li>
          <li>Contact Number: ${acceptedmessage.number}</li>
    
        </ul>
        <h3>HELP REQUIRED....</h3>
        <ul><li>${acceptedmessage.helptext}</li></ul>
        <h3>THANK YOU FOR ACCEPTING THE HELP.....</h3>
      `;
        // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pshrey714@gmail.com', // generated ethereal user
        pass: 'Helping@Hands001'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'pshrey714@gmail.com', // sender address
      to: `${req.params.id}`, // list of receivers
      subject: 'helping hands registration', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  })
  acceptedmessage.isNew = true; 
  acceptedmessage.save();
        }).catch(err => {
        console.log(err);
      });
})



//server create
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})

