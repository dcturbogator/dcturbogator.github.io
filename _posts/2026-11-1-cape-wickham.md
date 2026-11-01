---
layout: post
author: Chris Anderson
title: Cape Wickham Australia 
subtitle: Full 18 Holes on Trackman
tags: Golf
categories: Golf
thumbnail-img: /assets/img/cape-wickham/thumbnail.jpg
published: true
youtubeurl: https://www.youtube.com/embed/dAKQWXbcuXE?si=8nzuPffu37kXjTQZ
holes:
  - number: 1
    start_seconds: 70
    description: "Find the wide fairway, then allow your approach to release onto the two-tier green."
  - number: 2
    start_seconds: 206
    description: "Play left of the central fairway bunker, then favor the right side of the green."
  - number: 3
    start_seconds: 331
    description: "Allow for the wind and favor the left green; the slope feeds balls toward the right."
  - number: 4
    start_seconds: 420
    description: "Aim just right of the lighthouse off the tee, then allow plenty of rollout on your approach."
  - number: 5
    start_seconds: 640
    description: "Prioritize accuracy between the fairway hazards, then use a running approach over the front mound."
  - number: 6
    start_seconds: 748
    description: "Follow the right dogleg and lay up for a comfortable pitch unless reaching in two is realistic."
  - number: 7
    start_seconds: 931
    description: "Target the center of the two-tier green and avoid the deep hollow on the right."
  - number: 8
    start_seconds: 1052
    description: "Trust the aiming post over the blind crest, then judge the uphill approach to a firm green."
  - number: 9
    start_seconds: 1231
    description: "Favor the lower left fairway, then lay up in the valley right for an uphill pitch."
  - number: 10
    start_seconds: 1447
    description: "Drive between the distant mounds, then use the green contours to feed your pitch toward the flag."
  - number: 11
    start_seconds: 1533
    description: "Adjust for the coastal wind and commit to the middle of the green; misses leave little room."
  - number: 12
    start_seconds: 1616
    description: "Lay up before the fairway narrows, then approach from the right to use the slope and avoid the cliffs."
  - number: 13
    start_seconds: 1839
    description: "Start right of the central fairway bunker and favor controlled advances over chasing distance on this long par five."
  - number: 14
    start_seconds: 2000
    description: "Use the generous fairway right of the bunkers, then allow the approach to feed left down the slope."
  - number: 15
    start_seconds: 2158
    description: "Drive through the gap between the bunkers, then account for the strong right-to-left slope near the green."
  - number: 16
    start_seconds: 2400
    description: "Favor the upper left fairway tier, then keep your approach clear of the central pot bunker."
  - number: 17
    start_seconds: 2538
    description: "Check the wind from the elevated tee and use the left slope to feed your ball onto the green."
  - number: 18
    start_seconds: 2692
    description: "Aim toward the clubhouse for the safer drive, then commit to an approach just right of the front-left bunker."
                                 
---

Cape Wickham Australia, follow along as I attempt to break 80. Hole layouts are below. 

## Hole by hole

Click a hole title to watch it in the video above.

<style>
.cape-wickham-holes {
  display: grid;
  gap: 32px;
  margin: 32px 0;
}
.cape-wickham-holes .cape-wickham-hole {
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
.cape-wickham-holes .cape-wickham-hole img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  border-radius: 10px;
}
.cape-wickham-holes .cape-wickham-hole h3 {
  margin: 0 0 12px;
}
.cape-wickham-holes .cape-wickham-hole h3 a {
  color: var(--link-color);
  border-bottom: 0;
  text-decoration: none;
  text-underline-offset: 4px;
}
.cape-wickham-holes .cape-wickham-hole h3 a:hover,
.cape-wickham-holes .cape-wickham-hole h3 a:focus-visible {
  color: var(--link-color-hover);
  text-decoration: underline;
}
.cape-wickham-holes .cape-wickham-hole h3 a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}
.cape-wickham-holes .cape-wickham-hole .hole-play-icon {
  display: inline-block;
  margin-right: 0.35em;
  font-size: 0.75em;
}
.cape-wickham-holes .cape-wickham-hole p {
  margin: 0;
}
@media (max-width: 600px) {
  .cape-wickham-holes .cape-wickham-hole {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
    padding: 16px;
  }
}
</style>

{% assign video_id = page.youtubeurl | split: '/embed/' | last | split: '?' | first %}
<div class="cape-wickham-holes">
{% for hole in page.holes %}
  <figure class="cape-wickham-hole" id="hole-{{ hole.number }}">
    <img src="{{ '/assets/img/cape-wickham/Hole' | append: hole.number | append: '.png' | relative_url }}" alt="Cape Wickham hole {{ hole.number }} layout with shot tracings" loading="lazy" decoding="async">
    <figcaption>
      <h3><a href="https://www.youtube.com/watch?v={{ video_id | escape }}&amp;t={{ hole.start_seconds }}s" data-video-start="{{ hole.start_seconds }}"><span class="hole-play-icon" aria-hidden="true">&#9654;</span>Hole {{ hole.number }}</a></h3>
      <p>{{ hole.description | escape }}</p>
    </figcaption>
  </figure>
{% endfor %}
</div>

<script src="{{ '/assets/js/hole-video-links.js' | relative_url }}" defer></script>
