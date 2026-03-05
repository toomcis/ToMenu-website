function toggleEndpoint(header) {
  const body = header.nextElementSibling;
  body.classList.toggle('open');
}

function openMailto(e) {
  e.preventDefault();
  const subject = encodeURIComponent('namenu+ API Key Request');
  const body = encodeURIComponent(
`Hello,

I would like to request early access to the namenu+ API.

Name: 
What I'm building: 
Expected usage: 

Thank you,
`);
  window.location.href = `mailto:contact@toomcis.eu?subject=${subject}&body=${body}`;
}

// highlight active TOC item on scroll
const sections = document.querySelectorAll('section[id]');
const tocLinks  = document.querySelectorAll('.toc a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  tocLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });