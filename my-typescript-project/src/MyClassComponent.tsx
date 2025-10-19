import React ,{Component} from "react";
import First from "./First";
import Second from "./Second";


class MyClassComponent extends Component{
        render(){
            return(
                <>
                    <h3>My Class Component</h3>
                    <First/>
                    <Second/>
                </>
            )
        }
}

export default MyClassComponent;