const HISSATSU_SKILLS = [
  {"name": "スラッシュ", "category": "必殺技・虹", "costs": {"muscle": 155, "agile": 44, "tech": 67, "intel": 0, "mental": 0}, "effect": "敵前衛1体に威力90の物理ダメージ。", "condition": "剣士"},
  {"name": "マジックバレット", "category": "必殺技・虹", "costs": {"muscle": 0, "agile": 0, "tech": 60, "intel": 110, "mental": 80}, "effect": "敵前衛1体に威力90の魔法ダメージ。", "condition": "魔法使い"},
  {"name": "ライジングストライクLv.1", "category": "必殺技・虹", "costs": {"muscle": 254, "agile": 50, "tech": 152, "intel": 0, "mental": 100}, "effect": "敵前衛1体に威力120の物理ダメージ。", "condition": "剣士／火属性／E40"},
  {"name": "ライジングストライクLv.2", "category": "必殺技・虹", "costs": {"muscle": 378, "agile": 75, "tech": 225, "intel": 0, "mental": 150}, "effect": "敵前衛1体に威力180の物理ダメージ。", "condition": "剣士／火属性／C60", "prerequisite": "ライジングストライクLv.1"},
  {"name": "夢幻の水矢Lv.1", "category": "必殺技・虹", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 0, "mental": 0}, "effect": "敵後衛全体に威力43物理+睡眠(1T)", "condition": "器用さE40／弓／水"},
  {"name": "夢幻の水矢Lv.2", "category": "必殺技・虹", "costs": {"muscle": 0, "agile": 0, "tech": 0, "intel": 0, "mental": 0}, "effect": "敵後衛全体に威力63物理+睡眠(1T)", "condition": "器用さC60／弓／水", "prerequisite": "夢幻の水矢Lv.1"},
  {"name": "エクスプロ―ジョンLv.1", "category": "必殺技・虹", "costs": {"muscle": 0, "agile": 54, "tech": 104, "intel": 254, "mental": 134}, "effect": "敵後衛全体に威力42魔法ダメ+火傷付与。", "condition": "魔力E40／魔法使い／火"},
  {"name": "エクスプロ―ジョンLv.2", "category": "必殺技・虹", "costs": {"muscle": 0, "agile": 82, "tech": 170, "intel": 378, "mental": 200}, "effect": "敵後衛全体に威力63魔法ダメ+火傷付与。", "condition": "魔力C60／魔法使い／火", "prerequisite": "エクスプロ―ジョンLv.1"}
];