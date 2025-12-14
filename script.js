/**
 * Clean, modern interactions with language toggle
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
 */
function initLanguageToggle() {
  const langButtons = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('language') || 'en';
  
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
    
    // Handle elements that might contain other elements (like links with icons)
    if (el.childElementCount === 0) {
      el.textContent = text;
    } else {
      // For elements with children (like buttons with icons), find the text node
      const textNodes = Array.from(el.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
      if (textNodes.length > 0) {
        // Replace text content but keep other child elements
        const lastTextNode = textNodes[textNodes.length - 1];
        lastTextNode.textContent = text;
      } else {
        // If no text nodes, append the text
        el.appendChild(document.createTextNode(text));
      }
    }
  });
}
