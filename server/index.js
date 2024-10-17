const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const fs = require('fs').promises

const mkdirp = require('mkdirp')
const { Base64 } = require('js-base64')
const async = require('async')
const path = require('path')
const { get } = require('lodash')

const httpStatus = require('http-status')
// const { fileService } = require('../services')
// const ApiError = require('../utils/ApiError')

const db = mysql.createPool({
    user: "*secret*",
    host: "*secret*",
    password: "*secret*",
    database: "*secret*"
});

app.use(express.json({ limit: '1000000kb' }));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '50MB', extended: true }));

app.get("/staff", (req, res) => {
    const sqlGet = "SELECT * FROM staff";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    })
});


async function filesave(base64) {
    // const eduhis = Base64.atob(strBase64)
    // const trainhis = Base64.atob(strBase64)
    // const dochis = Base64.atob(strBase64)
    // const disciplinereferencefile = Base64.atob(strBase64)
    // const nosalaryreference = Base64.atob(strBase64)
    // const nosalaryreferencefile = Base64.atob(strBase64)
    // const agreereferencefile = Base64.atob(strBase64)

    // return {
    //     pic,
    //     eduhis,
    //     trainhis,
    //     dochis,
    //     disciplinereferencefile,
    //     nosalaryreference,
    //     nosalaryreferencefile,
    //     agreereferencefile
    // };
    // console.log(base64);
    const date = new Date()
    const destination = `uploads/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}/`
    mkdirp.sync(destination)
    const strBase64 = base64.src.split('base64,')[1]
    const bin = Base64.atob(strBase64)
    const fileName = date.getTime() + path.extname(base64.title)

    await fs.writeFile(destination + fileName, bin, 'binary', (error) => {
        if (error) {
            console.log(error)
        }
    })

    const stats = await fs.stat(destination + fileName)

    return destination + fileName
}


app.get('/staff/:id/pic', (req, res) => {

    try {
        const { id } = req.params
        console.log(id);
        const sql = "SELECT pic FROM staff WHERE id = ?";
        // const sql2 = `SELECT pic FROM staff WHERE id = ${id}`
        db.query(sql, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result[0]?.pic) {
                res.sendFile(path.resolve(result[0].pic));
            } else {
                res.status(404).send("file not found");
            }


        });
    } catch (error) {
        console.log(error)
    }



})
app.get('/staff/:id/eduhis', (req, res) => {

    try {
        const { id } = req.params
        console.log(id);

        const sql = "SELECT eduhis FROM staff WHERE id = ?";
        // const sql2 = `SELECT pic FROM staff WHERE id = ${id}`
        db.query(sql, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result[0]?.eduhis) {
                res.sendFile(path.resolve(result[0].eduhis));
            } else {
                res.status(404).send("file not found");
            }


        });
    } catch (error) {
        console.log(error)
    }



})
app.get('/staff/:id/trainhis', (req, res) => {

    try {
        const { id } = req.params
        console.log(id);
        const sql = "SELECT trainhis FROM staff WHERE id = ?";
        // const sql2 = `SELECT pic FROM staff WHERE id = ${id}`
        db.query(sql, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result[0]?.trainhis) {
                res.sendFile(path.resolve(result[0].trainhis));
            } else {
                res.status(404).send("file not found");
            }


        });
    } catch (error) {
        console.log(error)
    }
})
app.get('/staff/:id/dochis', (req, res) => {

    try {
        const { id } = req.params
        console.log(id);
        const sql = "SELECT dochis FROM staff WHERE id = ?";
        // const sql2 = `SELECT pic FROM staff WHERE id = ${id}`
        db.query(sql, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result[0]?.dochis) {
                res.sendFile(path.resolve(result[0].dochis));
            } else {
                res.status(404).send("file not found");
            }


        });
    } catch (error) {
        console.log(error)
    }



})
app.get('/staff/:id/disciplinereferencefile', (req, res) => {

    try {
        const { id } = req.params
        console.log(id);
        const sql = "SELECT disciplinereferencefile FROM staff WHERE id = ?";
        // const sql2 = `SELECT pic FROM staff WHERE id = ${id}`
        db.query(sql, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result[0]?.disciplinereferencefile) {
                res.sendFile(path.resolve(result[0].disciplinereferencefile));
            } else {
                res.status(404).send("file not found");
            }


        });
    } catch (error) {
        console.log(error)
    }



})
app.get('/staff/:id/nosalaryreference', (req, res) => {

    try {
        const { id } = req.params
        console.log(id);
        const sql = "SELECT nosalaryreference FROM staff WHERE id = ?";
        // const sql2 = `SELECT pic FROM staff WHERE id = ${id}`
        db.query(sql, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result[0]?.nosalaryreference) {
                res.sendFile(path.resolve(result[0].nosalaryreference));
            } else {
                res.status(404).send("file not found");
            }


        });
    } catch (error) {
        console.log(error)
    }



})
app.get('/staff/:id/nosalaryreferencefile', (req, res) => {

    try {
        const { id } = req.params
        console.log(id);
        const sql = "SELECT nosalaryreferencefile FROM staff WHERE id = ?";
        // const sql2 = `SELECT pic FROM staff WHERE id = ${id}`
        db.query(sql, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result[0]?.nosalaryreferencefile) {
                res.sendFile(path.resolve(result[0].nosalaryreferencefile));
            } else {
                res.status(404).send("file not found");
            }


        });
    } catch (error) {
        console.log(error)
    }



})
app.get('/staff/:id/agreereferencefile', (req, res) => {

    try {
        const { id } = req.params
        console.log(id);
        const sql = "SELECT agreereferencefile FROM staff WHERE id = ?";
        // const sql2 = `SELECT pic FROM staff WHERE id = ${id}`
        db.query(sql, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result[0]?.agreereferencefile) {
                res.sendFile(path.resolve(result[0].agreereferencefile));
            } else {
                res.status(404).send("file not found");
            }


        });
    } catch (error) {
        console.log(error)
    }



})


// get post put patch delete
//get /staff
//get /staff/:id
//post /staff
//put /staff/:id
//delete /staff/:id

app.post("/create", async (req, res) => {

    const picDir = await filesave(req.body.pic)
    /// stil problem with large files
    const ehuhisDir = await filesave(req.body.eduhis)
    const trainhisDir = await filesave(req.body.trainhis)
    const dochisDir = await filesave(req.body.dochis)
    const disciplinereferencefileDir = await filesave(req.body.disciplinereferencefile)
    const nosalaryreferenceDir = await filesave(req.body.nosalaryreference)
    const nosalaryreferencefileDir = await filesave(req.body.nosalaryreferencefile)
    const agreereferencefileDir = await filesave(req.body.agreereferencefile)
    ////

    try {
        let { cid, passportid, govid, positiontypeid, positiontype, revid, positionstatus, prefixid, prefixth, prefixen, firstnameth, lastnameth, firstnameen, lastnameen, nickname, birthdate, birthplaceid, birthplace, prefixcode, prefixname, bloodgroup, religion, scar, hometown, fathercid, father, mothercid, mother, statusid, statusname, spouse, address, villageid, villagename, tambolid, tambolname, districtid, districtname, provinceid, provincename, postcode, caddress, cvillageid, cvillagename, ctambolid, ctambolname, cdistrictid, cdistrictname, cprovinceid, cprovincename, cpostcode, telephone, mobile, fax, pic, gmail, email, lineid, facebook, linkedin, banknumber, promptpay, eduhis, trainhis, dochis, stardate, employeedate, disciplinedate, disciplinedetail, disciplinereference, disciplinereferencefile, nosalarydate, nosalarydetail, nosalaryreference, nosalaryreferencefile, agreeid, agreedate, position, positionid, salary, agreereference, agreereferencefile, recorduserid, recordusername, recordsignature, recorddate } = req.body;
        const sqlInsert = "INSERT INTO staff (cid,passportid, govid, positiontypeid ,positiontype , revid , positionstatus ,prefixid ,prefixth , prefixen ,firstnameth , lastnameth , firstnameen , lastnameen , nickname , birthdate , birthplaceid , birthplace ,prefixcode , prefixname , bloodgroup , religion , scar , hometown ,fathercid , father ,mothercid ,mother , statusid , statusname , spouse , address , villageid , villagename , tambolid ,tambolname ,districtid ,districtname , provinceid , provincename , postcode , caddress , cvillageid , cvillagename , ctambolid ,ctambolname ,cdistrictid , cdistrictname , cprovinceid , cprovincename , cpostcode , telephone , mobile , fax , pic ,gmail , email , lineid ,facebook ,linkedin , banknumber , promptpay , eduhis , trainhis, dochis , stardate , employeedate ,disciplinedate , disciplinedetail , disciplinereference , disciplinereferencefile , nosalarydate ,nosalarydetail , nosalaryreference , nosalaryreferencefile , agreeid ,agreedate , position , positionid ,salary , agreereference , agreereferencefile , recorduserid , recordusername , recordsignature , recorddate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        db.query(sqlInsert, [cid, passportid, govid, positiontypeid, positiontype, revid, positionstatus,
            prefixid, prefixth, prefixen, firstnameth, lastnameth, firstnameen, lastnameen, nickname,
            birthdate, birthplaceid, birthplace, prefixcode, prefixname, bloodgroup, religion, scar,
            hometown, fathercid, father, mothercid, mother, statusid, statusname, spouse, address, villageid,
            villagename, tambolid, tambolname, districtid, districtname, provinceid, provincename, postcode,
            caddress, cvillageid, cvillagename, ctambolid, ctambolname, cdistrictid, cdistrictname, cprovinceid,
            cprovincename, cpostcode, telephone, mobile, fax, pic = picDir, gmail, email, lineid, facebook, linkedin,
            banknumber, promptpay, eduhis = ehuhisDir, trainhis = trainhisDir, dochis = dochisDir, stardate, employeedate, disciplinedate, disciplinedetail,
            disciplinereference, disciplinereferencefile = disciplinereferencefileDir, nosalarydate, nosalarydetail, nosalaryreference = nosalaryreferenceDir, nosalaryreferencefile = nosalaryreferencefileDir,
            agreeid, agreedate, position, positionid, salary, agreereference, agreereferencefile = agreereferencefileDir, recorduserid, recordusername,
            recordsignature, recorddate], (error, result) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ error });
                }
                res.json({ message: 'Data inserted successfully.' });

            })

    } catch (error) {
        console.error(error)
    }

});

app.delete("/delete/:id", (req, res) => {

    const { id } = req.params;
    const sqlRemove = "DELETE FROM staff WHERE id = ?";
    db.query(sqlRemove, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    })
});

app.get("/staff/:id", (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM staff where id = ?";
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { telephone, mobile, fax, gmail, email, lineid, facebook, linkedin } = req.body;
    const sqlUpdate = "UPDATE staff SET telephone = ? , mobile = ? , fax = ? , gmail = ? , email = ? , lineid = ? ,facebook = ? ,linkedin = ? WHERE id = ?";
    db.query(sqlUpdate, [telephone, mobile, fax, gmail, email, lineid, facebook, linkedin, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    })
});






app.listen(3001, () => {
    console.log("Server is running on port 3001");
})
