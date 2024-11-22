import React from 'react';
import Trash from '../icons/Trash';
import { db } from '../appwrite/databases';
import { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

const DeleteButton = ({noteid}) => {

    const {setNotes} = useContext(NoteContext);
    const handleDelete = async () => {
        db.notes.delete(noteid);
        setNotes((prevState) => 
            prevState.filter(note => note.$id!== noteid));
    };
  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
};

export default DeleteButton;
