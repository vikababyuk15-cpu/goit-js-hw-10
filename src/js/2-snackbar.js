import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = Number(event.currentTarget.elements.delay.value);
  const state = event.currentTarget.elements.state.value;
  createNotificationPromise(delay, state);
  event.currentTarget.reset();
});

function createNotificationPromise(delay, state) {
  
  const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay); 
      } else {
        reject(delay);  
      }
    }, delay);
  });

  promise
    .then(value => {
      showSuccess(value);
    })
    .catch(error => {
      showError(error);
    });
}

function showSuccess(delay) {
  iziToast.success({
    title: 'OK',
    message: `✅ Fulfilled promise in ${delay}ms`,
    position: 'topRight',
  });
}

function showError(delay) {
  iziToast.error({
    title: 'Error',
    message: `❌ Rejected promise in ${delay}ms`,
    position: 'topRight',
  });
}