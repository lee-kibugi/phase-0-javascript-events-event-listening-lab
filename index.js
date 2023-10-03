// const input = document.getElementById('input');

// function clickAlert() {
//   alert('I was clicked!');
// }
function addingEventListener() {
  const input = document.getElementById('input');

  input.addEventListener('click', function() {
    alert('I was clicked!');
  });
}

// Call the function to bind the event listener
addingEventListener();