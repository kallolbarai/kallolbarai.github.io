---
layout: default
title: Home
---

{% assign p = site.data.profile %}

<section class="hero">
  <div class="card hero__main">
    <h1 class="hero__title">{{ p.name }}</h1>
    <p class="hero__bio">I am a Ph.D. candidate in Plant Science at the University of Maine. I conduct research at the intersection of applied plant physiology, remote sensing, and data science to support climate-resilient management of wild blueberry agroecosystems. My work integrates satellite- and UAV-based observations with field measurements to characterize spatiotemporal patterns in productivity and to quantify crop responses to climatic variability. A central goal of my research is to develop non-destructive, scalable methods for monitoring plant water and nutrient status, enabling precision management decisions at the field scale.</p>

    <div class="hero__cta">
      <a class="btn btn--primary" href="{{ '/pages/research/' | relative_url }}">Explore research</a>
      <a class="btn" href="{{ '/pages/publications/' | relative_url }}">View publications</a>
      <a class="btn btn--ghost" href="{{ '/assets/docs/CV_Kallol_Barai.docx' | relative_url }}">Download CV</a>
    </div>

    <div class="section" style="margin-top:1.1rem">
      <h2 style="margin:0 0 .4rem">Research interests</h2>
      <p style="margin:0">{{ p.research_interests }}</p>
    </div>
  </div>

  <div class="card hero__aside" aria-label="Wild blueberry landscape">
    <img src="{{ '/assets/img/blueberry_blossom.png' | relative_url }}" alt="Wild blueberry field landscape" />
  </div>
</section>

<section class="grid">
  <div class="card col-7" style="padding:1rem 1.05rem">
    <h2 style="margin:.1rem 0 .55rem">Current research projects</h2>
    <ul class="list">
      {% for item in site.data.projects.projects %}
        {% if item.status == 'Current' %}
          <li><strong>{{ item.title }}</strong><br/>{{ item.description }}</li>
        {% endif %}
      {% endfor %}
    </ul>
  </div>

  <div class="card col-5" style="padding:1rem 1.05rem">
    <h2 style="margin:.1rem 0 .55rem">Methods & tools</h2>
    <div class="tags">
      <span class="tag">UAV & satellite remote sensing</span>
      <span class="tag">Hyperspectral & thermal</span>
      <span class="tag">Vegetation indices</span>
      <span class="tag">Machine learning</span>
      <span class="tag">Geospatial analysis</span>
      <span class="tag">Field ecophysiology</span>
    </div>

    <p style="margin:1rem 0 0;color:var(--muted)">
      For a complete overview of skills and software, see the <a href="{{ '/pages/cv/' | relative_url }}">CV</a> page.
    </p>
  </div>

  <div class="card col-12">
    <div class="gallery" aria-label="Wild blueberry photo gallery">
      <img data-modal-img="{{ '/assets/img/blueberry_blossom.png' | relative_url }}" src="{{ '/assets/img/blueberry_blossom.png' | relative_url }}" alt="Wild blueberry blossoms" />
      <img data-modal-img="{{ '/assets/img/blueberry_field_green.png' | relative_url }}" src="{{ '/assets/img/blueberry_field_green.png' | relative_url }}" alt="Wild blueberry field in summer" />
      <img data-modal-img="{{ '/assets/img/blueberry_field_winter.jpg' | relative_url }}" src="{{ '/assets/img/blueberry_field_winter.jpg' | relative_url }}" alt="Wild blueberry field in winter" />
      <img data-modal-img="{{ '/assets/img/precision_ag_drone.jpg' | relative_url }}" src="{{ '/assets/img/precision_ag_drone.jpg' | relative_url }}" alt="Precision agriculture drone" />
    </div>
  </div>
</section>

<div class="modal" id="imgModal" aria-hidden="true" role="dialog" aria-label="Image preview">
  <img class="modal__img" id="imgModalImg" alt="Expanded gallery image" />
</div>
