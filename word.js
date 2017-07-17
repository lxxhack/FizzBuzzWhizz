var str='I love China';
var reg=/[a-zA-Z0-9]+/g;
var ans=str.match(reg);
if (ans==null)
{
    console.log('error')
}
else
{
    max=0
    for (i in ans)
    {
        if (ans[i].length>max)
        {
            max=i;
        }
    }
    console.log(ans[max],ans.length);
}
