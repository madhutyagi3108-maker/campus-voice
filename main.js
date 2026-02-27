// ===== DUMMY DATA =====
const colleges = [
  { id:1, name:"Indian Institute of Technology, Delhi", location:"New Delhi, Delhi", rating:4.8, type:"Engineering", img:"https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop", reviews:342, desc:"IIT Delhi is one of India's premier engineering institutions, known for its cutting-edge research and world-class faculty.", placements:"95% placement rate with avg package ₹18 LPA", infra:"State-of-the-art labs, 800-acre campus, smart classrooms", faculty:"350+ PhD faculty from top global universities", campus:"150+ clubs, annual tech fest Tryst, vibrant hostel life" },
  { id:2, name:"St. Stephen's College", location:"New Delhi, Delhi", rating:4.6, type:"Arts", img:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop", reviews:215, desc:"One of India's oldest and most prestigious colleges, known for liberal arts education and distinguished alumni.", placements:"Strong alumni network, 85% placement rate", infra:"Heritage campus, modern library, beautiful architecture", faculty:"200+ experienced professors", campus:"Rich cultural heritage, annual festivals, sports excellence" },
  { id:3, name:"BITS Pilani", location:"Pilani, Rajasthan", rating:4.7, type:"Engineering", img:"https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&h=400&fit=crop", reviews:289, desc:"Birla Institute of Technology and Science, a leading private university known for engineering and science programs.", placements:"92% placement rate, top recruiters include Google, Microsoft", infra:"Modern campus with world-class facilities", faculty:"300+ highly qualified professors", campus:"APOGEE tech fest, vibrant student community" },
  { id:4, name:"Lady Shri Ram College", location:"New Delhi, Delhi", rating:4.5, type:"Arts", img:"https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop", reviews:178, desc:"Premier women's college in Delhi, known for humanities and social sciences programs.", placements:"Strong placement cell, diverse career opportunities", infra:"Well-equipped campus in South Delhi", faculty:"Expert faculty with research backgrounds", campus:"Empowering environment, cultural events, social initiatives" },
  { id:5, name:"IIM Ahmedabad", location:"Ahmedabad, Gujarat", rating:4.9, type:"Management", img:"https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=600&h=400&fit=crop", reviews:412, desc:"India's top business school, globally recognized for MBA programs and leadership development.", placements:"100% placement, avg package ₹28 LPA", infra:"Iconic Louis Kahn-designed campus", faculty:"World-renowned management professors", campus:"Case study culture, entrepreneurship hub" },
  { id:6, name:"NIT Trichy", location:"Tiruchirappalli, Tamil Nadu", rating:4.4, type:"Engineering", img:"https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop", reviews:256, desc:"National Institute of Technology, Tiruchirappalli — one of India's top NITs with strong technical programs.", placements:"90% placement rate, avg package ₹12 LPA", infra:"800-acre green campus, modern labs", faculty:"250+ dedicated faculty members", campus:"Festember, Pragyan — vibrant student life" },
];

const reviews = [
  { name:"Arjun Sharma", college:1, rating:5, text:"Amazing experience! The faculty and infrastructure are world-class. Got placed in my dream company through campus placements.", date:"2 weeks ago" },
  { name:"Priya Patel", college:1, rating:4, text:"Great college overall. The coursework is challenging but rewarding. Campus life is incredible with so many clubs and events.", date:"1 month ago" },
  { name:"Rahul Kumar", college:2, rating:5, text:"The intellectual environment here is unmatched. Professors are brilliant and always accessible. Loved every moment.", date:"3 weeks ago" },
  { name:"Sneha Gupta", college:3, rating:4, text:"BITS Pilani has a unique culture. The practice school system gives amazing industry exposure. Highly recommended!", date:"2 months ago" },
  { name:"Aditya Verma", college:5, rating:5, text:"IIM Ahmedabad transformed my career. The case-study methodology and peer learning are exceptional.", date:"1 week ago" },
  { name:"Kavya Nair", college:4, rating:5, text:"LSR empowered me in ways I never imagined. The faculty mentorship and opportunities are outstanding.", date:"3 weeks ago" },
  { name:"Vikram Singh", college:6, rating:4, text:"NIT Trichy has great faculty and excellent placement opportunities. The campus festivals are a highlight!", date:"1 month ago" },
  { name:"Meera Joshi", college:1, rating:4, text:"Incredible research opportunities and supportive seniors. The coding culture here pushes you to excel.", date:"2 months ago" },
];

// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// ===== STAR RENDER =====
function renderStars(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    s += i <= Math.round(rating) ? '★' : '<span class="empty">★</span>';
  }
  return s;
}

// ===== RENDER COLLEGE CARDS =====
function renderCollegeCards(list, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = list.map(c => `
    <div class="college-card" onclick="window.location.href='college-detail.html?id=${c.id}'">
      <div class="card-img">
        <img src="${c.img}" alt="${c.name}" loading="lazy">
        <span class="card-badge">${c.type}</span>
      </div>
      <div class="card-body">
        <h3>${c.name}</h3>
        <div class="card-location">📍 ${c.location}</div>
        <div class="card-footer">
          <div class="stars">${renderStars(c.rating)}</div>
          <span class="rating-num">${c.rating}/5</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== HOME PAGE: FEATURED COLLEGES =====
renderCollegeCards(colleges.slice(0, 3), 'featured-colleges');

// ===== COLLEGE LISTING: ALL COLLEGES =====
renderCollegeCards(colleges, 'all-colleges');

// ===== SEARCH FUNCTIONALITY =====
function setupSearch(inputId, containerId, dataset) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    const filtered = dataset.filter(c =>
      c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q) || c.type.toLowerCase().includes(q)
    );
    renderCollegeCards(filtered, containerId);
  });
}
setupSearch('hero-search', 'featured-colleges', colleges.slice(0,3));
setupSearch('listing-search', 'all-colleges', colleges);

// ===== FILTER BUTTONS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.dataset.type;
    const filtered = type === 'all' ? colleges : colleges.filter(c => c.type === type);
    renderCollegeCards(filtered, 'all-colleges');
  });
});

// ===== COLLEGE DETAIL PAGE =====
function loadCollegeDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const college = colleges.find(c => c.id === id);
  if (!college) return;

  const setHTML = (sel, val) => { const e = document.querySelector(sel); if(e) e.innerHTML = val; };
  const setTxt = (sel, val) => { const e = document.querySelector(sel); if(e) e.textContent = val; };
  const setAttr = (sel, attr, val) => { const e = document.querySelector(sel); if(e) e.setAttribute(attr, val); };

  setTxt('.detail-name', college.name);
  setTxt('.detail-location', '📍 ' + college.location);
  setHTML('.detail-stars', renderStars(college.rating));
  setTxt('.detail-rating-num', college.rating + '/5');
  setAttr('.detail-main-img', 'src', college.img);
  setTxt('.detail-desc', college.desc);
  setTxt('.stat-placements', college.placements);
  setTxt('.stat-infra', college.infra);
  setTxt('.stat-faculty', college.faculty);
  setTxt('.stat-campus', college.campus);

  // Reviews
  const revContainer = document.getElementById('college-reviews');
  if (revContainer) {
    const collegeReviews = reviews.filter(r => r.college === id);
    revContainer.innerHTML = collegeReviews.length ? collegeReviews.map(r => `
      <div class="review-card">
        <div class="review-header">
          <div class="review-avatar">${r.name.charAt(0)}</div>
          <div class="review-meta">
            <h4>${r.name}</h4>
            <span>${r.date}</span>
          </div>
          <div class="stars" style="margin-left:auto;">${renderStars(r.rating)}</div>
        </div>
        <p>${r.text}</p>
      </div>
    `).join('') : '<p style="color:var(--text-light)">No reviews yet. Be the first to review!</p>';
  }
}
loadCollegeDetail();

// ===== TABS =====
document.querySelectorAll('.detail-tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.detail-tabs button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add('active');
  });
});

// ===== STAR RATING INPUT =====
document.querySelectorAll('.star-rating-input').forEach(container => {
  const stars = container.querySelectorAll('span');
  stars.forEach((star, idx) => {
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, i) => s.classList.toggle('active', i <= idx));
    });
    star.addEventListener('click', () => {
      container.dataset.rating = idx + 1;
      stars.forEach((s, i) => s.classList.toggle('active', i <= idx));
    });
  });
  container.addEventListener('mouseleave', () => {
    const r = parseInt(container.dataset.rating) || 0;
    stars.forEach((s, i) => s.classList.toggle('active', i < r));
  });
});

// ===== ADD REVIEW FORM =====
const reviewForm = document.getElementById('review-form');
if (reviewForm) {
  // Populate dropdown
  const select = reviewForm.querySelector('select[name="college"]');
  if (select) {
    colleges.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id; opt.textContent = c.name;
      select.appendChild(opt);
    });
  }
  reviewForm.addEventListener('submit', e => {
    e.preventDefault();
    showToast('✅ Review submitted successfully!');
    reviewForm.reset();
    const stars = reviewForm.querySelectorAll('.star-rating-input span');
    stars.forEach(s => s.classList.remove('active'));
  });
}

// ===== AUTH TOGGLE =====
const authToggle = document.querySelectorAll('.auth-toggle a');
authToggle.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    if (loginForm && signupForm) {
      loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
      signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
    }
  });
});

// ===== AUTH FORM SUBMIT =====
document.querySelectorAll('.auth-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('✅ Welcome to CollegeJaano!');
  });
});

// ===== TOAST =====
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
