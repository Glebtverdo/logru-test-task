import { langType } from "../../types";

export const langs: {[key: string]: langType} = {
  en : {
    tableHeadText: ["FirstName", "LastName", "Age", "Salary"],
    changeButtonLang: [{name: "En", key: "en"}, {name:"Ru", key: "ru"}],
    errors: ["Unexpected file format", "Unvalid json" ],
    buttonText: ["Upload json", "Add data to table", "Replace table data with json data", "Add row", "Add data using text", "Download json file", "Data in text"]
  }, 
  ru :{
    tableHeadText: ["Имя", "Фамилия", "Возраст", "Зарплата"],
    changeButtonLang: [{name:"Анг", key: "en"}, {name:"Рус", key: "ru"}],
    errors: ["непредвиденный формат файла", "Не валидные данные" ],
    buttonText: ["Загрузить json", "добавить данные в таблицу", "заменить данные в таблице", "Добавить сроку", "Добавить данные используя текст", "Скачать json с данными", "Данные в текстовом виде"]
  }
}