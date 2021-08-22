import './App.css'

function File(){
    Array.prototype.forEach.call(
        document.querySelectorAll(".file-upload__button"),
        function(button) {
          const hiddenInput = button.parentElement.querySelector(
            ".file-upload__input"
          );
          const label = button.parentElement.querySelector(".file-upload__label");
          const defaultLabelText = "No file(s) selected";
          label.textContent = defaultLabelText;
          label.title = defaultLabelText;
      
          button.addEventListener("click", function() {
            hiddenInput.click();
          });
          hiddenInput.addEventListener("change", function() {
            const filenameList = Array.prototype.map.call(hiddenInput.files, function(
              file
            ) {
              return file.name;
            });
            label.textContent = filenameList.join(", ") || defaultLabelText;
            label.title = label.textContent;
          });
        }
      );
      
    return(
    <div class="file-upload">
        <input class="file-upload__input" type="file" name="myFile[]" id="myFile" multiple />
        <button class="file-upload__button" type="button">Upload Logo</button>
        <span class="file-upload__label"></span>
    </div>
    )
}

export default File