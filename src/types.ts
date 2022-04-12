export type langType = {
  tableHeadText: string[],
  changeButtonLang: {name: string, key: string}[],
  errors: string[],
  buttonText: string[],
}

export type tableRowType= {
  [key:string]: string,
  firstName: string,
  lastName: string,
  age: string,
  salary: string
}

export type textFieldModaltype = {
  showModal: boolean,
  toggleShowModal: () => void,
  sendData: (newData: tableRowType[]) => void,
  initialState: string,
  showOrEdit: boolean
}
