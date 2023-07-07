
import React, { useEffect, useState } from "react";
import "./App.css";
import { Stack, TextField, ThemeProvider, createTheme } from "@mui/material";
import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box/Box";
import ItemToDo from "./components/ItemToDo";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { addItemTodo } from "./redux/TodoSlice";

interface State {
  // toDoList: {
  //   itemName: string;
  //   status: boolean;
  // }[];
  inputItemName: string;
  valid: boolean;
}

function App() {
  const theme = createTheme({
    spacing: 4, //จะคูณ 4 ใน sx
    typography: {
      fontFamily:
      '"IBM Plex Sans Thai", sans-serif',
    }
  })

  // const initToDo = [
  //   {itemName: 'ทำการบ้าน', status: false},
  //   {itemName: 'อ่านหนังสือ', status: false},
  //   {itemName: 'ออกกำลังกาย', status: false}
  // ]

  // const [toDoList, setToDoList] = useState<State["toDoList"]>([])
  const [inputItemName, setInputItemName] = useState<State["inputItemName"]>('')
  const [valid, setValid] = useState<State["valid"]>(false)

  // useSelector ดึง state toDoList ออกมา
  const toDoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const inputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputItemName(event.target.value)
  }

  const addItem = () => {
      // console.log('addItem')
      if (!valid){
        alert('Please fill your task !')
        // <Alert severity="error">Please fill your task !</Alert>
      }
      else{
        // const newItem = {
        //   itemName: inputItemName,
        //   status: false
        // }
        // setToDoList((prevToDo) => {
        //   return [...prevToDo, newItem]
        // })
        // setInputItemName('')
        dispatch(addItemTodo(inputItemName));
        setInputItemName('')
      }
  }

  // const setStatus = (index: number, checked: boolean) => {
  //   if (checked === true){
  //     dispatch(setStatusItem({index: index, checked: checked}))
  //   }
  // }

  useEffect(() => {
    console.log('use effect')
    const checkInput = inputItemName.trim().length;
    if (checkInput > 0){
      setValid(true)
    }
    else {
      setValid(false)
    }
  }, [toDoList, inputItemName])

  return (
    <ThemeProvider theme={theme}>
      <h1 style={{color: '#213363', textAlign: 'center'}}>To Do List</h1>
      {/* form */}
      <Box sx={{m: 1}}>
        <Stack spacing={2} direction="row" >
          <TextField id="standard-basic" label="Your Task" variant="standard" color="secondary" onChange={inputName}  value={inputItemName} />
          <Button variant="text" color="secondary" onClick={addItem}>ADD</Button>
        </Stack>
      </Box>

      <ItemToDo/>
    </ThemeProvider>
  );
}

export default App;
