// Function to add an item to the dynamic list and store it in local storage
function addItem(item) {
  var dynamicList = document.getElementById("dynamicList");

  if (!dynamicList.innerHTML.includes(item)) {
    var li = document.createElement("li");
    li.textContent = item;

    dynamicList.appendChild(li);

    saveListToLocalStorage();
  }
}

// Function to remove an item from the dynamic list and update local storage
function removeItem(item) {
  var dynamicList = document.getElementById("dynamicList");

  var items = dynamicList.getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    if (items[i].textContent === item) {
      dynamicList.removeChild(items[i]);

      saveListToLocalStorage();

      break;
    }
  }
}

// Function to save the current dynamic list to local storage
function saveListToLocalStorage() {
  var dynamicList = document.getElementById("dynamicList");

  var items = [];
  for (var i = 0; i < dynamicList.children.length; i++) {
    items.push(dynamicList.children[i].textContent);
  }

  localStorage.setItem("dynamicListItems", JSON.stringify(items));
}

// Function to load items from local storage on page load
function loadItemsFromLocalStorage() {
  var dynamicList = document.getElementById("dynamicList");

  var storedItems = localStorage.getItem("dynamicListItems");

  if (storedItems) {
    var items = JSON.parse(storedItems);
    for (var i = 0; i < items.length; i++) {
      addItem(items[i]);
    }
  }
}

// Call the loadItemsFromLocalStorage function on page load
window.onload = loadItemsFromLocalStorage;