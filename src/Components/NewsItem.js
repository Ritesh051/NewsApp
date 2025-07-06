import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date }) => {
    const fallbackImageUrl = "https://ichef.bbci.co.uk/news/1024/branded_news/55bd/live/55f51ff0-6cab-11ef-91fa-e91269684108.jpg";

    return (
        <div className="my-3">
            <div className="card">
                <img
                    src={imageUrl || fallbackImageUrl}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImageUrl;
                    }}
                    className="card-img-top"
                    alt="News"
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {title ? `${title}....` : "No title available"}
                    </h5>
                    <p className="card-text">
                        <small className="text-body-secondary">
                            By {author || "Unknown"} on {date ? new Date(date).toLocaleString() : "Unknown date"}
                        </small>
                    </p>
                    <p className="card-text">{description ? description : "No description available"}</p>
                    <a
                        rel="noreferrer"
                        href={newsUrl}
                        target="blank"
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
