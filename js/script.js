// 1. Сначала создаем функцию для генерации случайного числа
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 2. Внутри обработчика клика по кнопке "Specials" (обычно это в коде для главной страницы)
// Нам нужно получить список всех категорий и выбрать одну
$dc.loadMenuItems = function (categoryShortName) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    menuItemsUrl + categoryShortName,
    buildAndShowMenuItemsHTML
  );
};

// ГЛАВНАЯ ЧАСТЬ: Загрузка случайной категории
$dc.loadRandomCategory = function () {
  showLoading("#main-content");
  // Сначала получаем список всех категорий
  $ajaxUtils.sendGetRequest(
    allCategoriesUrl, 
    function (categories) {
      // Выбираем случайный индекс из массива категорий
      var randomCategoryIndex = getRandomInt(0, categories.length);
      var randomCategoryShortName = categories[randomCategoryIndex].short_name;
      
      // Вызываем загрузку этой случайной категории
      $dc.loadMenuItems(randomCategoryShortName);
    }
  );
};
