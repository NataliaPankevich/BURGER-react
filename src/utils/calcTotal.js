
export const calcTotal = orderGoods=>orderGoods.reduce(
    ([totalCount,totalPrice], item)=>{
        const sumCount = totalCount + item.count;
        const sumPrice = totalPrice + item.price*item.count;
        return [sumCount, sumPrice];
    }, 
    [0, 0],
);

    //это то же самое, что сверху
    /*state.totalCount = orderGoods.reduce((acc,item)=>acc+item.count, 0);
    state.totalPrice = orderGoods.reduce((acc,item)=>acc+item.count*item.price, 0);*/
