---
title: "Заказы Pre-ready"
description: "Заказы Pre-ready"
lead:
date: 2024-06-24
lastmod: 2024-06-24
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 23
toc: true
---

<head>
<meta charset="utf-8">
<title>Lightbox Example</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/css/lightbox.css">
</head>
<body>

Ожидаемое время на выполнение этих туров — 15 минут/этаж.
<br>

Такие заказы отличаются от обычных тем, что план помещения почти готов. Окно редактора, после того как вы нажали кнопку **Start drawing** выглядит так:

<div style="text-align: center; margin: 20px 0;">
  <a href="/01.jpg" data-lightbox="example-1">
    <img src="/01.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

Для того чтобы привести данный план в соответствие со стандартами FF, пройдите несколько этапов редактирования:
<br>

1. Сравните файлы.
2. Соотнесите план с подложкой.
3. Проверьте стены/дымоходы/инсталляции.
4. Удалите невидимые стены в ванных.
5. Выберите тип комнат и установите название.
6. Перерисуйте кухни инструментом Kitchen.
7. Подкорректируйте иконки сантехнического оборудования.
8. Проверьте лестницы.
9. Проверьте двери, добавьте стрелку входа.
10. амените камины.
11. Сверьте планы с 3D туром.
12. Дорисуйте крыши и мансардные окна.
13. Выполните остальные требования по спецификации.

Рассмотрим каждый пункт подробнее:
<br>

1. Убедитесь, что исходный файл совпадает с **JSON** и соответствует 3D туру. Если есть несоответствие, обращайтесь в канал **#ff-issue** за поддержкой.
<div style="text-align: center; margin: 20px 0;">
  <a href="/02.jpg" data-lightbox="example-1">
    <img src="/02.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

2. Скорректируйте масштаб и подберите координаты так, чтобы  **.jpg** и план из **JSON** совпадали.
<div style="text-align: center; margin: 20px 0;">
  <a href="/03.jpg" data-lightbox="example-1">
    <img src="/03.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

3. AВыровняйте зеленые стены, и добавьте **Flooring type — White** в пространства между стенами, где предполагается дымоход или другие коммуникации. **Инсталляции (Prewall)** тоже должны быть белыми внутри.

<p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px; line-height: 1.8; border-left: 4px solid #7F6416;">
  Не меняйте толщину стен!
</p>
<div style="text-align: center; margin: 20px 0;">
  <a href="/04.jpg" data-lightbox="example-1">
    <img src="/04.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

4. В ванных комнатах удалите стены, ограждающие душ или ванну.
<div style="text-align: center; margin: 20px 0;">
  <a href="/05.jpg" data-lightbox="example-1">
    <img src="/05.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

5. Выберите **тип комнат(Room type)** для всех комнат и укажите название как на исходном плане. Оно есть в выпадающем списке.
<div style="text-align: center; margin: 20px 0;">
  <a href="/06.jpg" data-lightbox="example-1">
    <img src="/06.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

6. Удалите все боксы, которые имитируют кухонную столешницу или шкафы и нарисуйте столешницу инструментом **Kitchen**.
<div style="text-align: center; margin: 20px 0;">
  <a href="/07.jpg" data-lightbox="example-1">
    <img src="/07.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

7. Проверьте элементы  кухонного и сантехнического оборудования, подкорректируйте их положение и размер.
<div style="text-align: center; margin: 20px 0;">
  <a href="/08.jpg" data-lightbox="example-1">
    <img src="/08.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

8. Подкорректируйте лестницы или перечертите их заново в соответствии с исходником и нашими стандартами <a href="https://sandy-docs.immoviewer.com/ru/docs/ff_team/ff_workfow/stairs/" style="color: #006A8A;" target="_blank">Лестницы</a>. Лестницы мы **не выделяем** стенами Invisible или Dashed, поэтому такие стены по периметру лестниц также надо удалять.
<div style="text-align: center; margin: 20px 0;">
  <a href="/09.jpg" data-lightbox="example-1">
    <img src="/09.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

9. Проверьте правильность типа дверей/проемов и окон. Для точности сверьтесь с 3D панорамой. Добавьте отображение стекла на дверях **Glass — Yes**, если двери выходят на балкон, террасу, лоджию и т.д. В случаях, когда встречаются двери, которые перекрывают друг друга, нужно уменьшить градус открывания. Перед входной дверью поставьте **стрелку входа**.
<div style="text-align: center; margin: 20px 0;">
  <a href="/10(3).jpg" data-lightbox="example-1">
    <img src="/10(3).jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

10. Удалите линии, которыми нарисованы камины и печи и на их место добавьте нужную иконку из библиотеки. Удалите название **Kamin**.
<div style="text-align: center; margin: 20px 0;">
  <a href="/11(1).jpg" data-lightbox="example-1">
    <img src="/11(1).jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

11. Если к заказу прилагается 3D-тур, сверьте все комнаты и дорисуйте такие элементы как ступени, подиумы, скаты крыш.
    <br> Например, здесь пропущены ступени в ванной комнате, но их следует показать:
<div style="text-align: center; margin: 20px 0;">
  <a href="/12(1).jpg" data-lightbox="example-1">
    <img src="/12(1).jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

12. Отобразите крыши и приблизительное расположение **мансардных окон**. <a href="https://drive.google.com/file/d/1fLNRL0cea7Gg7eNdM0cu5Hf8oBTskVQP/view" style="text-decoration: underline;" target="_blank">**(Мансардные этажи)**</a>.
<div style="text-align: center; margin: 20px 0;">
  <a href="/13(1).jpg" data-lightbox="example-1">
    <img src="/13(1).jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
<div style="text-align: center; margin: 20px 0;">
  <a href="/14(1).jpg" data-lightbox="example-1">
    <img src="/14(1).jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

13. TДалее выполните оставшиеся условия описанные в спецификации, такие как добавить мебель, размерные цепи, стрелку севера и т.

Ознакомьтесь со всеми этапами работы над туром в коротком видео.


<div style="text-align: center;">
  <iframe id="ytplayer" width="640" height="360" src="https://www.youtube.com/embed/yx5HUUg-WhI?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
