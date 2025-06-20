import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Frame, Button, TextArea, Fieldset } from '@react95/core';
import { User3, Date as DateIcon, Mshearts1, Time } from '@react95/icons';
import { mockArticles, type Comment } from '../data/mockData';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = mockArticles.find(a => a.id === parseInt(id || '0'));
  
  const [likes, setLikes] = useState(article?.likes || 0);
  const [comments, setComments] = useState<Comment[]>(article?.comments || []);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [hasLiked, setHasLiked] = useState(false);

  if (!article) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Frame variant="raised" style={{ padding: '20px' }}>
          <h2>Article Not Found</h2>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </Frame>
      </div>
    );
  }

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() && commentAuthor.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: commentAuthor.trim(),
        content: newComment.trim(),
        timestamp: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setComments([...comments, comment]);
      setNewComment('');
      setCommentAuthor('');
    }
  };

  return (
    <div className="blog-container">
      <Frame variant="raised" className="main-frame">
        <div style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button style={{ fontSize: '1rem', padding: '8px 16px' }}>← Back to Blog95</Button>
          </Link>
        </div>

        {/* Hero Section */}
        <Frame variant="sunken" style={{ marginBottom: '20px', padding: '0', overflow: 'hidden' }}>
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="article-hero-image"
          />
          <div className="article-hero-content">
            <h1 style={{ 
              fontSize: '2.5rem', 
              color: '#000080', 
              margin: '0 0 10px 0',
            }}>
              {article.title}
            </h1>
            <div className="article-hero-meta">
              <div className="article-hero-meta-left">
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User3 style={{ width: '16px', height: '16px' }} /> {article.author}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><DateIcon style={{ width: '16px', height: '16px' }} /> {article.publishDate}</span>
              </div>
              <div className="article-hero-actions">
                <Button 
                  onClick={handleLike}
                  disabled={hasLiked}
                  style={{ 
                    backgroundColor: hasLiked ? '#90EE90' : undefined,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '1rem',
                    padding: '8px 16px'
                  }}
                >
                  <Mshearts1 style={{ width: '16px', height: '16px' }} /> {hasLiked ? 'Liked!' : 'Like'} ({likes})
                </Button>
              </div>
            </div>
          </div>
        </Frame>

        {/* Article Content */}
        <Frame variant="sunken" style={{ padding: '20px', marginBottom: '30px' }}>
          <div style={{ 
            lineHeight: '1.6', 
            fontSize: '1rem',
            color: '#222'
          }}>
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '15px' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </Frame>

        {/* Comments Section */}
        <Frame variant="raised" style={{ padding: '20px' }}>
          <h2 style={{ 
            color: '#000080', 
            fontSize: '2rem', 
            marginBottom: '20px',
            borderBottom: '2px solid #c0c0c0',
            paddingBottom: '10px'
          }}>
Comments ({comments.length})
          </h2>

          {/* Existing Comments */}
          <div style={{ marginBottom: '20px' }}>
            {comments.map((comment) => (
              <Frame key={comment.id} variant="sunken" style={{ 
                marginBottom: '15px', 
                padding: '15px'
              }}>
                <div style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: 'bold', 
                  color: '#000080',
                  marginBottom: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <User3 style={{ width: '16px', height: '16px' }} /> {comment.author}
                </div>
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: '#666',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Time style={{ width: '16px', height: '16px' }} /> {comment.timestamp}
                </div>
                <div style={{ fontSize: '1rem', lineHeight: '1.4', color: '#333' }}>
                  {comment.content}
                </div>
              </Frame>
            ))}
          </div>

          {/* Add Comment Form */}
          <Fieldset legend="Leave a Comment" style={{ padding: '20px' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '15px',
              color: '#000080'
            }}>
Leave a Comment
            </h3>
            
            <div style={{ marginBottom: '10px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '5px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#333'
              }}>
                Your Name:
              </label>
              <input
                type="text"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                placeholder="Enter your name..."
                style={{
                  width: '100%',
                  padding: '5px',
                  border: '2px inset #c0c0c0',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '5px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#333'
              }}>
                Your Comment:
              </label>
              <TextArea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts about this article..."
                rows={4}
                style={{ width: '100%', resize: 'vertical' }}
              />
            </div>

            <Button 
              onClick={handleCommentSubmit}
              disabled={!newComment.trim() || !commentAuthor.trim()}
              style={{ fontSize: '1rem', padding: '10px 20px' }}
            >
Post Comment
            </Button>
          </Fieldset>
        </Frame>
      </Frame>
    </div>
  );
};

export default ArticlePage;