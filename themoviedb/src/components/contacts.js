import React from 'react'

var imgMovie;

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>TheMovieDB-React</h1></center>
            {contacts.map((contact) => (
                imgMovie = "http://image.tmdb.org/t/p/w185/" + contact.poster_path,
                <div class="card">
                    <div class="card-body">
                        <img src={imgMovie} alt="Movie"/>
                        <h5 class="card-title">{contact.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{contact.vote_average}</h6>
                        <p class="card-text">{contact.overview}</p>
                        <button>Detail</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contacts;