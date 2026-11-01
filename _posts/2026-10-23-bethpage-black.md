---
layout: post
author: Chris Anderson
title: Bethpage Black New York 
subtitle: Full 18 Holes on Trackman
tags: Golf
categories: Golf
thumbnail-img: /assets/img/bethpage-black/thumbnail.png
published: true
youtubeurl: https://www.youtube.com/embed/DJzVGJ4iZo8?si=SxOAE0cglFCTc4Eu
holes:
  - number: 1
    start_seconds: 57
    description: "Favor the left fairway for a clear approach around the right dogleg."
  - number: 2
    start_seconds: 206
    description: "Play for position off the tee, then allow for the uphill approach."
  - number: 3
    start_seconds: 362
    description: "Target the middle of this shallow green; long leaves a difficult recovery."
  - number: 4
    start_seconds: 442
    description: "Follow the left dogleg, then lay up right for an uphill pitch."
  - number: 5
    start_seconds: 696
    description: "Challenge the right bunkers only with a comfortable carry; avoid the left trees."
  - number: 6
    start_seconds: 884
    description: "Choose a tee club that keeps the flanking fairway bunkers out of play."
  - number: 7
    start_seconds: 1013
    description: "Respect the right dogleg; advance safely before attacking the green."
  - number: 8
    start_seconds: 1246
    description: "Take enough club to comfortably carry the pond, especially to front pins."
  - number: 9
    start_seconds: 1367
    description: "Favor the fairway right of the left bunkers for a clearer approach."
  - number: 10
    start_seconds: 1610
    description: "Prioritize the fairway, then allow extra carry to the elevated green."
  - number: 11
    start_seconds: 1790
    description: "Favor the right fairway and carry the false front on your approach."
  - number: 12
    start_seconds: 2039
    description: "Take the safer right route unless you can comfortably carry the cross bunkers."
  - number: 13
    start_seconds: 2321
    description: "Plan three controlled shots, laying up short of the cross bunkers."
  - number: 14
    start_seconds: 2462
    description: "Control distance carefully; the shallow green leaves little room for error."
  - number: 15
    start_seconds: 2589
    description: "Find the fairway and take extra club for the steep uphill approach."
  - number: 16
    start_seconds: 2830
    description: "Find the narrow fairway from the elevated tee; avoid the greenside bunkers."
  - number: 17
    start_seconds: 3039
    description: "Aim for the same half as the flag to avoid putting across the ridge."
  - number: 18
    start_seconds: 3192
    description: "Choose accuracy between the fairway bunkers, then leave your approach below the hole."
---

Bethpage Black New York, follow along as I attempt to break 80. Hole layouts are below. 

## Hole by hole

Click a hole title to watch it in the video above.

<style>
.bethpage-holes {
  display: grid;
  gap: 32px;
  margin: 32px 0;
}
.bethpage-holes .bethpage-hole {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
  margin: 0;
  padding: 24px;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  background: var(--background-alt-color);
}
.bethpage-holes .bethpage-hole img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  border-radius: 10px;
}
.bethpage-holes .bethpage-hole h3 {
  margin: 0 0 12px;
}
.bethpage-holes .bethpage-hole h3 a {
  color: var(--link-color);
  border-bottom: 0;
  text-decoration: none;
  text-underline-offset: 4px;
}
.bethpage-holes .bethpage-hole h3 a:hover,
.bethpage-holes .bethpage-hole h3 a:focus-visible {
  color: var(--link-color-hover);
  text-decoration: underline;
}
.bethpage-holes .bethpage-hole h3 a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}
.bethpage-holes .bethpage-hole .hole-play-icon {
  display: inline-block;
  margin-right: 0.35em;
  font-size: 0.75em;
}
.bethpage-holes .bethpage-hole p {
  margin: 0;
}
@media (max-width: 600px) {
  .bethpage-holes .bethpage-hole {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
    padding: 16px;
  }
}
</style>

{% assign video_id = page.youtubeurl | split: '/embed/' | last | split: '?' | first %}
<div class="bethpage-holes">
{% for hole in page.holes %}
  <figure class="bethpage-hole" id="hole-{{ hole.number }}">
    <img src="{{ '/assets/img/bethpage-black/Hole' | append: hole.number | append: '.png' | relative_url }}" alt="Bethpage Black hole {{ hole.number }} layout with shot tracings" loading="lazy" decoding="async">
    <figcaption>
      <h3><a href="https://www.youtube.com/watch?v={{ video_id | escape }}&amp;t={{ hole.start_seconds }}s" data-video-start="{{ hole.start_seconds }}"><span class="hole-play-icon" aria-hidden="true">&#9654;</span>Hole {{ hole.number }}</a></h3>
      <p>{{ hole.description | escape }}</p>
    </figcaption>
  </figure>
{% endfor %}
</div>

<script src="{{ '/assets/js/hole-video-links.js' | relative_url }}" defer></script>
