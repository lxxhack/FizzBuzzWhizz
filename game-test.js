discribe('game',()=>{
    it('should be print',()=>{
        L=[1,7,6,0];
        args=[1,2,3,4];
        execept(calcScore(L,args)).toEqual('1A0B');
    })
});
