import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

for (let i = 0; i < followersArray.length; i++) {
  getGitCard(followersArray[i]);
}

function getGitCard(username) {
  axios.get('https://api.github.com/users/KethlasX')
  .then( response => {
  document.querySelector('.cards').appendChild(cardMaker(resp.data));
  })
  .catch( error => console.log(err))
}

function cardMaker(idData) {
  const cardWrapper = document.createElement('div');
  const userImg = document.createElement('img');
  const infoWrapper = document.createElement('div');
  const userName = document.createElement('h3');
  const userUserName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfileWrap = document.createElement('p');
  const userProfileLink = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  userImg.src = idData.avatar_url;
  userImg.alt = 'github user avatar';
  userName.textContent = idData.name;
  userUserName.textContent = idData.login;
  userLocation.textContent = idData.location;
  userProfileWrap.textContent = "Profile";
  userProfileLink.textContent = 'Link to profile';
  userProfileLink.href = idData.html_url;
  userFollowers.textContent = `Followers: ${idData.followers}`;
  userFollowing.textContent = `Following: ${idData.following}`;
  userBio.textContent = idData.bio;
  
  cardWrapper.classList.add('card');
  infoWrapper.classList.add('card-info');
  userName.classList.add('name');
  userUserName.classList.add('username');

  
  cardWrapper.appendChild(userImg);
  cardWrapper.appendChild(infoWrapper);
  infoWrapper.appendChild(userName);
  infoWrapper.appendChild(userUserName);
  infoWrapper.appendChild(userLocation);
  infoWrapper.appendChild(userProfileWrap);
  userProfileWrap.appendChild(userProfileLink);
  infoWrapper.appendChild(userFollowers);
  infoWrapper.appendChild(userFollowing);
  infoWrapper.appendChild(userBio);
  
  return card;
}
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
