"use client";

import { FC } from 'react';
import './InfiniteMenu.css';

interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

interface InfiniteMenuProps {
  items?: MenuItem[];
  scale?: number;
}

const defaultItems: MenuItem[] = [
  {
    image: 'https://picsum.photos/900/900?grayscale',
    link: 'https://google.com/',
    title: '',
    description: ''
  }
];

const InfiniteMenu: FC<InfiniteMenuProps> = ({ items = [], scale = 1.0 }) => {
  const menuItems = items.length ? items : defaultItems;

  return (
    <div style={{ 
      height: '100%', 
      width: '100%',
      overflow: 'auto',
      background: '#020202',
      padding: '1rem'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '2px solid #333',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              aspectRatio: '1/1',
              textDecoration: 'none',
              background: '#111'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.borderColor = '#5227ff';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(82,39,255,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = '#333';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img
              src={item.image}
              alt={item.title || `Project ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              loading="lazy"
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.95))',
              padding: '1.5rem 1rem 1rem',
              color: 'white'
            }}>
              <h3 style={{ 
                fontSize: '1rem', 
                margin: 0, 
                fontWeight: 'bold',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
              }}>
                {item.title || `Project ${index + 1}`}
              </h3>
              {item.description && (
                <p style={{ 
                  fontSize: '0.8rem', 
                  opacity: 0.8, 
                  margin: '0.3rem 0 0',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}>
                  {item.description}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMenu;