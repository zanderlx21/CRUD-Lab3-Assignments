import express from "express"
import assignments from "../models/assignments"

const routesPath = express.Router();

export const assignmentArray: assignments[] = [
        {name: "Walrus Worksheet", score: 9, total: 10, completed: true},
        {name: "Jellyfish Project", score: 15, total: 15, completed: true},
        {name: "Dolphin Quiz", score: 8, total: 10, completed: true},
        {name: "Oceans Unit Test", score: 0, total: 25, completed: false}
]

routesPath.get("/home", function (req, res) {
    // let name = req.query.name as string;
    // let score = req.query.score;
    // let total = req.query.total;
    // let completed = !!req.query.completed;

    // for (let i = 0; i < assignmentArray.length; i++ ) {
    //     if (assignmentArray[i].completed = true) {
    //     let completed = &check;
    // } else {
    //     let completed = "";
    // }
    res.render("home", { assignmentArray });
// }
});

routesPath.get("/add-form", function (req, res) {
    res.render("add-form");
});

routesPath.post("/added-assignment", function (req, res) {
    let name = req.body.name as string;
    let score = req.body.score;
    let total = req.body.total;
    let completed = !!req.body.completed;

    let newAssignment = req.body;
    assignmentArray.push(newAssignment)

    res.render("added-assignment", {name, score, total, completed, newAssignment})
});

  export default routesPath;