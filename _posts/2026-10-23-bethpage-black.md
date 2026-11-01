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
    description: "Favor the left fairway for a clear approach around the right dogleg."
  - number: 2
    description: "Play for position off the tee, then allow for the uphill approach."
  - number: 3
    description: "Target the middle of this shallow green; long leaves a difficult recovery."
  - number: 4
    description: "Follow the left dogleg, then lay up right for an uphill pitch."
  - number: 5
    description: "Challenge the right bunkers only with a comfortable carry; avoid the left trees."
  - number: 6
    description: "Choose a tee club that keeps the flanking fairway bunkers out of play."
  - number: 7
    description: "Respect the right dogleg; advance safely before attacking the green."
  - number: 8
    description: "Take enough club to comfortably carry the pond, especially to front pins."
  - number: 9
    description: "Favor the fairway right of the left bunkers for a clearer approach."
  - number: 10
    description: "Prioritize the fairway, then allow extra carry to the elevated green."
  - number: 11
    description: "Favor the right fairway and carry the false front on your approach."
  - number: 12
    description: "Take the safer right route unless you can comfortably carry the cross bunkers."
  - number: 13
    description: "Plan three controlled shots, laying up short of the cross bunkers."
  - number: 14
    description: "Control distance carefully; the shallow green leaves little room for error."
  - number: 15
    description: "Find the fairway and take extra club for the steep uphill approach."
  - number: 16
    description: "Find the narrow fairway from the elevated tee; avoid the greenside bunkers."
  - number: 17
    description: "Aim for the same half as the flag to avoid putting across the ridge."
  - number: 18
    description: "Choose accuracy between the fairway bunkers, then leave your approach below the hole."
---

Bethpage Black New York, follow along as I attempt to break 80. Hole layouts are below. 

## Hole by hole

Follow the round through each hole's layout and shot tracings.

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

<div class="bethpage-holes">
{% for hole in page.holes %}
  <figure class="bethpage-hole" id="hole-{{ hole.number }}">
    <img src="{{ '/assets/img/bethpage-black/Hole' | append: hole.number | append: '.png' | relative_url }}" alt="Bethpage Black hole {{ hole.number }} layout with shot tracings" loading="lazy" decoding="async">
    <figcaption>
      <h3>Hole {{ hole.number }}</h3>
      <p>{{ hole.description | escape }}</p>
    </figcaption>
  </figure>
{% endfor %}
</div>
