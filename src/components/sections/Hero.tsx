import React from 'react';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="badge-dot"></span> Next-Gen Social Marketing
          </div>
          
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Scale Your Brand With <span className="text-gradient">Viral</span> Momentum
          </h1>
          
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
            We transform audiences into engaged communities. Data-driven strategies, scroll-stopping content, and explosive growth for modern brands.
          </p>
          
          <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="btn btn-primary btn-lg">
              Book a Strategy Call <ArrowRight size={20} />
            </button>
            <button className="btn btn-outline btn-lg">
              View Case Studies
            </button>
          </div>
          
          <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="stat-item">
              <div className="stat-icon"><TrendingUp size={20} className="text-primary" /></div>
              <div>
                <div className="stat-value">300%</div>
                <div className="stat-label">Avg. ROI</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Users size={20} className="text-accent" /></div>
              <div>
                <div className="stat-value">50M+</div>
                <div className="stat-label">Reach</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon"><Zap size={20} className="text-accent-secondary" /></div>
              <div>
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="visual-glow"></div>
          <div className="glass-panel visual-card main-card">
            <div className="card-header">
              <div className="user-info">
                <div className="avatar"></div>
                <div>
                  <div className="user-name">Growth Report</div>
                  <div className="user-handle">Last 30 Days</div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-placeholder">
                 <div className="bar" style={{height: '40%'}}></div>
                 <div className="bar" style={{height: '60%'}}></div>
                 <div className="bar" style={{height: '35%'}}></div>
                 <div className="bar" style={{height: '80%'}}></div>
                 <div className="bar highlight" style={{height: '100%'}}></div>
              </div>
              <div className="engagement-stats">
                <div className="estat">
                  <span className="estat-val">+125K</span>
                  <span className="estat-lbl">Followers</span>
                </div>
                <div className="estat">
                  <span className="estat-val">4.2M</span>
                  <span className="estat-lbl">Impressions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
