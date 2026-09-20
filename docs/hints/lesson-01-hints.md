# Lesson 01 Hints

必要なTODOのHint 1から順に開いてください。

## L01-T01

### Hint 1
引数のプランIDをキーとしてcatalogの1件を取り出し、その機能一覧を調べます。

### Hint 2
配列に要素が含まれるかは`includes`で判定できます。readonly配列でも利用できます。

### Hint 3
`planCatalog`から`plan`に対応する設定を変数へ入れ、設定の`features`に`feature`が含まれる結果をreturnします。

## L01-T02

### Hint 1
保存値はセント、formatterが受け取る値はドルです。単位を最初に変換します。

### Hint 2
`new Intl.NumberFormat(locale, options).format(value)`を使い、`style`、`currency`、小数桁の最小値と最大値を指定します。

### Hint 3
価格を100で割り、`en-US`と`USD`を設定したformatterでformatした結果をreturnします。小数桁の最小・最大をどちらも2にします。
