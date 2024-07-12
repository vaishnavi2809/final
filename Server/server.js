import express from 'express';
const app = express();
app.get('/',(req,res)=>{
    res.send('Server is ready');
}); 
const port = process.env.PORT || 3002;


app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
