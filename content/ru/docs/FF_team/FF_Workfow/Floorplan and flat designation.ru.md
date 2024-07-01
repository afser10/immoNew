---
title: "Обозначение этажа и квартиры"
description: "Обозначение этажа и квартиры"
lead:
date: 2024-06-24
lastmod: 2024-06-24
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 15
toc: true
---
<head>
<meta charset="utf-8">
<title>Lightbox Example</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/css/lightbox.css">
</head>
<body>

## Названия этажей на немецком

**Подвальный этаж** - **<span style="color: red;">Kellergeschoss - KG</span>**. Их может быть несколько под уровнем земли: -1 /-2 /-3.

**Нижний этаж** - **<span style="color: red;">Untergeschoss - UG</span>**. Иногда это подвальный, иногда полуподвальный, если на исходнике этаж назван так, то и на нашем чертеже его нужно назвать также.

**Первый этаж** - **<span style="color: red;">Erdgeschoss - EG</span>**. Этаж находящийся на уровне земли или чуть выше, в зависимости от высоты фундамента. Первый полноценный этаж от уровня земли.

**Верхний этаж** - **<span style="color: red;">Obergeschoss - OG</span>**. Так может называться любой по счету этаж после первого.

**Мансардный этаж** - **<span style="color: red;">Dachgeschoss - DG</span>**. Очень редко, если после первого этажа сразу идет мансарда, этот этаж также может называться верхним (**Obergeschoss**). Такое может встретиться в комментариях. На чертежах чаще всего будет **Dachgeschoss**.

Если верхних этажей много, то они перечисляются в порядке:
| **1. Obergschoss**  | **2. Obergeschoss** | **3. Obergeschoss**  |
| ------------------- | --------------------| -------------------- |
| Второй этаж         | Третий этаж         | Четвертый этаж       |
| 1.OG                | 2.OG                | 3.OG                 |

<p style="color: #7E1115; background-color: #F9e2e4; padding: 10px; border-radius: 5px; font-size: 1.0625rem; letter-spacing: .05em; line-height: 1.5em;">
  Писать Obergeschoss 1, Obergeschoss 2, Obergeschoss 3 не корректно. В Германии цифра и точка после нее соответствуют русскому 1-ый/2-ой/3-ий и т.д., английскому 1st/2nd/3d.
</p>
<p style="color: #7f6416; background-color: #fdf2ce; padding: 10px; border-radius: 5px; font-size: 1.0625rem; letter-spacing: .05em; line-height: 1.5em;">
Если в исходнике есть информация о том, какой это по счету этаж, писать номер этажа обязательно, нельзя писать просто Obergeschoss, в том случае, когда не ясно какой этаж по счету, но мы видим, что это не подвальный и не первый, то можно обозначить как Obergeschoss.
</p>
<p style="color: black; background-color: #c4f2d4; padding: 10px; border-radius: 5px; font-size: 1.0625rem; letter-spacing: .05em; line-height: 1.5em;">
  Вы можете прочитать подробнее про названия этажей в статье <a href="https://sandy-docs.immoviewer.com/ru/docs/ff_team/ff_workfow/floor-and-room-names/" style="text-decoration: underline; color: #006A8A;" target="_blank"><strong>Типовые название этажей и комнат</strong></a>
</p>

## Обозначение на чертеже
Отобразите название этажа в левом верхнем углу над чертежом. Для этого выберите **Textfield** в нижней панели.
<div style="text-align: center; margin: 20px 0;">
  <a href="/Untitled (10).png" data-lightbox="example-1">
    <img src="/Untitled (10).png" alt="figure" style="width: 700px;" />
  </a>
</div>

- Отобразится название этажа по умолчанию. Чтобы изменить его - нажмите на текст и выберите вариант из предложенных или введите нужное в поле **Textfield**.
<div style="text-align: center; margin: 20px 0;">
  <a href="/Untitled (12).png" data-lightbox="example-1">
    <img src="/Untitled (12).png" alt="figure" style="width: 700px;" />
  </a>
</div>

- Расположите название в левом углу над планом.
<div style="text-align: center; margin: 20px 0;">
  <a href="/example - 2023-11-01T211450.552 (1)(4).jpeg" data-lightbox="example-1">
    <img src="/example - 2023-11-01T211450.552 (1)(4).jpeg" alt="figure" style="width: 700px;" />
  </a>
</div>

- Если чертеж очень большой - размер шрифта нужно увеличить, для лучшей читаемости(**Font size**).
<div style="text-align: center; margin: 20px 0;">
  <a href="/example - 2023-11-01T193509.982(3).jpeg" data-lightbox="example-1">
    <img src="/example - 2023-11-01T193509.982(3).jpeg" alt="figure" style="width: 700px;" />
  </a>
</div>

- Для обозначения этажа используйте полное название без сокращений.

Список названий этажей и сокращений:<a href="https://sandy-docs.immoviewer.com/ru/docs/ff_team/ff_workfow/floor-and-room-names/">Floor and Room name</a>

<div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;">
  <div style="margin: 0 10px;">
    <a href="/Untitled (13).png" data-lightbox="example-1" data-title="Home button">
      <img src="/Untitled (13).png" alt="figure" title="Home button" style="height: 200px;"/>
    </a>
  </div>
  <div style="margin: 0 10px;">
    <a href="/Untitled (14).png" data-lightbox="example-1" data-title="Home button">
      <img src="/Untitled (14).png" alt="figure" title="Home button" style="height: 200px;"/>
    </a>
  </div>
</div>

## Название квартиры

Отобразите название квартиры. В меню **TextField** введите нужное название квартиры и расположите его, как показано на исходном плане.
<div style="text-align: center; margin: 20px 0;">
  <a href="/Untitled (15).png" data-lightbox="example-1">
    <img src="/Untitled (15).png" alt="figure" style="width: 600px;" />
  </a>
</div>
<div style="text-align: center; margin: 20px 0;">
  <a href="/Untitled (18).png" data-lightbox="example-1">
    <img src="/Untitled (18).png" alt="figure" style="width: 600px;" />
  </a>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/js/lightbox.js"></script>
</body>
