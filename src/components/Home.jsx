import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/api';

const Home = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContent('node/home')
      .then((data) => {
        console.log('Fetched data:', data); // Log the fetched data
        setContent(data.data[0]); // Access the first item in the data array
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching content:', error); // Log any errors
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading content: {error.message}</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      {content && content.attributes && content.attributes.body ? (
        <div
          dangerouslySetInnerHTML={{ __html: content.attributes.body.value }}
        />
      ) : (
        <div>No content available</div>
      )}
    </div>
  );
};

export default Home;
