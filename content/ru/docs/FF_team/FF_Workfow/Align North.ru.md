---
title: "Поворот по северу"
description: "Поворот по северу"
lead:
date: 2024-06-24
lastmod: 2024-06-24
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 18
toc: true
---
<head>
<meta charset="utf-8">
<title>Lightbox Example</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/css/lightbox.css">
</head>
<body>

Требование **Align North** означает, что финальный чертеж необходимо повернуть так, чтобы Север был в положении сверху, как это обычно бывает на картографических изображениях.


<p style="color: #7f6416; background-color: #fdf2ce; padding: 10px; border-radius: 5px; font-size: 1.0625rem; letter-spacing: .05em; line-height: 1.5em;">
  Если информации о направлении Севера нет - сообщите об этом в канале <strong>#ff-issues </strong>
</p>
Рассмотрим на примере плана небольшой квартиры. 
<div style="text-align: center; margin: 20px 0;">
  <a href="/Untitled (24).jpg" data-lightbox="example-1">
    <img src="/Untitled (24).jpg" alt="figure" style="width: 600px;" />
  </a>
</div>

В требованиях к заданию есть пункт **Align North**.
<div style="text-align: left; margin: 20px 0;">
  <a href="/Untitled (25).jpg" data-lightbox="example-1">
    <img src="/Untitled (25).jpg" alt="figure" style="width: 200px;" />
  </a>
</div>
Конечный план должен приобрести такое положение.
<div style="text-align: left; margin: 20px 0;">
  <a href="/Untitled (26).jpg" data-lightbox="example-1">
    <img src="/Untitled (26).jpg" alt="figure" style="width: 500px;" />
  </a>
</div>
Чертить и расставлять размерные цепи при таком положении исходника неудобно. Поэтому сначала лучше начертить план в прямом положении, выполнив все требования к заказу.
<div style="text-align: center; margin: 20px 0;">
  <a href="/Untitled (27).jpg" data-lightbox="example-1">
    <img src="/Untitled (27).jpg" alt="figure" style="width: 600px;" />
  </a>
</div>

Далее необходимо поставить **стрелку севера** в том положении в котором она показана.
<div style="text-align: center; margin: 20px 0;">
  <a href="/Untitled (28).jpg" data-lightbox="example-1">
    <img src="/Untitled (28).jpg" alt="figure" style="width: 600px;" />
  </a>
</div>

Затем, применив инструмент **Rotate**, повернуть все изображение  в таком направлении по часовой стрелке, чтобы Север стал сверху, Юг - снизу,  Восток - справа,  Запад - слева .
<div style="text-align: center; margin: 20px 0;">
  <a href="/Untitled (29).jpg" data-lightbox="example-1">
    <img src="/Untitled (29).jpg" alt="figure" style="width: 600px;" />
  </a>
</div>

После этого поставить значок компаса в верхнюю правую часть чертежа, как это требуется в правилах оформления листа чертежа и проверить, нет ли никаких разрывов в стенах. Если таковые имеются, то их можно перекрыть серым боксом **music_box_gray**.
<br><br>
Также центрировать названия комнат относительно спецификации площадей.
<br><br>

В конечном итоге, результат должен быть таким
<div style="text-align: center; margin: 20px 0;">
  <a href="/Untitled (30).jpg" data-lightbox="example-1">
    <img src="/Untitled (30).jpg" alt="figure" style="width: 600px;" />
  </a>
</div>

Посмотрите также видео , где подробно показаны все этапы, начиная с рисования кухонного гарнитура элементами из библиотеки. 
<br><br>

<div style="text-align: center;">
  <iframe id="ytplayer" width="640" height="360" src="https://www.youtube.com/embed/7oDQEgygYao?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<script>
  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with a YouTube player after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'loZabQCyP6s'
    });
  }
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/js/lightbox.js"></script>
</body>
