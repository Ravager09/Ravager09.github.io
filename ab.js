document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in and slide-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    document.querySelectorAll('.visualization').forEach(vis => {
        vis.classList.add('slide-in');
        observer.observe(vis);
    });

    // Toggle dark mode
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.top = '10px';
    darkModeToggle.style.right = '10px';
    darkModeToggle.style.zIndex = '1000';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            document.documentElement.style.setProperty('--background-color', '#333');
            document.documentElement.style.setProperty('--text-color', '#F8F8FF');
        } else {
            document.documentElement.style.setProperty('--background-color', '#F8F8FF');
            document.documentElement.style.setProperty('--text-color', '#333');
        }
    });

    // Interactive charts (placeholder - replace with actual chart library implementation)
    document.querySelectorAll('.plot').forEach(plot => {
        plot.addEventListener('mouseover', () => {
            plot.style.transform = 'scale(1.05)';
            plot.style.transition = 'transform 0.3s ease';
        });
        plot.addEventListener('mouseout', () => {
            plot.style.transform = 'scale(1)';
        });
    });

    // Collapsible sections
    document.querySelectorAll('section h2').forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    });
});