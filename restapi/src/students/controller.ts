import connection from '../database';
import queries from './queries';
import { Request, Response } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export const getStudents = (
  _req: Request<unknown, ParsedQs, Record<string, unknown>>,
  res: Response<unknown, Record<string, unknown>, number>
) => {
  connection.query(queries.getStudents, (error, results) => {
    if (error) {
      console.log(error.message);
      return;
    }
    res.status(200).json(results.rows);
  });
};

export const getStudentByID = (
  req: Request<{ id: string }, unknown, ParsedQs, Record<string, unknown>>,
  res: Response<unknown, Record<string, unknown>, number>
) => {
  const id = Number(req.params.id);
  connection.query(queries.getStudentByID, [id], (error, results) => {
    if (error) {
      console.log(error.message);
      return;
    }
    if (!results.rows.length) {
      res.status(400).send('Student does not exist');
      return;
    }
    res.status(200).json(results.rows);
  });
  // connection.end()
};

export const addStudent = (
  req: Request<{ body: object }, unknown, ParsedQs, Record<string, unknown>>,
  res: Response<unknown, Record<string, unknown>, number>
) => {
  const { name, email, age, dob } = req.body;
  connection.query(queries.checkEmailExists, [email], (error, results) => {
    if (error) {
      console.log(error.message);
      return;
    }
    if (results.rows.length) {
      res.status(400).send('Student already exist');
      return;
    } else {
      connection.query(queries.addStudent, [name, email, age, dob], (error) => {
        if (error) {
          console.log(error.message);
          return;
        }
        res.status(200).send(`${name} has been added successfully`);
      });
    }
  });
};
