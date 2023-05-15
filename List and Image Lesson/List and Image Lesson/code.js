//use a list to store images
var parkPic = getColumn("US National Parks", "Image");
var emojiPic = getColumn("Emojis", "Images");
var emojiFeeling = getColumn("Emojis", "Feeling");
var counter = 0;
var newEmojiPic = [];
newPic();
//you can hide and show elements
hideElement("image2");
//mouseover and setImageURL
onEvent("image0", "mouseover", function( ) {
  setImageURL("image0", parkPic[randomNumber(0, parkPic.length -1)]);
});
//mouseover to show/hide elements
onEvent("image1", "mouseover", function( ) {
  hideElement("image1");
  showElement("image2");
});
//newPic sets the 6 images to random park Images
function newPic() {
  for (var i = 0; i < 6; i++) {
    setImageURL("image"+i, parkPic[(randomNumber(0, parkPic.length-1))]);
  }
}
//this timedLoop shows a new picture every half-second
timedLoop(500, function() {
  setImageURL("image4", parkPic[(randomNumber(0,parkPic.length-1))]);
});
//player gets points by clicking last picture
onEvent("image5", "click", function( ) {
  counter = counter+1;
  setText("scoreOutput", counter);
  winner(counter);
});
//winner changes the screen when player gets 10 points
function winner(score) {
  if (score==10) {
    setScreen("endscreen");
  }
}
//emojiFunction creates a list of images based on how the user feels
//returns a random emoji related to feeling user chose
function emojiFunction(feeling) {
  newEmojiPic = [];
  for (var i = 0; i < emojiPic.length; i++) {
    if (emojiFeeling[i]==feeling) {
      appendItem(newEmojiPic, emojiPic[i]);
    }
  }
  return newEmojiPic[randomNumber(0,newEmojiPic.length-1)];
}
//When the user clicks the happy or sad button, image changes
onEvent("happyButton", "click", function( ) {
  setImageURL("image3", emojiFunction("happy"));
});
onEvent("sadButton", "click", function( ) {
  setImageURL("image3", emojiFunction("sad"));
});
