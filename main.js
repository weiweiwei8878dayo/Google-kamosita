// 検索フォームのイベントハンドラ
function search() {
    // 検索結果をリセット
    document.getElementById("results").innerHTML = "";

    // 入力されたキーワードを取得
    var query = document.getElementById("query").value;

    // 検索結果の取得と表示
    if (query) {
        // Google風の検索結果を生成
        var results = [
            {
                title: "検索結果1",
                url: "https://www.example.com/result1"
            },
            {
                title: "検索結果2",
                url: "https://www.example.com/result2"
            },
            {
                title: "検索結果3",
                url: "https://www.example.com/result3"
            }
        ];

        // 検索結果をリスト形式で表示
        var resultsList = document.getElementById("results");
        results.forEach(function(result) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.textContent = result.title;
            a.href = result.url;
            li.appendChild(a);
            resultsList.appendChild(li);
        });
    }
}
