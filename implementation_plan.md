# New Templates Implementation Plan (Final)

## Goal
Implement diverse, viral-ready templates covering archetypes, visual traits, and relationships.

## Detailed Template Designs

### 1. 萌属性 (Moe Attributes) - 5x3
*Source: Selected from Moegirl Encyclopedia list for maximum orthogonality.*
- **Layout**: 5 columns x 3 rows
- **Items**:
  - **Row 1 (Energy & Attitude)**:
    1. **傲娇** (Tsundere) - *Hot/Cold*
    2. **病娇** (Yandere) - *Obsessive/Dangerous*
    3. **元气** (Genki) - *High Energy*
    4. **三无** (Kuudere) - *No Emotion/Silent*
    5. **慵懒** (Lazy) - *Low Energy*
  - **Row 2 (Personality Quirk)**:
    1. **中二病** (Chuunibyou) - *Delusional*
    2. **毒舌** (Sharp Tongue) - *Verbal Attack*
    3. **天然呆** (Airhead) - *Unintentional Cute*
    4. **腹黑** (Haraguro/Scheming) - *Hidden Dark Side*
    5. **电波** (Denpa) - *Eccentric/Weird*
  - **Row 3 (Social & Special)**:
    1. **高冷** (Ice Beauty) - *Distant*
    2. **弱气** (Timid) - *Shy/Scared*
    3. **冒失** (Clumsy) - *Mistake-prone*
    4. **地雷系** (Jirai-kei) - *Heavy/Volatile*
    5. **变态** (Pervert) - *Deviant*

### 2. 发色图鉴 (Hair Color) - 4x3
*Focus: Visual traits.*
- **Layout**: 4 columns x 3 rows
- **Items**:
  - **Row 1 (The Big Four)**: 黑发, 金发, 银/白发, 红发
  - **Row 2 (Colorful)**: 蓝发, 粉发, 紫发, 绿发
  - **Row 3 (Earth & Special)**: 棕/褐发, 橙/黄发, 双色/挑染, 渐变/彩虹

### 3. 家庭伦理 (Family & Relations) - 4x4
*Focus: Best vs Worst comparisons for relationships.*
- **Layout**: 4 columns x 4 rows
- **Items**:
  - **Row 1 (Parents)**: 最佳老妈, 最屑老妈, 最佳老爸, 最屑老爸
  - **Row 2 (Siblings - Older)**: 最佳哥哥, 最屑哥哥, 最佳姐姐, 最屑姐姐
  - **Row 3 (Siblings - Younger)**: 最佳弟弟, 最屑弟弟, 最佳妹妹, 最屑妹妹
  - **Row 4 (Romance)**: 最佳恋人, 最屑恋人, 最佳前任, 最屑前任

### 4. 喜闻乐见 (Relationship Tropes) - 5x3
*Focus: Classic anime relationship tropes and encounters.*
- **Layout**: 5 columns x 3 rows
- **Items**:
  - **Row 1 (The Classics)**: 
    - **败犬** (Losing Heroine)
    - **青梅竹马** (Childhood Friend)
    - **天降系** (Sudden Arrival)
    - **欢喜冤家** (Frenemies)
    - **命中注定** (Soulmate)
  - **Row 2 (The Story)**: 
    - **久别重逢** (Reunion)
    - **萍水相逢** (Chance Encounter)
    - **一见钟情** (Love at First Sight)
    - **契约关系** (Contract)
    - **师徒** (Master/Student)
  - **Row 3 (The Spicy/Complicated)**: 
    - **一夜情** (One Night Stand)
    - **倒贴** (Aggressive Pursuit)
    - **替身** (Replacement)
    - **禁断** (Forbidden)
    - **相爱相杀** (Love-Hate)

## Implementation Steps
1.  Modify `src/logic/templates.ts` to add these four templates.
