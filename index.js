import Express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";

const app = Express();
const PORT = 3000;
// const DB = 'mongodb://localhost:27017/';
// const DB = "mongodb+srv://amin:user@cluster01.kcpynb7.mongodb.net/?retryWrites=true&w=majority"


app.use(Express.json());
app.use('/api', router);

const StarterFunc = async () => {
  try {
    await mongoose.connect(DB);
    app.listen(PORT, () => {
      console.log('Server is working on port ' + PORT);
    });
  } catch (e) {
    console.error(e);
  }
};

StarterFunc().then(r => console.log('Server is working on port ' + PORT));
