

const searchBtn = async() => {
    const inputDiv = document.getElementById('input-songs-name').value;
   try{
    const url = (`https://api.lyrics.ovh/suggest/:${inputDiv}`);
    const res = await fetch(url);
     const data = await res.json();
     displaySong(data.data);
   }
   catch (error){
        displayError('sorry something is wrong!!! try again...')
   }
}
    const displaySong = songs => {
        const songContainer = document.getElementById('songContainer');
         songContainer.innerHTML = "";
        songs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.className = 'single-result row align-items-center my-3 p-3';
            songDiv.innerHTML = `
            <div class="col-md-9">
                 <h3 class="lyrics-name">${song.title}</h3>
                 <p class="author lead">Album by <span>${song.artist.name}</span></p>
                 <audio controls>
                    <source src ='${song.preview}' type ='audio/mpeg'>
                 </audio>
                 </div>
            <div class="col-md-3 text-md-right text-center">
                 <button onclick  = "getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
            `;
            songContainer.appendChild(songDiv);

        })

    }


const getLyric = async(artist, title) =>{
    url = (`https://api.lyrics.ovh/v1/${artist}/${title}`);
    const res = await fetch(url);
    const data = await res.json();
    displayLyric(data.lyrics);

}
const displayLyric = lyrics => {
    const lyricDiv = document.getElementById('song-lyric');
    lyricDiv.innerText = lyrics;

}

const displayError = error=>{
    const errorDiv= document.getElementById('error-message');
    errorDiv.innerText = error;
}

const  homeIcon = ()=>{
    const lyricDiv = document.getElementById('song-lyric');
    lyricDiv.innerText = "";

    const songContainer = document.getElementById('songContainer');
    songContainer.innerHTML = "";
}