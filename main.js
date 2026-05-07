document.addEventListener('DOMContentLoaded', () => {
    // Subtle fade-in for paragraphs
    const paragraphs = document.querySelectorAll('.about p');
    paragraphs.forEach((p, index) => {
        p.style.opacity = '0';
        p.style.transform = 'translateY(10px)';
        p.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
        }, 100);
    });

    // Lightbox Logic
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.modal-close');
    const clickableImages = document.querySelectorAll('.cert-logo, .honor-img, .work-logo');

    clickableImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Add current year to footer
    // ...
});
