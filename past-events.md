---
layout: default
title: Past Events
---

# Past Events

<p class="blurb">
Blooms and Tunes began in 2025 and has grown into one of the most popular events
in the Anytown community calendar. Browse photographs from our previous events below.
</p>

{% for year_entry in site.data.past_events.years %}
<div class="gallery-year">
  <h2>{{ year_entry.year }}</h2>
  {% if year_entry.description %}
  <p>{{ year_entry.description }}</p>
  {% endif %}
  <div class="gallery-grid">
    {% for photo in year_entry.photos %}
    <figure class="gallery-item">
      <img src="{{ photo.src | relative_url }}"
           alt="{{ photo.caption }}"
           loading="lazy">
      <figcaption>{{ photo.caption }}</figcaption>
    </figure>
    {% endfor %}
  </div>
</div>
{% endfor %}

---

*Photographs may be used for personal and non-commercial purposes with credit to
St Mary's Church, Anytown. For other uses please [contact us](mailto:{{ site.church.email }}).*
