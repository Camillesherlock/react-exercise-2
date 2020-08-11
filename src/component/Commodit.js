import React, {Component} from "react";
import imgURL from "../assets/product_image_placeholder.png";
class Commodit extends Component  {
     state = {
      commodit: [{id:1, name : "Apple", price: 5800}]

    }
render(){
return (<body>
        <p>{this.name}</p>
        <img src={imgURL} alt="标签"/>
        <span className = "goodsPrice">{this.price}</span>
        <button>加入购物车</button>
        <img src={imgURL} alt="标签"/>
        <button>加入购物车</button>
        </body>
      );

}
}

export default Commodit;