import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Navigation } from '../../component/navigation';
import './style/movieDetail.scss';
import { Loading } from '../../component/loading';
import EditComm from './EditComment';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [comments, setComments] = useState([{ comment: "Nice", id: Math.random(), userName: 'User' }]);
  const [newComments, setNewComment] = useState('');
  const [editComment, setEditComment] = useState(-1);

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

    axios.get(movieUrl)
      .then((res) => {
        const movieData = res.data;
        setMovie(movieData);
        fetchTrailer(movieData.title);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [id]);

  const fetchTrailer = (movieTitle) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => {
        const videoData = res.data.results;
        if (videoData.length > 0 && videoData[0].site === "YouTube") {
          setTrailerUrl(`https://www.youtube.com/embed/${videoData[0].key}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching trailer:", error);
      });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComments.trim() !== '') {
      const newComment = {
        comment: newComments,
        id: Math.random(),
    };
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  function handleEdit (id) {
    setEditComment(id)
}

function handleDelete(id) {
  const updatedComments = comments.filter(comment => comment.id !== id);
  setComments(updatedComments);
}

  if (!movie) {
    return <div><Loading/></div>;
  }

  return (
    <>
      <Navigation/>
      <h2 className='h2'>{movie.title}</h2>
      <div className='main'>
        <div className='movie_detail'> 
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className='details'>
          <p>{movie.overview}</p>
        </div>
      </div>

      {trailerUrl && (
        <div className='trailer'>
          <h1>Trailer</h1>
          <iframe
            title="Trailer"
            width="560"
            height="315"
            src={trailerUrl}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
      
      <div className='comment-section'>
        <h3>Comments</h3>
        <form className='comment_form' onSubmit={handleCommentSubmit}>
          <textarea
            placeholder=" Leave a comment"
            value={newComments}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button className='comment_button' type="submit">Submit</button>
        </form>
        <div className='existing-comments'>
          {comments.map((comment, index) => (
            editComment === comment.id
            ? 
            <div key={comment.id}>
                <EditComm
                    comment={comment} 
                    listComment={comments} 
                    setCommentList={setComments} 
                    saveEdit={() => setEditComment(-1)}
                />
            </div>
            :
            <div key={comment.id} className='comment'>
              <p>{comment.comment}</p>
              <div className='button_div'>
                <button className='comment_button' onClick={() => handleEdit(comment.id)}>Edit</button>
                <button className='comment_button' onClick={() => handleDelete(comment.id)} >Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
