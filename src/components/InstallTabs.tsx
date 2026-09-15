import { useState } from 'react';

const TABS = [
  {
    id: 'compose',
    label: 'docker-compose.yml',
    code: `services:
  else-wer:
    build: .
    restart: unless-stopped
    ports:
      - "3000:3000"
    env_file:
      - .env.docker
    volumes:
      - else-wer-data:/data
      - ./audiobooks:/audiobooks

volumes:
  else-wer-data:`,
  },
  {
    id: 'run',
    label: 'Run it',
    code: `git clone https://github.com/syedyaseen/else-wer-server.git
cd else-wer-server
cp .env.docker.example .env.docker   # set JWT_SECRET
mkdir audiobooks                     # put your library here
docker compose up -d --build`,
  },
] as const;

export default function InstallTabs() {
  const [active, setActive] = useState<(typeof TABS)[number]['id']>('run');
  const [copied, setCopied] = useState(false);
  const activeTab = TABS.find((t) => t.id === active)!;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeTab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API unavailable — silently ignore, code is still visible/selectable
    }
  };

  return (
    <div className="install-tabs">
      <div className="install-tabs-bar">
        <div className="install-tabs-list" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={tab.id === active}
              className={`install-tab${tab.id === active ? ' is-active' : ''}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button className="install-copy" onClick={onCopy} type="button">
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="install-code">
        <code>{activeTab.code}</code>
      </pre>
    </div>
  );
}
