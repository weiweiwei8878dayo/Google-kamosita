function search() {
  var input = document.getElementById("search-input").value; // 検索ボックスの入力値を取得
  var elements = document.getElementsByClassName("searchable"); // 検索対象の要素を取得
  var results = document.getElementById("search-results"); // 検索結果を表示する要素を取得
  results.innerHTML = ""; // 検索結果をリセット

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerHTML.toLowerCase().indexOf(input.toLowerCase()) > -1) { // 検索ワードが見つかった場合
      var result = document.createElement("li");
      result.textContent = elements[i].textContent;
      results.appendChild(result);
    }
  }
}
