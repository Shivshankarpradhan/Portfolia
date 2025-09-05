const cards = document.querySelectorAll('.card');

    window.addEventListener('scroll', () => {
      const triggerBottom = window.innerHeight * 0.8;

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
          card.classList.add('show');
        } else {
          card.classList.remove('show');
        }
      });
    });

   