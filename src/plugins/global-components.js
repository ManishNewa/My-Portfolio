// Register global components

import MouseBackdrop from '@/components/common/animations/MouseBackdrop.vue';
import LottieAnimation from '@/components/common/animations/LottieAnimation.vue';

export default {
  install(app) {
    app.component('MouseBackdrop', MouseBackdrop);
    app.component('LottieAnimation', LottieAnimation);
  },
};
