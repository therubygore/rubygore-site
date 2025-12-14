'use client';

import { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  title: string;
}

interface TocItemInput {
  href: string;
  label: string;
}

interface TocLayoutProps {
  title?: string;
  items?: TocItem[];
  tocItems?: TocItemInput[];
  children: React.ReactNode;
}

export default function TocLayout({ title = 'Table of Contents', items, tocItems, children }: TocLayoutProps) {
  // Convert tocItems format (href/label) to items format (id/title)
  const normalizedItems: TocItem[] = items || (tocItems?.map(item => ({
    id: item.href.replace(/^#/, ''),
    title: item.label
  })) || []);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => {
    if (window.innerWidth <= 1024) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <section className="legal-content toc-component">
      <div className="container">
        <div className="legal-grid">
          <nav className={`legal-nav ${isCollapsed ? 'collapsed' : ''}`} onClick={toggleCollapse}>
            <div className="text-title table-of-contents-header">{title}</div>
            <ul id="toc-links">
              {normalizedItems.map((item) => (
                <li key={item.id} className="toc-nav-item">
                  <a href={`#${item.id}`} className="toc-nav-link" onClick={() => {
                    if (window.innerWidth <= 1024) {
                      setIsCollapsed(true);
                    }
                  }}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="legal-text" id="toc-content">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

