/**
 * パワアド キャラクターマスターデータ
 */
const CHARA_MASTER_DATA = [
    { id: "01", name: "リート", img: "img/01reet.png", rainbow: "", goldA: "", goldS: "剛力", blueS: ["単体攻撃", "体幹", "頑丈な体"], kotsu: [] },
    { id: "02", name: "オードウェル", img: "img/02ordwell.png", rainbow: "", goldA: "", goldS: "魔力探求", blueS: ["魔法の理解", "広い視野", "魔力制御"], kotsu: [] },
    { id: "03", name: "ヤンスロット", img: "img/03yanslot.png", rainbow: "", goldA: "", goldS: "エースアタッカー", blueS: ["生存本能", "追撃", "対フィッシュ"], kotsu: [] },
    { id: "04", name: "マリセア", img: "img/04marisea.png", rainbow: "", goldA: "", goldS: "慈愛の祈り", blueS: ["列攻撃", "体幹"], kotsu: [] },
    { id: "05", name: "マンダイン", img: "img/05mandain.png", rainbow: "爆熱フィスト", goldA: "火連斬", goldS: "ヌメリンキラー", blueS: ["ガッツ", "対ヌメリン", "闘争本能"], kotsu: [] },
    { id: "06", name: "ハンシス", img: "img/06hanshis.png", rainbow: "無限の水矢", goldA: "ヒールシャワー", goldS: "タフネス", blueS: ["狙い撃ち", "備え", "忍耐"], kotsu: [] },
    { id: "07", name: "バトラニー", img: "img/07batorani.png", rainbow: "レインバーン", goldA: "ホーリーライト", goldS: "烈", blueS: ["広い視野", "列攻撃", "見切り"], kotsu: [] },
    { id: "08", name: "アラカロス", img: "img/08arakarosu.png", rainbow: "エクスプロージョン", goldA: "ブレイズスナイプ", goldS: "ゴブリンキラー", blueS: ["火攻撃", "魔法の理解", "魔法攻撃", "対ゴブリン"], kotsu: [] },
    { id: "09", name: "マモル", img: "img/09mamoru.png", rainbow: "ライジングストライク", goldA: "ソーサリーエリア", goldS: "加護", blueS: ["物理攻撃", "意志", "アクションスキル"], kotsu: [] },
    { id: "10", name: "アオイ", img: "img/10aoi.png", rainbow: "マリンスフィア", goldA: "受け流しの構え", goldS: "不滅", blueS: ["魔法攻撃", "魔力制御", "魔法の理解"], kotsu: [] },
    { id: "11", name: "ミヤビ", img: "img/11miyabi.png", rainbow: "ゲイルシュート", goldA: "ペネレイトブロー", goldS: "平常心", blueS: ["狙い撃ち", "通常攻撃", "広い視野"], kotsu: [] },
    { id: "12", name: "アンリ", img: "img/12anri.png", rainbow: "爽風の破動", goldA: "カースウィンド", goldS: "フィッシュキラー", blueS: ["危機察知", "備え", "対フィッシュ"], kotsu: [] },
    { id: "13", name: "ライズ", img: "img/13raizu.png", rainbow: "守りの鼓舞", goldA: "カウンタースタンス", goldS: "サイクロプスキラー", blueS: ["力学の理解", "物理防御", "対サイクロプス"], kotsu: [] },
    { id: "14", name: "ホロウ", img: "img/14horou.png", rainbow: "生命の雫", goldA: "守護水斬", goldS: "トリックスター", blueS: ["魔法の理解", "広い視野", "アクションスキル"], kotsu: [] },
    { id: "15", name: "ドミー", img: "img/15domi.png", rainbow: "ルミナスオーラ", goldA: "炎魔連撃", goldS: "妖狐キラー", blueS: ["物理防御", "護身の構え", "対妖狐"], kotsu: [] },
    { id: "16", name: "イコス", img: "img/16ikosu.png", rainbow: "水脚乱舞", goldA: "アクアグランド", goldS: "一点集中", blueS: ["魔法攻撃", "備え", "単体攻撃"], kotsu: [] },
    { id: "17", name: "グラウェン", img: "img/17gurawen.png", rainbow: "テンペストスイープ", goldA: "烈風震破", goldS: "必殺の書", blueS: ["体幹", "物理攻撃", "見切り"], kotsu: [] },
    { id: "18", name: "カルメノ", img: "img/18karumeno.png", rainbow: "渦巻く剣刃", goldA: "アクアブラスト", goldS: "魔力改変", blueS: ["見切り", "柔軟な体", "ガッツ"], kotsu: [] },
    { id: "19", name: "アイネル", img: "img/19aineru.png", rainbow: "インサイトブロー", goldA: "疾風斬", goldS: "スケルトンキラー", blueS: ["狙い撃ち", "見切り", "対スケルトン"], kotsu: [] },
    { id: "20", name: "アネモカ", img: "img/20anemoka.png", rainbow: "トキシックブリーズ", goldA: "ポイズンアローズ", goldS: "魔族キラー", blueS: ["風攻撃", "広い視野", "見切り"], kotsu: [] },
    { id: "51", name: "リタリー", img: "img/51ritari.png", rainbow: "", goldA: "", goldS: "無頼漢の教え", blueS: ["物理防御", "忍耐", "防御耐性"], kotsu: [] },
    { id: "52", name: "トレアーティ", img: "img/52toreati.png", rainbow: "", goldA: "", goldS: "治癒の教え", blueS: ["魔法防御", "免疫強化", "回復効果"], kotsu: [] },
    { id: "53", name: "エシュナ", img: "img/53eshuna.png", rainbow: "", goldA: "", goldS: "不朽の意志", blueS: ["生存報告", "けがしにくさ"], kotsu: [] }
];

const SKILL_REQUIREMENTS = {
    rainbow: {
        "爆熱フィスト": "魔闘士 × 火属性", "無限の水矢": "弓使い × 水属性", "レインバーン": "弓使い × 火属性", "エクスプロージョン": "魔法使い × 火属性",
        "ライジングストライク": "剣士 × 火属性", "マリンスフィア": "魔法使い × 水属性", "ゲイルシュート": "弓使い × 風属性", "爽風の破動": "僧侶 × 風属性",
        "守りの鼓舞": "重戦士 × 水属性", "生命の雫": "僧侶 × 水属性", "ルミナスオーラ": "重戦士 × 火属性", "水脚乱舞": "魔闘士 × 水属性",
        "テンペストスイープ": "剣士 × 風属性", "渦巻く剣刃": "剣士 × 水属性", "インサイトブロー": "魔闘士 × 風属性", "トキシックブリーズ": "魔法使い × 風属性"
    },
    goldA: {
        "火連斬": "剣士 × 火属性", "ヒールシャワー": "僧侶 × 水属性", "ホーリーライト": "僧侶 × 火属性", "ブレイズスナイプ": "弓使い × 火属性",
        "ソーサリーエリア": "魔法使い × 火属性", "受け流しの構え": "魔闘士 × 水属性", "ペネレイトブロー": "魔闘士 × 風属性", "カースウィンド": "魔法使い × 風属性",
        "カウンタースタンス": "弓使い × 水属性", "守護水斬": "剣士 × 水属性", "炎魔連撃": "魔闘士 × 火属性", "アクアグランド": "重戦士 × 水属性",
        "烈風震破": "重戦士 × 風属性", "アクアブラスト": "魔法使い × 水属性", "疾風斬": "剣士 × 風属性", "ポイズンアローズ": "弓使い × 風属性"
    }
};