---
layout: default
title: Tunes
---

# Tunes

<p class="blurb">
A rich programme of live music runs throughout the weekend, ranging from choral
singing and organ recitals to folk sessions, handbell ringing and a young
musicians showcase. All performances take place in or around St Mary's Church
and are free to attend.
</p>

{% for day in site.data.timetable.days %}
<div class="timetable-day">
  <h2>{{ day.date }}</h2>
  <table class="timetable-table">
    <thead>
      <tr>
        <th class="time-col">Time</th>
        <th>Performer / Event</th>
        <th class="venue-col">Venue</th>
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
