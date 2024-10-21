console.log("Let's get this party started!");
document.getElementById('searchForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value;
    console.log('Search Term:', searchTerm);

    try {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search`, {
        params: {
            q: searchTerm,
            api_key: 'vEOCNKSayPvVuw0GwaPUzbOZatomXjRi',
            limit: 1
        }
    });
    console.log('Response:', response.data);

    if (response.data.data.length > 0) {
    const gifUrl = response.data.data[0].images.fixed_height.url;
    const img = document.createElement('img');
    img.src = gifUrl;
    document.getElementById('gifContainer').appendChild(img);
    } else {
        console.log('No GIFs found for this word');
    }
 } catch (error) {
    console.error('Error fetching GIF:', error);
 }
});

document.getElementById('removeGifs').addEventListener('click', function() {

    document.getElementById('gifContainer').innerHTML = '';
});