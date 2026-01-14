---
layout: page
title: Research
subtitle: Projects, themes, and research directions
permalink: /pages/research/
---

## Overview
My research integrates remote sensing (satellite and UAV), plant ecophysiology, and data science to quantify productivity and stress responses in wild blueberry systems and related agroecosystems.

## Current projects
{% assign items = site.data.projects.projects | where: "status", "Current" %}
<ul class="list">
{% for p in items %}
  <li><strong>{{ p.title }}</strong><br/>{{ p.description }}</li>
{% endfor %}
</ul>

## Past projects
{% assign items2 = site.data.projects.projects | where: "status", "Past" %}
<ul class="list">
{% for p in items2 %}
  <li><strong>{{ p.title }}</strong><br/>{{ p.description }}</li>
{% endfor %}
</ul>
