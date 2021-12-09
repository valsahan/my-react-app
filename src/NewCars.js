import React from "react";
import {Button} from "react-bootstrap";

const NewCars = () =>{
    const imgFormat =  {minWidth: "40px",  width: "40%", marginBottom: "30px", marginTop: "40px"};
    const pFormat =  {marginBottom: "80px", fontSize: "16px"};
    return (
        <div className="newcars">
            <h2>Модельний ряд BMW</h2>
            <div>
                <div style={{marginLeft: "10%",  marginBottom: "50px"}} >
                    <img src="/images/M5.jpg" style={imgFormat} alt="error"/>
                    <p style={pFormat}>BMW M5 - портивний седан, який підійде для будь-яких життєвих обставин <Button  href="/ix" variant="primary"
                                                                                                                       style={{marginLeft: "110px"}}>Переглянути авто</Button></p>
                    <img src="/images/М3.jpg" style={imgFormat} alt="error"/>
                    <p style={pFormat}>BMW M3 - спортивний та комфортний С-клас з чудовими характеристиками<Button  href="/ix" variant="primary"
                                                                                                                    style={{marginLeft: "115px"}}>Переглянути авто</Button></p>
                    <img src="/images/ix3.jpg" style={imgFormat} alt="error"/>
                    <p style={pFormat}>BMW iX3 - Автомоюіль нового покоління сереньорозмірних кросоверів<Button  href="/ix" variant="primary"
                                                                                                                 style={{marginLeft: "150px"}}>Переглянути авто</Button></p>
                </div>
            </div>
        </div>
    );
}
export default NewCars;
