// Register global components

import MouseBackdrop from '@/components/common/animations/MouseBackdrop.vue';

export default {
  install(app) {
    app.component('MouseBackdrop', MouseBackdrop);
  },
};
