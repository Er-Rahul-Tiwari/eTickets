module.exports = {
    successResponse: function(
      res,
      data = {},
      message = '',
      statusCode = 200,
      status = true
    ) {
      return res
        .status(statusCode)
        .json({ status: status, statusCode: statusCode, message: message, response: data });
    },
  
    errorResponse: function(
      res,
      error = '',
      message = 'Errors! Please correct the following errors and submit again.',
      statusCode = 500,
      status = false
    ) {
      res
        .status(statusCode)
        .json({ status: status, message: message, statusCode: statusCode, errors: error });
    }
  };
  
  
  