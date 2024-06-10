import Express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";

const app = Express();
const PORT = process.env.PORT || 3000;
const DB = 'mongodb://localhost:27017/Steam';
// const DB = "mongodb+srv://amin:user@cluster01.kcpynb7.mongodb.net/?retryWrites=true&w=majority"

app.use(Express.json());
app.use('/api', router);

const StarterFunc = async () => {
  try {
    await mongoose.connect(DB);
    app.listen(PORT, () => {
      console.log(`\x1b[40m`,`\x1b[32m`,
        `
        ================================
        
       ___  __  ___  _______  _______
      / _ \\/ / / / |/ /  _/ |/ / ___/
     / , _/ /_/ /    // //    / (_ / 
    /_/|_|\\____/_/|_/___/_/|_/\\___/  
    
    
    =================================                            
    [+] Maintance      : https://github.com/eminmuhammadi/emiga-stream.git
    [+] Server         : http://localhost:${PORT}
    [+] Socket         : ws: ++++
    [~] Running Server...
`,`\x1b[0m`);
    });
  } catch (e) {
    console.error(e);
  }
};

StarterFunc();
