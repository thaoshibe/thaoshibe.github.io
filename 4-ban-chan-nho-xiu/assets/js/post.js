(function () {
  'use strict';

  var content = document.getElementById('post-content');
  var slug = new URLSearchParams(location.search).get('post');

  function showError(message) {
    content.innerHTML = '<div class="post-status">' + message + ' <a href="./index.html">← về trang chính</a></div>';
    document.getElementById('post-header').hidden = true;
  }

  function renderHeader(meta, site) {
    if (!meta.title) return;
    document.getElementById('post-emoji').textContent = meta.emoji || '';
    document.getElementById('post-title').textContent = meta.title;
    document.title = meta.title + ' · ' + (site.brand || '4 bàn chân nhỏ xíu');

    var metaElement = document.getElementById('post-meta');
    if (site.avatar) {
      var avatar = document.createElement('img');
      avatar.src = site.avatar;
      avatar.alt = '';
      metaElement.appendChild(avatar);
    }
    var label = document.createElement('span');
    label.textContent = (site.author || '') + (meta.dateLabel ? ' · ' + meta.dateLabel : '');
    metaElement.appendChild(label);
    document.getElementById('post-header').hidden = false;
  }

  function createFigures() {
    content.querySelectorAll('img').forEach(function (image) {
      var paragraph = image.closest('p');
      if (!paragraph || paragraph.textContent.trim() !== '') return;

      var figure = document.createElement('figure');
      var linkedImage = image.parentElement && image.parentElement.tagName === 'A' ? image.parentElement : image;
      figure.appendChild(linkedImage.cloneNode(true));
      if (image.alt && image.alt.trim()) {
        var caption = document.createElement('figcaption');
        caption.textContent = image.alt.trim();
        figure.appendChild(caption);
      }
      paragraph.replaceWith(figure);
    });

    content.querySelectorAll('figure').forEach(function (figure) {
      var next = figure.nextElementSibling;
      if (!next || next.tagName !== 'P') return;
      var text = next.textContent.trim();
      var nextIsFigure = next.nextElementSibling && next.nextElementSibling.tagName === 'FIGURE';
      var shortCaption = text.length <= 220 && !next.querySelector('strong, code');
      if (!text || !(text.charAt(0) === '[' || nextIsFigure || shortCaption)) return;

      var caption = figure.querySelector('figcaption') || document.createElement('figcaption');
      caption.textContent = text;
      if (!caption.parentElement) figure.appendChild(caption);
      next.remove();
    });
  }

  function groupSections() {
    var sections = [];
    var current;
    Array.from(content.childNodes).forEach(function (node) {
      if (!current || (node.nodeType === 1 && node.tagName === 'H2')) {
        current = document.createElement('section');
        current.className = 'post-section';
        sections.push(current);
      }
      current.appendChild(node);
    });
    sections.forEach(function (section) { content.appendChild(section); });
  }

  function arrangeImages() {
    content.querySelectorAll('figure').forEach(function (figure, index) {
      figure.classList.add('story-image', index % 2 ? 'story-image-right' : 'story-image-left');
      figure.classList.add('story-image-' + ((index % 4) + 1));
    });

    content.querySelectorAll('.post-section').forEach(function (section) {
      var node = section.firstElementChild;
      while (node) {
        if (!node.matches('figure.story-image')) {
          node = node.nextElementSibling;
          continue;
        }
        var run = [];
        var cursor = node;
        while (cursor && cursor.matches('figure.story-image')) {
          run.push(cursor);
          cursor = cursor.nextElementSibling;
        }
        if (run.length > 1) {
          var gallery = document.createElement('div');
          gallery.className = 'story-gallery';
          run[0].before(gallery);
          run.forEach(function (figure) {
            figure.classList.remove('story-image-left', 'story-image-right');
            gallery.appendChild(figure);
          });
        }
        node = cursor;
      }
    });
  }

  function slugify(text, used) {
    var value = text.toLowerCase().trim()
      .replace(/[^a-z0-9\u00c0-\u024f\u1e00-\u1eff]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'muc';
    used[value] = (used[value] || 0) + 1;
    return used[value] > 1 ? value + '-' + used[value] : value;
  }

  function buildToc() {
    var toc = document.getElementById('toc');
    var headings = Array.from(content.querySelectorAll('h2, h3'));
    if (!headings.length) return;

    var used = {};
    var list = document.createElement('ol');
    list.className = 'toc-list';
    headings.forEach(function (heading) {
      heading.id = heading.id || slugify(heading.textContent, used);
      var item = document.createElement('li');
      item.className = heading.tagName === 'H3' ? 'lvl-3' : 'lvl-2';
      var link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      item.appendChild(link);
      list.appendChild(item);
    });

    toc.innerHTML = '<div class="toc-title">mục lục</div>';
    toc.appendChild(list);
    var back = document.createElement('a');
    back.className = 'toc-back';
    back.href = './index.html';
    back.textContent = '← tất cả bài viết';
    toc.appendChild(back);
    toc.hidden = false;

    var links = Array.from(list.querySelectorAll('a'));
    document.querySelectorAll('.post-content a[href^="#"], .toc-list a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        var target = document.getElementById(link.hash.slice(1));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', link.hash);
      });
    });

    if (!('IntersectionObserver' in window)) return;
    var linksById = {};
    links.forEach(function (link) { linksById[link.hash.slice(1)] = link; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) { link.classList.remove('active'); });
        linksById[entry.target.id].classList.add('active');
      });
    }, { rootMargin: '-10% 0px -75% 0px' });
    headings.forEach(function (heading) { observer.observe(heading); });
  }

  if (!slug || !/^[a-z0-9-]+$/i.test(slug)) {
    showError('Không tìm thấy bài viết.');
    return;
  }

  var cacheBust = '?_=' + Date.now();
  Promise.all([
    fetch('./posts.json' + cacheBust).then(function (response) { return response.json(); }),
    fetch('./posts/' + slug + '.md' + cacheBust).then(function (response) {
      if (!response.ok) throw new Error('not found');
      return response.text();
    })
  ]).then(function (result) {
    var manifest = result[0];
    var meta = (manifest.posts || []).find(function (post) { return post.slug === slug; }) || {};
    renderHeader(meta, manifest.site || {});
    marked.setOptions({ gfm: true, breaks: false });
    content.innerHTML = marked.parse(result[1]);
    createFigures();
    groupSections();
    arrangeImages();
    buildToc();
  }).catch(function () {
    showError('Bài viết này chưa có nội dung.');
  });
})();
