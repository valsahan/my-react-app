import React from "react";
import {Button} from "react-bootstrap";

const UseCars = () =>{
    const imgFormat =  {minWidth: "40px",  width: "40%", marginBottom: "30px", marginTop: "40px"};
    const pFormat =  {marginBottom: "100px", fontSize: "16px"};
    return (
        <div className="usecars">
            <h2>Авто з пробігом від диллерів BMW</h2>
            <div>
                <div style={{marginLeft: "10%",  marginBottom: "50px"}} >
                    <img src="/images/320.jpeg" style={imgFormat} alt="error"/>
                    <p style={pFormat}>BMW 320 - економічний компактний седан з пробігом для міського пересування<Button  href="/threesome" variant="primary"
                                                                                                                          style={{marginLeft: "110px"}}>Переглянути авто</Button></p>
                    <img src="/images/520.jpg" style={imgFormat} alt="error"/>
                    <p style={pFormat}>BMW 520 - комфортний та практичний седан з пробігом для різих потреб<Button  href="/threesome" variant="primary"
                                                                                                                    style={{marginLeft: "155px"}}>Переглянути авто</Button></p>
                    <img src="/images/Х3.jpg" style={imgFormat} alt="error"/>
                    <p style={pFormat}>BMW X3 - економічний та зручний середньорозмірний кросовер з пробігом<Button  href="/threesome" variant="primary"
                                                                                                                     style={{marginLeft: "150px"}}>Переглянути авто</Button></p>
                </div>
            </div>
        </div>
    );
}
export default UseCars;