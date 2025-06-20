import React from 'react';
import { Link } from 'react-router-dom';
import { Frame, Button } from '@react95/core';
import { User3, Date as DateIcon, Mshearts1, Message } from '@react95/icons';
import { mockArticles } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="blog-container">
      <Frame variant="raised" className="main-frame">
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            color: '#000080', 
            textShadow: '2px 2px 0px #c0c0c0',
            marginBottom: '10px'
          }}>
The Amazing Blog95
          </h1>
          <p style={{ fontSize: '1rem', color: '#000', marginBottom: '20px' }}>
            Your Premier Source for Technology News in the Digital Age
          </p>
        </div>

        <Frame variant="sunken" style={{ padding: '15px', marginBottom: '20px' }}>
          <h2 style={{ color: '#000080', fontSize: '2rem', marginBottom: '15px' }}>
Latest Articles
          </h2>
          
          {mockArticles.map((article) => (
            <Frame key={article.id} variant="raised" className="article-frame">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="article-image"
              />
              
              <div className="article-content">
                <h3 style={{ 
                  margin: '0 0 8px 0', 
                  color: '#000080',
                  fontSize: '1.5rem'
                }}>
                  {article.title}
                </h3>
                
                <p style={{ 
                  margin: '0 0 10px 0', 
                  fontSize: '1rem',
                  color: '#333',
                  lineHeight: '1.4'
                }}>
                  {article.excerpt}
                </p>
                
                <div className="article-metadata">
                  <div className="metadata-items">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User3 style={{ width: '16px', height: '16px' }} /> {article.author}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><DateIcon style={{ width: '16px', height: '16px' }} /> {article.publishDate}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Mshearts1 style={{ width: '16px', height: '16px' }} /> {article.likes} likes</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Message style={{ width: '16px', height: '16px' }} /> {article.comments.length} comments</span>
                  </div>
                  
                  <Link to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
                    <Button style={{ fontSize: '1rem', padding: '8px 16px' }}>Read More</Button>
                  </Link>
                </div>
              </div>
            </Frame>
          ))}
        </Frame>
        
        {/* Guestbook Link */}
        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '15px' }}>
          <Link to="/guestbook" style={{ textDecoration: 'none' }}>
            <Button style={{ 
              fontSize: '1.2rem', 
              padding: '10px 20px',
              backgroundColor: '#008080',
              color: 'white'
            }}>
              📖 Sign Our Guestbook
            </Button>
          </Link>
        </div>
        
        <div style={{ textAlign: 'center', fontSize: '0.875rem', color: '#666' }}>
          <p>© 1995 The Amazing Blog95 • Powered by Windows 95 Technology</p>
        </div>
      </Frame>
    </div>
  );
};

export default HomePage;