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
 * document.getElementById("ulのid").appendChild(li)として
 * 一つのかたまりを作る
 *
 * 各種buttonもdocument.createElement("button")として生成
 * 動作はalertを利用して確認してみる
 * appendChild(div)として子要素にする
 *
 * 削除ボタン
 * 削除機能については変数deleteTargetを定義し、
 * closest("li")とする事で祖先要素のliを取得するクリックイベント
 * に仕立てる
 * (親要素を取得したいときはparentNodeでOK)
 * li以下の子要素たちをまるっと削除するために親要素となる
 * ulを基準にして機能をまとめる
 * document.getElementById("ulに指定したid")
 * .removeChildつまりliタグ以下を削除対象として扱う
 *
 * 完了ボタン①
 * 未完了エリアから削除する点については、
 * 削除同様の処理を行う部分のため関数化する
 * deleteFromInconpleteListを定義、引数はtargetとして、
 * 呼び出し元(complete delete)と紐付けする
 * 関数内の処理はdocument.getElementById("ulに指定したid")
 * .removeChild(target)とする
 * 各処理の{}内でdeleteFromInconpleteList(それぞれ.closest("li"))
 * で個別に書いて時と同じ機能をもつ
 *
 * 完了ボタン②
 * 完了ボタンを押したら、
 * 生成したliタグを取得、addTargerを定義してそこに格納
 * 更にaddTargetにpタグに書き込まれるテキスト情報を
 * 取得したいが、liかた見て孫要素に当たるため、
 * addTarget.queryselector("p").innerTextと書いて、
 * 情報取得し変数textに格納
 * ~子要素の場合は
 * .firstElementChild
 * .lastElementChild
 * .children(n番目)
 * ~.innerTextとすれば取得出来る
 *
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

  // 完了buttonの生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  // 完了ボタンイベントの確認
  complateButton.addEventListener("click", () => {
    deleteFromInconpleteList(complateButton.closest("li"));

    // 完了した項目を完了エリアに表示させる
    const addTarget = complateButton.closest("li");

    // 追加したpタグのテキストを取得、textに格納
    const text = addTarget.querySelector("p").innerText;
    console.log(text);
  });

  // 削除buttonの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタンイベントの確認(alert)
  // 削除の動作に連動して親要素のliタグごと削除する
  deleteButton.addEventListener("click", () => {
    deleteFromInconpleteList(deleteButton.closest("li"));
  });

  // liタグの子要素としてdivタグ
  // divタグの子要素としてpタグ、buttonタグ
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了エリアからテキストとボタンの削除
const deleteFromInconpleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
