import React from 'react';

interface SlideProps {
  title: string;
  description: string;
}

const Slide: React.FC<SlideProps> = ({ title, description }) => {
  return (
    <div className="slide">
      <h1 className="slide-title">{title}</h1>
      <p className="slide-description">{description}</p>

      <style jsx>{`
        .slide {
          width: 100%;
          line-height: 1;
          color: #fff;
        }

        .slide-title {
          color: #fff;
          font-size: 2.6rem;
        }

        .slide-description {
          font-size: 1.2rem;
          line-height: 1.4;
          max-width: 90%;
          width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Slide;
