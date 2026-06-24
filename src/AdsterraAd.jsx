import { useEffect, useRef } from 'react';
import { useAdContext } from './context/AdContext';
import { Flag } from 'lucide-react';

export default function AdsterraAd({ type, adKey, width, height }) {
  const nativeRef = useRef(null);
  const { isFamilyMode } = useAdContext();

  useEffect(() => {
    // Inject Native Ad script dynamically if not in Family Mode
    if (!isFamilyMode && type === 'native' && !document.getElementById('adsterra-native-script')) {
      const script = document.createElement('script');
      script.id = 'adsterra-native-script';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = '//pl29879136.effectivecpmnetwork.com/8455a8683ada6701da13e3ed06fd93f9/invoke.js';
      document.body.appendChild(script);
    }
  }, [type, isFamilyMode]);

  if (isFamilyMode) {
    // Return a placeholder or null when Family Mode is ON
    return null;
  }

  const handleReport = () => {
    const currentUrl = window.location.href;
    const time = new Date().toLocaleString();
    const subject = encodeURIComponent('Report Inappropriate Ad');
    const body = encodeURIComponent(`I am reporting an inappropriate ad.\n\nPage URL: ${currentUrl}\nTime: ${time}\nAd Details: ${type === 'native' ? 'Native Ad' : `${width}x${height} Banner`}\n\nPlease take action.`);
    window.location.href = `mailto:Astraardency@gmail.com?subject=${subject}&body=${body}`;
  };

  const reportButton = (
    <button 
      onClick={handleReport}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '4px',
        background: 'transparent', border: 'none', color: '#9ca3af',
        fontSize: '0.75rem', marginTop: '4px', cursor: 'pointer',
        textDecoration: 'underline'
      }}
      title="Report inappropriate ad"
    >
      <Flag size={12} />
      Report Ad
    </button>
  );

  if (type === 'native') {
    return (
      <div className="ad-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0', width: '100%' }}>
        <div id="container-8455a8683ada6701da13e3ed06fd93f9" ref={nativeRef}></div>
        {reportButton}
      </div>
    );
  }

  // Banner Ads use iframe. Always show full height.
  return (
    <div 
      className="ad-container" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        margin: '20px 0', 
        width: '100%', 
        overflowX: 'auto',
      }}
    >
      <iframe 
        title={`Ad ${width}x${height}`}
        src={`/ad.html?key=${adKey}&width=${width}&height=${height}`}
        width={width} 
        height={height} 
        frameBorder="0" 
        scrolling="no" 
        style={{ border: 'none', width: `${width}px`, height: `${height}px` }}
      ></iframe>
      {reportButton}
    </div>
  );
}
