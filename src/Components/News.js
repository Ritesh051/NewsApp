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

  const fetchNews = useCallback(async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      if (parsedData.articles && Array.isArray(parsedData.articles)) {
        setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
        setTotalResults(parsedData.totalResults);

        if (parsedData.articles.length < pageSize) {
          setHasMore(false);
        }
      } else {
        console.error("Invalid API response format:", parsedData);
        setHasMore(false);
      }

      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
      setHasMore(false);
    }
  }, [category, page, pageSize, setProgress, apikey]);

  useEffect(() => {
    setArticles([]); 
    setPage(1); 
    setHasMore(true); 
  }, [category]);

  useEffect(() => {
    fetchNews(); 
  }, [fetchNews]);

  const fetchMoreData = () => {
    if (hasMore && !loading) { 
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: '35px 0', marginTop: '90px' }}>
        NewsAir - Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={loading && <Spinner />} 
      >
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title ? article.title.slice(0, 45) : ""}
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

      {!loading && articles.length === 0 && (
        <p className="text-center">No news articles available.</p>
      )}
    </div>
  );
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
  apikey: PropTypes.string.isRequired,
};

export default News;
