import React, { useState } from 'react';
import { Frame, Button, TextArea, Fieldset } from '@react95/core';
import { User3, Message } from '@react95/icons';
import { GuestbookEntry } from '../data/guestbookData.js';

interface GuestbookFormProps {
  onAddEntry: (entry: Omit<GuestbookEntry, 'id' | 'timestamp'>) => void;
  onCancel: () => void;
}

const GuestbookForm: React.FC<GuestbookFormProps> = ({ onAddEntry, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.comment.trim()) {
      alert('Please fill in all required fields (Name, Email, and Comment)');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    onAddEntry({
      name: formData.name.trim(),
      email: formData.email.trim(),
      website: formData.website.trim() || undefined,
      comment: formData.comment.trim()
    });

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', website: '', comment: '' });
    }, 2000);
  };

  if (showSuccess) {
    return (
      <Frame variant="raised" style={{ padding: '30px', textAlign: 'center' }}>
        <h2 style={{ color: '#000080', fontSize: '1.5rem', marginBottom: '15px' }}>
          🎉 Thank You!
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '20px' }}>
          Your entry has been added to our guestbook!
        </p>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          You'll be redirected back to the guestbook in a moment...
        </p>
      </Frame>
    );
  }

  return (
    <Frame variant="raised" style={{ padding: '20px' }}>
      <h2 style={{ color: '#000080', fontSize: '1.4rem', marginBottom: '20px', textAlign: 'center' }}>
        ✍️ Sign Our Guestbook
      </h2>
      
      <form onSubmit={handleSubmit}>
        <Fieldset legend="Your Information">
          <div style={{ marginBottom: '15px' }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              marginBottom: '5px',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              <User3 style={{ width: '16px', height: '16px' }} />
              Name: <span style={{ color: 'red' }}>*</span>
            </label>
            <TextArea
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your name"
              style={{ width: '100%', fontSize: '1.1rem', padding: '8px' }}
              rows={1}
              maxLength={50}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              marginBottom: '5px',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              <Message style={{ width: '16px', height: '16px' }} />
              Email: <span style={{ color: 'red' }}>*</span>
            </label>
            <TextArea
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email address"
              style={{ width: '100%', fontSize: '1.1rem', padding: '8px' }}
              rows={1}
              maxLength={100}
              type="email"
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              marginBottom: '5px',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}>
              🌐 Homepage: <span style={{ fontSize: '0.9rem', color: '#666' }}>(optional)</span>
            </label>
            <TextArea
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              placeholder="http://www.yoursite.com"
              style={{ width: '100%', fontSize: '1.1rem', padding: '8px' }}
              rows={1}
              maxLength={200}
            />
          </div>
        </Fieldset>

        <Fieldset legend="Your Message" style={{ marginTop: '20px' }}>
          <label style={{ 
            display: 'block',
            marginBottom: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}>
            Comment: <span style={{ color: 'red' }}>*</span>
          </label>
          <TextArea
            value={formData.comment}
            onChange={(e) => handleInputChange('comment', e.target.value)}
            placeholder="Tell us what you think about our site, share your thoughts on technology, or just say hello!"
            style={{ width: '100%', fontSize: '1.1rem', padding: '8px' }}
            rows={4}
            maxLength={500}
          />
          <div style={{ 
            textAlign: 'right', 
            fontSize: '0.9rem', 
            color: '#666', 
            marginTop: '5px' 
          }}>
            {formData.comment.length}/500 characters
          </div>
        </Fieldset>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          marginTop: '25px' 
        }}>
          <Button 
            type="submit"
            style={{ 
              fontSize: '1.1rem', 
              padding: '10px 20px',
              backgroundColor: '#000080',
              color: 'white'
            }}
          >
            📝 Sign Guestbook
          </Button>
          <Button 
            type="button"
            onClick={onCancel}
            style={{ fontSize: '1.1rem', padding: '10px 20px' }}
          >
            ❌ Cancel
          </Button>
        </div>
      </form>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '15px', 
        fontSize: '0.9rem', 
        color: '#666' 
      }}>
        <p>* Required fields</p>
        <p>🛡️ Your email will be partially hidden for privacy</p>
      </div>
    </Frame>
  );
};

export default GuestbookForm;