---
title: "Dimensional Chains"
description: "Dimensional Chains"
lead:
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
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

## Dimensional Chains on the drawing

If there is a **Dimensional Chains** point in the order specification — it means that you need to draw dimensional chains in the order.
In the end, the result should be like this.
<div style="text-align: center; margin: 20px 0;">
  <a href="/56456465465465.jpg" data-lightbox="example-1">
    <img src="/56456465465465.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
<p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px; line-height: 1.8; border-left: 4px solid #7F6416;">
  If the dimensions are not present in the drawing or in the additional files, or if they are completely illegible — do not draw dimensional chains.
</p>

To draw dimensional chains use the **Draw Chains** tool in the lower panel of the editor or use the **C (Chain)** hotkey.
<div style="text-align: center; margin: 20px 0;">
  <a href="/wwdwq.jpg" data-lightbox="example-1">
    <img src="/wwdwq.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

Bring the dimension lines outside the plan — up/down/right/left. Always adhere to the following standards when drawing dimensional chains — distance **from the outermost wall** on the plan to the first dimension line **100 cm, between** dimension lines **50 cm**.
<div style="text-align: center; margin: 20px 0;">
  <a href="/sfsfw2.jpg" data-lightbox="example-1">
    <img src="/sfsfw2.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
<p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px; line-height: 1.8; border-left: 4px solid #7F6416;">
  Use only the dimensions shown on the plan. The wall thicknesses do not need to be specified.
</p>
If there are dimensions on the source, but they are illegible, check the attachments on the main order page first. Sometimes the PDF of the plan comes in a higher resolution. You can transfer the dimensions from there.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2024-02-10_205212оo.png" data-lightbox="example-1">
    <img src="/2024-02-10_205212оo.png" alt="figure" style="width: 700px;" />
  </a>
</div>
We also do not specify the sizes of windows and doors, even though they occur frequently on the sources.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2023-10-30_221054j.jpg" data-lightbox="example-1">
    <img src="/2023-10-30_221054j.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
Note that on some sources, the dimensions are shown inside the rooms, it is obligatory to show them, but, taking them outside the plan, as it is customary in our standards.
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

## Rounding to hundredths
<br>

Regardless of how they are signed on the source, the sizes must be in the hundredths' digit, i.e. have **2 digits after the decimal** point.

According to rounding rules, if the third digit, in the thousandths' digit, is **0, 1, 2, 3, 4** — the digit in the hundredths digit remains **unchanged**. If it is **5, 6, 7, 8, or 9**, the digit in the hundredth digit **will increase by 1** (3.075 m = 3.08 m).
<br>

If necessary, round up or add 0 as in the example below.
<div style="text-align: center; margin: 20px 0;">
  <a href="/323457.jpg" data-lightbox="example-1">
    <img src="/323457.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>
<p style="color: #7F6416; background-color: #FDF2CE; padding: 5px; border-radius: 5px; font-size: 16px; line-height: 1.8; border-left: 4px solid #7F6416;">
  The exception is a comment from a customer asking to round to decimals, for example.
</p>
<br>

## Measurement errors
<br>

When selecting the scale, a small error may always occur and the room size may differ slightly from the real one. In such cases, it is necessary to edit the size manually in the Editor tab in the **Chain** tab, which appears when you click with the left mouse button on the dimension line.
<div style="text-align: center; margin: 20px 0;">
  <a href="/2024-01-30_220120dd.jpg" data-lightbox="example-1">
    <img src="/2024-01-30_220120dd.jpg" alt="figure" style="width: 700px;" />
  </a>
</div>

## Video example
<br>

Watch a short video on dimensioning chains. Note that using the hotkey C makes the work easier. After you have placed the first dimension, press C on the keyboard and place a new one, and so on until you have placed all the dimensions in the chain. Then you can align the dimensions so that they are on the same line, forming a chain, and if necessary, adjust the values.
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
