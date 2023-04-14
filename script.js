// ページ読み込み時の処理
window.onload = function() {
  // 検索ボタンのクリックイベントリスナーを設定
  document.getElementById("search-btn").addEventListener("click", function() {
    search();
  });

  // エンターキーが押された時の処理
  document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      search();
    }
  });
};

// 検索の処理
function search() {
  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");

  // 検索結果をクリア
  searchResults.innerHTML = "";

  // 検索クエリを取得
  var query = searchInput.value;

  // 検索結果を表示
  var resultElement = document.createElement("div");
  resultElement.textContent = "検索結果: " + query;
  searchResults.appendChild(resultElement);

  // 検索クエリをリセット
  searchInput.value = "";
}
