import React, {Component} from "react"
class WHeader extends Component  {
     state = {
      count : 1,
    }
render(){
return (<header>
        Store <button className = "购物车">购物车</button>
        <span className = "total">{this.count}</span>
        </header>
      );

}
}

export default WHeader;