
type MyExclude<T , U> = T extends U ? never : T

type Test = MyExclude<'a' | 'b' | 'c' , 'a'>


// Убрать значение из объединения