/**
 * サポートスキル：青（基本・耐性・回復・治療系）
 * 参照ファイル：特能 (14).xlsx - 青サポート.csv
 * 修正内容：属性攻撃、属性耐性、属性回復、通常・単体・列回復をすべて網羅したフルコード
 */
const SUPPORT_SKILLS_BLUE = [
  // --- 攻撃・防御の基本スキル ---
  {"name": "物理攻撃○", "category": "特殊能力・青", "costs": {"muscle": 190, "agile": 15, "tech": 65, "intel": 0, "mental": 0}, "effect": "自身の物理攻撃倍率を3%アップ。", "condition": "なし", "tips_method": "SRマモル、SRグラウェン"},
  {"name": "物理攻撃◎", "category": "特殊能力・青", "costs": {"muscle": 285, "agile": 22, "tech": 98, "intel": 0, "mental": 0}, "effect": "自身の物理攻撃倍率を5%アップ。", "condition": "なし", "tips_method": "SRマモル、SRグラウェン", "prerequisite": "物理攻撃○"},
  {"name": "魔法攻撃○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 30, "intel": 170, "mental": 70}, "effect": "自身の魔法攻撃倍率を3%アップ。", "condition": "なし", "tips_method": "SRアラカロス、SRアオイ、SRイコス"},
  {"name": "魔法攻撃◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 45, "intel": 255, "mental": 105}, "effect": "自身の魔法攻撃倍率を5%アップ。", "condition": "なし", "tips_method": "SRアラカロス、SRアオイ、SRイコス", "prerequisite": "魔法攻撃○"},
  {"name": "物理防御○", "category": "特殊能力・青", "costs": {"muscle": 90, "agile": 150, "tech": 0, "intel": 0, "mental": 35}, "effect": "自身の物理攻撃耐性を2%アップ。", "condition": "なし", "tips_method": "SRライズ、SRドミー、SRリタリー"},
  {"name": "物理防御◎", "category": "特殊能力・青", "costs": {"muscle": 135, "agile": 225, "tech": 0, "intel": 0, "mental": 45}, "effect": "自身の物理攻撃耐性を4%アップ。", "condition": "なし", "tips_method": "SRライズ、SRドミー、SRリタリー", "prerequisite": "物理防御○"},
  {"name": "魔法防御○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 150, "tech": 0, "intel": 70, "mental": 55}, "effect": "自身の魔法攻撃耐性を2%アップ。", "condition": "なし", "tips_method": "SRトレアーティ"},
  {"name": "魔法防御◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 225, "tech": 0, "intel": 105, "mental": 75}, "effect": "自身の魔法攻撃耐性を4%アップ。", "condition": "なし", "tips_method": "SRトレアーティ", "prerequisite": "魔法防御○"},

  // --- 特殊能力・耐性 ---
  {"name": "体幹", "category": "特殊能力・青", "costs": {"muscle": 230, "agile": 0, "tech": 0, "intel": 0, "mental": 60}, "effect": "自身の物理攻撃倍率を2%アップ。さらに物理攻撃耐性を1%アップ。", "condition": "なし", "tips_method": "SRリート、SRマリセア、SRグラウェン"},
  {"name": "魔力制御", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 230, "mental": 60}, "effect": "自身の魔法攻撃倍率を2%アップ。さらに魔法攻撃耐性を1%アップ。", "condition": "なし", "tips_method": "SRオードウェル、SRアオイ"},
  {"name": "忍耐", "category": "特殊能力・青", "costs": {"muscle": 170, "agile": 0, "tech": 0, "intel": 0, "mental": 120}, "effect": "自身のHPを3％アップ。", "condition": "なし", "tips_method": "SRハンシス、SRリタリー"},
  {"name": "生存本能", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 110, "tech": 0, "intel": 25, "mental": 170}, "effect": "自身のHPを5％アップ。", "condition": "なし", "tips_method": "SRヤンスロット、SRエシュナ"},
  {"name": "闘争本能", "category": "特殊能力・青", "costs": {"muscle": 80, "agile": 0, "tech": 0, "intel": 0, "mental": 225}, "effect": "自身の物理攻撃倍率を3%アップ。さらに魔法攻撃倍率を3%アップ。", "condition": "なし", "tips_method": "SRマンダイン"},
  {"name": "柔軟な体", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 110, "tech": 140, "intel": 35, "mental": 0}, "effect": "自身の物理攻撃耐性4%アップ。", "condition": "なし", "tips_method": "SRカルメノ"},
  {"name": "頑丈な体", "category": "特殊能力・青", "costs": {"muscle": 175, "agile": 0, "tech": 0, "intel": 0, "mental": 110}, "effect": "自身のHPを5％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "無心の構え", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 60, "tech": 30, "intel": 0, "mental": 195}, "effect": "自身の魔法攻撃耐性4%アップ。", "condition": "なし", "tips_method": "SRクートル"},
  {"name": "護身の構え", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 110, "tech": 105, "intel": 0, "mental": 70}, "effect": "自身のHPを5％アップ。", "condition": "なし", "tips_method": "SRドミー"},
  {"name": "狙い撃ち", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 195, "intel": 0, "mental": 95}, "effect": "自身の命中率を2％アップ。", "condition": "なし", "tips_method": "SRハンシス、SRミヤビ、SRアイネル"},

  // --- 属性攻撃・耐性 ---
  {"name": "火攻撃", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 180, "intel": 40, "mental": 60}, "effect": "自身の火属性倍率3%アップ。", "condition": "火属性", "tips_method": "SRアラカロス"},
  {"name": "風攻撃", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 180, "intel": 40, "mental": 60}, "effect": "自身の風属性倍率3%アップ。", "condition": "風属性", "tips_method": "SRアネモカ"},
  {"name": "水攻撃", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 180, "intel": 40, "mental": 60}, "effect": "自身の水属性倍率3%アップ。", "condition": "水属性", "tips_method": ""},
  {"name": "火耐性", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 120, "tech": 60, "intel": 0, "mental": 100}, "effect": "自身の火属性耐性を2％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "風耐性", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 120, "tech": 60, "intel": 0, "mental": 100}, "effect": "自身の風属性耐性を2％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "水耐性", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 120, "tech": 60, "intel": 0, "mental": 100}, "effect": "自身の水属性耐性を2％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "無耐性", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 120, "tech": 60, "intel": 0, "mental": 100}, "effect": "自身の無属性耐性を2％アップ。", "condition": "なし", "tips_method": ""},

  // --- スキル種別強化 ---
  {"name": "通常攻撃○", "category": "特殊能力・青", "costs": {"muscle": 95, "agile": 85, "tech": 90, "intel": 0, "mental": 0}, "effect": "自身の通常攻撃倍率を12%アップ。", "condition": "なし", "tips_method": "SRミヤビ"},
  {"name": "通常攻撃◎", "category": "特殊能力・青", "costs": {"muscle": 143, "agile": 112, "tech": 135, "intel": 0, "mental": 0}, "effect": "自身の通常攻撃倍率を20%アップ。", "condition": "なし", "tips_method": "SRミヤビ", "prerequisite": "通常攻撃○"},
  {"name": "アクションスキル○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 90, "tech": 170, "intel": 0, "mental": 0}, "effect": "自身のアクションスキル倍率を12%アップ。", "condition": "なし", "tips_method": "SRマモル、SRホロウ"},
  {"name": "アクションスキル◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 135, "tech": 255, "intel": 0, "mental": 0}, "effect": "自身のアクションスキル倍率を20%アップ。", "condition": "なし", "tips_method": "SRマモル、SRホロウ", "prerequisite": "アクションスキル○"},
  {"name": "単体攻撃○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 90, "intel": 0, "mental": 300}, "effect": "自身の単体攻撃倍率を3%アップ。", "condition": "なし", "tips_method": "SRリート、SRイコス"},
  {"name": "単体攻撃◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 60, "intel": 0, "mental": 200}, "effect": "自身の単体攻撃倍率を3%アップ。", "condition": "なし", "tips_method": "SRリート、SRイコス", "prerequisite": "単体攻撃○"},
  {"name": "列攻撃○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 160, "tech": 50, "intel": 50, "mental": 0}, "effect": "自身の列攻撃倍率を3%アップ。", "condition": "なし", "tips_method": "SRマリセア、SRバトラ二ー"},
  {"name": "列攻撃◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 240, "tech": 75, "intel": 75, "mental": 0}, "effect": "自身の列攻撃倍率を3%アップ。", "condition": "なし", "tips_method": "SRマリセア、SRバトラ二ー", "prerequisite": "列攻撃○"},
  {"name": "追撃○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 130, "tech": 130, "intel": 0, "mental": 0}, "effect": "自身の追撃倍率を3%アップ。", "condition": "なし", "tips_method": "SRヤンスロット"},
  {"name": "追撃◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 195, "tech": 195, "intel": 0, "mental": 0}, "effect": "自身の追撃倍率を5%アップ。", "condition": "なし", "tips_method": "SRヤンスロット", "prerequisite": "追撃○"},

  // --- 耐性・状態異常系 ---
  {"name": "けがしにくさ○", "category": "特殊能力・青", "costs": {"muscle": 190, "agile": 0, "tech": 0, "intel": 0, "mental": 80}, "effect": "自身の物理攻撃耐性を1％アップ。さらに魔法攻撃耐性を1％アップ。", "condition": "なし", "tips_method": "SRエシュナ"},
  {"name": "けがしにくさ◎", "category": "特殊能力・青", "costs": {"muscle": 285, "agile": 0, "tech": 0, "intel": 0, "mental": 120}, "effect": "自身の物理攻撃耐性を2％アップ。さらに魔法攻撃耐性を2％アップ。", "condition": "なし", "tips_method": "SRエシュナ", "prerequisite": "けがしにくさ○"},
  {"name": "防御体制", "category": "特殊能力・青", "costs": {"muscle": 155, "agile": 135, "tech": 0, "intel": 0, "mental": 0}, "effect": "自身の単体攻撃耐性を2％アップ。", "condition": "なし", "tips_method": "SRリタリー"},
  {"name": "備え", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 60, "intel": 90, "mental": 140}, "effect": "自身の列攻撃耐性を2％アップ。", "condition": "なし", "tips_method": "SRハンシス、SRアンリ、SRイコス"},
  {"name": "広い視野", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 170, "tech": 0, "intel": 60, "mental": 60}, "effect": "自身の全体攻撃耐性を2％アップ。", "condition": "なし", "tips_method": "SRオードウェル、SRバトラ二ー、SRミヤビ、SRホロウ、SRアネモカ"},
  {"name": "見切り", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 65, "tech": 95, "intel": 130, "mental": 0}, "effect": "自身のアクションスキル耐性4%アップ。", "condition": "なし", "tips_method": "SRバトラ二ー、SRグラウェン、SRカルメノ、SRアイネル、SRアネモカ、SRクートル"},
  {"name": "危機察知", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 120, "tech": 50, "intel": 115, "mental": 0}, "effect": "自身の必殺技耐性を4％アップ。", "condition": "なし", "tips_method": "SRアンリ"},
  {"name": "力学の理解", "category": "特殊能力・青", "costs": {"muscle": 80, "agile": 0, "tech": 0, "intel": 230, "mental": 0}, "effect": "自身の物理攻撃耐性を4％アップ。", "condition": "なし", "tips_method": "SRライズ"},
  {"name": "魔法の理解", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 310, "mental": 0}, "effect": "自身の魔法攻撃耐性を4％アップ。", "condition": "なし", "tips_method": "SRオードウェル、SRアラカロス、SRアオイ、SRホロウ"},
  {"name": "免疫強化", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 70, "tech": 0, "intel": 86, "mental": 104}, "effect": "自身のダメージ状態異常耐性を2%アップ。", "condition": "なし", "tips_method": "SRトレアーティ"},
  {"name": "意志", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 14, "mental": 246}, "effect": "自身の弱体化状態異常耐性を2%アップ。", "condition": "なし", "tips_method": "SRマモル"},
  {"name": "ガッツ", "category": "特殊能力・青", "costs": {"muscle": 14, "agile": 0, "tech": 0, "intel": 0, "mental": 246}, "effect": "自身の行動不能状態異常耐性を2%アップ。", "condition": "なし", "tips_method": "SRマンダイン、SRカルメノ"},

  // --- 回復系スキル ---
  {"name": "回復効果〇", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 105, "intel": 150, "mental": 150}, "effect": "自身のHP回復効果倍率を3％アップ。", "condition": "なし", "tips_method": "SRトレアーティ"},
  {"name": "回復効果◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 70, "intel": 100, "mental": 100}, "effect": "自身のHP回復効果倍率を5％アップ。", "condition": "なし", "tips_method": "SRトレアーティ", "prerequisite": "回復効果〇"},
  {"name": "癒しの心", "category": "特殊能力・青", "costs": {"muscle": 120, "agile": 0, "tech": 50, "intel": 140, "mental": 0}, "effect": "自身のHP回復効果倍率を2％アップ。さらにHPを1％アップ。", "condition": "なし", "tips_method": "SRクートル"},
  {"name": "慈しみ", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 64, "tech": 0, "intel": 88, "mental": 123}, "effect": "自身の単体HP回復効果倍率を3％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "集中力", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 53, "intel": 50, "mental": 172}, "effect": "自身の単体HP回復効果倍率を2％アップ。さらに命中率を2％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "協調性", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 53, "intel": 50, "mental": 172}, "effect": "自身の列HP回復効果倍率を3％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "バランス感覚", "category": "特殊能力・青", "costs": {"muscle": 102, "agile": 112, "tech": 61, "intel": 0, "mental": 0}, "effect": "自身の列HP回復効果倍率を2％アップ。さらに列攻撃耐性を2％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "お人よし", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 83, "mental": 192}, "effect": "自身の必殺技HP回復効果倍率を3％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "立て直し", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 83, "tech": 62, "intel": 0, "mental": 130}, "effect": "自身の必殺技HP回復効果倍率を2％アップ。さらに必殺技耐性を2％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "仲間思い", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 39, "tech": 0, "intel": 72, "mental": 164}, "effect": "自身のHP回復倍率を1％アップ。さらに通常攻撃HP倍率を1％アップ。さらにアクション回復倍率を4％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "冷静沈着", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 62, "intel": 33, "mental": 180}, "effect": "自身の魔法攻撃耐性を2％アップ。さらに通常攻撃HP回復倍率を2％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "戦況分析", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 35, "tech": 62, "intel": 178, "mental": 0}, "effect": "自身の全体攻撃耐性を2％アップ。さらにアクション回復倍率を2％アップ。", "condition": "なし", "tips_method": ""},

  // --- 属性回復 ---
  {"name": "火回復", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 62, "intel": 120, "mental": 98}, "effect": "自身の火属性HP回復倍率を3％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "風回復", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 62, "intel": 120, "mental": 98}, "effect": "自身の風属性HP回復倍率を3％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "水回復", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 62, "intel": 120, "mental": 98}, "effect": "自身の水属性HP回復倍率を3％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "通常回復〇", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 22, "intel": 119, "mental": 119}, "effect": "自身の通常攻撃HP回復倍率を2％アップ。", "condition": "なし", "tips_method": "SRクートル"},
  {"name": "通常回復◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 34, "intel": 178, "mental": 178}, "effect": "自身の通常攻撃HP回復倍率を4％アップ。", "condition": "なし", "tips_method": "SRクートル", "prerequisite": "通常回復〇"},
  {"name": "単体回復〇", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 48, "tech": 0, "intel": 120, "mental": 92}, "effect": "自身の単体HP回復倍率を2％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "単体回復◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 72, "tech": 0, "intel": 180, "mental": 138}, "effect": "自身の単体HP回復倍率を4％アップ。", "condition": "なし", "tips_method": "", "prerequisite": "単体回復〇"},
  {"name": "列回復〇", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 68, "intel": 81, "mental": 111}, "effect": "自身の列HP回復倍率を2％アップ。", "condition": "なし", "tips_method": ""},
  {"name": "列回復◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 102, "intel": 122, "mental": 166}, "effect": "自身の列HP回復倍率を4％アップ。", "condition": "なし", "tips_method": "", "prerequisite": "列回復〇"}
];

// データのマージ用
if (typeof SUPPORT_SKILLS === 'undefined') {
    var SUPPORT_SKILLS = [...SUPPORT_SKILLS_BLUE];
} else {
    SUPPORT_SKILLS = [...SUPPORT_SKILLS, ...SUPPORT_SKILLS_BLUE];
}