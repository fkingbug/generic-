type Push<T extends unknown[], U> = [...T , U]


type Result = Push<[1 , 2 ,3] , '4'>

// Метод пуш в тип значения

