// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://else-wer.com',
  integrations: [
    starlight({
      title: 'else wer',
      description: 'Self-hosted audiobook player — docs',
      favicon: '/favicon.svg',
      customCss: ['./src/styles/starlight-custom.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/syedyaseen/else-wer-server' },
      ],
      sidebar: [
        { label: 'Overview', link: '/docs/' },
        { label: 'Quick start', link: '/docs/quickstart/' },
        { label: 'Apps', link: '/docs/apps/' },
        { label: 'Docker', link: '/docs/docker/' },
        { label: 'Raspberry Pi (native)', link: '/docs/raspberry-pi/' },
        { label: 'HTTPS with DuckDNS (iOS)', link: '/docs/https-duckdns/' },
        { label: 'iOS offline limitations', link: '/docs/ios-offline-limitations/' },
        { label: 'Remote access with WireGuard', link: '/docs/wireguard-remote-access/' },
        { label: 'FAQ', link: '/docs/faq/' },
      ],
    }),
    react(),
  ],
});
