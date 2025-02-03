const express = require("express");
const app = express();
const morgan = require('morgan');  

const userRouter = require('./routes/userRoutes'); 
const tourRouter = require('./routes/tourRouter');


app.use(express.json());


app.use(morgan('tiny'));  

app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

const port = 4000;

// بدء الخادم
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/api/tours`);
  console.log(`Server is running at http://localhost:${port}/api/users`);
});
