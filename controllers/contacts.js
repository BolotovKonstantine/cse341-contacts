const mongodb = require("../data/database");
const req = require("express/lib/request");
const mongodb = require("../data/database");
const res = require("express/lib/response");
const res = require("express/lib/response");
const req = require("express/lib/request");
const req = require("express/lib/request");
const req = require("express/lib/request");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('cse341').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('cse341').collection('contacts').findOne({ _id: id });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

const createContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await  mongodb.getDatabase().db().collection('contacts').replaceOne({ _id: contactId }, contact);

}

module.exports = {
    getAll,
    getSingle,
    createContact,
};
