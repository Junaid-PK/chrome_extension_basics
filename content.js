chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, callback) {
  if (message.txt == "hello") {
    let paragraphs = document.getElementsByTagName("p");

    for (paras of paragraphs) {
      paras.style["background-color"] = "#EF09EE";
    }
  }
}
