import { getReviews } from 'services/APIService';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(result =>
      
      setReviews(result.results)
    );
  }, [movieId]);
  
  return (
    <ul>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
};
export default Reviews;
