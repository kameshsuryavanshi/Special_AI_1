// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// // import tailwind from 'tailwindcss'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5000,
//   },
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from 'tailwindcss'

// // Tailwind v4 no longer auto-uses PostCSS, include plugin directly
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     port: 5000,
//   },
// })
// vite.config.js
// import { defineConfig } from 'vite';
// import remark from 'remark';
// import remarkHtml from 'remark-html';

// function remarkPlugin() {
//   return {
//     name: 'vite-plugin-remark',
//     transform(src, id) {
//       if (!id.endsWith('.md')) return;
//       const processed = remark().use(remarkHtml).processSync(src);
//       return {
//         code: `export default ${JSON.stringify(String(processed))}`,
//         map: null
//       };
//     }
//   };
// }

// export default defineConfig({
//   plugins: [remarkPlugin()]
// });




// vite.config.js
import { defineConfig } from 'vite';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

function remarkPlugin(): Plugin {
  return {
    name: 'vite-plugin-remark',
    transform(src: string, id: string) {
      if (!id.endsWith('.md')) return;

      const processed = unified()
        .use(remarkParse)
        .use(remarkHtml)
        .processSync(src);

      return {
        code: `export default ${JSON.stringify(String(processed))}`,
        map: null
      };
    }
  };
}

export default defineConfig({
  plugins: [react(), remarkPlugin()],
  server: {
    port: 5000,
  },
});
