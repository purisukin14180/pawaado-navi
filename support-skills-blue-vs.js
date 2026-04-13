/**
 * サポートスキル：青（対○○系 / 治療系）
 * 参照ファイル：特能 (8).xlsx - 青サポートスキル（対○○系）.csv
 * 参照ファイル：特能 (8).xlsx - 青サポートスキル.csv（治療系を抽出）
 */
const SUPPORT_SKILLS_BLUE_VS = [
  // --- 対○○系（特効系） ---
  {"name": "対剣士○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 90, "tech": 0, "intel": 170, "mental": 10}, "effect": "自身の剣士特効を2％アップ。", "condition": "なし"},
  {"name": "対剣士◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 135, "tech": 0, "intel": 255, "mental": 15}, "effect": "自身の剣士特効を3％アップ。", "condition": "なし", "prerequisite": "対剣士○"},
  {"name": "対魔闘士○", "category": "特殊能力・青", "costs": {"muscle": 25, "agile": 40, "tech": 0, "intel": 0, "mental": 205}, "effect": "自身の魔闘士特効を2％アップ。", "condition": "なし"},
  {"name": "対魔闘士◎", "category": "特殊能力・青", "costs": {"muscle": 37, "agile": 60, "tech": 0, "intel": 0, "mental": 308}, "effect": "自身の魔闘士特効を3％アップ。", "condition": "なし", "prerequisite": "対魔闘士○"},
  {"name": "対重戦士○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 115, "tech": 107, "intel": 0, "mental": 48}, "effect": "自身の重戦士特効を2％アップ。", "condition": "なし"},
  {"name": "対重戦士◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 173, "tech": 160, "intel": 0, "mental": 72}, "effect": "自身の重戦士特効を3％アップ。", "condition": "なし", "prerequisite": "対重戦士○"},
  {"name": "対弓使い○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 205, "tech": 0, "intel": 0, "mental": 65}, "effect": "自身の弓使い特効を2％アップ。", "condition": "なし"},
  {"name": "対弓使い◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 308, "tech": 0, "intel": 0, "mental": 97}, "effect": "自身の弓使い特効を3％アップ。", "condition": "なし", "prerequisite": "対弓使い○"},
  {"name": "対魔法使い○", "category": "特殊能力・青", "costs": {"muscle": 170, "agile": 30, "tech": 0, "intel": 0, "mental": 70}, "effect": "自身の魔法使い特効を2％アップ。", "condition": "なし"},
  {"name": "対魔法使い◎", "category": "特殊能力・青", "costs": {"muscle": 255, "agile": 45, "tech": 0, "intel": 0, "mental": 105}, "effect": "自身の魔法使い特効を3％アップ。", "condition": "なし", "prerequisite": "対魔法使い○"},
  {"name": "対僧侶○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 102, "tech": 92, "intel": 76, "mental": 0}, "effect": "自身の僧侶特効を2％アップ。", "condition": "なし"},
  {"name": "対僧侶◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 153, "tech": 138, "intel": 114, "mental": 0}, "effect": "自身の僧侶特効を3％アップ。", "condition": "なし", "prerequisite": "対僧侶○"},
  {"name": "対ゴブリン○", "category": "特殊能力・青", "costs": {"muscle": 95, "agile": 0, "tech": 80, "intel": 80, "mental": 0}, "effect": "自身のゴブリン特効を2％アップ。", "condition": "なし"},
  {"name": "対ゴブリン◎", "category": "特殊能力・青", "costs": {"muscle": 143, "agile": 0, "tech": 120, "intel": 120, "mental": 0}, "effect": "自身のゴブリン特効を3％アップ。", "condition": "なし", "prerequisite": "対ゴブリン○"},
  {"name": "対オーク○", "category": "特殊能力・青", "costs": {"muscle": 220, "agile": 35, "tech": 0, "intel": 0, "mental": 0}, "effect": "自身のオーク特効を2％アップ。", "condition": "なし"},
  {"name": "対オーク◎", "category": "特殊能力・青", "costs": {"muscle": 330, "agile": 53, "tech": 0, "intel": 0, "mental": 0}, "effect": "自身のオーク特効を3％アップ。", "condition": "なし", "prerequisite": "対オーク○"},
  {"name": "対サイクロプス○", "category": "特殊能力・青", "costs": {"muscle": 80, "agile": 125, "tech": 0, "intel": 50, "mental": 0}, "effect": "自身のサイクロプス特効を2％アップ。", "condition": "なし"},
  {"name": "対サイクロプス◎", "category": "特殊能力・青", "costs": {"muscle": 120, "agile": 188, "tech": 0, "intel": 75, "mental": 0}, "effect": "自身のサイクロプス特効を3％アップ。", "condition": "なし", "prerequisite": "対サイクロプス○"},
  {"name": "対ヌメリン○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 30, "tech": 17, "intel": 208, "mental": 0}, "effect": "自身のヌメリン特効を2％アップ。", "condition": "なし"},
  {"name": "対ヌメリン◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 45, "tech": 26, "intel": 312, "mental": 0}, "effect": "自身のヌメリン特効を3％アップ。", "condition": "なし", "prerequisite": "対ヌメリン○"},
  {"name": "対キラービー○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 160, "tech": 20, "intel": 0, "mental": 75}, "effect": "自身のキラービー特効を2％アップ。", "condition": "なし"},
  {"name": "対キラービー◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 240, "tech": 30, "intel": 0, "mental": 113}, "effect": "自身のキラービー特効を3％アップ。", "condition": "なし", "prerequisite": "対キラービー○"},
  {"name": "対ピクシー○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 61, "tech": 61, "intel": 0, "mental": 133}, "effect": "自身のピクシー特効を2％アップ。", "condition": "なし"},
  {"name": "対ピクシー◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 92, "tech": 92, "intel": 0, "mental": 199}, "effect": "自身のピクシー特効を3％アップ。", "condition": "なし", "prerequisite": "対ピクシー○"},
  {"name": "対ハーピー○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 140, "tech": 70, "intel": 0, "mental": 45}, "effect": "自身のハーピー特効を2％アップ。", "condition": "なし"},
  {"name": "対ハーピー◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 210, "tech": 105, "intel": 0, "mental": 68}, "effect": "自身のハーピー特効を3％アップ。", "condition": "なし", "prerequisite": "対ハーピー○"},
  {"name": "対スケルトン○", "category": "特殊能力・青", "costs": {"muscle": 110, "agile": 10, "tech": 0, "intel": 0, "mental": 135}, "effect": "自身のスケルトン特効を2％アップ。", "condition": "なし"},
  {"name": "対スケルトン◎", "category": "特殊能力・青", "costs": {"muscle": 165, "agile": 15, "tech": 0, "intel": 0, "mental": 203}, "effect": "自身のスケルトン特効を3％アップ。", "condition": "なし", "prerequisite": "対スケルトン○"},
  {"name": "対ラミア○", "category": "特殊能力・青", "costs": {"muscle": 95, "agile": 0, "tech": 0, "intel": 0, "mental": 160}, "effect": "自身のラミア特効を2％アップ。", "condition": "なし"},
  {"name": "対ラミア◎", "category": "特殊能力・青", "costs": {"muscle": 143, "agile": 0, "tech": 0, "intel": 0, "mental": 240}, "effect": "自身のラミア特効を3％アップ。", "condition": "なし", "prerequisite": "対ラミア○"},
  {"name": "対ウンディーネ○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 55, "tech": 0, "intel": 120, "mental": 80}, "effect": "自身のウンディーネ特効を2％アップ。", "condition": "なし"},
  {"name": "対ウンディーネ◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 83, "tech": 0, "intel": 180, "mental": 120}, "effect": "自身のウンディーネ特効を3％アップ。", "condition": "なし", "prerequisite": "対ウンディーネ○"},
  {"name": "対フィッシュ○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 231, "tech": 24, "intel": 0, "mental": 0}, "effect": "自身のフィッシュ特効を2％アップ。", "condition": "なし"},
  {"name": "対フィッシュ◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 347, "tech": 36, "intel": 0, "mental": 0}, "effect": "自身のフィッシュ特効を3％アップ。", "condition": "なし", "prerequisite": "対フィッシュ○"},
  {"name": "対妖狐○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 105, "tech": 150, "intel": 0, "mental": 0}, "effect": "自身の妖狐特効を2％アップ。", "condition": "なし"},
  {"name": "対妖狐◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 158, "tech": 225, "intel": 0, "mental": 0}, "effect": "自身の妖狐特効を3％アップ。", "condition": "なし", "prerequisite": "対妖狐○"},
  {"name": "対ドラゴンタートル○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 45, "tech": 0, "intel": 210, "mental": 0}, "effect": "自身のドラゴンタートル特効を2％アップ。", "condition": "なし"},
  {"name": "対ドラゴンタートル◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 68, "tech": 0, "intel": 315, "mental": 0}, "effect": "自身のドラゴンタートル特効を3％アップ。", "condition": "なし", "prerequisite": "対ドラゴンタートル○"},
  {"name": "対植物〇", "category": "特殊能力・青", "costs": {"muscle": 77, "agile": 77, "tech": 101, "intel": 0, "mental": 0}, "effect": "自身の植物特効を2％アップ。", "condition": "なし"},
  {"name": "対植物◎", "category": "特殊能力・青", "costs": {"muscle": 116, "agile": 116, "tech": 151, "intel": 0, "mental": 0}, "effect": "自身の植物特効を3％アップ。", "condition": "なし", "prerequisite": "対植物○"},

  // --- ○○治療系（ジョブ別回復） ---
  {"name": "剣士治療○", "category": "特殊能力・青", "costs": {"muscle": 50, "agile": 0, "tech": 110, "intel": 110, "mental": 0}, "effect": "自身の剣士HP回復倍率を2％アップ。", "condition": "なし"},
  {"name": "剣士治療◎", "category": "特殊能力・青", "costs": {"muscle": 75, "agile": 0, "tech": 165, "intel": 165, "mental": 0}, "effect": "自身の剣士HP回復倍率を4％アップ。", "condition": "なし", "prerequisite": "剣士治療○"},
  {"name": "魔闘士治療○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 110, "intel": 110, "mental": 50}, "effect": "自身の魔闘士HP回復倍率を2％アップ。", "condition": "なし"},
  {"name": "魔闘士治療◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 165, "intel": 165, "mental": 75}, "effect": "自身の魔闘士HP回復倍率を4％アップ。", "condition": "なし", "prerequisite": "魔闘士治療○"},
  {"name": "重戦士治療○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 50, "tech": 110, "intel": 110, "mental": 0}, "effect": "自身の重戦士HP回復倍率を2％アップ。", "condition": "なし"},
  {"name": "重戦士治療◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 75, "tech": 165, "intel": 165, "mental": 0}, "effect": "自身の重戦士HP回復倍率を4％アップ。", "condition": "なし", "prerequisite": "重戦士治療○"},
  {"name": "弓使い治療○", "category": "特殊能力・青", "costs": {"muscle": 50, "agile": 0, "tech": 110, "intel": 110, "mental": 0}, "effect": "自身の弓使いHP回復倍率を2％アップ。", "condition": "なし"},
  {"name": "弓使い治療◎", "category": "特殊能力・青", "costs": {"muscle": 75, "agile": 0, "tech": 165, "intel": 165, "mental": 0}, "effect": "自身の弓使いHP回復倍率を4％アップ。", "condition": "なし", "prerequisite": "弓使い治療○"},
  {"name": "魔法使い治療○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 110, "intel": 110, "mental": 50}, "effect": "自身の魔法使いHP回復倍率を2％アップ。", "condition": "なし"},
  {"name": "魔法使い治療◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 165, "intel": 165, "mental": 75}, "effect": "自身の魔法使いHP回復倍率を4％アップ。", "condition": "なし", "prerequisite": "魔法使い治療○"},
  {"name": "僧侶治療○", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 110, "intel": 110, "mental": 50}, "effect": "自身の僧侶HP回復倍率を2％アップ。", "condition": "なし"},
  {"name": "僧侶治療◎", "category": "特殊能力・青", "costs": {"muscle": 0, "agile": 0, "tech": 165, "intel": 165, "mental": 75}, "effect": "自身の僧侶HP回復倍率を4％アップ。", "condition": "なし", "prerequisite": "僧侶治療○"}
];

// 他のJSファイルとの結合用
if (typeof SUPPORT_SKILLS === 'undefined') {
    var SUPPORT_SKILLS = [...SUPPORT_SKILLS_BLUE_VS];
} else {
    SUPPORT_SKILLS = [...SUPPORT_SKILLS, ...SUPPORT_SKILLS_BLUE_VS];
}