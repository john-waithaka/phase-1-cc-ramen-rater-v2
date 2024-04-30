// // index.js

// //base Url
// const ramenUrl = "http://localhost:3000/ramens"

// // Callbacks
// const handleClick = (ramen) => {
//   // Add code
// };

// const addSubmitListener = () => {
//   // Add code
// }

// const displayRamens = () => {
//   // Add code

// }
// const main = () => {
//   // Invoke displayRamens here
//   // Invoke addSubmitListener here
// }

// main()

// // Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };






// index.js

// Base URL
const baseUrl = "http://localhost:3000/ramens";

// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  const newRamenForm = document.getElementById('new-ramen');

  // Event listener for new ramen submission
  newRamenForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const newName = document.getElementById('new-name').value;
    const newRestaurant = document.getElementById('new-restaurant').value;
    const newImage = document.getElementById('new-image').value;
    const newRating = parseInt(document.getElementById('new-rating').value);
    const newComment = document.getElementById('new-comment').value;

    // Construct new ramen object
    const newRamen = {
      name: newName,
      restaurant: newRestaurant,
      image: newImage,
      rating: newRating,
      comment: newComment
    };

    // Display new ramen detail
    showRamenDetail(newRamen);

    // Reset form
    this.reset();
  });
};

const displayRamens = () => {
  const ramenMenu = document.getElementById('ramen-menu');
  const ramenDetail = document.getElementById('ramen-detail');
  const ratingDisplay = document.getElementById('rating-display');
  const commentDisplay = document.getElementById('comment-display');

  // Fetch data from the API endpoint
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      // Update ramen menu
      data.ramens.forEach(ramen => {
        const ramenCard = document.createElement('div');
        ramenCard.classList.add('ramen-card');
        ramenCard.innerHTML = `
          <img class="ramen-image" src="${ramen.image}" alt="${ramen.name}" />
          <h3>${ramen.name}</h3>
          <p>${ramen.restaurant}</p>
          <button class="detail-button" data-id="${ramen.id}">View Details</button>
        `;
        ramenMenu.appendChild(ramenCard);

        // Add event listener to each detail button
        ramenCard.querySelector('.detail-button').addEventListener('click', () => {
          showRamenDetail(ramen);
        });
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  // Function to display ramen detail
  function showRamenDetail(ramen) {
    ramenDetail.querySelector('.detail-image').src = ramen.image;
    ramenDetail.querySelector('.name').textContent = ramen.name;
    ramenDetail.querySelector('.restaurant').textContent = ramen.restaurant;
    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
  }
};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
};

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
