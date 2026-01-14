---
layout: page
title: CV
subtitle: Download and highlights
permalink: /pages/cv/
---

## Download
- [Download CV (DOCX)]({{ '/assets/docs/CV_Kallol_Barai.docx' | relative_url }})

## Education
<ul class="list">
{% for e in site.data.education.education %}
  <li>{{ e }}</li>
{% endfor %}
</ul>

## Technical skills (selected)
<ul class="list">
{% for s in site.data.skills.skills %}
  <li><strong>{{ s.category }}:</strong> {{ s.details }}</li>
{% endfor %}
</ul>

## Awards and recognition
<ul class="list">
{% for a in site.data.awards.awards %}
  <li>{{ a }}</li>
{% endfor %}
</ul>

## Grants and fellowships
<ul class="list">
{% for g in site.data.awards.grants_fellowships %}
  <li>{{ g }}</li>
{% endfor %}
</ul>

## Leadership and service
<ul class="list">
{% for l in site.data.awards.leadership_service %}
  <li>{{ l }}</li>
{% endfor %}
</ul>
