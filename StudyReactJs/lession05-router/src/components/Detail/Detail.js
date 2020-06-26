import React, { Component } from 'react';
import myData from './../Product/data.json'
class Detail extends Component {
    render() {
        var pid =parseInt(this.props.match.params.id,10)

        return (
            <div>
                {
                    myData.map((val,key)=>{
                        if(val.id===pid){
                        return <div key={key}> <h1> {val.ten}</h1><h2>{val.gia}</h2> </div> 
                        }
                        return ''
                    })
                }
                {/* <h1>Ten san pham</h1>
                <h2>Gia san pham</h2> */}
            </div>
        );
    }
}

export default Detail;