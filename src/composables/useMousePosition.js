import { ref, onMounted, onUnmounted } from 'vue';

export function useMousePosition() {
  const mousePos = ref({ x: 0, y: 0 });
  const perspectiveElements = ref(new Map());

  const handleMouseMove = (event) => {
    mousePos.value = { x: event.clientX, y: event.clientY };
    applyPerspectiveEffect(event);
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

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    perspectiveElements.value.clear();
  });

  return { mousePos, registerElement, unregisterElement };
}
