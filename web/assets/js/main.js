(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var projects = window.PORTFOLIO_PROJECTS || [];
  var translations = window.PORTFOLIO_I18N || { pt: {}, en: {} };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var themeToggle = document.getElementById("theme-toggle");
  var themeColor = document.querySelector('meta[name="theme-color"]');
  var langButtons = Array.prototype.slice.call(document.querySelectorAll(".lang-btn"));
  var menuToggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("main-nav");
  var navLinks = Array.prototype.slice.call(nav.querySelectorAll("a"));
  var filterBar = document.getElementById("project-filters");
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".filter-btn"));
  var projectGrid = document.getElementById("project-grid");
  var year = document.getElementById("year");

  var currentLang = "pt";
  var currentFilter = "all";
  var menuOpen = false;

  try {
    var storedLang = localStorage.getItem("ehs-lang");
    if (storedLang === "pt" || storedLang === "en") currentLang = storedLang;
  } catch (error) {}

  function t(key) {
    var dictionary = translations[currentLang] || {};
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) return dictionary[key];
    var fallback = translations.pt || {};
    return Object.prototype.hasOwnProperty.call(fallback, key) ? fallback[key] : "";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function iconMarkup(name) {
    return '<svg class="icon" aria-hidden="true"><use href="#i-' + escapeHtml(name) + '"/></svg>';
  }

  /* --------------------------------------------------
     Tema
     -------------------------------------------------- */
  function updateThemeUI() {
    var isDark = root.dataset.theme === "dark";
    if (themeToggle) themeToggle.setAttribute("aria-label", t("a11y.theme"));
    if (themeColor) themeColor.setAttribute("content", isDark ? "#18181b" : "#fafafa");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("ehs-theme", next);
      } catch (error) {}
      updateThemeUI();
    });
  }

  /* --------------------------------------------------
     Idioma
     -------------------------------------------------- */
  function applyTranslations() {
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var value = t(key);
      if (value) node.textContent = value;
    });

    root.lang = currentLang === "pt" ? "pt-BR" : "en";
    document.title = t("meta.title");

    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t("meta.description"));
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t("meta.title"));
    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", t("meta.description"));
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", currentLang === "pt" ? "pt_BR" : "en_US");

    langButtons.forEach(function (button) {
      var active = button.dataset.lang === currentLang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    updateThemeUI();
    updateMenuUI();
    renderProjects();
  }

  function setLanguage(lang) {
    if (lang !== "pt" && lang !== "en") return;
    currentLang = lang;
    try {
      localStorage.setItem("ehs-lang", lang);
    } catch (error) {}
    applyTranslations();
  }

  langButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.dataset.lang);
    });
  });

  /* --------------------------------------------------
     Menu mobile
     -------------------------------------------------- */
  function updateMenuUI() {
    if (!menuToggle) return;
    menuToggle.setAttribute("aria-expanded", menuOpen ? "true" : "false");
    menuToggle.setAttribute("aria-label", menuOpen ? t("a11y.menu.close") : t("a11y.menu.open"));
  }

  function setMenu(open) {
    menuOpen = open;
    if (nav) nav.classList.toggle("is-open", open);
    body.classList.toggle("menu-open", open);
    updateMenuUI();
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      setMenu(!menuOpen);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (menuOpen) setMenu(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuOpen) {
      setMenu(false);
      if (menuToggle) menuToggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 980 && menuOpen) setMenu(false);
  });

  /* --------------------------------------------------
     Projetos
     -------------------------------------------------- */
  function categoryLabels(project) {
    return project.categories
      .map(function (category) {
        return '<span class="project-cat">' + escapeHtml(t("projects.filter." + category)) + "</span>";
      })
      .join("");
  }

  function projectCard(project) {
    var title = project.title[currentLang] || project.title.pt;
    var description = project.description[currentLang] || project.description.pt;
    var accent = project.accent || ["#4f46e5", "#7c3aed"];
    var featured = project.featured
      ? '<span class="project-badge">' + escapeHtml(t("projects.featured")) + "</span>"
      : "";

    var footer;
    if (project.link) {
      footer =
        '<a class="project-link" href="' + escapeHtml(project.link) + '" target="_blank" rel="noopener noreferrer">' +
        iconMarkup("github") +
        "<span>" + escapeHtml(t("projects.code")) + "</span>" +
        iconMarkup("arrow-up-right") +
        "</a>";
    } else {
      footer =
        '<span class="project-private">' + iconMarkup("file") +
        "<span>" + escapeHtml(t("projects.private")) + "</span></span>";
    }

    var tags = project.tags
      .map(function (tag) {
        return "<li>" + escapeHtml(tag) + "</li>";
      })
      .join("");

    return (
      '<article class="project-card" data-categories="' + escapeHtml(project.categories.join(" ")) + '">' +
        '<div class="project-cover" style="--a1:' + escapeHtml(accent[0]) + ";--a2:" + escapeHtml(accent[1]) + '">' +
          '<span class="project-cover-grid" aria-hidden="true"></span>' +
          '<span class="project-icon" aria-hidden="true">' + iconMarkup(project.icon) + "</span>" +
          featured +
          '<div class="project-cats">' + categoryLabels(project) + "</div>" +
        "</div>" +
        '<div class="project-body">' +
          "<h3>" + escapeHtml(title) + "</h3>" +
          "<p>" + escapeHtml(description) + "</p>" +
          '<ul class="chip-row project-tags">' + tags + "</ul>" +
        "</div>" +
        '<footer class="project-footer">' + footer + "</footer>" +
      "</article>"
    );
  }

  function renderProjects() {
    if (!projectGrid) return;

    var visible = projects.filter(function (project) {
      return currentFilter === "all" || project.categories.indexOf(currentFilter) !== -1;
    });

    projectGrid.innerHTML = visible.map(projectCard).join("");
    projectGrid.setAttribute("data-filter", currentFilter);
  }

  function updateCounts() {
    var counts = { all: projects.length, web: 0, mobile: 0, backend: 0 };
    projects.forEach(function (project) {
      project.categories.forEach(function (category) {
        if (Object.prototype.hasOwnProperty.call(counts, category)) counts[category] += 1;
      });
    });

    document.querySelectorAll("[data-count]").forEach(function (node) {
      var key = node.getAttribute("data-count");
      node.textContent = counts[key] || 0;
    });
  }

  function setFilter(filter) {
    currentFilter = filter;
    filterButtons.forEach(function (button) {
      var active = button.dataset.filter === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    renderProjects();
  }

  if (filterBar) {
    filterBar.addEventListener("click", function (event) {
      var button = event.target.closest(".filter-btn");
      if (button) setFilter(button.dataset.filter);
    });
  }

  /* --------------------------------------------------
     Scroll: header, reveal e navegação ativa
     -------------------------------------------------- */
  var header = document.querySelector(".site-header");
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var ticking = false;

  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);

    var offset = 140;
    var activeId = "";
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= offset) activeId = section.id;
    });

    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + activeId);
    });

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  var revealNodes = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealNodes.forEach(function (node) {
      revealObserver.observe(node);
    });
  }

  /* --------------------------------------------------
     Inicialização
     -------------------------------------------------- */
  if (year) year.textContent = String(new Date().getFullYear());
  if (projectGrid) {
    updateCounts();
    applyTranslations();
    setFilter("all");
    onScroll();
  } else {
    applyTranslations();
  }
})();
