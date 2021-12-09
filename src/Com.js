import { useState } from "react";

const Com = () => {
    const [data, setData] = useState({
        id: "",
        diller: "",
        posl: "",
        car: "",
        name: "",
        surname: "",
        phone: "",
        email: "",
        prava: "",
        text: "",
    });
    const [coms, setComs] = useState(JSON.parse(localStorage.getItem("coms")  || "[]"));
    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }
    function submit(e) {
        let coms = JSON.parse(localStorage.getItem("coms"));
        data.id = coms.length;
        coms.push(data);
        localStorage.setItem("coms", JSON.stringify(coms));
        setComs(coms);
    }
    return (
        <div className="com">
            <h2>Запис на тест-драйв/огляд авто</h2>
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
                <label>Виберуть послугу</label>
                <select required="required" onChange={(e) => handle(e)} id="posl" value={data.posl} type="posl">
                    <option>Оберіть</option>
                    <option value="Огляд б/у авто">Огляд б/у авто</option>
                    <option value="Тест-драйв нового авто">Тест-драйв нового авто</option>
                    <option value="Дніпро - АВТ Баварія">Дніпро - АВТ Баварія - Дніпропетровськ</option>
                </select>
                <label>Оберіть авто для тест-драйву/огляду</label>
                <select required="required" onChange={(e) => handle(e)} id="car" value={data.car} type="car">
                    <option>Оберіть</option>
                    <option value="М2 тест">М2 тест</option>
                    <option value="М3 тест">М3 тест</option>
                    <option value="М5 тест">М5 тест</option>
                    <option value="Х5М тест">Х5М тест</option>
                    <option value="320 б/у перегляд">320 б/у перегляд</option>
                    <option value="330 б/у перегляд">330 б/у перегляд</option>
                    <option value="520 б/у перегляд">520 б/у перегляд</option>
                    <option value="Х3 20d б/у перегляд">Х3 20d б/у перегляд</option>
                </select>
                <label>Ім'я</label>
                <input required="required" onChange={(e) => handle(e)} id="name" value={data.name} type="name"/>
                <label>Прізвище</label>
                <input required="required" onChange={(e) => handle(e)} id="surname" value={data.surname} type="surname"/>
                <label>Телефон</label>
                <input required="required" onChange={(e) => handle(e)} id="phone" value={data.phone} type="phone"/>
                <label>Email</label>
                <input required="required" onChange={(e) => handle(e)} id="email" value={data.email} type="email"/>
                <label>Наявність прав на водіння ТЗ</label>
                <select required="required" onChange={(e) => handle(e)} id="prava" value={data.prava} type="prava">
                    <option value="Маю права  на водіння ТЗ">Маю права  на водіння ТЗ</option>
                    <option value="Не маю прав на водіння ТЗ">Не маю прав на водіння ТЗ</option>
                </select>
                <label>Повідомлення</label>
                <textarea onChange={(e) => handle(e)} id="text" value={data.text} type="text"></textarea>
                <button variant="primary" type="submit" >Надіслати заявку</button>
            </form>
        </div>
    );
}
export default Com;
