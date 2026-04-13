/**
 * サポートスキル：金（SSR特能系）
 * 参照ファイル：特能 (6).xlsx - 金サポートスキル.csv
 */
const SUPPORT_SKILLS_GOLD = [
  {"name": "平常心Lv.1", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 32, "tech": 80, "intel": 0, "mental": 148}, "effect": "自身の通常攻撃倍率を40％アップ。", "condition": "器用さD50", "prerequisite": "通常攻撃◎"},
  {"name": "平常心Lv.2", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 48, "tech": 120, "intel": 0, "mental": 222}, "effect": "自身の通常攻撃倍率を70％アップ。", "condition": "器用さC60", "prerequisite": "平常心Lv.1"},
  {"name": "烈Lv.1", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 114, "tech": 104, "intel": 40, "mental": 0}, "effect": "自身の列攻撃倍率を16％アップ。", "condition": "器用さD50", "prerequisite": "列攻撃◎"},
  {"name": "烈Lv.2", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 0, "mental": 0}, "effect": "自身の列攻撃倍率を28％アップ。", "condition": "器用さC60", "prerequisite": "烈Lv.1"},
  {"name": "トリックスターLv.1", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 452, "tech": 105, "intel": 80, "mental": 0}, "effect": "アクションスキル倍率45%UP", "condition": "器用さD50"},
  {"name": "タフネスLv.1", "category": "特殊能力・金", "costs": {"muscle": 150, "agile": 0, "tech": 0, "intel": 0, "mental": 110}, "effect": "自身のHPを10％アップ。", "condition": "生命力D50", "prerequisite": "忍耐"},
  {"name": "タフネスLv.2", "category": "特殊能力・金", "costs": {"muscle": 224, "agile": 0, "tech": 0, "intel": 0, "mental": 164}, "effect": "自身のHPを20％アップ。", "condition": "生命力C60", "prerequisite": "タフネスLv.1"},
  {"name": "加護Lv.1", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 208, "tech": 0, "intel": 92, "mental": 92}, "effect": "全体攻撃耐性を10％UP", "condition": "耐久力E40/精神力E40"},
  {"name": "加護Lv.2", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 240, "tech": 0, "intel": 106, "mental": 106}, "effect": "全体攻撃耐性を18％UP", "condition": "耐久力D50/精神力D50", "prerequisite": "加護Lv.1"},
  {"name": "慈愛の祈りLv.1", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 146, "tech": 0, "intel": 0, "mental": 246}, "effect": "自身の物理攻撃耐性を5％アップ。さらに魔法攻撃耐性を5％アップ。", "condition": "耐久力E40/精神力E40"},
  {"name": "慈愛の祈りLv.2", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 170, "tech": 0, "intel": 0, "mental": 248}, "effect": "自身の物理攻撃耐性を7％アップ。さらに魔法攻撃耐性を7％アップ。", "condition": "耐久力D40/精神力D50", "prerequisite": "慈愛の祈りLv.1"},
  {"name": "怪力Lv.1", "category": "特殊能力・金", "costs": {"muscle": 350, "agile": 0, "tech": 0, "intel": 0, "mental": 42}, "effect": "自身の物理攻撃倍率を12％アップ。さらに魔法攻撃倍率を3％アップ。", "condition": "パワーD50"},
  {"name": "怪力Lv.2", "category": "特殊能力・金", "costs": {"muscle": 406, "agile": 0, "tech": 0, "intel": 0, "mental": 48}, "effect": "自身の物理攻撃倍率を20％アップ。さらに魔法攻撃倍率を5％アップ。", "condition": "パワーC60", "prerequisite": "怪力Lv.1"},
  {"name": "剛力Lv.1", "category": "特殊能力・金", "costs": {"muscle": 146, "agile": 0, "tech": 0, "intel": 0, "mental": 246}, "effect": "自身の物理攻撃倍率を12％アップ。さらに魔法攻撃倍率を3％アップ。", "condition": "パワーD50"},
  {"name": "剛力Lv.2", "category": "特殊能力・金", "costs": {"muscle": 170, "agile": 0, "tech": 0, "intel": 0, "mental": 284}, "effect": "自身の物理攻撃倍率を20％アップ。さらに魔法攻撃倍率を5％アップ。", "condition": "パワーC60", "prerequisite": "剛力Lv.1"},
  {"name": "エースアタッカーLv.1", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 0, "tech": 146, "intel": 0, "mental": 246}, "effect": "自身の物理攻撃倍率を12％アップ。さらに魔法攻撃倍率を3％アップ。", "condition": "パワーD60"},
  {"name": "エースアタッカーLv.2", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 0, "tech": 170, "intel": 0, "mental": 284}, "effect": "自身の物理攻撃倍率を20％アップ。さらに魔法攻撃倍率を5％アップ。", "condition": "パワーC60", "prerequisite": "エースアタッカーLv.1"},
  {"name": "魔力増強Lv.1", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 328, "mental": 64}, "effect": "自身の魔法攻撃倍率を12％アップ。さらに物理攻撃倍率を3％アップ。", "condition": "魔力D50"},
  {"name": "魔力増強Lv.2", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 378, "mental": 74}, "effect": "自身の魔法攻撃倍率を20％アップ。さらに物理攻撃倍率を5％アップ。", "condition": "魔力C60", "prerequisite": "魔力増強Lv.1"},
  {"name": "魔力探求Lv.1", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 146, "mental": 243}, "effect": "自身の魔法攻撃倍率を12％アップ。さらに物理攻撃倍率を3％アップ。", "condition": "魔力D50"},
  {"name": "魔力探求Lv.2", "category": "特殊能力・金", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 170, "mental": 282}, "effect": "自身の魔法攻撃倍率を20％アップ。", "condition": "魔力C60", "prerequisite": "魔力探求Lv.1"},
  {"name": "サイクロプスキラーLv.1", "category": "特殊能力・金", "costs": {"muscle": 88, "agile": 142, "tech": 0, "intel": 50, "mental": 0}, "effect": "サイクロプス特効12％UP", "condition": "器用さD50", "prerequisite": "対サイクロプス◎"},
  {"name": "サイクロプスキラーLv.2", "category": "特殊能力・金", "costs": {"muscle": 100, "agile": 160, "tech": 0, "intel": 60, "mental": 0}, "effect": "サイクロプス特効20％UP", "condition": "器用さC60", "prerequisite": "サイクロプスキラーLv.1"}
];

// データのマージ用
if (typeof SUPPORT_SKILLS === 'undefined') {
    var SUPPORT_SKILLS = [...SUPPORT_SKILLS_GOLD];
} else {
    SUPPORT_SKILLS = [...SUPPORT_SKILLS, ...SUPPORT_SKILLS_GOLD];
}