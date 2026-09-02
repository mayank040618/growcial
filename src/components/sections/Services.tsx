import React from 'react';
import { Target, Layers, Share2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Data-Backed <span className="text-gradient">Domination</span></h2>
          <p className="section-subtitle">
            We don't just post content. We architect viral ecosystems designed to capture attention and convert audiences into loyal customers.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card glass-panel">
            <div className="service-icon-wrapper">
              <Target size={28} className="text-primary" />
            </div>
            <h3 className="service-title">Strategy & Positioning</h3>
            <p className="service-desc">
              We analyze your market landscape to uncover untapped growth opportunities. Our bespoke strategies position your brand as an authority.
            </p>
          </div>

          <div className="service-card glass-panel">
            <div className="service-icon-wrapper">
              <Layers size={28} className="text-accent" />
            </div>
            <h3 className="service-title">Content Engineering</h3>
            <p className="service-desc">
              Scroll-stopping visuals and compelling copy. We produce high-converting short-form video, graphics, and campaigns tailored to each platform.
            </p>
          </div>

          <div className="service-card glass-panel">
            <div className="service-icon-wrapper">
              <Share2 size={28} className="text-accent-secondary" />
            </div>
            <h3 className="service-title">Community Amplification</h3>
            <p className="service-desc">
              Foster deep connections with your audience. We manage interactions, influencer partnerships, and cultivate a thriving digital community around your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
