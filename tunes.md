---
layout: default
title: Tunes
---

# Tunes

<p class="blurb">
</p><p>A rich programme of live music runs throughout the festival, ranging from choral singing and instrument recitals to vocal performances and folk sessions, with a highlight on young musicians.</p> 
<p>The afternoon music performances on the Saturday and Sunday are informal and take place in the relaxed and encouraging setting of the festival.  By having the performances sitting alongside floral arrangements, children's activities and the buzz of refreshments, the atmosphere for the performers becomes supportive, fun and encouraging, especially for those who may not have performed in public very much before.</p> 
<p>The afternoons are free to attend, however a donation for our charities is appreciated.</p>
<p>We are complementing the informal music afternoons with two, more formal, evening concerts on the Friday and Saturday.  These are ticketed events which cost £XX each, or you can buy combined double concert ticket for £XX.  These tickets can be purchased [online](link) or on the door.</p>
<p>Details of the current programme are provided below:</p>

{% for day in site.data.timetable.days %}
<div class="timetable-day">
  <h2>{{ day.date }}</h2>
  <table class="timetable-table">
    <thead>
      <tr>
        <th class="time-col">Time</th>
        <th>Performer / Event</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {% for session in day.sessions %}
      <tr>
        <td class="time-col">{{ session.time }}</td>
        <td>
          {{ session.performer }}
          {% if session.notes and session.notes != "" %}
          <br><small>{{ session.notes }}</small>
          {% endif %}
        </td>
        <td class="venue-col">{{ session.venue }}</td>
        <td>{{ session.type }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
{% endfor %}

---

*Times are indicative and may be subject to change. Please check back closer to
the event for any updates.*
