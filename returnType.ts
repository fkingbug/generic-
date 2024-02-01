

type MyReturnType<T extends Function> = T extends (...args : any) => infer R ? R : never

const returnFN= (s : string) =>  s


type typeReturn  = MyReturnType<typeof returnFN>
