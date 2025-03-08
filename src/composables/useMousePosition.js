import { ref, onMounted, onUnmounted } from 'vue';

export function useMousePosition() {
  const mousePos = ref({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    mousePos.value = { x: event.clientX, y: event.clientY };
  };

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
  });

  return { mousePos };
}
