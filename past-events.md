---
layout: default
title: Past Events
---

# Past Events

<p class="blurb">
Blooms and Tunes began in 2025 and has quickly become a highlight of the
Anytown community calendar. Explore each past event below for a short overview,
then follow through to the dedicated gallery page for photographs and captions.
</p>

{% for year_entry in site.data.past_events.years %}
<section class="event-card">
  <h2>{{ year_entry.year }} Past Event</h2>
  {% if year_entry.description %}
  <p>{{ year_entry.description }}</p>
  {% endif %}
  <p><a class="event-link" href="{{ '/past-events/' | append: year_entry.year | append: '/' | relative_url }}">View the {{ year_entry.year }} event page</a></p>
</section>
{% endfor %}

---

*Photographs may be used for personal and non-commercial purposes with credit to
St Mary's Church, Anytown. For other uses please [contact us](mailto:{{ site.church.email }}).*
