type TypleToUnion<T> = T extends Array<infer R> ? R : never
// если массив то через инфер возьми тип элем массива