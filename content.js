const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
    background: #FF0017;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
    }
    .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
    }
    ._404 {
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
    }
    ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
    }
    ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
    }
    .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
    }


    .right {
    float: right;
    width: 60%;
    }

    hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
    }

    hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
    }

    .x1 {
    top: -50px;
    left: 100px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    opacity: 0.9;
    }

    .x1_5 {
    top: -80px;
    left: 250px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    }

    .x2 {
    left: 250px;
    top: 30px;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6;
    }

    .x3 {
    left: 250px;
    bottom: -70px;

    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8;
    }

    .x4 {
    left: 470px;
    botttom: 20px;

    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75;
    }

    .x5 {
    left: 200px;
    top: 300px;

    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.8;
    }

    @-webkit-keyframes moveclouds {
    0% {
    margin-left: 1000px;
    }
    100% {
    margin-left: -1000px;
    }
    }
    @-moz-keyframes moveclouds {
    0% {
    margin-left: 1000px;
    }
    100% {
    margin-left: -1000px;
    }
    }
    @-o-keyframes moveclouds {
    0% {
    margin-left: 1000px;
    }
    100% {
    margin-left: -1000px;
    }
    }
    </style>`;
};

const generateHTML = (pageName) => {
  return `

    <div id="clouds">
    <div class="cloud x1"></div>
    <div class="cloud x1_5"></div>
    <div class="cloud x2"></div>
    <div class="cloud x3"></div>
    <div class="cloud x4"></div>
    <div class="cloud x5"></div>
    </div>
    <div class='c'>
    <div class='_404'>404</div>
    <hr>
    <div class='_1'>GET BACK TO WORK</div>
    <div class='_2'>STUDYING > ${pageName}</div>
    </div>
    `;
};

switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("YOUTUBE");
    break;
  case "www.facebook.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("FACEBOOK");
    break;
  case "www.netflix.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("NETFLIX");
    break;
  case "www.roblox.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ROBLOX");
    break;
  case "discord.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("DISCORD");
    break;
  case "www.spotify.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("SPOTIFY");
    break;
}
