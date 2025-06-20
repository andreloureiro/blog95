import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Frame, Button, TextArea, Fieldset } from '@react95/core';
import { User3, Date as DateIcon, Message, Computer, Time } from '@react95/icons';
import { mockGuestbookEntries, visitorCount, GuestbookEntry } from '../data/guestbookData';
import GuestbookForm from './GuestbookForm';

const GuestbookPage: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(mockGuestbookEntries);
  const [showForm, setShowForm] = useState(false);

  const handleNewEntry = (newEntry: Omit<GuestbookEntry, 'id' | 'timestamp'>) => {
    const entry: GuestbookEntry = {
      ...newEntry,
      id: entries.length + 1,
      timestamp: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }) + ' - ' + new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      })
    };
    setEntries([entry, ...entries]);
    setShowForm(false);
  };

  return (
    <div className="blog-container">
      <Frame variant="raised" className="main-frame">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            color: '#000080', 
            textShadow: '2px 2px 0px #c0c0c0',
            marginBottom: '10px'
          }}>
            📖 View Our Guestbook
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#000', marginBottom: '10px' }}>
            Welcome to The Amazing Blog95 Guestbook!
          </p>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '20px' }}>
            Sign our guestbook and let us know what you think about our site!
          </p>
        </div>

        {/* Visitor Counter */}
        <Frame variant="sunken" style={{ padding: '15px', marginBottom: '20px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <User3 style={{ width: '24px', height: '24px' }} />
            <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#000080' }}>
              You are visitor #{visitorCount.toLocaleString()}
            </span>
          </div>
        </Frame>

        {/* Welcome Message */}
        <Frame variant="raised" style={{ padding: '20px', marginBottom: '20px' }}>
          <h2 style={{ color: '#000080', fontSize: '1.4rem', marginBottom: '15px', textAlign: 'center' }}>
            🌟 Welcome to Our Corner of Cyberspace! 🌟
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.5', textAlign: 'center' }}>
            Thanks for visiting The Amazing Blog95! This guestbook is our way of connecting with fellow netizens 
            who are riding the information superhighway. Leave us a message about your thoughts on our articles, 
            your predictions for the future, or just say hello from your corner of the World Wide Web!
          </p>
        </Frame>

        {/* Sign Guestbook Button */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Button 
            onClick={() => setShowForm(!showForm)}
            style={{ fontSize: '1.2rem', padding: '10px 20px' }}
          >
            {showForm ? '📖 View Guestbook' : '✍️ Sign Our Guestbook'}
          </Button>
        </div>

        {/* Guestbook Form */}
        {showForm && (
          <div style={{ marginBottom: '20px' }}>
            <GuestbookForm onAddEntry={handleNewEntry} onCancel={() => setShowForm(false)} />
          </div>
        )}

        {/* Guestbook Entries */}
        {!showForm && (
          <Frame variant="sunken" style={{ padding: '15px' }}>
            <h2 style={{ color: '#000080', fontSize: '1.3rem', marginBottom: '15px', textAlign: 'center' }}>
              Recent Visitors ({entries.length} entries)
            </h2>
            
            <div className="guestbook-entries">
              {entries.map((entry) => (
                <Frame key={entry.id} variant="raised" className="guestbook-entry" style={{ marginBottom: '15px', padding: '15px' }}>
                  {/* Entry Header */}
                  <div style={{ 
                    borderBottom: '1px solid #808080', 
                    paddingBottom: '8px', 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <strong style={{ color: '#000080', fontSize: '1.1rem' }}>#{entry.id}</strong>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <User3 style={{ width: '16px', height: '16px' }} />
                      <strong style={{ fontSize: '1.1rem' }}>{entry.name}</strong>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Message style={{ width: '16px', height: '16px', color: '#666' }} />
                      <span style={{ fontSize: '0.95rem', color: '#666' }}>
                        {entry.email.replace(/(.{3}).*@/, '$1***@')}
                      </span>
                    </div>
                    {entry.website && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Computer style={{ width: '16px', height: '16px', color: '#666' }} />
                        <a 
                          href={entry.website} 
                          style={{ fontSize: '0.95rem', color: '#0000FF', textDecoration: 'underline' }}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Homepage
                        </a>
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginLeft: 'auto' }}>
                      <Time style={{ width: '16px', height: '16px', color: '#666' }} />
                      <span style={{ fontSize: '0.9rem', color: '#666' }}>{entry.timestamp}</span>
                    </div>
                  </div>
                  
                  {/* Entry Comment */}
                  <div style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.4' }}>
                    {entry.comment}
                  </div>
                </Frame>
              ))}
            </div>
          </Frame>
        )}

        {/* Back to Home Link */}
        <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button style={{ fontSize: '1.1rem', padding: '8px 16px' }}>
              🏠 Back to Home
            </Button>
          </Link>
        </div>
        
        {/* Footer */}
        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666', marginTop: '20px' }}>
          <p>© 1995 The Amazing Blog95 Guestbook • Powered by Windows 95 Technology</p>
        </div>
      </Frame>
    </div>
  );
};

export default GuestbookPage;