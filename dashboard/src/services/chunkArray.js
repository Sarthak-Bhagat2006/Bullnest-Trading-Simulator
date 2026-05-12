//Create chunk array to reduce num of API calls
// AAPL + TSLA + META + AMD + NVDA calls in chunk

export const chunkArray = (array, size) => {
    const chunks = [];

    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }

    return chunks;
};
