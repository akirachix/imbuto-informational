//FAQ
        document.addEventListener('DOMContentLoaded', function () {
            const questions = document.querySelectorAll('.faq-question');
            questions.forEach(btn => {
                btn.addEventListener('click', function () {
                    const answer = this.nextElementSibling;
                    const open = answer.style.maxHeight;
                    document.querySelectorAll('.faq-answer').forEach(ans => {
                        ans.style.maxHeight = null;
                    });
                    if (!open) {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                    }
                });
            });
        });

//How it works

        document.addEventListener('DOMContentLoaded', () => {
            const featureBlocks = document.querySelectorAll('.feature-block');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        const listItems = entry.target.querySelectorAll('.animated-item');
                        listItems.forEach((item, index) => {
                            item.style.transitionDelay = `${index * 0.15}s`;
                            item.classList.add('item-visible');
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3
            });
            featureBlocks.forEach(block => {
                observer.observe(block);
            });
        });
 

