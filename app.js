const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const utilsHelper = require("./helpers/utils.helper");
const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Initialize Routes */
app.use("/api", indexRouter);
// app.use('/users', usersRouter);


// catch 404 and forard to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.statusCode = 404;
    next(err);
  });

 /* Initialize Error Handling */
app.use((err, req, res, next) => {
    console.log("ERROR", err);
    return utilsHelper.sendResponse(
      res,
      err.statusCode ? err.statusCode : 500,
      false,
      null,
      { message: err.message },
      "Internal Server Error"
    );
  }); 
  

module.exports = app;
