/* Mitchelle portfolio: behaviour.
   Each init function owns one part of the page and is safe to skip if its markup is missing. */
(() => {
  'use strict';

  const EMAIL = 'mitchelleatienooduor@gmail.com';
  const NAV_H = 64;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

  let lenis = null;

  /* ---------- Smooth scrolling and in-page links ---------- */
  function initScroll() {
    if (!reduceMotion && window.Lenis) {
      lenis = new window.Lenis({ lerp: 0.1 });
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }

    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href');
      const target = hash === '#top' ? null : $(hash);
      if (hash !== '#top' && !target) return;
      e.preventDefault();
      closeMenu();
      if (lenis) lenis.scrollTo(target || 0, { offset: -(NAV_H + 16) });
      else if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      else window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      history.replaceState(null, '', hash);
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  }

  /* ---------- Nav: hide its button while the hero's is visible, scroll spy, mobile menu ---------- */
  const menuBtn = $('.menu-btn');
  const menuSheet = $('#menu-sheet');

  function closeMenu() {
    if (!menuSheet || menuSheet.hidden) return;
    menuSheet.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open menu');
  }

  function initNav() {
    // One rose button per view: the nav's steps aside while any primary in the page is on screen
    const onScreen = new Set();
    const cta = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target)));
      document.documentElement.dataset.heroCta = onScreen.size ? 'visible' : 'hidden';
    }, { rootMargin: `-${NAV_H}px 0px 0px 0px` });
    $$('main .mi-btn-primary').forEach((b) => cta.observe(b));

    const links = $$('.mi-nav-links a, .menu-sheet a');
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = '#' + entry.target.id;
        links.forEach((l) => l.toggleAttribute('aria-current', l.getAttribute('href') === id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['work', 'services', 'about', 'contact'].forEach((id) => { const el = $('#' + id); if (el) spy.observe(el); });
    // Clear the highlight in the sections above the first linked one
    const clear = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) links.forEach((l) => l.removeAttribute('aria-current'));
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['top', 'stage', 'looks', 'audience'].forEach((id) => { const el = $('#' + id); if (el) clear.observe(el); });

    if (!menuBtn || !menuSheet) return;
    menuBtn.addEventListener('click', () => {
      const open = menuSheet.hidden;
      menuSheet.hidden = !open;
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open) $('a', menuSheet).focus();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menuSheet.hidden) { closeMenu(); menuBtn.focus(); }
    });
    document.addEventListener('click', (e) => {
      if (!menuSheet.hidden && !e.target.closest('.site-nav')) closeMenu();
    });
  }

  /* ---------- Hero: the italic word, avatar ring and photo capsules move as one ---------- */
  function initHero() {
    const hero = $('.hero');
    const caps = $$('.capsule');
    if (!hero || !caps.length) return;
    const tags = $$('.hero-tags .mi-tag');
    const ring = $$('.ring-fill circle');
    const word = $('.dynamic-word');
    const line = $('#stage-line');
    const stage = $('#stage');
    const toggle = $('.stage-toggle');
    let active = 0;
    let userPaused = reduceMotion;
    const holds = new Set();

    const chars = (text) => {
      const el = document.createElement('span');
      el.className = 'dw-inner';
      [...text].forEach((ch, k) => {
        const s = document.createElement('span');
        s.className = 'dw-char';
        s.style.setProperty('--k', k);
        s.textContent = ch;
        el.append(s);
      });
      return el;
    };

    function swapWord(text) {
      const prev = $('.dw-inner:not(.is-out)', word);
      const next = chars(text);
      if (prev && !reduceMotion) {
        prev.classList.add('is-out');
        setTimeout(() => prev.remove(), 700);
        next.classList.add('is-in');
      } else if (prev) {
        prev.remove();
      }
      word.append(next);
    }

    function runRing() {
      ring.forEach((c, k) => {
        c.classList.remove('is-running');
        c.classList.toggle('is-done', k < active || (reduceMotion && k === active));
      });
      if (reduceMotion) return;
      const cur = ring[active];
      void cur.getBoundingClientRect(); // restart the CSS animation
      cur.classList.add('is-running');
    }

    function setActive(n) {
      if (n === active) return;
      active = n;
      caps.forEach((c, k) => {
        c.classList.toggle('is-active', k === n);
        c.setAttribute('aria-pressed', String(k === n));
      });
      tags.forEach((t, k) => t.classList.toggle('is-active', k === n));
      swapWord(caps[n].dataset.word);
      line.textContent = caps[n].dataset.line;
      line.classList.remove('is-swapping');
      void line.offsetWidth;
      line.classList.add('is-swapping');
      runRing();
    }

    function syncPause() {
      hero.classList.toggle('is-paused', userPaused || holds.size > 0);
    }
    const hold = (key, on) => { on ? holds.add(key) : holds.delete(key); syncPause(); };

    // The ring segment finishing is the clock: no timers to drift
    ring.forEach((c) => c.addEventListener('animationend', () => {
      setActive((active + 1) % caps.length);
    }));

    caps.forEach((c, k) => c.addEventListener('click', () => setActive(k)));
    if (finePointer) {
      stage.addEventListener('pointerenter', () => hold('stage', true));
      stage.addEventListener('pointerleave', () => hold('stage', false));
      tags.forEach((t, k) => {
        t.addEventListener('pointerenter', () => { setActive(k); hold('tag', true); });
        t.addEventListener('pointerleave', () => hold('tag', false));
      });
    }
    stage.addEventListener('focusin', () => hold('focus', true));
    stage.addEventListener('focusout', () => hold('focus', false));

    new IntersectionObserver(([entry]) => hold('offscreen', !entry.isIntersecting)).observe(stage);

    toggle.addEventListener('click', () => {
      userPaused = !userPaused;
      toggle.dataset.state = userPaused ? 'paused' : 'playing';
      toggle.setAttribute('aria-label', userPaused ? 'Play slideshow' : 'Pause slideshow');
      syncPause();
    });
    if (reduceMotion) {
      toggle.hidden = true;
    }

    tags[0]?.classList.add('is-active');
    word.replaceChildren(chars(caps[0].dataset.word));
    syncPause();
    // Let the capsules bloom before the first segment starts counting
    setTimeout(runRing, reduceMotion ? 0 : 1300);
  }

  /* ---------- Lookbook: pinned on desktop, swipeable on touch ---------- */
  function initLookbook() {
    const sec = $('#looks');
    if (!sec) return;
    const pin = $('.lb-pin', sec);
    const vp = $('.lb-viewport', sec);
    const track = $('.lb-track', sec);
    const count = $('.lb-count b', sec);
    const bar = $('.lb-bar span', sec);
    const spreads = $$('.spread', sec);
    const mq = matchMedia('(min-width: 900px) and (prefers-reduced-motion: no-preference)');
    let pinned = false;
    let dist = 0;
    let queued = false;

    function update() {
      queued = false;
      let p;
      if (pinned) {
        const top = sec.getBoundingClientRect().top - NAV_H;
        p = dist ? clamp(-top / dist, 0, 1) : 0;
        track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`;
      } else {
        const max = vp.scrollWidth - vp.clientWidth;
        p = max > 0 ? vp.scrollLeft / max : 0;
      }
      const idx = Math.round(p * (spreads.length - 1));
      count.textContent = idx + 1;
      bar.style.setProperty('--p', ((idx + 1) / spreads.length).toFixed(3));
    }
    const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };

    function measure() {
      pinned = mq.matches;
      if (pinned) {
        vp.removeAttribute('tabindex');
        dist = Math.max(0, track.offsetWidth - window.innerWidth);
        sec.style.height = `${pin.offsetHeight + dist}px`;
      } else {
        vp.setAttribute('tabindex', '0');
        sec.style.height = '';
        track.style.transform = '';
      }
      update();
    }

    window.addEventListener('scroll', queue, { passive: true });
    vp.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', measure);
    mq.addEventListener('change', measure);
    measure();
  }

  /* ---------- Work tiles: moving-still preview, rose pill reveal, video player ---------- */
  function initWork() {
    const tiles = $$('.work-tile');
    if (!tiles.length) return;

    if (finePointer) {
      tiles.forEach((t) => {
        t.addEventListener('pointerenter', () => t.classList.add('is-previewing'));
        t.addEventListener('pointerleave', () => t.classList.remove('is-previewing'));
      });
    } else if (!reduceMotion) {
      const io = new IntersectionObserver((entries) => entries.forEach((e) => {
        e.target.classList.toggle('is-previewing', e.isIntersecting);
      }), { threshold: 0.7 });
      tiles.forEach((t) => io.observe(t));
    }

    // Observe the tile, not the clipped media: a clip-path hides the target from IntersectionObserver
    const rio = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      $('.reveal', e.target)?.classList.add('is-in');
      rio.unobserve(e.target);
    }), { threshold: 0.2 });
    tiles.forEach((t) => rio.observe(t));

    const dlg = $('#reel-dialog');
    if (!dlg || typeof dlg.showModal !== 'function') return; // links fall back to YouTube
    const frame = $('iframe', dlg);
    const title = $('#reel-title', dlg);
    const open = $('#reel-open', dlg);

    // Only tiles with data-youtube play in place. Instagram's embed sends viewers to Instagram to press play,
    // and Shorts with licensed music refuse to embed, so those tiles stay plain links that open in a new tab.
    tiles.forEach((t) => {
      const link = $('.tile-link', t);
      if (!link || !t.dataset.youtube) return;
      link.addEventListener('click', (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        const id = t.dataset.youtube;
        title.textContent = link.textContent;
        frame.title = `YouTube video: ${link.textContent}`;
        frame.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`;
        open.href = link.href;
        dlg.showModal();
        lenis?.stop();
      });
    });
    dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });
    dlg.addEventListener('close', () => { frame.src = 'about:blank'; lenis?.start(); });
  }

  /* ---------- Creator pass: hangs on a lanyard, swings when dragged or scrolled past ---------- */
  function initPass() {
    const swing = $('#pass');
    if (!swing || reduceMotion) return;
    const card = $('.pass-card', swing);
    const rig = swing.parentElement;
    let angle = 0, vel = 0, raf = 0, dragging = false, grabOffset = 0, prev = 0;
    const K = 0.009, DAMP = 0.972, MAX = 48;

    const pivot = () => { const r = rig.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top }; };
    const pointerAngle = (e) => { const p = pivot(); return Math.atan2(-(e.clientX - p.x), e.clientY - p.y) * 180 / Math.PI; };

    function step() {
      if (!dragging) {
        vel += -angle * K;
        vel *= DAMP;
        angle = clamp(angle + vel, -MAX, MAX);
      }
      swing.style.transform = `rotate(${angle.toFixed(2)}deg)`;
      if (dragging || Math.abs(angle) > 0.03 || Math.abs(vel) > 0.03) {
        raf = requestAnimationFrame(step);
      } else {
        raf = 0; angle = 0; vel = 0; swing.style.transform = '';
      }
    }
    const kick = () => { if (!raf) raf = requestAnimationFrame(step); };

    card.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      dragging = true;
      grabOffset = pointerAngle(e) + angle;
      prev = angle;
      card.setPointerCapture(e.pointerId);
      card.classList.add('is-dragging');
      kick();
    });
    card.addEventListener('pointermove', (e) => {
      if (dragging) {
        const next = clamp(grabOffset - pointerAngle(e), -MAX, MAX);
        vel = next - prev;
        prev = angle = next;
        return;
      }
      if (!finePointer) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', `${((px - 0.5) * 14).toFixed(2)}deg`);
      card.style.setProperty('--rx', `${((0.5 - py) * 10).toFixed(2)}deg`);
      card.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
    });
    const release = () => {
      if (!dragging) return;
      dragging = false;
      card.classList.remove('is-dragging');
      kick();
    };
    card.addEventListener('pointerup', release);
    card.addEventListener('pointercancel', release);
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });

    // A small swing the first time it comes into view
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { vel = 2.2; kick(); io.disconnect(); }
    }, { threshold: 0.5 });
    io.observe(card);

    // Fast scrolling sways it, like walking with a badge on
    if (lenis) {
      lenis.on('scroll', ({ velocity }) => {
        if (dragging || Math.abs(velocity) < 4) return;
        const r = card.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        vel = clamp(vel + velocity * 0.012, -3, 3);
        kick();
      });
    }
  }

  /* ---------- Contact: brief builder, copy email, Nairobi time ---------- */
  const toastEl = $('#toast');
  let toastTimer = 0;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-on'), 2200);
  }

  function initContact() {
    const send = $('#brief-send');
    const note = $('#brief-note');
    const groups = $$('.brief-chips');
    const defaultNote = note?.textContent;

    function compose() {
      const needs = $$('.chip[aria-pressed="true"]', groups[0]).map((c) => c.dataset.value);
      const when = $('.chip[aria-pressed="true"]', groups[1])?.dataset.value;
      const subject = needs.length ? `Working together: ${needs.join(', ')}` : 'Working together';
      const body = [
        'Hi Mitchelle,',
        '',
        "I'm [your name] from [brand].",
        needs.length ? `What we need: ${needs.join(', ')}.` : '',
        when ? `Timing: ${when}.` : '',
        '',
        'About the brief:',
        '',
      ].filter((l, k, all) => l !== '' || all[k - 1] !== '').join('\n');
      send.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const parts = [...needs];
      if (when) parts.push(when);
      note.textContent = parts.length ? `Your email will mention: ${parts.join(', ')}.` : defaultNote;
    }

    groups.forEach((g) => g.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      const on = chip.getAttribute('aria-pressed') !== 'true';
      if (!g.hasAttribute('data-multi')) $$('.chip', g).forEach((c) => c.setAttribute('aria-pressed', 'false'));
      chip.setAttribute('aria-pressed', String(on));
      compose();
    }));

    $$('[data-copy]').forEach((btn) => btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = Object.assign(document.createElement('textarea'), { value: text });
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.append(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      const label = $('span', btn);
      label.textContent = 'Copied';
      toast('Email copied');
      setTimeout(() => { label.textContent = 'Copy Email'; }, 2200);
    }));

    const time = $('#nairobi-time');
    if (time) {
      const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Africa/Nairobi', hour: 'numeric', minute: '2-digit', hour12: true });
      const tick = () => { time.textContent = `It's ${fmt.format(new Date())} here now. Available to travel.`; };
      tick();
      setInterval(tick, 30000);
    }
  }

  /* ---------- Trailing pill cursor and magnetic buttons ---------- */
  function initCursor() {
    if (!finePointer || reduceMotion) return;
    const el = $('#cursor');
    const label = $('span', el);
    el.classList.add('is-hidden');
    document.documentElement.classList.add('cursor-ready');
    let x = -100, y = -100, tx = -100, ty = -100, running = false;

    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      if (Math.abs(tx - x) > 0.1 || Math.abs(ty - y) > 0.1) requestAnimationFrame(loop);
      else running = false;
    };

    addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      tx = e.clientX; ty = e.clientY;
      if (x < -50) { x = tx; y = ty; }
      const t = e.target.closest('[data-cursor]');
      el.classList.toggle('is-label', !!t);
      el.classList.toggle('is-offset', !!t && !!t.closest('button, .mi-btn'));
      el.classList.toggle('is-hidden', !!e.target.closest('input, textarea, iframe, dialog'));
      if (t && label.textContent !== t.dataset.cursor) label.textContent = t.dataset.cursor;
      if (!running) { running = true; requestAnimationFrame(loop); }
    }, { passive: true });
    document.addEventListener('pointerleave', () => el.classList.add('is-hidden'));
    document.addEventListener('pointerenter', () => el.classList.remove('is-hidden'));

    $$('.mi-btn-primary, .copy-btn').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = clamp((e.clientX - (r.left + r.width / 2)) * 0.2, -8, 8);
        const dy = clamp((e.clientY - (r.top + r.height / 2)) * 0.3, -6, 6);
        btn.style.transform = `translate(${dx.toFixed(1)}px,${dy.toFixed(1)}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }

  /* ---------- Download PDF: print the page as an A4 media kit ---------- */
  function loadAllImages() {
    return Promise.all($$('img[loading="lazy"]').map((img) => {
      img.loading = 'eager';
      return img.complete ? null : new Promise((res) => { img.onload = img.onerror = res; });
    }));
  }
  function initPrint() {
    $$('.print-btn').forEach((b) => b.addEventListener('click', async () => {
      await loadAllImages();
      const title = document.title;
      document.title = 'Mitchelle media kit';
      window.print();
      document.title = title;
    }));
    addEventListener('beforeprint', () => {
      $$('.reveal').forEach((r) => r.classList.add('is-in'));
      $$('img[loading="lazy"]').forEach((img) => { img.loading = 'eager'; });
    });
  }

  initScroll();
  initNav();
  initHero();
  initLookbook();
  initWork();
  initPass();
  initContact();
  initCursor();
  initPrint();
})();
