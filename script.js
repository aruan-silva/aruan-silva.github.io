// ===================================
// Language Toggle
// ===================================
const langButtons = document.querySelectorAll('.lang-btn');
const savedLang = localStorage.getItem('preferredLang') || 'pt';

function setLanguage(lang) {
  // Update active button
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all text elements with data-en and data-pt attributes
  document.querySelectorAll('[data-en][data-pt]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.textContent = text;
    }
  });

  // Show/hide language-specific elements
  document.querySelectorAll('[data-lang-show]').forEach(el => {
    const showLang = el.getAttribute('data-lang-show');
    el.style.display = showLang === lang ? 'block' : 'none';
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  // Save preference
  localStorage.setItem('preferredLang', lang);
}

// Initialize language
setLanguage(savedLang);

// Language button click handlers
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

// ===================================
// Scroll Reveal Animation
// ===================================
const sections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach(section => {
  sectionObserver.observe(section);
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = document.querySelector('.nav')?.offsetHeight || 64;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// Navigation Active State
// ===================================
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNavLink() {
  const scrollPosition = window.scrollY + 100;
  
  navLinks.forEach(link => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const sectionTop = targetSection.offsetTop;
        const sectionHeight = targetSection.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);
updateActiveNavLink();

// ===================================
// Mobile Menu Toggle (placeholder)
// ===================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinksContainer) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('mobile-open');
    mobileMenuBtn.classList.toggle('open');
  });
}

// ===================================
// Articles Category Filter
// ===================================
const filterTags = document.querySelectorAll('.filter-tag');
const articleCards = document.querySelectorAll('.article-card');

if (filterTags.length > 0) {
  filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Update active state
      filterTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      
      const filter = tag.dataset.filter;
      
      // Filter articles
      articleCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ===================================
// TOC Active State for Course Pages
// ===================================
const tocLinks = document.querySelectorAll('.toc-list a');

if (tocLinks.length > 0) {
  function updateActiveTocLink() {
    const scrollPosition = window.scrollY + 150;
    
    tocLinks.forEach(link => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const sectionTop = targetSection.offsetTop;
          const sectionHeight = targetSection.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            tocLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveTocLink);
  updateActiveTocLink();
}
