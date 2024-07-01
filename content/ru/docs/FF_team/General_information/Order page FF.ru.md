---
title: "Страница заказа меблировки"
description: "OСтраница заказа меблировки"
lead: "На главной странице заказа, назначенного на вас, вы увидите следующую информацию:"
date: 2024-06-21
lastmod: 2024-06-21
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 1
toc: true
---

<head>
<meta charset="utf-8">
<title>Lightbox Example</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/css/lightbox.css">
</head>
<body>
<div style="text-align: center; margin: 20px 0;">
  <a href="/2023-06-20_133306.jpg" data-lightbox="box">
    <img src="/2023-06-20_133306.jpg" width="679" height="315" class="fr-fic fr-dib fr-fil" data-lightbox="box"/>
  </a>
</div>

<p>Если под словом <strong>Assignee</strong> есть ваше имя и фамилия и кнопка <strong>Start Drawing</strong> активна, этот заказ назначен на вас и вы должны начать над ним работу, как только начнется ваша смена, либо сразу после того, как завершили предыдущий заказ. Если по какой-то причине кнопка неактивна, но в Slack на вас назначили заказ, обратитесь в канал <a href="https://ivds-fpteam.slack.com/?redir=%2Farchives%2FC046FGX9UFP%3Fname%3DC046FGX9UFP" style="text-decoration: underline; color: #006A8A;" target="_blank"><strong>#ff-issues</strong></a> или к супервайзерам.</p>

<br><br>

## Информация под кнопкой Start Drawing.
<br>
<p>Напротив пунктов <strong>Customer, Library,  Style, Creation Date </strong> дана  информация о фирме-заказчике, стиле, в котором должна быть выполнена работа и времени загрузки заказа на сайт.</p>
<p>Эти 4 пункта определяются клиентом при формировании заказа. </p>
<br>
<p><strong>Deadline date</strong>- это время, когда заказ уже должен быть сдан клиенту.</p>
<p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px;">
  Необходимо помнить, что все заказы проходят проверку и, в зависимости от величины и сложности заказа, нужно сдавать заказ как можно раньше, чтобы у ревьюверов было время нa просмотр и коррекцию перед финальной сдачей.
</p>

<p><strong>Delivery</strong> показывает нам сколько часов осталось до сдачи заказа, если заказ просрочен, эти часы будут красного цвета:</p>

<div style="text-align: center; margin: 20px 0;">
  <a href="/22.03.49.png" data-lightbox="box">
    <img src="/22.03.49.png" alt="figure" />
  </a>
</div>

## Информация о требованиях к заказу:

<div style="text-align: center; margin: 20px 0;">
  <a href="/Screenshot_10(1).png" data-lightbox="box">
    <img src="/Screenshot_10(1).png" alt="figure" />
  </a>
</div>

<h3>Drawing type:</h3>
<ul>
  <li><strong>Wohnungen einzeln zeichnen / Single Plan</strong> - рисовать квартиры индивидуально. Это значит, что рисовать  необходимо только одну квартиру на плане этажа. Зачастую эта квартира уже отмечена на исходнике (цветом, галочкой, жирной линией) или номер квартиры указан заказчиком  в комментариях.</li>
  <p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px;">
    <strong>Если квартира никак не отмечена, и вы не можете понять, какую квартиру именно нужно рисовать, обратитесь в канал <a href="https://ivds-fpteam.slack.com/?redir=%2Farchives%2FC046FGX9UFP%3Fname%3DC046FGX9UFP" style="text-decoration: underline; color: #006A8A;" target="_blank"><strong>#ff-issues</strong></a>  или к супервайзерам. При необходимости эта информация будет уточнена у клиента.</strong>
  </p>
  <li><strong>Ganzes Geschoss zeichnen / Entire Floor</strong> - рисовать весь этаж целиком. В данном случае нужно изобразить все квартиры на этаже . </li>
</ul>

<h3>Остальные требования к заказу:</h3>
<ul>
  <li><strong>Furniture</strong> - расставить мебель.</li>
  <li><strong>Square Meter</strong> - написать площади комнат.</li>
  <li><strong>North Arrow</strong> - поставить стрелку севера.</li>
  <li><strong>Room Designation</strong> - написать названия комнат.</li>
  <li><strong>FloorPlan Designation</strong> - написать названия этажа.</li>
  <li><strong>Align North</strong> - aвыровнять план по северу (так, чтобы север указывал наверх).</li>
  <li><strong>Flat designation</strong> - написать название квартиры, как указано в исходном плане.</li>
  <li><strong>Dimensional chains</strong> - начертить размерные цепочки.</li>
  <li><strong>Meter bars</strong> - поставить масштабную линейку.</li>
  <li><strong>Square Meter Spec</strong> - как писать значения площади.</li>
  <li><strong>Logo</strong> - расположить логотип.</li>
  <li><strong>Watermark</strong> - водяной знак.</li>
</ul>

Нужно или не нужно выполнять эти требования, зависит от того, стоит напротив **YES** или **NO**.
Также они дублируются на странице редактора.

<p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px;">
  Важно учитывать, что если на главной странице заказа напротив  <strong>Square Meter Specification</strong>  стоит надпись  <strong>“ca.” vor Quadratmeterangabe / circa</strong> , необходимо писать <strong>“са.”</strong>  перед каждым обозначением площади. Это значит, что значения приблизительные, не точные.
</p>

<div style="text-align: center; margin: 20px 0;">
  <a href="/21.44.03.png" data-lightbox="box">
    <img src="/21.44.03.png" alt="figure" />
  </a>
</div>

<p>На странице заказа также вы увидите информацию о том, сколько этажей необходимо начертить:</p>
<div style="text-align: center; margin: 20px 0;">
  <a href="/21.44.37.png" data-lightbox="box">
    <img src="/21.44.37.png" alt="figure" />
  </a>
</div>
<p style="text-align: justify;">
В данном случае это три этажа. Для формирования подложек, т.н. “исходников” мы используем информацию из приложенных файлов Attachments.
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.0/js/lightbox.js"></script>
</body>
