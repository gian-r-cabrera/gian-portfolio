import { createApp } from 'vue'
import './style.css'

const root = document.querySelector('#app')

import('./App.vue')
  .then(({ default: App }) => {
    createApp(App).mount('#app')
  })
  .catch((error) => {
    // Ensure we surface bootstrap issues even in embedded browsers.
    console.error('Failed to load App.vue', error)
    if (root) {
      root.innerHTML = `
        <div style="padding: 24px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">
          <h1 style="margin: 0 0 12px; font-size: 18px;">App failed to start</h1>
          <pre style="white-space: pre-wrap; margin: 0; font-size: 12px; line-height: 1.5;">${String(
            error?.stack || error,
          ).replaceAll('<', '&lt;')}</pre>
        </div>
      `
    }
  })
