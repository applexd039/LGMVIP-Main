
    function register() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var image = document.getElementById('image').files[0];
      var gender = document.querySelector('input[name="gender"]:checked');
      var skills = document.getElementById('skills').value;

      if (gender) {
        gender = gender.value;
      }

      var outputImage = document.getElementById('output-image');
      outputImage.innerHTML = '';
      if (image) {
        var thumbnail = document.createElement('img');
        thumbnail.className = 'thumbnail';
        thumbnail.src = URL.createObjectURL(image);
        outputImage.appendChild(thumbnail);
      }

      document.getElementById('output-name').textContent = 'Name: ' + name;
      document.getElementById('output-email').textContent = 'Email: ' + email;
      document.getElementById('output-gender').textContent = 'Gender: ' + gender;
      document.getElementById('output-skills').textContent = 'Skills: ' + skills;
    }