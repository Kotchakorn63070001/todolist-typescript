
import React, { ChangeEvent, FC } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';

interface Props {
  toDoList: {
    itemName: string;
    status: boolean;
  }[];
  setStatus(index: number, checked: boolean): void;
}

const ItemToDo: FC<Props> = ({toDoList, setStatus}) => {
  // const {toDoList, setStatus} = props;

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleStatus = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    console.log(index)
    console.log(event.target.checked)
    const checked = event.target.checked;
    // ส่ง index กับ checked กลับไปหา component แม่ ผ่าน prop:setStatus
    setStatus(index, checked)
    console.log(toDoList)
  }

  return (
    <>
    {toDoList.length > 0 ? 
      <Box sx={{ width: '100%', mt: 5, backgroundColor: '#F5EFE7', borderRadius: '16px', p: 1}}>
        <List>
          {
            toDoList.map((element, index) => {
              return (
                <ListItem disablePadding key={index}>
                  <Checkbox {...label} className="checkbox" onChange={handleStatus(index)} checked={element.status}/>
                  <ListItemText primary={element.itemName} />
                </ListItem>
              )
            })
          }
          </List>
      </Box>
      : <></>}
    </>
  )
}

export default ItemToDo