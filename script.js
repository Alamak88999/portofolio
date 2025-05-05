document.addEventListener('DOMContentLoaded', function() {
    // Navigation System
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');
    
    // Initialize first section
    sections[0].classList.add('active');
    
    // Navigation click handler
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Update active navigation
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Section transition
            sections.forEach(section => {
                if (section.id === target) {
                    section.style.display = 'block';
                    setTimeout(() => {
                        section.classList.add('active');
                    }, 10);
                } else {
                    section.classList.remove('active');
                    setTimeout(() => {
                        section.style.display = 'none';
                    }, 600);
                }
            });
            
            // Scroll to top of section
            document.getElementById(target).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animate skill bars when skills section is visible
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = level + '%';
            }, 300);
        });
    };
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
                
                // Update navigation
                const id = entry.target.id;
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('data-target') === id) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Mobile navigation touch optimization
    if ('ontouchstart' in window) {
        navItems.forEach(item => {
            item.style.cursor = 'pointer';
        });
    }
});

// Profile Image Zoom Functionality
const profileImg = document.querySelector('.profile-img');
const modal = document.querySelector('.image-modal');
const modalImg = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-modal');

if (profileImg) {
    profileImg.style.cursor = 'zoom-in';
    profileImg.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
}

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

//open at 404
const to = document.getElementById("to");
to.addEventListener('click', function() {
  window.location.href = "https://alamak88999.github.io/portofolio-/alert/alert.html";
});