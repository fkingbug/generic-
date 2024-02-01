type Concat<T extends readonly unknown[] , U extends readonly unknown[]> = [...T , ...U]

type Test = Concat<[1], [false]>

//ридОнли для таплов