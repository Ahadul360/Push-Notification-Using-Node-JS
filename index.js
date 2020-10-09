var sendNotification = function (data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
	//Example - Authorization:"Basic ZjJZmNGZlMYmYtTOGI3ZC";
    Authorization: "Basic You Onesignal Rest Api Key",
  };

  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers,
  };

  var https = require("https");
  var req = https.request(options, function (res) {
    res.on("data", function (data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });

  req.on("error", function (e) {
    console.log("ERROR:");
    console.log(e);
  });

  req.write(JSON.stringify(data));
  req.end();
};

var message = {
  app_id: "07351aac-b793-42b7-b33e-bce49972ee7f",
  headings: { en: "English Title" },
  contents: { en: "English Message" },
  included_segments: ["All"],
};

sendNotification(message);
