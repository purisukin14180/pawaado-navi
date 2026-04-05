const ACTION_SKILLS = [
  {"name": "クラッシュアロー", "category": "アクションスキル・青", "costs": {"muscle": 0, "agile": 20, "tech": 49, "intel": 6, "mental": 0}, "effect": "敵前衛1体に威力70の物理ダメージ。初回3/再発4", "condition": "弓使い／水属性／器用さF20"},
  {"name": "火炎斬り", "category": "アクションスキル・青", "costs": {"muscle": 221, "agile": 79, "tech": 125, "intel": 0, "mental": 0}, "effect": "敵前衛1体に威力70の物理ダメージ。初回3/再発4", "condition": "剣士／火属性／パワーF20"},
  {"name": "真空斬り", "category": "アクションスキル・青", "costs": {"muscle": 221, "agile": 79, "tech": 125, "intel": 0, "mental": 0}, "effect": "敵前衛1体に威力70の物理ダメージ。初回3/再発4", "condition": "剣士／風属性／パワーF20"},
  {"name": "カウンタースタンスLv.2", "category": "アクションスキル・金", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 0, "mental": 0}, "effect": "反撃状態付与(2T)。威力38物理ダメ。初回3/再発4", "condition": "弓使い／水属性／器用さD50／精神力40"},
  {"name": "疾風斬Lv.1", "category": "アクションスキル・金", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 0, "mental": 0}, "effect": "なし", "condition": "なし"},
  {"name": "ソーサリーエリアLv.1", "category": "アクションスキル・金", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 216, "mental": 216}, "effect": "自身の魔法攻撃倍率を24％アップ。3T継続。初回3/再発4", "condition": "魔法使い／火属性／魔力F20／精神力F20"},
  {"name": "ソーサリーエリアLv.2", "category": "アクションスキル・金", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 260, "mental": 260}, "effect": "自身の魔法攻撃倍率を32％アップ。3T継続。初回3/再発4", "condition": "魔法使い／火属性／魔力D50／精神力E40", "prerequisite": "ソーサリーエリアLv.1"}
];