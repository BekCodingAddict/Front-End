## 🚀 Flexbox와 CSS Grid 작동 방식
### 1. Flexbox (Flexible Box Layout)
Flexbox는 1차원(가로 또는 세로) 레이아웃을 만들 때 유용한 CSS 레이아웃 방식입니다.
- 기본 개념: 부모 요소(컨테이너)에 display: flex;를 적용하면 내부 요소(아이템)가 자동으로 정렬됩니다.
- 주축(Main Axis)과 교차축(Cross Axis):
  - flex-direction: row; → 주축이 가로
  - flex-direction: column; → 주축이 세로
- 정렬 방법:
  - justify-content → 주축 방향 정렬 (왼쪽, 오른쪽, 가운데 등)
  - align-items → 교차축 정렬 (위쪽, 아래쪽 등)

### 📌 예제:
```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
```

## 2. CSS Grid
CSS Grid는 2차원(가로 + 세로) 레이아웃을 다룰 수 있는 강력한 레이아웃 시스템입니다.
- 기본 개념: 부모 요소(그리드 컨테이너)에 display: grid;를 적용하면 내부 요소(그리드 아이템)가 격자 형태로 배치됩니다.
- 행(row)과 열(column) 설정:
  - grid-template-columns: repeat(3, 1fr); → 3개의 동일한 너비의 열
  - grid-template-rows: 100px 200px; → 첫 번째 행은 100px, 두 번째 행은 200px
- 정렬 방법:
 - justify-items → 각 셀 내부의 정렬
 - align-items → 행 기준 정렬

### 📌 예제:
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
```

