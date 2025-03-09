import { ref, onMounted, onUnmounted } from 'vue';

export function useMousePosition() {
  const mousePos = ref({ x: 0, y: 0 });
  const perspectiveElements = ref(new Map());
  const cards = ref([]);

  const handleMouseMove = (event) => {
    mousePos.value = { x: event.clientX, y: event.clientY };
    if (perspectiveElements.value.size > 0) {
      applyPerspectiveEffect(event);
    }
    if (cards.value.length > 0) {
      handleCardPerspective(event);
    }
  };

  // For animating the elements on perspective based on mouse hover
  const applyPerspectiveEffect = (event) => {
    perspectiveElements.value.forEach((intensity, element) => {
      if (element?.value) {
        const rect = element.value.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (event.clientX - centerX) / intensity;
          const deltaY = (event.clientY - centerY) / intensity;

          element.value.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
        }
      }
    });
  };

  const registerElement = (element, intensity = 20) => {
    if (element) {
      perspectiveElements.value.set(element, intensity);
    }
  };

  const unregisterElement = (element) => {
    perspectiveElements.value.delete(element);
  };

  const handleCardPerspective = (e) => {
    cards.value.forEach((card) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const perspectiveCard = card.querySelector('.perspective-card');
          if (perspectiveCard) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) / 40;
            const deltaY = (e.clientY - centerY) / 40;

            perspectiveCard.style.transform = `rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
          }
        }
      }
    });
  };

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    perspectiveElements.value.clear();
    cards.value = [];
  });

  return {
    mousePos,
    cards,
    registerElement,
    unregisterElement,
    handleCardPerspective,
  };
}
