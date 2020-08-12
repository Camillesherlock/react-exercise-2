import React from 'react';

const WHeader = (props)=>{
const{carNum} = props;
return <header>
Store <button className = "购物车">购物车</button>
<span className = "total">{carNum}</span>
</header>
};
export default WHeader;