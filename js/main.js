document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector(".search-box");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const searchInput = document.querySelector("input");
  const searchData = document.querySelector(".search-data");

  searchBtn.onclick = () => {
    searchBox.classList.add("searchactive");
    searchBtn.classList.add("searchactive");
    searchInput.classList.add("searchactive");
    cancelBtn.classList.add("searchactive");
    searchInput.focus();

    if (searchInput.value !== "") {
      var values = searchInput.value;
      searchData.classList.remove("searchactive");
      searchData.innerHTML =
        "You just typed " +
        "<span style='font-weight: 500;'>" +
        values +
        "</span>";
    } else {
      searchData.textContent = "";
    }
  };

  cancelBtn.onclick = () => {
    searchBox.classList.remove("searchactive");
    searchBtn.classList.remove("searchactive");
    searchInput.classList.remove("searchactive");
    cancelBtn.classList.remove("searchactive");
    searchData.classList.toggle("searchactive");
    searchInput.value = "";
  };

  // jQuery code


  // Pure JavaScript code
  var checkboxes = document.querySelectorAll('.welcome-checkboxfree');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      var blockInfo = this.closest('.pdj-new__block-tw');
o_info
      if (this.checked) {
        blockInfo.classList.add('pdj-new__block-two_info-active');
      } else {
        blockInfo.classList.remove('pdj-new__block-two_info-active');
      }
    });
  });
});



// Получаем кнопку
var toggleButton = document.querySelector('.ectproject__pdj');

// Получаем ссылки на блоки
var pagePdjBlocks = document.getElementsByClassName('page-pdj');
var pdjNewBlocks = document.getElementsByClassName('pdj-new-block');

// Добавляем слушатель события клика по кнопке
toggleButton.addEventListener('click', function() {
  // Переключаем видимость блоков
  for (var i = 0; i < pagePdjBlocks.length; i++) {
    // Переключаем класс для скрытия/отображения блоков
    pagePdjBlocks[i].classList.toggle('pdj-hidden');
    pdjNewBlocks[i].classList.toggle('pdj-hidden');
  }
});