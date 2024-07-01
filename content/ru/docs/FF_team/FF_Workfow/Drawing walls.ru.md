---
title: "Отрисовка стен"
description: "Отрисовка стен"
lead:
date: 2024-06-21
lastmod: 2024-06-21
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 3
toc: true
---
<head>
<meta charset="utf-8">
<title>Lightbox Example</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/css/lightbox.css">
</head>
<body>

## Толщина стен

Если исходный файл дает представление о реальной толщине стен (указаны значения толщины, план выполнен с разной толщиной внешних и наружных стен) - подберите нужную толщину в меню **Wall** menu (**Custom ⇒ Thickness in cm**).
<br>
<br>
По умолчанию (исходный план нарисован от руки/ все стены выполнены одной толщиной):

<div style="display: flex; align-items: center; justify-content: center;">
  <div>
    <a href="/w9GJo4.png" data-lightbox="example-1" >
      <img src="/w9GJo4.png" alt="figure"  />
    </a>
  </div>
  <div style="margin-left: 20px;">
    <p><strong>Thick</strong> - наружные стены.</p>
    <p><strong>Normal</strong> - внутренние стены.</p>
    <p><strong>Thin</strong> - балкон\терраса.</p>
  </div>
</div>

<br>

План должен выглядеть эстетичным и целостным.

Необходимо избегать “разорванных” углов и расширения стен внутрь комнаты.

<br>

## Разная толщина участков одной стены

Если одна стена имеет разную толщину (например, часть стены является наружной, часть внутренней), при рисовании стыков этих стен могут образоваться т.н. “ разорванные углы”.

<div style="text-align: center;">
  <a href="/tJcBGNlM.jpg" data-lightbox="example-1" >
    <img src="/tJcBGNlM.jpg" alt="figure"  />
  </a>
</div>

Чтобы научиться правильно рисовать стыки стен и повторять в точности стены на исходниках, внимательно ознакомьтесь с данными видео:



<div style="text-align: center;">
  <iframe id="ytplayer" width="640" height="360" src="https://www.youtube.com/embed/HGWQgGT5vhU?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
<div style="text-align: center;">
  <iframe id="ytplayer" width="640" height="360" src="https://www.youtube.com/embed/Xre0DLMRyVk?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
<br>

## Невидимые стены

Используйте "**невидимые стены**":

- Чтобы разделить комнату, выполняющую две функции (чаще всего кухня/гостиная). Для кухни установите соответствующее напольное покрытие.

- Когда есть открытый край стены.
<div style="text-align: center;">
  <a href="/NrB9-71bIczb.png" data-lightbox="example-1" >
    <img src="/NrB9-71bIczb.png" alt="figure" />
  </a>
</div>
<br>

## Белые стены (White Fill)

Другое свойство, которое можно применить к стенам — **цвет** и **контур**.

По умолчанию стены сплошные, т.е. залиты определенным цветом в зависимости от стиля и библиотеки.
<div style="text-align: center;">
  <a href="/tJcBG.jpg" data-lightbox="example-1" >
    <img src="/tJcBG.jpg" alt="figure"  />
  </a>
</div>
<br>

Чтобы поменять заливку стен на белый со сплошными краями, выберите **Wall white fill - YES/ Wall border type - SOLID** в меню **Wall,** при нажатии на нужную стену..
<div style="text-align: center;">
  <a href="/tJcBGNlMffff.jpg" data-lightbox="example-1" >
    <img src="/tJcBGNlMffff.jpg" alt="figure"  />
  </a>
</div>
<br>

Или **Wall white fill - YES/ Wall border type - DASHED** - для белой заливки с пунктирными краями.
<div style="text-align: center;">
  <a href="/tJcBGNlfdg.jpg" data-lightbox="example-1" >
    <img src="/tJcBGNlfdg.jpg" alt="figure" />
  </a>
</div>
<br>

Эта функция нужна, чтобы точнее повторить исходный план. Если вы видите **белую** (светлую) **стену** со сплошным или пунктирным контуром, ее можно повторить с помощью функции **Wall white fill** в нашем редакторе:
<div style="text-align: center;">
  <a href="/tJcBGNlMfr.jpg" data-lightbox="example-1" >
    <img src="/tJcBGNlMfr.jpg" alt="figure" />
  </a>
</div>
<br>

Нет необходимости применять это свойство к стенам, когда границы и заполнение стен на исходном плане не отличаются друг от друга. в данном примере все стены сплошные:
<div style="text-align: center;">
  <a href="/tJcBGdfeq.jpg" data-lightbox="example-1" >
    <img src="/tJcBGdfeq.jpg" alt="figure"  />
  </a>
</div>
Если исходный план нарисован от руки, при назначении цвета действует такое правило:
<br>
<br>
Исходя из того, что план этажа это разрез на высоте 1 метра от уровня пола этого этажа, т.е. стены которые входят в разрез — рисуем цветом по дефолту, а те стены, что этажом ниже (мы видим их в проекции  Вид сверху) — белые.
<br>
<br>
На этом примере, стена наружной лестницы на первом этаже должна быть белой, т.к. Вы видите ее не в разрезе, а сверху. А на этаже подвальном — стеной по умолчанию, т.к. она попадает в разрез. 
<div style="text-align: center;">
  <a href="/tJcBGNlttt.jpg" data-lightbox="example-1" >
    <img src="/tJcBGNlttt.jpg" alt="figure"  />
  </a>
</div>

На стыках белых и сплошных стен образуются нежелательные соединительные узлы. Их нужно перекрыть элементом **misc_box** из вкладки **Tech**.

<div style="text-align: center;">
  <a href="/tJcBGdfssseq.jpg" data-lightbox="example-1" >
    <img src="/tJcBGdfssseq.jpg" alt="figure"  />
  </a>
</div>
<br>

## Круглые стены

Для стен округлой формы используйте функцию **Convert to arc wall**.
<div style="text-align: center;">
  <a href="/image-1697017585251.png" data-lightbox="example-1" >
    <img src="/image-1697017585251.png" alt="figure"  />
  </a>
</div>
<br>

Выберите стену, которую нужно сделать округлой, кликнув по ней правой кнопкой мыши. В меню **Wall** нажмите на **Convert to arc wall**. Потяните за центр стены, пока ее радиус не будет подходящим. По завершению нажмите **Finish converting**.
<div style="text-align: center;">
  <a href="/pasted image 0.png" data-lightbox="example-1" >
    <img src="/pasted image 0.png" alt="figure"  />
  </a>
</div>
<div style="text-align: center;">
  <a href="/pasted image 0 (1).png" data-lightbox="example-1" >
    <img src="/pasted image 0 (1).png" alt="figure" />
  </a>
</div>
<br>

## Перепланировка

На планах мы можем встретить зачеркнутые и пунктирные стены или желтого и красного цвета. Это говорит о том, что была произведена перепланировка

<div style="text-align: center;">
  <a href="/UGjpg.jpg" data-lightbox="example-1" >
    <img src="/UGjpg.jpg" alt="figure"  />
  </a>
</div>
<br>

Часто на плане можно встретить пояснение:
<div style="text-align: center;">
  <a href="/09.36.00.jpg" data-lightbox="example-1" >
    <img src="/09.36.00.jpg" alt="figure" />
  </a>
</div>
<br>

Желтый цвет стен означает, что это уже не существующая планировка и эти стены будут снесены, а красный цвет стен говорит о том, что данные стены будут актуальными и необходимо их отобразить на плане. То есть чертить нужно по серому и красному цвету стен.
<div style="text-align: center;">
  <a href="/13.06.23.jpg" data-lightbox="example-1" >
    <img src="/13.06.23.jpg" alt="figure"  />
  </a>
</div>
<br>


В ванной комнате дверь располагалась выше и створка двери показана желтым цветом, т. e. это бывший проем и сейчас его заложили, и в актуальной планировке сейчас там стена, показана красным цветом и в этом углу расположен уже душ, а дверь перенесли ниже и проем уже желтый (т.е. **стену там “отменили”, сделали проем для двери/окна**) и серая дверь-значит актуальное состояние.

Перепланировка произошла и в коридоре в углу с гостиной, увеличили гостиную комнату и поменяли направления открывания двери, так же перенесли дверь в детской комнате и сейчас она расположена ближе к шкаф

Финальный вариант на плане выглядит так:
<div style="text-align: center;">
  <a href="/13.06.49.jpg" data-lightbox="example-1" >
    <img src="/13.06.49.jpg" alt="figure"  />
  </a>
</div>
<br>

На цветном плане:

- Желтые стены — игнорируем — это старая планировка.

- Красные стены — рисуем — это актуальное состояние

- Красная часть в обычной стене — никак не показываем — это проем, который заложили.

- Желтая часть в обычной стене — делаем проем в обозначенном месте — это проем, который открыли

Помимо стен красного и желтого цвета для обозначения перепланировки можно увидеть стены, перечеркнутые крестиками, это означает, что данная стена больше не существует и будет снесена при перепланировке, а штриховые стены- это новые, добавленные и актуальные в существующей планировке
<div style="text-align: center;">
  <a href="/13.49.27.jpg" data-lightbox="example-1" >
    <img src="/13.49.27.jpg" alt="figure"  />
  </a>
</div>
<br>

## Примеры перепланировок на планах:
<div style="text-align: center;">
  <a href="/13.18.30.jpg" data-lightbox="example-1" >
    <img src="/13.18.30.jpg" alt="figure"  />
  </a>
</div>
<div style="text-align: center;">
  <a href="/13.20.21.jpg" data-lightbox="example-1" >
    <img src="/13.20.21.jpg" alt="figure" />
  </a>
</div>
<div style="text-align: center;">
  <a href="/13.26.55.jpg" data-lightbox="example-1" >
    <img src="/13.26.55.jpg" alt="figure"  />
  </a>
</div>
<div style="text-align: center;">
  <a href="/13.31.39.jpg" data-lightbox="example-1" >
    <img src="/13.31.39.jpg" alt="figure" />
  </a>
</div>
<div style="text-align: center;">
  <a href="/13.21.53.jpg" data-lightbox="example-1" >
    <img src="/13.21.53.jpg" alt="figure" />
  </a>
</div>
<div style="text-align: center;">
  <a href="/13.22.18.jpg" data-lightbox="example-1" >
    <img src="/13.22.18.jpg" alt="figure"  />
  </a>
</div>
<div style="text-align: center;">
  <a href="/13.25.41.jpg" data-lightbox="example-1" >
    <img src="/13.25.41.jpg" alt="figure"  />
  </a>
</div>
<div style="text-align: center;">
  <a href="/13.26.07.jpg" data-lightbox="example-1" >
    <img src="/13.26.07.jpg" alt="figure"  />
  </a>
</div>
<div style="text-align: center;">
  <a href="/10.03.37.jpg" data-lightbox="example-1" >
    <img src="/10.03.37.jpg" alt="figure"/>
  </a>
</div>
<div style="text-align: center;">
  <a href="/10.06.42.jpg" data-lightbox="example-1" >
    <img src="/10.06.42.jpg" alt="figure"  />
  </a>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/js/lightbox.js"></script>
</body>
