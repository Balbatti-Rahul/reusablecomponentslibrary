// src/components/SocialShareButton.js
import React from 'react';
import PropTypes from 'prop-types';

const SocialShareButton = ({ platform, url }) => {
  const handleShare = () => {
    let shareUrl = '';
    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
    }
    window.open(shareUrl, '_blank');
  };

  return (
    <button onClick={handleShare} className="btn btn-outline-secondary">
      Share on {platform.charAt(0).toUpperCase() + platform.slice(1)}
    </button>
  );
};

SocialShareButton.propTypes = {
  platform: PropTypes.oneOf(['facebook', 'twitter']).isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialShareButton;
