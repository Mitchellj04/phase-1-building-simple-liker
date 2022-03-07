// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const alertError = document.getElementById("modal");
const heartsNodeArray = [...document.querySelectorAll('span.like-glyph')];
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

const heartClick = (event) =>{
  mimicServerCall()
  .then(() => handleResponse(event))
  .catch(error => handleError(error))
}

const handleError = (errorMessage) => {
  modal.classList.remove('hidden')
  modalMessage.innerText = errorMessage
  setTimeout(() => {
  modal.classList.add('hidden')
  modalMessage.innerText = ""}, 3000);
}

const handleResponse = (event) => {
  if(event.target.textContent === EMPTY_HEART){
  event.target.classList.add('activated-heart')
  event.target.textContent = FULL_HEART
  }
  else if (event.target.textContent === FULL_HEART){
    event.target.classList.remove('actived-heart')
    event.target.textContent = EMPTY_HEART
  }
  
}


heartsNodeArray.map(heartNodes => {
  heartNodes.addEventListener('click', heartClick)
})
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
