exports.handler = async function (event, context) {
  try {
    const response = await fetch("https://darkslategray-lion-860323.hostingersite.com/fire/sendNotification.php");
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Fetched external API successfully!",
        data,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: error.message }),
    };
  }
};
