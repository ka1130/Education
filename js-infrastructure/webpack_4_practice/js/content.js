// import info from "./info/json";
const info = {
  logo: "./image/webpack-logo.png",
  title: "lorem ipsum",
  image: "./image/image.jpg",
  city: "Warsaw",
  description: "lorem ipsum dolor"
};

$("#logo").attr("src", info.logo);
$("#title").text(info.title);

$("#img").attr("src", info.image);
$(".card-title").text(info.city);
$(".card-text").text(info.description);

function append_video() {
  var video = "<video id='video' controls='controls' src=" + info.video + "/>";
  var banner =
    "<div class='alert alert-primary' role='alert'>Check out the video!</div>";
  $(banner).appendTo("#video_box");
  $(video).appendTo("#video_box");
}

$("#video_btn").click(() => {
  if ($("#video").length) {
    // video has been loaded, do nothing now
  } else {
    append_video();
  }
});
