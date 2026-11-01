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
    description: "Placeholder: Add a short recap of the opening hole, including the tee shot, approach, and final score."
  - number: 2
    description: "Placeholder: Add your notes for the second hole, from the tee shot to the approach and the final putt."
  - number: 3
    description: "Placeholder: Describe the third hole here, including your club choice, key shots, and how you finished."
  - number: 4
    description: "Placeholder: Recap the fourth hole here, with a few words on your strategy, best shot, and final score."
  - number: 5
    description: "Placeholder: Recap the fifth hole here, including your tee shot, approach, and how you finished the hole."
  - number: 6
    description: "Placeholder: Add your notes for the sixth hole, including club choices, key shots, and the final score."
  - number: 7
    description: "Placeholder: Describe the seventh hole here, from your plan on the tee to the approach and final putt."
  - number: 8
    description: "Placeholder: Recap the eighth hole here, with a few words on your strategy, best shot, and final score."
  - number: 9
    description: "Placeholder: Wrap up the front nine with your notes on the ninth hole, its key shots, and final score."
  - number: 10
    description: "Placeholder: Wrap up the front nine with your notes on the ninth hole, its key shots, and final score."    
  - number: 11
    description: "Placeholder: Wrap up the front nine with your notes on the ninth hole, its key shots, and final score." 
  - number: 12
    description: "Placeholder: Wrap up the front nine with your notes on the ninth hole, its key shots, and final score." 
  - number: 13
    description: "Placeholder: Wrap up the front nine with your notes on the ninth hole, its key shots, and final score." 
  - number: 14
    description: "Placeholder: Wrap up the front nine with your notes on the ninth hole, its key shots, and final score." 
  - number: 15
    description: "Placeholder: Wrap up the front nine with your notes on the ninth hole, its key shots, and final score." 
  - number: 16
    description: "Placeholder: Wrap up the front nine with your notes on the ninth hole, its key shots, and final score." 
  - number: 17
    description: "Placeholder: Wrap up the front nine with your notes on the ninth hole, its key shots, and final score." 
  - number: 18
    description: "Placeholder: Wrap up the front nine with your notes on the ninth hole, its key shots, and final score."                          
                                 
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
