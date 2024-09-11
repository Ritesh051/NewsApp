import React, { useState, useEffect, useCallback } from 'react';
import NewsItem from './NewsItem';

const News = ({ pageSize = 5, category = 'general', setProgress, apikey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      setProgress(10);
      
      const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
      
      const response = await fetch(url);
      setProgress(50);

      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const parsedData = await response.json();
      setProgress(75);

      setArticles(parsedData.articles || []);
      setTotalResults(parsedData.totalResults || 0);

      setLoading(false);
      setProgress(100);

      // Setting document title dynamically based on category
      document.title = `${capitalizeFirstLetter(category)} - News`;
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
      setProgress(100);
    }
  }, [category, page, pageSize, setProgress, apikey]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handlePrevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));  // Ensures page doesn’t go below 1
  };

  const handleNextClick = () => {
    setPage((prevPage) => {
      const maxPages = Math.ceil(totalResults / pageSize);
      return Math.min(prevPage + 1, maxPages);  // Ensures page doesn’t exceed max pages
    });
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: '35px' }}>NewAir - Top {capitalizeFirstLetter(category)} Headlines</h1>

      {loading && (
        <div className="d-flex justify-content-center my-4">
          <h4 className="mx-3">Loading</h4>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="row">
        {!loading && articles.length > 0 && articles.map((article) => (
          <div className="col-md-4" key={article.url}>
            <NewsItem
              title={article.title ? article.title.slice(0, 35) : ""}
              description={article.description ? article.description.slice(0, 85) : ""}
              imageUrl={article.urlToImage}
              newsUrl={article.url}
              author={article.author}
              date={article.publishedAt}
            />
          </div>
        ))}
      </div>

      {!loading && articles.length === 0 && (
        <p className="text-center">No news articles available.</p>
      )}

      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark mx-2 my-3"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>

        <button
          disabled={page >= Math.ceil(totalResults / pageSize)}
          type="button"
          className="btn btn-dark mx-2 my-3"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
