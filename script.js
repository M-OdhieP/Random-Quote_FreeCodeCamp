const url = "https://animechan.vercel.app/api/random";
var headers = {};
async function getapi(url) {
  $("#loading").addClass("display");
  $("#cover-loading").addClass("display");
  const response = await fetch(url);

  var data = await response.json();
  $("#loading").removeClass("display");
  $("#cover-loading").removeClass("display");
  $("#text").html(
    "<i class='bi bi-quote'></i>" +
      data.quote.slice(0, 420) +
      (text.length > 420 ? "..." : "")
  );
  $("#author").html(data.character);
  $("#anime").html("-  " + data.anime);
  console.log(data);
}

getapi(url);

$("#new-quote").click(() => {
  getapi(url);
  let rand = Math.random() * 22;
  rand = Math.floor(rand);

  changeColor(color[rand]);

  console.log(color[rand]);
});

function changeColor(color) {
  $("body").css("background", color);
  $("button").css("border-color", color);
  $("#title").css("color", color);
  $(".bi-twitter").css("color", color);
}

const color = [
  "#34568B",
  "#FF6F61",
  "#6B5B95",
  "#88B04B",
  "#F7CAC9",
  "#92A8D1",
  "#955251",
  "#B565A7",
  "#009B77",
  "#DD4124",
  "#D65076",
  "#45B8AC",
  "#EFC050",
  "#5B5EA6",
  "#9B2335",
  "#DFCFBE",
  "#55B4B0",
  "#E15D44",
  "#7FCDCD",
  "#BC243C",
  "#C3447A",
  "#98B4D4",
];
