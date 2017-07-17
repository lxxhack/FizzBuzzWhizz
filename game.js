function calcScore(...args) {
    let L=[];
    while (L.length<4)
    {
        let num=Math.floor(Math.random()*10);
        if (L.indexOf(num)==-1)
        {
            L.push(num);
        }
    }
    let A=0,B=0;
    for (let i of L)
    {
        if (args.indexOf(i)==L.indexOf(i))
        {
            A++;
        }
        else if(args.indexOf(i)!=-1)
        {
            B++;
        }
    }
    console.log(`${A}A${B}B`);
    console.log('ans:',L);
    console.log('your ans:',args);
}
calcScore(1,2,3,4);
// 游戏开始后，系统会随机给出四个不重复的数字。由用户输入自己猜测的四个数字。
// 如果数字猜对而且位置也对，就是1一个A。
// 如果数字猜对但位置不对，就是一个B。
// 返回结果是如“2A1B”这样的字串。
// 例如：
//
// 系统给出"1234"，用户输入"1234"
// 返回"4A0B"
// 系统给出"1234"，用户输入"4321"
// 返回"0A4B"
