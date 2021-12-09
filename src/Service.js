import { useState } from "react";

const Service = () => {
    const [data, setData] = useState({
        id: "",
        diller: "",
        vin: "",
        name: "",
        surname: "",
        phone: "",
        email: "",
        text: "",
    });
    const [servs, setServs] = useState(JSON.parse(localStorage.getItem("servs")  || "[]"));
    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }
    function submit(e) {
        let servs = JSON.parse(localStorage.getItem("servs"));
        data.id = servs.length;
        servs.push(data);
        localStorage.setItem("servs", JSON.stringify(servs));
        setServs(servs);
    }
    return (
            <div className="service">
                <h2>Запис на сервісне обслуговування</h2>
                <p>Залиште свою контактну інформацію, і дилер BMW зв'яжеться з Вами.</p>
                <form onSubmit={(e)=> submit(e)} >
                    <label>Оберіть дилера</label>
                    <select required="required" onChange={(e) => handle(e)} id="diller" value={data.diller} type="diller">
                        <option>Оберіть</option>
                        <option value="Київ - АВТ Баварія Київ">Київ - АВТ Баварія Київ (Бориспільське шосе)</option>
                        <option value="Київ - АВТ Баварія">Київ - АВТ Баварія Київ (бул. Вацлава Гавела)</option>
                        <option value="Дніпро - АВТ Баварія">Дніпро - АВТ Баварія - Дніпропетровськ</option>
                        <option value="Івано-Франківськ - Альянс Преміум">Івано-Франківськ - Альянс Преміум</option>
                        <option value="Львів - Арія Моторс">Львів - Арія Моторс</option>
                        <option value="Харків - Баварія Моторс">Харків - Баварія Моторс</option>
                        <option value="Хмельницький - Баварія Захід">Хмельницький - Баварія Захід</option>
                    </select>
                    <label>VIN номер</label>
                    <input onChange={(e) => handle(e)} id="vin" value={data.vin} type="vin"/>
                    <label>Ім'я</label>
                    <input required="required" onChange={(e) => handle(e)} id="name" value={data.name} type="name"/>
                    <label>Прізвище</label>
                    <input required="required" onChange={(e) => handle(e)} id="surname" value={data.surname} type="surname"/>
                    <label>Телефон</label>
                    <input required="required" onChange={(e) => handle(e)} id="phone" value={data.phone} type="phone"/>
                    <label>Email</label>
                    <input required="required" onChange={(e) => handle(e)} id="email" value={data.email} type="email"/>
                    <label>Повідомлення</label>
                    <textarea onChange={(e) => handle(e)} id="text" value={data.text} type="text"></textarea>
                    <button variant="primary" type="submit" >Надіслати заявку</button>
                </form>
            </div>
        );
    }
export default Service;
