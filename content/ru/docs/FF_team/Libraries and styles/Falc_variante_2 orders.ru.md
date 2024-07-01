---
title: "Falc_variante_2"
description: "Falc_variante_2"
lead:
date: 2024-06-25
lastmod: 2024-06-25
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 5
toc: true
---

<head>
<meta charset="utf-8">
<title>Lightbox Example</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/css/lightbox.css">
</head>
<body>

## Общий вид плана
<br>

Все чертежи в cтиле **Falc_variante_2** должны иметь горизонтальную ориентацию (ландшафтный формат).
<br>

В заказах **Falc_variante_2 логотип** располагается сверху слева, **название этажа** - снизу слева, **стрелка Севера** - сверху справа, шкала масштаба(**Meterbar**) - снизу справа.
<br><br>

<p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px; border-left: 4px solid #7F6416;">
  <strong>Внимание!</strong><br>
  Если в комментарии к заказу клиент запрашивает другое расположение элементов чертежа на листе, следует придерживаться указаний в комментарии.
</p>


Крайняя левая точка **логотипа** должна находиться на одной оси с крайней левой точкой плана, а не размерных цепей.
<br>

Крайняя правая точка **шкалы масштаба** должна находиться на одной оси с крайней правой точкой плана, а не размерных цепей.
<br>

Положение **стрелки Севера** более произвольное.
<div style="text-align: center; margin: 20px 0;">
  <a href="/Falc_variante_2(2).jpg" data-lightbox="example-1">
    <img src="/Falc_variante_2(2).jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

## Напольное покрытие
<br>

Tile flooring is only showed in the bathrooms/toilets/kitchens/storerooms(Abstellraum) and on balconies with loggias and terraces (Terrasse/Freisitz).

В прачечных/саунах/зимних садах/ технических помещениях - пол строго по умолчанию.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2023-12-27_114450.jpg" data-lightbox="example-1">
    <img src="/2023-12-27_114450.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
<div style="text-align: center; margin: 20px 0;">
  <a href="/2023-12-27_112306.jpg" data-lightbox="example-1">
    <img src="/2023-12-27_112306.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
В случаях, когда кухня совмещена с гостиной или столовой, выделять кухню специальным покрытием пола обязательно.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2023-12-27_120353.jpg" data-lightbox="example-1">
    <img src="/2023-12-27_120353.jpg" alt="figure" style="width: 600px;" />
  </a>
  <a href="/2023-12-27_120310.jpg" data-lightbox="example-1">
    <img src="/2023-12-27_120310.jpg" alt="figure" style="width: 600px;" />
  </a>
</div>

## Прикроватные тумбы
<br>

В качестве прикроватной тумбы можно использовать как **sideboard_bed**, так и **bed_sideboard_small**.

Никогда не используйте **sideboard_bed** в качестве платяного шкафа, гардероба и т.д. Допустимо использование только в качестве прикроватной тумбы, светло-оранжевый оттенок данной иконки означает, что этот шкаф не высокий.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2023-12-27_112752.jpg" data-lightbox="example-1">
    <img src="/2023-12-27_112752.jpg" alt="figure" style="width: 600px;" />
  </a>
</div>

## Балкон
<br>

В библиотеке **Falc_variante_2** садовая столовая группа представлена только иконкой **Balcony_umbrella_table_2**.

Если она не подходит по размеру, например, балкон/терраса слишком узкие, можно использовать элементы из группы **dining_**, дополнив их зонтом **balcony_umbrella**.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2024-01-04_105211.jpg" data-lightbox="example-1">
    <img src="/2024-01-04_105211.jpg" alt="figure" style="width: 600px;" />
  </a>
</div>

## Несущие стены
<br>

Несущие стены на мансардных этажах, которые мы обычно показываем белыми и с пунктирными краями, в заказах **Falc_variante_2** должны быть строго цвета стен по умолчанию.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2023-12-27_122108.jpg" data-lightbox="example-1">
    <img src="/2023-12-27_122108.jpg" alt="figure" style="width: 600px;" />
  </a>
</div>

## Окна
<br>

В заказах **Falc_variante_2**  кна обязательно делить на сегменты, как это показано на исходнике:
<div style="text-align: center; margin: 20px 0;">
  <a href="/2023-12-29_123530.jpg" data-lightbox="example-1">
    <img src="/2023-12-29_123530.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

## Квартиры
<br>

По специальному запросу может понадобится выделить цветом по контуру отдельные квартиры:
<div style="text-align: center; margin: 20px 0;">
  <a href="/Beispiel 13-3 34707_513960.jpg" data-lightbox="example-1">
    <img src="/Beispiel 13-3 34707_513960.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

Эти линии мы можем нарисовать инструментом **Line**, назначив ему определенный цвет и толщину в окне редактора:
<div style="text-align: center; margin: 20px 0;">
  <a href="/2024-01-04_132359.jpg" data-lightbox="example-1">
    <img src="/2024-01-04_132359.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/js/lightbox.js"></script>
</body>


