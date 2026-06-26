---
layout: default
title: Sponsors
---

# Our Sponsors

<p class="blurb">
Blooms and Tunes is made possible by the generous support of our sponsors.
If you would like to support the event, please
<a href="mailto:{{ site.church.email }}">get in touch</a>.
</p>

<div class="sponsors-grid">
{% for sponsor in site.data.sponsors %}
  <div class="sponsor-card">
    {% if sponsor.logo and sponsor.logo != "" %}
    <img src="{{ sponsor.logo | relative_url }}" alt="{{ sponsor.name }} logo">
    {% endif %}
    <span class="sponsor-name">{{ sponsor.name }}</span>
    {% if sponsor.description and sponsor.description != "" %}
    <p class="sponsor-desc">{{ sponsor.description }}</p>
    {% endif %}
    {% if sponsor.website and sponsor.website != "" %}
    <a href="{{ sponsor.website }}" target="_blank" rel="noopener noreferrer">Visit website</a>
    {% endif %}
  </div>
{% endfor %}
</div>

## Become a Sponsor

Supporting Blooms and Tunes is a wonderful way to reach the local community
while helping to preserve and maintain St Mary's Church for future generations.

Sponsorship packages are available at a range of levels. Benefits include:

- Your logo and name on our website and in our printed programme
- Recognition from the stage during the weekend
- Complimentary entry for your team

Please [email us](mailto:{{ site.church.email }}) to discuss sponsorship opportunities.
