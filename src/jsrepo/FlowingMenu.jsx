import { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

const MenuItem = ({ link, text, image, hoverImage, texts, images, speed, textColor, marqueeBgColor, marqueeTextColor, borderColor }) => {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const hoverImgRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  const scrollTexts = useMemo(() => texts || [text, text, text], [texts, text]);
  const scrollImages = useMemo(() => images || [image, image, image], [images, image]);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - 0, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [scrollTexts, scrollImages]);

  useEffect(() => {
    let observer = null;
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1
      });

      if (itemRef.current) {
        observer = new IntersectionObserver(([entry]) => {
          if (!animationRef.current) return;
          if (entry.isIntersecting) {
            animationRef.current.play();
          } else {
            animationRef.current.pause();
          }
        }, { threshold: 0.05 });
        observer.observe(itemRef.current);
      }
    };

    const timer = setTimeout(setupMarquee, 100);
    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      if (animationRef.current) animationRef.current.kill();
    };
  }, [scrollTexts, scrollImages, repetitions, speed]);

  useEffect(() => {
    const handleGlobalMouseMove = (ev) => {
      if (!isHovered || !hoverImgRef.current) return;
      gsap.to(hoverImgRef.current, {
        x: ev.clientX,
        y: ev.clientY,
        xPercent: -50,
        yPercent: -110,
        duration: 0.4,
        ease: 'power3.out'
      });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [isHovered]);

  const handleMouseEnter = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    setIsHovered(true);

    if (hoverImgRef.current) {
      gsap.set(hoverImgRef.current, { x: ev.clientX, y: ev.clientY, xPercent: -50, yPercent: -110 });
      gsap.to(hoverImgRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
    }

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = ev => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    setIsHovered(false);

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);

    if (hoverImgRef.current) {
      gsap.to(hoverImgRef.current, { opacity: 0, scale: 0.8, duration: 0.4, ease: 'power3.out' });
    }
  };

  return (
    <div className="menu__item" ref={itemRef} style={{ borderColor }}>
      <a
        className="menu__item-link"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        {text}
      </a>
      <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor }}>
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" ref={marqueeInnerRef} aria-hidden="true">
            {[...Array(repetitions)].map((_, idx) => (
              <div className="marquee__part" key={idx} style={{ color: marqueeTextColor }}>
                {scrollTexts.map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                    <span>{t}</span>
                    <div className="marquee__img" style={{ backgroundImage: `url(${scrollImages[i] || scrollImages[0]})` }} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {(hoverImage || image) && (
        <img
          ref={hoverImgRef}
          src={hoverImage || image}
          alt=""
          className="menu__hover-img"
        />
      )}
    </div>
  );
};

export const FlowingMenu = ({
  items = [],
  speed = 15,
  textColor = '#fff',
  bgColor = '#060010',
  marqueeBgColor = '#fff',
  marqueeTextColor = '#060010',
  borderColor = '#fff'
}) => {
  return (
    <div className="menu-wrap" style={{ backgroundColor: bgColor }}>
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
          />
        ))}
      </nav>
    </div>
  );
};

export default FlowingMenu;
