import React from 'react';

export default function AdsterraAd({ type, adKey, width, height }) {
  if (type === 'native') {
    return (
      <div className="ad-container" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', width: '100%' }}>
        <iframe 
          title="Native Ad"
          src="/ad.html?type=native" 
          width="100%" 
          height={height || 350} 
          frameBorder="0" 
          scrolling="no" 
          style={{ border: 'none', maxWidth: '800px' }}
        ></iframe>
      </div>
    );
  }

  // Banner Ads
  return (
    <div className="ad-container" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', width: '100%', overflowX: 'auto' }}>
      <iframe 
        title={`Ad ${width}x${height}`}
        src={`/ad.html?key=${adKey}&width=${width}&height=${height}`}
        width={width} 
        height={height} 
        frameBorder="0" 
        scrolling="no" 
        style={{ border: 'none', width: `${width}px`, height: `${height}px` }}
      ></iframe>
    </div>
  );
}
