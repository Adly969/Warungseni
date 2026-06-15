document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Mobile Menu Toggle
    // ==========================================
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        const closeMobileMenu = () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('is-open');
            mobileMenu.classList.remove('is-open');
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-8px]');
        };

        const openMobileMenu = () => {
            menuToggle.setAttribute('aria-expanded', 'true');
            menuToggle.classList.add('is-open');
            mobileMenu.classList.add('is-open');
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-[-8px]');
        };

        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

            if (isExpanded) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close menu when clicking on any link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // ==========================================
    // 2. Navbar Scroll Effects
    // ==========================================
    const navbar = document.getElementById('main-navbar');
    
    function checkScroll() {
        if (window.scrollY > 20) {
            // Apply solid/blur styling
            navbar.classList.remove('border-transparent');
            navbar.classList.add('bg-dark-brown/95', 'backdrop-blur-md', 'border-gold/25', 'shadow-lg');
        } else {
            // Transparent navbar on top
            navbar.classList.add('border-transparent');
            navbar.classList.remove('bg-dark-brown/95', 'backdrop-blur-md', 'border-gold/25', 'shadow-lg');
        }
    }
    
    // Initial check and event listener
    checkScroll();
    window.addEventListener('scroll', checkScroll);

    // ==========================================
    // 3. FAQ Accordion Toggle
    // ==========================================
    const faqButtons = document.querySelectorAll('.faq-item button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const answerId = button.getAttribute('aria-controls');
            const answerWrapper = document.getElementById(answerId);
            const parentItem = button.closest('.faq-item');
            const icon = button.querySelector('.iconify');

            // Close other accordion items
            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.setAttribute('aria-expanded', 'false');
                    const otherAnswerId = otherButton.getAttribute('aria-controls');
                    const otherWrapper = document.getElementById(otherAnswerId);
                    const otherParent = otherButton.closest('.faq-item');
                    const otherIcon = otherButton.querySelector('.iconify');
                    
                    otherWrapper.style.maxHeight = '0px';
                    otherWrapper.style.paddingTop = '0px';
                    otherParent.classList.remove('open');
                    otherIcon.setAttribute('data-icon', 'solar:add-circle-bold-duotone');
                }
            });

            // Toggle current item
            if (isExpanded) {
                button.setAttribute('aria-expanded', 'false');
                answerWrapper.style.maxHeight = '0px';
                answerWrapper.style.paddingTop = '0px';
                parentItem.classList.remove('open');
                icon.setAttribute('data-icon', 'solar:add-circle-bold-duotone');
            } else {
                button.setAttribute('aria-expanded', 'true');
                const scrollHeight = answerWrapper.scrollHeight;
                answerWrapper.style.maxHeight = `${scrollHeight + 16}px`;
                answerWrapper.style.paddingTop = '12px';
                parentItem.classList.add('open');
                icon.setAttribute('data-icon', 'solar:close-circle-bold-duotone');
            }
        });
    });

    // ==========================================
    // 4. Click-to-Copy Bank Accounts
    // ==========================================
    const copyButtons = document.querySelectorAll('.copy-bank-btn');
    const copyTooltip = document.getElementById('copy-tooltip');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const accountNo = btn.getAttribute('data-account');
            
            if (accountNo) {
                navigator.clipboard.writeText(accountNo).then(() => {
                    // Position and show tooltip near the clicked button
                    const rect = btn.getBoundingClientRect();
                    const tooltipWidth = 180; // Approximate
                    
                    copyTooltip.style.top = `${window.scrollY + rect.top - 42}px`;
                    copyTooltip.style.left = `${window.scrollX + rect.left - (tooltipWidth / 2) + (rect.width / 2)}px`;
                    copyTooltip.style.opacity = '1';
                    
                    // Hide after 2 seconds
                    setTimeout(() => {
                        copyTooltip.style.opacity = '0';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
        });
    });

    // ==========================================
    // 5. Scroll Reveal Animations
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Once animated, no need to observe again
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is in full view
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // ==========================================
    // 6. Testimonial Slider / Carousel Logic
    // ==========================================
    const slider = document.getElementById('testimonial-slider');
    const dotsContainer = document.getElementById('slider-dots');
    const prevBtn = document.getElementById('slider-prev-btn');
    const nextBtn = document.getElementById('slider-next-btn');

    if (slider && prevBtn && nextBtn) {
        const slides = slider.children;
        const totalSlides = slides.length;
        let currentIndex = 0;
        let itemsPerView = window.innerWidth >= 768 ? 3 : 1;
        let totalPages = Math.ceil(totalSlides / itemsPerView);

        // Update items per view and total pages on window resize
        window.addEventListener('resize', () => {
            const newItemsPerView = window.innerWidth >= 768 ? 3 : 1;
            if (newItemsPerView !== itemsPerView) {
                itemsPerView = newItemsPerView;
                totalPages = Math.ceil(totalSlides / itemsPerView);
                currentIndex = 0; // Reset index to prevent overflow
                updateSlider();
                createDots();
            }
        });

        // Create Navigation Dots
        function createDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('button');
                dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold ${
                    i === currentIndex ? 'bg-gold w-6' : 'bg-gold/30 hover:bg-gold/60'
                }`;
                dot.setAttribute('aria-label', `Ke halaman testimoni ${i + 1}`);
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateSlider();
                });
                dotsContainer.appendChild(dot);
            }
        }

        // Update Slider Position
        function updateSlider() {
            // Calculate translation percentage
            // For 3 items: each is 33.333% wide. Moving by 1 page (3 items) = moving 100%
            // For 1 item: each is 100% wide. Moving by 1 page = moving 100%
            const movePercentage = currentIndex * 100;
            slider.style.transform = `translateX(-${movePercentage}%)`;

            // Update dots active class
            if (dotsContainer) {
                const dots = dotsContainer.children;
                for (let i = 0; i < dots.length; i++) {
                    if (i === currentIndex) {
                        dots[i].classList.remove('bg-gold/30', 'w-2.5');
                        dots[i].classList.add('bg-gold', 'w-6');
                    } else {
                        dots[i].classList.remove('bg-gold', 'w-6');
                        dots[i].classList.add('bg-gold/30', 'w-2.5');
                    }
                }
            }

            // Disable/Enable buttons if not infinite
            prevBtn.disabled = currentIndex === 0;
            prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
            prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';

            nextBtn.disabled = currentIndex === totalPages - 1;
            nextBtn.style.opacity = currentIndex === totalPages - 1 ? '0.4' : '1';
            nextBtn.style.cursor = currentIndex === totalPages - 1 ? 'not-allowed' : 'pointer';
        }

        // Button Click Listeners
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalPages - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        // Initialize
        createDots();
        updateSlider();
    }
});
