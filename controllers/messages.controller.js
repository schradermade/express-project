const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "Elon M.",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "proverbsimage.png")
  // );
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
