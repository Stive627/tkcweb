import { useEffect, useState } from 'react';

function useVisible(elt) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function isVisible() {
      const client = elt?.getBoundingClientRect();
      return client?.top >= 0 && client?.bottom <= window.innerHeight;
    }

    const handleScroll = () => {
      setVisible(isVisible());
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Check initial visibility
    handleScroll();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elt]);

  return visible;
}

export default useVisible;