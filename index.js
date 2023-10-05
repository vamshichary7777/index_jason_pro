exports.handler = async (event) => {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello,now you are able to see the page!'),
    };
    return response;
  } catch (error) {
    console.error('Error:', error);
    const response = {
      statusCode: 500,
      body: JSON.stringify('An error occurred'),
    };
    return response;
  }
};
