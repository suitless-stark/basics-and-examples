(function() {
  // data for locations
  var data = {
    holidayOne: {
      place: 'Samoa',
      price: 889,
      images: ['samoa-img-1.jpg', 'samoa-img-2.jpg']
    },
    holidayTwo: {
      place: 'Fiji',
      price: 759,
      images: ['fiji-img-1.jpg', 'fiji-img-2.jpg']
    },
    hotelOne: {
      name: 'Hilton',
      pricePerNight: 269
    },
    hotelTwo: {
      name: 'Sheraton',
      pricePerNight: 249
    }
  }

  // define variables for different elements
  var getLocationNameOne = document.getElementById('locationNameOne'),
    getLocationNameTwo = document.getElementById('locationNameTwo'),
    getHotelNameOne = document.getElementById('hotelNameOne'),
    getHotelNameTwo = document.getElementById('hotelNameTwo'),
    getCustomerName = document.getElementById('customerName'),
    getCustomerDetails = document.getElementById('showCustomerName'),
    getHotelDetails = document.getElementById('showBookingDetails'),
    getBookingTotal = document.getElementById('showBookingTotal'),
    getImageOne = document.getElementById('imgOne'),
    getModal = document.getElementById('exampleModal'),
    getButton = document.getElementById('book');

  // putting values in variables
  getLocationNameOne.textContent = data.holidayOne.place;
  getLocationNameTwo.textContent = data.holidayTwo.place;
  getHotelNameOne.textContent = data.hotelOne.name;
  getHotelNameTwo.textContent = data.hotelTwo.name;

  // onclick event
  getButton.onclick = function() {
    console.dir(getModal);

    var getAllImg = document.querySelectorAll('img');
    for (var i = 0; i < getAllImg.length; i++) {
      getAllImg[i].remove();
    }

    var getLocationNames = document.getElementById('location').value,
      getHotelNames = document.getElementById('hotel').value,
      getStay = document.getElementById('stay').value;

    getCustomerDetails.textContent = 'Congratulations, ' + getCustomerName.value + '!';

    document.getElementById('close').onclick = function() {
      getModal.style.display = "none";
    };

    if (getLocationNames === 'Samoa' && getHotelNames === 'Hilton') {

      getHotelDetails.textContent = 'You have booked for ' + getHotelNames + ' in ' + getLocationNames + '.';

      // getImageOne.src = data.holidayOne.images[0];
      var img = document.createElement("IMG");
      img.src = "samoa-img-1.jpg";
      img.style.width = '400px';
      document.getElementById("details").appendChild(img);

      img.onclick = function() {
        getModal.style.display = "block";
      };

      var getModalDetails = document.getElementById('showModalDetails');
      var getModalTitle = document.getElementById('exampleModalLabel');
      getModalDetails.innerHTML = 'Set along a beach, this upscale resort set in lush surroundings is 5 km from Le Penina Golf Course and 3 km from Faleolo International Airport.<br><br>' + 'Sleek rooms feature private patios or balconies with ocean views, as well as Wi - Fi(fee), flat - screen TVs, and tea and coffeemaking equipment.Suites add living rooms.Room service is available 24 / 7. <br><br> ' + 'Parking is free, as is breakfast served in 1 of 2 open - air restaurants.Other amenities include a spa, a gym, tennis courts, and an outdoor pool with a swim - up bar . Theres also a lobby bar and a kids club . Activities include diving, yoga classes and live entertainment.<br><br>' + '<img src="samoa-img-1.jpg" width="465px">';
      getModalTitle.innerHTML = 'Hilton in Samoa';

      if (getStay == 1) {
        getBookingTotal.textContent = 'Your booking total for 1 night is $' + (data.holidayOne.price + data.hotelOne.pricePerNight) + '.';
      } else if (getStay == 2) {
        getBookingTotal.textContent = 'Your booking total for 2 nights is $' + (data.holidayOne.price + (data.hotelOne.pricePerNight * 2)) + '.';
      }
    }

    if (getLocationNames === 'Samoa' && getHotelNames === 'Sheraton') {

      getHotelDetails.textContent = 'You have booked for ' + getHotelNames + ' in ' + getLocationNames + '.';

      // getImageOne.src = data.holidayOne.images[1];
      var img = document.createElement("IMG");
      img.src = "samoa-img-2.jpg";
      img.style.width = '400px';
      document.getElementById("details").appendChild(img);

      img.onclick = function() {
        getModal.style.display = "block";
      };

      var getModalDetails = document.getElementById('showModalDetails');
      var getModalTitle = document.getElementById('exampleModalLabel');
      getModalDetails.innerHTML = 'Set along a beach, this upscale resort set in lush surroundings is 5 km from Le Penina Golf Course and 3 km from Faleolo International Airport.<br><br>' + 'Sleek rooms feature private patios or balconies with ocean views, as well as Wi - Fi(fee), flat - screen TVs, and tea and coffeemaking equipment.Suites add living rooms.Room service is available 24 / 7. <br><br> ' + 'Parking is free, as is breakfast served in 1 of 2 open - air restaurants.Other amenities include a spa, a gym, tennis courts, and an outdoor pool with a swim - up bar . Theres also a lobby bar and a kids club . Activities include diving, yoga classes and live entertainment.';
      getModalTitle.innerHTML = 'Sheraton in Samoa';

      if (getStay == 1) {
        getBookingTotal.textContent = 'Your booking total for 1 night is $' + (data.holidayOne.price + data.hotelTwo.pricePerNight) + '.';
      } else if (getStay == 2) {
        getBookingTotal.textContent = 'Your booking total for 2 nights is $' + (data.holidayOne.price + (data.hotelTwo.pricePerNight * 2)) + '.';
      }
    }

    if (getLocationNames === 'Fiji' && getHotelNames === 'Hilton') {

      getHotelDetails.textContent = 'You have booked for ' + getHotelNames + ' in ' + getLocationNames + '.';

      // getImageOne.src = data.holidayTwo.images[0];
      var img = document.createElement("IMG");
      img.src = "fiji-img-1.jpg";
      img.style.width = '400px';
      document.getElementById("details").appendChild(img);

      img.onclick = function() {
        getModal.style.display = "block";
      };

      var getModalDetails = document.getElementById('showModalDetails');
      var getModalTitle = document.getElementById('exampleModalLabel');
      getModalDetails.innerHTML = 'Set along a beach, this upscale resort set in lush surroundings is 5 km from Le Penina Golf Course and 3 km from Faleolo International Airport.<br><br>' + 'Sleek rooms feature private patios or balconies with ocean views, as well as Wi - Fi(fee), flat - screen TVs, and tea and coffeemaking equipment.Suites add living rooms.Room service is available 24 / 7. <br><br> ' + 'Parking is free, as is breakfast served in 1 of 2 open - air restaurants.Other amenities include a spa, a gym, tennis courts, and an outdoor pool with a swim - up bar . Theres also a lobby bar and a kids club . Activities include diving, yoga classes and live entertainment.';
      getModalTitle.innerHTML = 'Hilton in Fiji';

      if (getStay == 1) {
        getBookingTotal.textContent = 'Your booking total for 1 night is $' + (data.holidayTwo.price + data.hotelOne.pricePerNight) + '.';
      } else if (getStay == 2) {
        getBookingTotal.textContent = 'Your booking total for 2 nights is $' + (data.holidayTwo.price + (data.hotelOne.pricePerNight * 2)) + '.';
      }
    }

    if (getLocationNames === 'Fiji' && getHotelNames === 'Sheraton') {

      getHotelDetails.textContent = 'You have booked for ' + getHotelNames + ' in ' + getLocationNames + '.';

      // getImageOne.src = data.holidayTwo.images[1];
      var img = document.createElement("IMG");
      img.src = "fiji-img-2.jpg";
      img.style.width = '400px';
      document.getElementById("details").appendChild(img);

      img.onclick = function() {
        getModal.style.display = "block";
      };

      var getModalDetails = document.getElementById('showModalDetails');
      var getModalTitle = document.getElementById('exampleModalLabel');
      getModalDetails.innerHTML = 'Set along a beach, this upscale resort set in lush surroundings is 5 km from Le Penina Golf Course and 3 km from Faleolo International Airport.<br><br>' + 'Sleek rooms feature private patios or balconies with ocean views, as well as Wi - Fi(fee), flat - screen TVs, and tea and coffeemaking equipment.Suites add living rooms.Room service is available 24 / 7. <br><br> ' + 'Parking is free, as is breakfast served in 1 of 2 open - air restaurants.Other amenities include a spa, a gym, tennis courts, and an outdoor pool with a swim - up bar . Theres also a lobby bar and a kids club . Activities include diving, yoga classes and live entertainment.';
      getModalTitle.innerHTML = 'Sheraton in Samoa';

      if (getStay == 1) {
        getBookingTotal.textContent = 'Your booking total for 1 night is $' + (data.holidayTwo.price + data.hotelTwo.pricePerNight) + '.';
      } else if (getStay == 2) {
        getBookingTotal.textContent = 'Your booking total for 2 nights is $' + (data.holidayTwo.price + (data.hotelTwo.pricePerNight * 2)) + '.';
      }
    }

  };
  // onclick ENDS

})();
