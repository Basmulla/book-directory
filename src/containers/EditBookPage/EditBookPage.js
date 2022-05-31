import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, updateBook, deleteBook } from "./EditBookPage.duck";
import { useParams } from "react-router-dom";

import {
  makeStyles,
  Paper,
  Button
} from '@material-ui/core';

import { EditBookForm } from '../../forms';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: '0 auto 22px auto',
    maxWidth: 800,
  },
  deleteButton: {
    marginTop: 20
  }
}));

function EditBookPage(props) {

  const dispatch = useDispatch();
  const {
    book,
    fetchBookInProgress,
    updateInProgress,
    deleteInProgress,
    fetchBookError,
    updateBookError,
    deleteBookError
  } = useSelector(state => state.EditBookPage);

  const classes = useStyles();

  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(fetchBook(id));
  }, [dispatch, id, props]);

  const bookDoesNotExist = !fetchBookInProgress && !fetchBookError && !book;

  return (
    <div className={classes.root}>
      {fetchBookInProgress ? <p>Loading...</p> : null}
      {fetchBookError ? <p>Error fetching book</p> : null}

      {book ? (
        <Paper className={classes.paper}>

          {updateInProgress ? <p>Updating...</p> : null}
          {updateBookError ? <p>Error updating book</p> : null}

          {deleteInProgress ? <p>Deleting...</p> : null}
          {deleteBookError ? <p>Error removing book</p> : null}

          <EditBookForm
            keepDirtyOnReinitialize
            initialValues={{ ...book }}
            onSubmit={values => dispatch(updateBook(values))}
          />

          <Button variant="contained" color="secondary" className={classes.deleteButton}
            onClick={() => dispatch(deleteBook(book.isbn))}>
            Delete Book
          </Button>
        </Paper>
      ) : null}
      {bookDoesNotExist ? <p>Book does not exist</p> : null}
    </div>
  );
}

export default EditBookPage;