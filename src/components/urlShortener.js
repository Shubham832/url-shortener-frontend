import React, { useState, useCallback } from 'react';
import { useUrlShortener } from '../hooks/useUrlShortener';

const UrlShortener = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const { shortenUrl } = useUrlShortener();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        try {
            const shortenedUrl = await shortenUrl(originalUrl);
            setShortUrl(shortenedUrl);
        } catch (error) {
            console.error('Error shortening URL:', error);
            alert('Error: Unable to shorten the URL');
        }
    }, [originalUrl, shortenUrl]);

    return (
        <div>
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter the URL to shorten"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    required
                />
                <button type="submit">Shorten</button>
            </form>
            {shortUrl && (
                <div>
                    <p>Your short URL is:</p>
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                        {shortUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default UrlShortener;