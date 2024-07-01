---
title: "Размерные цепи"
description: "Размерные цепи"
lead:
date: 2024-06-24
lastmod: 2024-06-24
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 20
toc: true
---

<head>
<meta charset="utf-8">
<title>Lightbox Example</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/css/lightbox.css">
</head>
<body>
<br>

## Отображение на чертеже

Если в спецификации к заказу есть пункт **Dimensional Chains** — это значит, что в заказе нужно начертить размерные цепи.

<div style="text-align: center; margin: 20px 0;">
  <a href="/56456465465465.jpg" data-lightbox="example-1">
    <img src="/56456465465465.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
<p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px; line-height: 1.8; border-left: 4px solid #7F6416;">
  Если размеров нет ни на чертеже, ни в дополнительных файлах или они абсолютно неразборчивы — не устанавливайте размерные цепи.
</p>

Для черчения размерных цепей используйте инструмент **Draw Chains** в нижней панели редактора или горячую клавишу **C (Chain)**.
<div style="text-align: center; margin: 20px 0;">
  <a href="/wwdwq.jpg" data-lightbox="example-1">
    <img src="/wwdwq.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

Размерные линии выносите за пределы плана — наверх/вниз/вправо/влево. При черчении размерных цепей всегда придерживайтесь следующих стандартов — расстояние **от крайней стены** на плане до первой размерной линии **100 см**, между размерными линиями **50 см**.
<div style="text-align: center; margin: 20px 0;">
  <a href="/sfsfw2.jpg" data-lightbox="example-1">
    <img src="/sfsfw2.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
<p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px; line-height: 1.8; border-left: 4px solid #7F6416;">
  Используйте только те размеры, которые есть на плане. Толщину стен указывать не нужно.
</p>
Если на исходнике есть размеры, но они неразборчивы, сначала проверьте на главной странице заказа прикрепленные файлы. Иногда PDF плана бывает в более высоком разрешении. Размеры можно перенести оттуда.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2024-02-10_205212оo.png" data-lightbox="example-1">
    <img src="/2024-02-10_205212оo.png" alt="figure" style="width: 700px;" />
  </a>
</div>
Размеры окон и дверей мы также не указываем, несмотря на то, что на исходниках они встречаются часто.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2023-10-30_221054j.jpg" data-lightbox="example-1">
    <img src="/2023-10-30_221054j.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
Обратите внимание на то, что на некоторых исходниках, размеры указаны внутри комнат, показывать их обязательно, но, вынося за пределы плана, как принято в наших стандартах.
<div style="text-align: center; margin: 20px 0;">
  <a href="/103343.jpg" data-lightbox="example-1">
    <img src="/103343.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
<div style="text-align: center; margin: 20px 0;">
  <a href="/Erdgeschoss2.jpg" data-lightbox="example-1">
    <img src="/Erdgeschoss2.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

## Округление до сотых
<br>

Вне зависимости от того, как они подписаны на исходнике, размеры должны быть в разряде сотых, т.е. иметь **2 цифры после запятой**.

По правилам округления, если третья цифра, в разряде тысячных, **0, 1, 2, 3, 4** — цифра в разряде сотых остается **неизменной**. Если же это **5, 6, 7, 8 или 9**, то цифра в разряде сотых **увеличится на 1** (3.075 m = 3.08 m).
<br>

При необходимости округляйте или добавляйте 0, как в примере ниже.
<div style="text-align: center; margin: 20px 0;">
  <a href="/323457.jpg" data-lightbox="example-1">
    <img src="/323457.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
<p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px; line-height: 1.8; border-left: 4px solid #7F6416;">
  Исключение — комментарий от заказчика, в котором он просит округлить до десятичных, например.
</p>
<br>

## Погрешности измерений
<br>

При подборе масштаба всегда может возникнуть небольшая погрешность, и размер комнаты может незначительно отличаться от реального. В таких случаях необходимо редактировать размер вручную во вкладке редактора во вкладке **Chain**, которая появляется при клике левой кнопкой мыши на размерную линию.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2024-01-30_220120dd.jpg" data-lightbox="example-1">
    <img src="/2024-01-30_220120dd.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

## Видео пример
<br>

Посмотрите короткое видео по расстановке размерных цепей. Обратите внимание на то, что использование горячей клавиши **С** облегчает работу. После того, как вы поставите первый размер нажмите **С** на клавиатуре и ставьте новый, и так пока не расставите все размеры в этой цепи. Затем можно выровнять размеры так, чтобы они находились на одной линии, образуя цепь, и при необходимости, скорректировать значения.
<div style="text-align: center;">
  <iframe id="ytplayer" width="640" height="360" src="https://www.youtube.com/embed/dkdRRBskXbs?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
