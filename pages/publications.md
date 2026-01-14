---
layout: page
title: Publications
subtitle: Peer-reviewed articles and conference proceedings
permalink: /pages/publications/
---

<div class="pub-controls">
  <input class="input" id="pubSearch" type="search" placeholder="Search publications (author, title, journal, keyword)…" aria-label="Search publications" />
  <select class="input" id="pubType" aria-label="Filter by type" style="min-width:220px">
    <option value="All">All types</option>
    <option value="Journal">Journal</option>
    <option value="Proceedings">Proceedings</option>
  </select>
</div>

<div class="pubs">
{% for pub in site.data.publications.publications %}
  <article class="pub" data-pub data-pub-type="{{ pub.type }}" data-pub-text="{{ pub.citation | downcase | escape }}">
    <div class="pub__type">{{ pub.type }}</div>
    <p class="pub__cite">{{ pub.citation }}</p>
    {% if pub.link and pub.link != "" %}
      <p style="margin:.55rem 0 0"><a href="{{ pub.link }}">View</a></p>
    {% endif %}
  </article>
{% endfor %}
</div>

<p style="margin-top:1rem;color:var(--muted)">
  Note: add DOI/URLs by editing <code>_data/publications.yml</code>.
</p>
