import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = ({ pageSize = 5, category = 'general', setProgress, apikey }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [totalResults, setTotalResults] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch news data
  const fetchNews = useCallback(async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      // Check if parsedData.articles exists and is an array
      if (parsedData.articles && Array.isArray(parsedData.articles)) {
        setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
        setTotalResults(parsedData.totalResults);

        // Stop fetching if fewer articles than pageSize are returned
        if (parsedData.articles.length < pageSize) {
          setHasMore(false);
        }
      } else {
        console.error("Invalid API response format:", parsedData);
        setHasMore(false); // Stop fetching if no articles are present
      }

      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
      setHasMore(false); // Stop fetching on error
    }
  }, [category, page, pageSize, setProgress, apikey]);

  // Fetch news when component mounts or category changes
  useEffect(() => {
    setArticles([]); 
    setPage(1); 
    setHasMore(true); 
  }, [category]);

  // Fetch news when the page or category changes
  useEffect(() => {
    fetchNews(); // Fetch the news when page or category changes
  }, [fetchNews]);

  // Fetch more news for infinite scrolling
  const fetchMoreData = () => {
    if (hasMore && !loading) { // Only update page if more articles are available and not currently loading
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: '35px 0', marginTop: '90px' }}>
        NewsAir - Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines
      </h1>

      {/* Infinite scroll implementation */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={loading && <Spinner />} // Show loader when loading
      >
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
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
      </InfiniteScroll>

      {/* Message when no news articles are available */}
      {!loading && articles.length === 0 && (
        <p className="text-center">No news articles available.</p>
      )}
    </div>
  );
};

// PropTypes to define the props' types
News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
  apikey: PropTypes.string.isRequired,
};

export default News;
