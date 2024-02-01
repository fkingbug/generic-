type MockTest ={
    a : string
    b : string
    c : string
}


type MyPick<Tobj , Tkey extends keyof Tobj>={
    [key in Tkey] : Tobj[Tkey]
}

type Test = MyPick<MockTest, 'a' | 'b'>

// Реализовать свой Pick