import connection from '../database';
import queries from './queries';
import { Response, Application } from 'express';

const controller = {
  getStudents : (
    _req: Response,
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: any[]): void; new (): any };
      };
    }
  ) => {
    connection.query(queries.getStudents, (error, results) => {
      if (error) {
        console.log(error.message);
        return;
      }
      res.status(200).json(results.rows);
    });

    // connection.end()
  },

  getStudentByID: (
    req: { params: { id: any } },
    res: {
      status: (arg0: number) => {
        send: any;
        (): any;
        new (): any;
        json: { (arg0: any[]): void; new (): any };
      };
    }
  ) => {
    const id = req.params.id;
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
  },
  addStudent: (
    req: { body: { name: any; email: any; age: any; dob: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: { (arg0: string): void; new (): any };
      };
    }
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
        connection.query(
          queries.addStudent,
          [name, email, age, dob],
          (error, results) => {
            if (error) {
              console.log(error.message);
              return;
            }
            res.status(200).send(`${name} has been added successfully`);
          }
        );
      }
    });
  },
};

export default controller;
