type First<T extends unknown[]> =T extends  [] ?  never : T[0]


// Взять только 1 элемет массива