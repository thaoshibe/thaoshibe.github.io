(function () {
  'use strict';

  var list = document.getElementById('post-list');

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function renderTimeline(timeline) {
    var track = document.getElementById('life-line-track');
    var section = document.getElementById('life-line');
    if (!timeline || !timeline.start || !timeline.end) {
      section.hidden = true;
      return;
    }

    // One cube per year, birth → 2100, like a year-in-pixels grid.
    // The "together" years (met → parted) are filled warm; years still to come
    // are faint ghost cubes; the current year gets a solid marker.
    var yr = function (d) { return Number(d.slice(0, 4)); };
    var startYear = yr(timeline.start.date);
    var endYear = yr(timeline.end.date);
    var metYear = yr(timeline.met.date);
    var partedYear = yr(timeline.parted.date);
    var nowYear = new Date().getFullYear();

    var milestones = {};
    milestones[startYear] = timeline.start;
    milestones[metYear] = timeline.met;
    milestones[partedYear] = timeline.parted;
    milestones[endYear] = timeline.end;

    var cubes = '';
    for (var y = startYear; y <= endYear; y++) {
      var cls = 'year-cube';
      if (y >= metYear && y <= partedYear) cls += ' is-together';
      if (y > nowYear) cls += ' is-future';
      if (y === nowYear) cls += ' is-now';
      var m = milestones[y];
      var title = m ? y + ' · ' + m.symbol : String(y);
      if (y === nowYear && !m) title = y + ' · hiện tại';
      cubes += '<span class="' + cls + (m ? ' is-milestone' : '') +
        '" title="' + escapeHtml(title) + '"' +
        (m ? ' data-emoji="' + escapeHtml(m.symbol) + '"' : '') + '></span>';
    }

    var legend = [timeline.start, timeline.met, timeline.parted, timeline.end]
      .map(function (m) {
        return '<span class="life-key">' +
          '<span class="life-emoji" aria-hidden="true">' + escapeHtml(m.symbol) + '</span>' +
          '<time datetime="' + escapeHtml(m.date) + '">' + escapeHtml(m.label) + '</time>' +
        '</span>';
      }).join('');

    track.innerHTML = '<div class="year-grid">' + cubes + '</div>' +
      '<div class="life-legend">' + legend + '</div>';
  }

  function renderSite(site) {
    if (site.brand) {
      document.title = site.brand;
      document.getElementById('brand').textContent = site.brand;
    }
    document.getElementById('tagline').textContent = site.tagline || '';

    var footer = site.footer || {};
    document.getElementById('footer').innerHTML = escapeHtml(footer.text || '') +
      (footer.url ? ' <a href="' + escapeHtml(footer.url) + '">' + escapeHtml(footer.label || '') + '</a>' : '');

    renderTimeline(site.timeline);
  }

  function renderPosts(posts, memories) {
    if (!posts.length) {
      list.innerHTML = '<p class="post-status">album vẫn đang chờ câu chuyện đầu tiên.</p>';
      return;
    }

    list.innerHTML = posts.map(function (post, index) {
      var soon = post.status !== 'live';
      var tag = soon ? 'div' : 'a';
      var href = post.url || ('./post.html?post=' + encodeURIComponent(post.slug));
      var status = soon && post.status ? '<span class="row-status">[' + escapeHtml(post.status) + ']</span> ' : '';
      var memory = memories.find(function (item) { return item.post === post.slug; });
      var picture = memory ?
        '<figure class="side-memory memory-' + (memory.side || (index % 2 ? 'right' : 'left')) + ' memory-' + (memory.variation || ((index % 4) + 1)) + '" aria-hidden="true">' +
          '<img src="' + escapeHtml(memory.src) + '" alt="" loading="lazy" />' +
        '</figure>' : '';

      return '<' + tag + ' class="post-row' + (soon ? ' soon' : '') + '"' +
        (soon ? '' : ' href="' + escapeHtml(href) + '"') + '>' +
        '<div class="row-title">' + status + escapeHtml(post.title) + '</div>' +
        (post.excerpt ? '<div class="row-summary">' + escapeHtml(post.excerpt) + '</div>' : '') +
        picture + '</' + tag + '>';
    }).join('');
  }

  fetch('./posts.json?_=' + Date.now())
    .then(function (response) {
      if (!response.ok) throw new Error('Không tải được danh sách bài viết');
      return response.json();
    })
    .then(function (data) {
      renderSite(data.site || {});
      renderPosts(data.posts || [], (data.site && data.site.landingImages) || []);
    })
    .catch(function (error) {
      list.innerHTML = '<p class="post-status">Không mở được album — hãy thử lại một chút nha.</p>';
      console.error(error);
    });
})();
