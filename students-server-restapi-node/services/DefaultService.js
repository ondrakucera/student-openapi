/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Deletes a student
* Deletes a `Student`.
*
* studentId Long Student id
* no response value expected for this operation
* */
const deleteStudent = ({ studentId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        studentId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Obtains a list of items of a codebook
* Obtains a list of `CodebookItem`s. The list is sorted by `order`.
*
* codebookCode String Codebook code
* returns List
* */
const getCodebookItems = ({ codebookCode }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        codebookCode,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Obtains a student
* Obtains a `Student` by its id.
*
* studentId Long Student id
* returns Student
* */
const getStudent = ({ studentId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        studentId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Obtains a list of students
* Obtains a list of `Student`s. The list is sorted by `lastName` and then by `firstName`.
*
* returns List
* */
const getStudents = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Creates a student
* Creates a `Student`.
*
* student Student Student
* returns Long
* */
const postStudent = ({ student }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        student,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Saves a student
* Saves a `Student`.
*
* studentId Long Student id
* student Student Student
* no response value expected for this operation
* */
const putStudent = ({ studentId, student }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        studentId,
        student,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  deleteStudent,
  getCodebookItems,
  getStudent,
  getStudents,
  postStudent,
  putStudent,
};
