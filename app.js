var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const errorCode = require('./common/errorCode');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS for all methods
app.use(function (req, res, next) {

  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
    "X-Frame-Options": 'SAMEORIGIN',
    "X-XSS-Protection": '1; mode=block',
    "X-Content-Type-Options": 'nosniff',
    "Cache-Control": 'no-cache, no-store, must-revalidate'
  });

  next()
});

app.use(function (req, res, next) {
  res.api = {
    'success': true,
    'error': {
      "code": "",
      "message": "",
      "details": [{
        "target": "",
        "message": ""
      }]
    },
    'data': {},
    'statusCode': 200
  };
  next();
});

require('./routes')(app);

app.use(function (err, req, res, next) {
  if (!err) {
    return next();
  }

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {

    res.api.success = false;
    res.api.error.code = errorCode.BAD_REQUEST;
    res.api.error.message = 'Invalid input';
    res.api.error.details[0].target = 'body';
    res.api.error.details[0].message = err.type;
    res.api.data = {};
    res.api.statusCode = 400;
    res.status(res.api.statusCode);

    return res.send(res.api);
  } else {
    res.api.success = false;
    res.api.error.code = errorCode.INTERNAL_SERVER_ERROR
    res.api.error.message = 'Oops! something broke';
    res.api.error.details = [];
    res.api.data = {};
    res.api.statusCode = 500;
    res.status(res.api.statusCode);

    return res.send(res.api);
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
