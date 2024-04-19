import axios from 'axios';

const useUrlShortener = () => {
    const shortenUrl = async (originalUrl) => {
        try {
            const response = await axios.post('http://localhost:8080/api/shorten', null, {
                params: {
                    url: originalUrl,
                },
            });
            return `http://localhost:8080/${response.data.shortUrl}`;
        } catch (error) {
            console.error('Error shortening URL:', error);
            throw error;
        }
    };

    return { shortenUrl };
};

export {useUrlShortener};