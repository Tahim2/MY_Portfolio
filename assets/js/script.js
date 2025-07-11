document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Typing animation
    class TypingAnimation {
        constructor(element, text, delay = 100) {
            this.element = element;
            this.text = text;
            this.delay = delay;
            this.index = 0;
            this.isDeleting = false;
        }

        type() {
            const currentText = this.text.substring(0, this.index);
            this.element.textContent = currentText;

            if (!this.isDeleting) {
                if (this.index < this.text.length) {
                    this.index++;
                    setTimeout(() => this.type(), this.delay);
                } else {
                    this.isDeleting = true;
                    setTimeout(() => this.type(), 1000); // Pause before deleting
                }
            } else {
                if (this.index > 0) {
                    this.index--;
                    setTimeout(() => this.type(), this.delay);
                } else {
                    this.isDeleting = false;
                    setTimeout(() => this.type(), 500); // Pause before typing again
                }
            }
        }
    }

    const titleElement = document.querySelector('.typing');
    const titleText = titleElement ? titleElement.textContent : '';
    if (titleElement) {
        titleElement.textContent = '';
        const typingTitle = new TypingAnimation(titleElement, titleText, 100);
        typingTitle.type();
    }

    const contactMessageElement = document.querySelector('.typing-text');
    const contactText = contactMessageElement ? contactMessageElement.textContent : '';
    if (contactMessageElement) {
        contactMessageElement.textContent = '';
        const typingContact = new TypingAnimation(contactMessageElement, contactText, 100);
        typingContact.type();
    }

    // Bio animation for sections
    const bioElements = document.querySelectorAll('.bio');
    bioElements.forEach((element, index) => {
        const bioText = element.textContent;
        element.textContent = '';
        const typingBio = new TypingAnimation(element, bioText, 100);
        setTimeout(() => typingBio.type(), index * 500); // Staggered start
    });
});