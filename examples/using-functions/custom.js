(function() {
  // ***Task A: Add comments to the code below.

  // ***Task B: Complete the code so when the user clicks the update button, the DOM/HTML is
  // updated. Use Pseudo Code

  // *** Task C:  Create a class that when added to the body with javascript, turns the entire UI
  // into a dark theme. This will occur when he #dark button is clicked. You will need both .js
  // and css for this.

  // setting the cloud objects

  var cloudObject = {};

  function cloudObjects() {
    var getUpdateButton = document.getElementById('update');

    // variables for selected HTML sections
    var getDiv = document.querySelector('.holder');
    var getH1 = document.querySelector('h1');
    var getDark = document.getElementById('dark');
    var getBody = document.querySelector('.main');
    var getForm = document.querySelector('.form-inputs');

    cloudObject.updateButton = getUpdateButton;
    cloudObject.div = getDiv;
    cloudObject.h1 = getH1;
    cloudObject.dark = getDark;
    cloudObject.body = getBody;
    cloudObject.form = getForm;


    clickEvents();
  };

  // function for the update button
  function clickEvents() {

    // click event on the button
    cloudObject.updateButton.addEventListener('click', function() {
      console.log('working');
      // variables for font color, bg color and font size
      var getFontColor = document.getElementById('selectFontColor').value;
      var getBackgroundColor = document.getElementById('selectBackgroundColor').value;
      var getFontSize = document.getElementById('selectFontSize').value;

      cloudObject.fontColor = getFontColor;
      cloudObject.backgroundColor = getBackgroundColor;
      cloudObject.fontSize = getFontSize;

      // changing the font color, bg color and font size by using the values from the input
      cloudObject.div.style.backgroundColor = cloudObject.backgroundColor;
      cloudObject.div.style.color = cloudObject.fontColor;
      cloudObject.h1.style.fontSize = cloudObject.fontSize;
    });

    // click event on the button
    cloudObject.dark.addEventListener('click', function() {

      // if the sections contain the class 'dark' remove it, else add it
      if (cloudObject.div.classList.contains('dark') && cloudObject.body.classList.contains('dark') && cloudObject.form.classList.contains('dark')) {
        darkOff();
        // change the button text
        cloudObject.dark.textContent = 'Dark Mode';
      } else {
        darkOn();
        // change the button text
        cloudObject.dark.textContent = 'Light Mode';
      }
    });
    // click ENDS
  };

  // function for dark mode on
  function darkOn() {
    cloudObject.div.classList.add('dark');
    cloudObject.body.classList.add('dark');
    cloudObject.form.classList.add('dark');
  };

  // function for dark mode off
  function darkOff() {
    cloudObject.div.classList.remove('dark');
    cloudObject.body.classList.remove('dark');
    cloudObject.form.classList.remove('dark');
  }

  cloudObjects();

})();
