/**
 * パワアド キャラクターマスターデータ
 */
const CHARA_MASTER_DATA = [
    { id: "01", name: "リート", img: "img/01reet.png", rainbow: "", goldA: "", goldS: "剛力", kotsu: ["単体攻撃", "体幹", "頑丈な体"] },
    { id: "02", name: "オードウェル", img: "img/02ordwell.png", rainbow: "", goldA: "", goldS: "魔力探求", kotsu: ["魔法の理解", "広い視野", "魔力制御"] },
    { id: "03", name: "ヤンスロット", img: "img/03yanslot.png", rainbow: "", goldA: "", goldS: "エースアタッカー", kotsu: ["生存本能", "追撃", "対フィッシュ"] },
    { id: "04", name: "マリセア", img: "img/04marisea.png", rainbow: "", goldA: "", goldS: "慈愛の祈り", kotsu: ["列攻撃", "体幹"] },
    { id: "05", name: "マンダイン", img: "img/05mandain.png", rainbow: "爆熱フィスト", goldA: "火連斬", goldS: "ヌメリンキラー", kotsu: ["ガッツ", "対ヌメリン", "闘争本能"] },
    { id: "06", name: "ハンシス", img: "img/06hanshis.png", rainbow: "無限の水矢", goldA: "ヒールシャワー", goldS: "タフネス", kotsu: ["狙い撃ち", "備え", "忍耐"] },
    { id: "07", name: "バトラニー", img: "img/07batorani.png", rainbow: "レインバーン", goldA: "ホーリーライト", goldS: "烈", kotsu: ["広い視野", "列攻撃", "見切り"] },
    { id: "08", name: "アラカロス", img: "img/08arakarosu.png", rainbow: "エクスプロージョン", goldA: "ブレイズスナイプ", goldS: "ゴブリンキラー", kotsu: ["火攻撃", "魔法の理解", "魔法攻撃", "対ゴブリン"] },
    { id: "09", name: "マモル", img: "img/09mamoru.png", rainbow: "ライジングストライク", goldA: "ソーサリーエリア", goldS: "加護", kotsu: ["物理攻撃", "意志", "アクションスキル"] },
    { id: "10", name: "アオイ", img: "img/10aoi.png", rainbow: "マリンスフィア", goldA: "受け流しの構え", goldS: "不滅", kotsu: ["魔法攻撃", "魔力制御", "魔法の理解"] },
    { id: "11", name: "ミヤビ", img: "img/11miyabi.png", rainbow: "ゲイルシュート", goldA: "ペネレイトブロー", goldS: "平常心", kotsu: ["狙い撃ち", "通常攻撃", "広い視野"] },
    { id: "12", name: "アンリ", img: "img/12anri.png", rainbow: "爽風の破動", goldA: "カースウィンド", goldS: "フィッシュキラー", kotsu: ["危機察知", "備え", "対フィッシュ"] },
    { id: "13", name: "ライズ", img: "img/13raizu.png", rainbow: "守りの鼓舞", goldA: "カウンタースタンス", goldS: "サイクロプスキラー", kotsu: ["力学の理解", "物理防御", "対サイクロプス"] },
    { id: "14", name: "ホロウ", img: "img/14horou.png", rainbow: "生命の雫", goldA: "守護水斬", goldS: "トリックスター", kotsu: ["魔法の理解", "広い視野", "アクションスキル"] },
    { id: "15", name: "ドミー", img: "img/15domi.png", rainbow: "ルミナスオーラ", goldA: "炎魔連撃", goldS: "妖狐キラー", kotsu: ["物理防御", "護身の構え", "対妖狐"] },
    { id: "16", name: "イコス", img: "img/16ikosu.png", rainbow: "水脚乱舞", goldA: "アクアグランド", goldS: "一点集中", kotsu: ["魔法攻撃", "備え", "単体攻撃"] },
    { id: "17", name: "グラウェン", img: "img/17gurawen.png", rainbow: "テンペストスイープ", goldA: "烈風震破", goldS: "必殺の書", kotsu: ["体幹", "物理攻撃", "見切り"] },
    { id: "18", name: "カルメノ", img: "img/18karumeno.png", rainbow: "渦巻く剣刃", goldA: "アクアブラスト", goldS: "魔力改変", kotsu: ["見切り", "柔軟な体", "ガッツ"] },
    { id: "19", name: "アイネル", img: "img/19aineru.png", rainbow: "インサイトブロー", goldA: "疾風斬", goldS: "スケルトンキラー", kotsu: ["狙い撃ち", "見切り", "対スケルトン"] },
    { id: "20", name: "アネモカ", img: "img/20anemoka.png", rainbow: "トキシックブリーズ", goldA: "ポイズンアローズ", goldS: "魔族キラー", kotsu: ["風攻撃", "広い視野", "見切り"] },
    { id: "51", name: "リタリー", img: "img/51ritari.png", rainbow: "", goldA: "", goldS: "無頼漢の教え", kotsu: ["物理防御", "忍耐", "防御耐性"] },
    { id: "52", name: "トレアーティ", img: "img/52toreati.png", rainbow: "", goldA: "", goldS: "治癒の教え", kotsu: ["魔法防御", "免疫強化", "回復効果"] },
    { id: "53", name: "エシュナ", img: "img/53eshuna.png", rainbow: "", goldA: "", goldS: "不朽の意志", kotsu: ["生存報告", "けがしにくさ"] }
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