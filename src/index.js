import "./styles.css";

/**
 * テaキストボックスの値を変数化して取得+初期化
 * inputTextに入力内容を格納する
 * document.getElementById("取得するid").valueとする事で入力値の取得と、valueで値の橋渡しをする
 * 同時にvalueで空文字を渡す事で初期化を実現
 * ここまでをalertで出力してボタンと連動しているか動作確認
 *
 * document.creteElement("生成したいタグ名")としてjsでタグを作る※DOM操作
 * console.log()で出力してタグが生成されているかボタンと連動しているか動作確認
 *
 * 上記のタグ生成に合わせてクラスを付与
 * ここに対象のタグ.className = "付与したいクラス名"としてクラスの生成と同時にクラス名を与える
 *
 * 上と同じ要領でpタグを生成する
 * pの中にinpuTextで取得した内容を格納するため、p.innerTextにinputTextを渡す
 * console.logで動作確認
 *
 * div生成と同時にliの子要素として扱う
 * li.appendChild(div)とする事でliの子要素としてdivが生成される
 * p生成と同時にdivの子要素として扱う
 * div.appendChild(p)とする事でdivの子要素としてpが生成される
 *
 * 上の各項目をul直下のliタグ内に生成したい為、div、pより先にliも生成しておく
 *    document.createElement("li")
 * ulの子要素として扱いたいのでhtml上のulにidを指定し、
 * document.getElementById("ulのid").appendChild(li)として一つのかたまりを作る
 */
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 外枠のli生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "list-index";
  p.innerText = inputText;

  // liタグの子要素としてdivタグ
  // divタグの子要素としてpタグ
  li.appendChild(div);
  div.appendChild(p);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
