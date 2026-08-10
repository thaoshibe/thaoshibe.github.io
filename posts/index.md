---
layout: default
title: Posts
---

<ul class="post-list">
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a><span class="meta">{{ post.date | date: "%Y-%m-%d" }}</span></li>
{% endfor %}
</ul>
