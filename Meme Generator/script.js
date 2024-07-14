const generateButton = document.querySelector('.generate-button');
const memeTitle = document.querySelector('.meme-title');
const memeImage = document.querySelector('.meme-image');
const authorName = document.querySelector('.author');

async function getMeme(){
    let response = await fetch('https://meme-api.com/gimme/wholesomemes');
    // console.log(response);
    let data = await response.json();
    // console.log(data);
   
    const author = data.author;
    const title = data.title;
    const url = data.url;
    // const {author, title, url} = data;

    memeTitle.innerText = title;
    memeImage.src = url;
    authorName.innerText = `Meme by ${author}`;

    // console.log(author, title, url);
}

getMeme();

generateButton.addEventListener('click', function(){
    getMeme();
});