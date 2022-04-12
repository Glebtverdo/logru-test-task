import {tableRowType} from "../types"

const checkArr = ["firstName", "lastName", "age", "salary"]

export const textToJson = (text: string, setErrorMessadge: () => void,
  setShowAlert: () => void,
  setShowModal: () => void,
  setNewData: (data: tableRowType[]) => void) => {
  const jsonRes = JSON.parse(text);
  if (!jsonRes.length || jsonRes.length === 0)
  {
    setErrorMessadge();
    setShowAlert();
    return 0
  }
  for (let i = 0; i < jsonRes.length; i++)
  {
    let counter = 0;
    const keys = Object.keys(jsonRes[i])
    for (let el in checkArr) {
      if (keys.find(key => key === checkArr[el]))
      {
        counter++
      }
    }
    if (counter !== checkArr.length || keys.length !== checkArr.length)
    {
      setErrorMessadge();
      setShowAlert();
      return 0
    }
  }
  setNewData(jsonRes);
  setShowModal();
  return jsonRes
}