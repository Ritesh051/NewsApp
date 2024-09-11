import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl,author,date }) => {
    return (
        <div className="my-3">
            <div className="card">
                <img
                    src={imageUrl || "https://ichef.bbci.co.uk/news/1024/branded_news/55bd/live/55f51ff0-6cab-11ef-91fa-e91269684108.jpg"}
                    className="card-img-top"
                    alt="News"
                />
                <div className="card-body">
                    <h5 className="card-title">{title || "No title available"}...</h5>
                    <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown" : author} on {new Date(date).toTimeString()}</small></p>
                    <p className="card-text">{description || "No description available"}...</p>
                    <a
                        rel="noreferrer"
                        href={newsUrl}
                        target="_blank"
                        className="btn btn-sm btn-dark"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
