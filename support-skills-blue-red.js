/**
 * サポートスキル：青赤（メリット・デメリット併せ持ち系）
 * 参照ファイル：特能 (14).xlsx - 青赤サポート.csv
 */
const SUPPORT_SKILLS_BLUE_RED = [
  {
    "name": "運任せ",
    "category": "特殊能力・青赤",
    "costs": {"muscle": 150, "agile": 0, "tech": 0, "intel": 0, "mental": 99},
    "effect": "自身の物理攻撃倍率を10％アップ。さらに魔法攻撃倍率を10％アップ。自身の命中率を10％ダウン。",
    "condition": "なし",
    "tips_method": ""
  },
  {
    "name": "がむしゃら",
    "category": "特殊能力・青赤",
    "costs": {"muscle": 177, "agile": 0, "tech": 0, "intel": 33, "mental": 55},
    "effect": "自身の物理攻撃倍率を7％アップ。さらに魔法攻撃耐性を7％アップ。自身の物理攻撃耐性を2％ダウン。さらに魔法攻撃耐性を2％ダウン。",
    "condition": "なし",
    "tips_method": "SRピータ"
  },
  {
    "name": "ヒーラー魂",
    "category": "特殊能力・青赤",
    "costs": {"muscle": 0, "agile": 100, "tech": 50, "intel": 0, "mental": 99},
    "effect": "自身のHP回復効果倍率を3％アップ。自身の物理攻撃耐性を1％ダウン。",
    "condition": "なし",
    "tips_method": ""
  }
];

// 他のJSファイルとの結合用
if (typeof SUPPORT_SKILLS === 'undefined') {
    var SUPPORT_SKILLS = [...SUPPORT_SKILLS_BLUE_RED];
} else {
    SUPPORT_SKILLS = [...SUPPORT_SKILLS, ...SUPPORT_SKILLS_BLUE_RED];
}