---
title: "Drawing walls"
description: "Drawing walls"
lead:
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
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

## Wall thickness

If the source file gives an idea of the real wall thickness (thickness values are specified, the plan is made with different thicknesses of external and external walls) - select the required thickness in the **Wall** menu (**Custom ⇒ Thickness in cm**).
<br>
<br>
Default (initial plan is hand drawn/all walls are of the same thickness):

<div style="display: flex; align-items: center; justify-content: center;">
  <div>
    <a href="/w9GJo4.png" data-lightbox="example-1" >
      <img src="/w9GJo4.png" alt="figure"  />
    </a>
  </div>
  <div style="margin-left: 20px;">
    <p><strong>Thick</strong> - exterior walls.</p>
    <p><strong>Normal</strong> - interior walls.</p>
    <p><strong>Thin</strong> - balcony/terrace.</p>
  </div>
</div>

<br>

The plan should look aesthetically pleasing and coherent.

Broken corners and expanding walls into the room should be avoided.

<br>

## Different thicknesses of sections of the same wall

If one wall has a different thickness (for example, part of the wall is an exterior wall and part is an interior wall), when drawing the joints of these walls, the so-called "broken corners" may be formed.

<div style="text-align: center;">
  <a href="/tJcBGNlM.jpg" data-lightbox="example-1" >
    <img src="/tJcBGNlM.jpg" alt="figure"  />
  </a>
</div>

To learn how to draw wall joints correctly and replicate exactly the walls on the sources, watch these videos carefully:



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

## Invisible walls

Use "**invisible walls**":

- To divide a room that serves two functions (most often kitchen/living room). For the kitchen, install appropriate flooring

- hen there is an open wall edge.
<div style="text-align: center;">
  <a href="/NrB9-71bIczb.png" data-lightbox="example-1" >
    <img src="/NrB9-71bIczb.png" alt="figure" />
  </a>
</div>
<br>

## White Fill

Another property that can be applied to walls is **color** and **outline**.

By default, walls are solid, i.e. filled with a specific color depending on the style and library.
<div style="text-align: center;">
  <a href="/tJcBG.jpg" data-lightbox="example-1" >
    <img src="/tJcBG.jpg" alt="figure"  />
  </a>
</div>
<br>

To change the wall fill to white with solid edges, select **Wall white fill - YES/ Wall border type - SOLID** from the **Wall** menu when clicking on the desired wall.
<div style="text-align: center;">
  <a href="/tJcBGNlMffff.jpg" data-lightbox="example-1" >
    <img src="/tJcBGNlMffff.jpg" alt="figure"  />
  </a>
</div>
<br>

Or **Wall white fill - YES/ Wall border type - DASHED** - for white fill with dotted edges.
<div style="text-align: center;">
  <a href="/tJcBGNlfdg.jpg" data-lightbox="example-1" >
    <img src="/tJcBGNlfdg.jpg" alt="figure" />
  </a>
</div>
<br>

This function is needed to replicate the original plan more accurately. If you see a white (light-colored) wall with a solid or dashed outline, you can repeat it with the **Wall white fill** function in our editor:
<div style="text-align: center;">
  <a href="/tJcBGNlMfr.jpg" data-lightbox="example-1" >
    <img src="/tJcBGNlMfr.jpg" alt="figure" />
  </a>
</div>
<br>

There is no need to apply this property to walls when the boundaries and wall infill on the original plan do not differ from each other. in this example all walls are solid:
<div style="text-align: center;">
  <a href="/tJcBGdfeq.jpg" data-lightbox="example-1" >
    <img src="/tJcBGdfeq.jpg" alt="figure"  />
  </a>
</div>
If the initial plan is hand-drawn, the following rule applies when assigning colors:
<br>
<br>
Based on the fact that the floor plan is a section at a height of 1 meter from the floor level of this floor, ie, the walls that are included in the section - draw color by default, and those walls that floor below (we see them in the projection View from above) - white.
<br>
<br>
In this example, the wall of the external staircase on the first floor should be white, because you see it not in the section, but from above. And on the basement floor it is the default wall, because it falls into the section.
<div style="text-align: center;">
  <a href="/tJcBGNlttt.jpg" data-lightbox="example-1" >
    <img src="/tJcBGNlttt.jpg" alt="figure"  />
  </a>
</div>

Unwanted connection nodes are formed at the joints of white and solid walls. They must be covered with the **misc_box** element from the **Tech** tab.

<div style="text-align: center;">
  <a href="/tJcBGdfssseq.jpg" data-lightbox="example-1" >
    <img src="/tJcBGdfssseq.jpg" alt="figure"  />
  </a>
</div>
<br>

## Round walls

For rounded walls, use the **Convert to arc wall** function.
<div style="text-align: center;">
  <a href="/image-1697017585251.png" data-lightbox="example-1" >
    <img src="/image-1697017585251.png" alt="figure"  />
  </a>
</div>
<br>

Select the wall you want to make round by right-clicking on it. On the **Wal** menu, click **Convert to arc wall**. Pull the center of the wall until its radius is appropriate. When finished, click **Finish converting**.
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

## Redevelopment

On the plans we can meet crossed out and dotted walls or yellow and red color. This indicates that a redevelopment has taken place.

<div style="text-align: center;">
  <a href="/UGjpg.jpg" data-lightbox="example-1" >
    <img src="/UGjpg.jpg" alt="figure"  />
  </a>
</div>
<br>

Often an explanation can be found on the plan:
<div style="text-align: center;">
  <a href="/09.36.00.jpg" data-lightbox="example-1" >
    <img src="/09.36.00.jpg" alt="figure" />
  </a>
</div>
<br>

The yellow color of the walls means that this is no longer the existing layout and these walls will be demolished, and the red color of the walls means that these walls will be relevant and it is necessary to show them on the plan. That is, you should draw according to the gray and red color of the walls.
<div style="text-align: center;">
  <a href="/13.06.23.jpg" data-lightbox="example-1" >
    <img src="/13.06.23.jpg" alt="figure"  />
  </a>
</div>
<br>

In the bathroom the door was located above and the door sash is shown in yellow, i.e. it is a former opening and now it is laid, and in the current layout now there is a wall shown in red and in this corner is located already shower, and the door was moved below and the opening is already yellow (i.e. **the wall there "canceled", made an opening for the door / window**) and gray door means the current state.

The redevelopment took place in the corridor in the corner with the living room, increased the living room and changed the direction of opening the door, also moved the door in the children's room and now it is located closer to the closet.

The final variant on the plan looks like this:
<div style="text-align: center;">
  <a href="/13.06.49.jpg" data-lightbox="example-1" >
    <img src="/13.06.49.jpg" alt="figure"  />
  </a>
</div>
<br>

On the colored plan:

- Yellow walls - ignore - this is the old layout.

- Red walls - draw - this is the current state.

- Red part in the regular wall - do not show in any way - this is the opening that was laid.

- Yellow part in a regular wall - make an opening in the marked place - this is an opening that has been opened.

In addition to red and yellow colored walls to indicate redevelopment, you can see walls crossed out with crosses, which means that this wall no longer exists and will be demolished during redevelopment, and dashed walls are new, added and actual in the existing layout.
<div style="text-align: center;">
  <a href="/13.49.27.jpg" data-lightbox="example-1" >
    <img src="/13.49.27.jpg" alt="figure"  />
  </a>
</div>
<br>

## Examples of redevelopment on the plans:**
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
