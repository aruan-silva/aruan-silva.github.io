/**
 * Clean, modern interactions with language toggle
 * Default language: Brazilian Portuguese (pt)
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initSmoothScroll();
  initNavHighlight();
  initMobileMenu();
  initLanguageToggle();
});

/**
 * Reveal sections on scroll
 */
function initScrollReveal() {
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  sections.forEach(section => observer.observe(section));
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Highlight active nav link
 */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  const updateActive = () => {
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--color-text)';
          }
        });
      }
    });
  };
  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  updateActive();
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav-links');
  
  if (!btn || !nav) return;
  
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('open');
  });
}

/**
 * Language Toggle (PT/EN)
 * Default: Brazilian Portuguese (pt)
 */
function initLanguageToggle() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  // Get saved language or default to Portuguese
  const savedLang = localStorage.getItem('language') || 'pt';
  
  // Apply saved language on load
  setLanguage(savedLang);
  
  // Update button states
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === savedLang);
    
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      localStorage.setItem('language', lang);
      
      // Update button states
      langButtons.forEach(b => b.classList.toggle('active', b === btn));
    });
  });
}

/**
 * Set language for all translatable elements
 */
function setLanguage(lang) {
  // Update HTML lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  
  // Find all elements with data-en and data-pt attributes
  const translatableElements = document.querySelectorAll('[data-en][data-pt]');
  
  translatableElements.forEach(el => {
    const text = lang === 'pt' ? el.dataset.pt : el.dataset.en;
    
    // Check if element has child elements (like icons)
    const hasChildElements = el.querySelector('svg, img');
    
    if (hasChildElements) {
      // For elements with icons, find and update only text nodes
      const childNodes = Array.from(el.childNodes);
      let hasTextNode = false;
      
      childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          node.textContent = '\n          ' + text + '\n        ';
          hasTextNode = true;
        }
      });
      
      // If no text node found, append the text
      if (!hasTextNode) {
        // Find existing text and replace
        const textContent = el.textContent.trim();
        if (textContent) {
          el.innerHTML = el.innerHTML.replace(textContent, text);
        }
      }
    } else {
      // Simple text element
      el.textContent = text;
    }
  });
}
