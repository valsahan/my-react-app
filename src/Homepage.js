import React from "react";

const Homepage = () => {
    const imgFormat =  {minWidth: "40px", marginRight: "25px", width: "4%"};
    const liFormat =  {marginBottom: "20px", fontSize: "22px"};
    return (
        <div className="homepage">
            <div>
                <div><h1>Абсолютно новий BMW iX3 вже в Україні</h1>
                    <p1>Концепт, який був втілений у реальність. Визначення електромобільності. Завдяки енергоефективній технології BMW eDrive та електричному повному приводу,
                        BMW iX досягає виняткового запасу ходу та вражаючого прискорення з місця. Операційною системою BMW OS 8 також можна керувати за допомогою сенсорного контролера iDrive.</p1></div>
                    <a href="/ix">Переглянути модель</a>
                <img src="/images/ix.jpg"/>
            </div>
            <div style={{marginLeft: "10%",  marginBottom: "50px"}} >
                <h2 style={{margin: "2% 0px 2% 0px"}}>Наші переваги:</h2>
                <p><img src="/images/сервіс.png" style={imgFormat} alt="error"/> Сервісні роботи високої якості</p>
                <p><img src="/images/підтримка.png" style={imgFormat} alt="error"/> Цілодобовий зв'язок</p>
                <p><img src="/images/наявність.png" style={imgFormat} alt="error"/> Актуальна наявність та постійні оновлення</p>
                <p><img src="/images/якість.png" style={imgFormat} alt="error"/> Тільки якісні деталі для Вашого авто</p>
            </div>
            <div style={{marginLeft: "10%",  marginBottom: "20px"}} >
                <h3  style={{margin: "2% 0px 2% 0px"}}>Послуги, які надає наша компанія:</h3>
                <ul>
                    <li style={liFormat}>Консультації з менеджерами</li>
                    <li style={liFormat}>Перегляд наявних пропозицій нових авто</li>
                    <li style={liFormat}>Допомога при покупці та оформленні нового авто</li>
                    <li style={liFormat}>Планове ТО Вашого автомобіля</li>
                    <li style={liFormat}>Усунення неполадок в роботі всіх систем Вашого авто</li>
                    <li style={liFormat}>Консультація щодо обслуговування Вашого авто</li>
                    <li style={liFormat}>Перегляд б/у авто в наявності</li>
                    <li style={liFormat}>Покупка б/у авто з офіційною гарантією</li>
                </ul>
            </div>
        </div>
    )
}
export default Homepage;
