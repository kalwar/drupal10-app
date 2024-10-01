import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/api';

const About = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchContent('about').then((data) => setContent(data));
  }, []);

  return (
    <div>
      <h1>About</h1>
      {content && <div>{content.data.attributes.body.value}</div>}
    </div>
  );
};

export default About;
