type If<C extends boolean , T ,F>= C extends true ? T : F

type Test = If<true , "a" , "b">

//Задачана создание типа if на вывод типа по ключу