import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createToIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストへ指定の要素を追加
const createToIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;
  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親要素<div>を未完了リストから削除する
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    // <div>の配下をクリア
    addTarget.textContent = null;
    // 子要素を生成指定追加
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = deleteTarget.firstElementChild.innerText;
      createToIncompleteList(text);
    });

    // <dic>に子要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });
  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素<div>を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });
  // divの子要素を追加する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // ulの子要素を追加する
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
