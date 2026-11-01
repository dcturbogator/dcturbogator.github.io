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
    description: "Find the wide fairway, then allow your approach to release onto the two-tier green."
  - number: 2
    description: "Play left of the central fairway bunker, then favor the right side of the green."
  - number: 3
    description: "Allow for the wind and favor the left green; the slope feeds balls toward the right."
  - number: 4
    description: "Aim just right of the lighthouse off the tee, then allow plenty of rollout on your approach."
  - number: 5
    description: "Prioritize accuracy between the fairway hazards, then use a running approach over the front mound."
  - number: 6
    description: "Follow the right dogleg and lay up for a comfortable pitch unless reaching in two is realistic."
  - number: 7
    description: "Target the center of the two-tier green and avoid the deep hollow on the right."
  - number: 8
    description: "Trust the aiming post over the blind crest, then judge the uphill approach to a firm green."
  - number: 9
    description: "Favor the lower left fairway, then lay up in the valley right for an uphill pitch."
  - number: 10
    description: "Drive between the distant mounds, then use the green contours to feed your pitch toward the flag."
  - number: 11
    description: "Adjust for the coastal wind and commit to the middle of the green; misses leave little room."
  - number: 12
    description: "Lay up before the fairway narrows, then approach from the right to use the slope and avoid the cliffs."
  - number: 13
    description: "Start right of the central fairway bunker and favor controlled advances over chasing distance on this long par five."
  - number: 14
    description: "Use the generous fairway right of the bunkers, then allow the approach to feed left down the slope."
  - number: 15
    description: "Drive through the gap between the bunkers, then account for the strong right-to-left slope near the green."
  - number: 16
    description: "Favor the upper left fairway tier, then keep your approach clear of the central pot bunker."
  - number: 17
    description: "Check the wind from the elevated tee and use the left slope to feed your ball onto the green."
  - number: 18
    description: "Aim toward the clubhouse for the safer drive, then commit to an approach just right of the front-left bunker."
                                 
---

Cape Wickham Australia, follow along as I attempt to break 80. Hole layouts are below. 

## Hole by hole

Follow the round through each hole's layout and shot tracings.

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

<div class="cape-wickham-holes">
{% for hole in page.holes %}
  <figure class="cape-wickham-hole" id="hole-{{ hole.number }}">
    <img src="{{ '/assets/img/cape-wickham/Hole' | append: hole.number | append: '.png' | relative_url }}" alt="Cape Wickham hole {{ hole.number }} layout with shot tracings" loading="lazy" decoding="async">
    <figcaption>
      <h3>Hole {{ hole.number }}</h3>
      <p>{{ hole.description | escape }}</p>
    </figcaption>
  </figure>
{% endfor %}
</div>
