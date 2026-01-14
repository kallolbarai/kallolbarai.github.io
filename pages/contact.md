---
layout: page
title: Contact
subtitle: Professional contact and profiles
permalink: /pages/contact/
---

{% assign p = site.data.profile %}

- **Email:** <a href="mailto:{{ p.email }}">{{ p.email }}</a>  
- **Location:** {{ p.location }}  

## Profiles
- Google Scholar: <a href="{{ p.links.google_scholar }}">{{ p.links.google_scholar }}</a>  
- LinkedIn: <a href="{{ p.links.linkedin }}">{{ p.links.linkedin }}</a>  

<p style="color:var(--muted);margin-top:1rem">
</p>
