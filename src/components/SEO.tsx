import { useEffect } from 'react';

interface SEOProps {
  title: string;
}

const SEO = ({ title }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | Fluxify Agency`;
  }, [title]);

  return null;
};

export default SEO;