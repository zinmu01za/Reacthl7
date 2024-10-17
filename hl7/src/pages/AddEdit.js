import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './AddEdit.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Paper from '@mui/material/Paper';
import UploadField from './UploadField';
import { useRef } from "react";
// import REACTLOGO from './images/logo-MOPH.png'



import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import FullpageNavigation2 from './FullpageNavigation2';
import FullpageNavigation3 from './FullpageNavigation3';

const initialState = {
    cid: "",
    passportid: "",
    govid: "",
    positiontypeid: "",
    positiontype: "",
    revid: "",
    positionstatus: "",
    prefixid: "",
    prefixth: "",
    prefixen: "",
    firstnameth: "",
    lastnameth: "",
    firstnameen: "",
    lastnameen: "",
    nickname: "",
    birthdate: "",
    birthplaceid: "",
    birthplace: "",
    prefixcode: "",
    prefixname: "",
    bloodgroup: "",
    religion: "",
    scar: "",
    hometown: "",
    fathercid: "",
    father: "",
    mothercid: "",
    mother: "",
    statusid: "",
    statusname: "",
    spouse: "",
    address: "",
    villageid: "",
    villagename: "",
    tambolid: "",
    tambolname: "",
    districtid: "",
    districtname: "",
    provinceid: "",
    provincename: "",
    postcode: "",
    caddress: "",
    cvillageid: "",
    cvillagename: "",
    ctambolid: "",
    ctambolname: "",
    cdistrictid: "",
    cdistrictname: "",
    cprovinceid: "",
    cprovincename: "",
    cpostcode: "",
    telephone: "",
    mobile: "",
    fax: "",
    pic: "",
    gmail: "",
    email: "",
    lineid: "",
    facebook: "",
    linkedin: "",
    banknumber: "",
    promptpay: "",
    eduhis: "",
    trainhis: "",
    dochis: "",
    stardate: "",
    employeedate: "",
    disciplinedate: "",
    disciplinedetail: "",
    disciplinereference: "",
    disciplinereferencefile: "",
    nosalarydate: "",
    nosalarydetail: "",
    nosalaryreference: "",
    nosalaryreferencefile: "",
    agreeid: "",
    agreedate: "",
    position: "",
    positionid: "",
    salary: "",
    agreereference: "",
    agreereferencefile: "",
    recorduserid: "",
    recordusername: "",
    recordsignature: "",
    recorddate: "",
};

const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();
    const { cid, passportid, govid, positiontypeid, positiontype, revid, positionstatus, prefixid, prefixth, prefixen, firstnameth, lastnameth, firstnameen, lastnameen, nickname, birthdate, birthplaceid, birthplace, prefixcode, prefixname, bloodgroup, religion, scar, hometown, fathercid, father, mothercid, mother, statusid, statusname, spouse, address, villageid, villagename, tambolid, tambolname, districtid, districtname, provinceid, provincename, postcode, caddress, cvillageid, cvillagename, ctambolid, ctambolname, cdistrictid, cdistrictname, cprovinceid, cprovincename, cpostcode, telephone, mobile, fax, pic, gmail, email, lineid, facebook, linkedin, banknumber, promptpay, eduhis, trainhis, dochis, stardate, employeedate, disciplinedate, disciplinedetail, disciplinereference, disciplinereferencefile, nosalarydate, nosalarydetail, nosalaryreference, nosalaryreferencefile, agreeid, agreedate, position, positionid, salary, agreereference, agreereferencefile, recorduserid, recordusername, recordsignature, recorddate } = state;
    const { id } = useParams();




    useEffect(() => {
        axios
            .get(`http://localhost:3001/staff/${id}`)
            .then((resp) => setState({ ...resp.data[0] }));
    }, [id])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ state });
        console.log("hello", e.target.pic.files[0])

        // const picBase64 = convertFileToBase64(e.target.pic.files[0])
        // const eduhisBase64 = convertFileToBase64(eduhis)
        // const trainhisBase64 = convertFileToBase64(trainhis)
        // const dochisBase64 = convertFileToBase64(dochis)
        // const disciplinereferencesfileBase64 = convertFileToBase64(disciplinereferencefile)
        // const nosalaryreferencefileBase64 = convertFileToBase64(nosalaryreferencefile)
        // const agreereferencefileBase64 = convertFileToBase64(agreereferencefile)

        if (!cid || !passportid || !govid || !positiontypeid || !positiontype || !revid || !positionstatus ||
            !prefixid || !prefixth || !prefixen || !firstnameth ||
            !lastnameth || !firstnameen || !lastnameen || !nickname ||
            !birthdate || !birthplaceid || !birthplace || !prefixcode ||
            !prefixname || !bloodgroup || !religion || !scar || !hometown ||
            !fathercid || !father || !mothercid || !mother || !statusid ||
            !statusname || !spouse || !address || !villageid || !villagename ||
            !tambolid || !tambolname || !districtid || !districtname ||
            !provinceid || !provincename || !postcode || !caddress ||
            !cvillageid || !cvillagename || !ctambolid || !ctambolname ||
            !cdistrictid || !cdistrictname || !cprovinceid || !cprovincename ||
            !cpostcode || !telephone || !mobile || !fax || !pic || !gmail ||
            !email || !lineid || !facebook || !linkedin || !banknumber ||
            !promptpay || !eduhis || !trainhis || !dochis || !stardate ||
            !employeedate || !disciplinedate || !disciplinedetail ||
            !disciplinereference || !disciplinereferencefile || !nosalarydate ||
            !nosalarydetail || !nosalaryreference || !nosalaryreferencefile ||
            !agreeid || !agreedate || !position || !positionid || !salary ||
            !agreereference || !agreereferencefile || !recorduserid || !recordusername ||
            !recordsignature || !recorddate) {

            toast.error("โปรดระบุข้อมูลของท่านให้เรียบร้อย");
        } else {

            axios.post("http://localhost:3001/create", {
                ...state,

            }).then(() => {
                setState({
                    ...initialState
                });
                toast.success("เพิ่มข้อมูลเรียบร้อยแล้ว");
                setTimeout(() => navigate("/"), 10);
            }).catch((err) => toast.error(err.response.data));


        }
    };

    const handleInputChange = (e) => {


        const { name, value } = e.target;
        const condList = ['pic',
            'eduhis',
            'trainhis',
            'dochis',
            'disciplinereferencefile',
            'nosalaryreference',
            'nosalaryreferencefile',
            'agreereferencefile']

        if (condList.findIndex(function (cond) {
            return cond === name
        }) !== -1) {
            console.log("file", name);
            setState(function (prevState) {

                return { ...prevState, [name]: e.target.files[0] }
            })
        } else {
            setState(function (prevState) {
                return { ...prevState, [name]: value }
            })
        }
    };

    const SectionStyle = {
        width: '120vh',
        display: 'flex',
        margin: 'auto',
        alignItems: "center ",
    }

    const fp1 = useRef(null);
    const fp2 = useRef(null);
    const fp3 = useRef(null);
    const fp4 = useRef(null);
    const fp5 = useRef(null);
    const fp6 = useRef(null);
    const fp7 = useRef(null);
    const fp8 = useRef(null);
    const fp9 = useRef(null);
    const fp10 = useRef(null);
    const fp11 = useRef(null);
    const fp12 = useRef(null);
    const fp13 = useRef(null);
    const fp14 = useRef(null);
    const fp15 = useRef(null);




    return (

        <div className="full-pp" >

            <form style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "600px",
            }}
                onSubmit={handleSubmit}
            >


                <Fullpage >

                    <FullpageNavigation2 style={{
                        padding: "4px", background: " #158CD2", display: "flex",
                        flexDirection: "row", width: "100% ", height: "34px",
                        alignItems: "center"
                    }}  />
                    <Paper style={{
                        background: "#158CD2", position: "fixed",
                        top: 36,
                        left: 0,
                        width: "auto",
                        zIndex: 100,
                        color: "white",
                        margin: "10px",
                        padding: "0 20px"

                    }} className="ppts" >
                        <Link to="/" style={{ color: "white", textDecoration: "none" }}><span className="txttop">BACK</span></Link>
                    </Paper>
                    {/* <Paper style={{
                        background: "#158CD2", position: "fixed",
                        top: 34,
                        left: 2,
                        height: "30%",
                        width: "22%",
                        zIndex: 100,
                        color: "white",

                    }} className="ppts1" >
                        <div className="logo" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}   >
                            <img src={REACTLOGO} alt="" style={{ maxWidth: "100%", height: "auto", margin: "1px" }} />
                        </div>

                    </Paper> */}

                    <FullpageNavigation3 style={{ padding: "4px", }} className="nvgp" />
                    <FullPageSections style={{ background: "#323f49" }}>
                        <div >
                            <FullpageSection style={SectionStyle} >
                                <div ref={fp1}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">
                                            <div className="mb-3" >
                                                <label htmlFor="cid" >บัตรประชาชน :</label>
                                                <input
                                                    type="text" 
                                                    id="cid"
                                                    name="cid"
                                                    placeholder="กรุณาระบุเลขบัตรประชาชน"
                                                    value={cid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="passportid">รหัสพาสปอร์ต :</label>
                                                <input
                                                    type="text"
                                                    id="passportid"
                                                    name="passportid"
                                                    placeholder="กรุณาระบุรหัสพาสปอร์ต"
                                                    value={passportid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="govid">เลขประจำตัวข้าราชการ :</label>
                                                <input
                                                    type="number"
                                                    id="govid"
                                                    name="govid"
                                                    placeholder="กรุณาระบุเลขประจำตัวข้าราชการ"
                                                    value={govid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="positiontypeid">กรุณาระบุรหัสประเภทข้าราชการ :</label>
                                                <input
                                                    type="number"
                                                    id="positiontypeid"
                                                    name="positiontypeid"
                                                    placeholder="กรุณาระบุรหัสประเภทข้าราชการ"
                                                    value={positiontypeid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="positiontype">ประเภทข้าราชการ :</label>
                                                <input
                                                    type="text"
                                                    id="positiontype"
                                                    name="positiontype"
                                                    placeholder="กรุณาระบุประเภทข้าราชการ"
                                                    value={positiontype}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="revid"> เลขประจำตัวผู้เสียภาษีอากร :</label>
                                                <input
                                                    type="number"
                                                    id="revid"
                                                    name="revid"
                                                    placeholder="กรุณาระบุเลขประจำตัวผู้เสียภาษีอากร"
                                                    value={revid}
                                                    onChange={handleInputChange}
                                                />

                                            </div>
                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp2}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">

                                            <div className="mb-3" >
                                                <label htmlFor="positionstatus">สถานะการดำรงตำแหน่ง :</label>
                                                <input
                                                    type="number"
                                                    id="positionstatus"
                                                    name="positionstatus"
                                                    placeholder="กรุณาระบุสถานะการดำรงตำแหน่ง 0 ไม่ได้ดำรงตำแหน่ง 1 ดำรงตำแหน่ง"
                                                    value={positionstatus}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="prefixid">รหัสคำนำหน้าชื่อ :</label>
                                                <input
                                                    type="number"
                                                    id="prefixid"
                                                    name="prefixid"
                                                    placeholder="กรุณาระบุรหัสคำนำหน้าชื่อ"
                                                    value={prefixid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="prefixth">คำนำหน้าชื่อไทย :</label>
                                                <input
                                                    type="text"
                                                    id="prefixth"
                                                    name="prefixth"
                                                    placeholder="กรุณาระบุคำนำหน้าชื่อไทย"
                                                    value={prefixth}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="prefixen">คำนำหน้าชื่ออังกฤษ :</label>
                                                <input
                                                    type="text"
                                                    id="prefixen"
                                                    name="prefixen"
                                                    placeholder="กรุณาระบุคำนำหน้าชื่ออังกฤษ"
                                                    value={prefixen}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="firstnameth">ชื่อภาษาไทย :</label>
                                                <input
                                                    type="text"
                                                    id="firstnameth"
                                                    name="firstnameth"
                                                    placeholder="กรุณาระบุชื่อภาษาไทย"
                                                    value={firstnameth}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="lastnameth">นามสกุลภาษาไทย :</label>
                                                <input
                                                    type="text"
                                                    id="lastnameth"
                                                    name="lastnameth"
                                                    placeholder="กรุณาระบุนามสกุลภาษาไทย"
                                                    value={lastnameth}
                                                    onChange={handleInputChange}
                                                />

                                            </div>

                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp3}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">

                                            <div className="mb-3" >
                                                <label htmlFor="firstnameen">ชื่อภาษาอังกฤษ :</label>
                                                <input
                                                    type="text"
                                                    id="firstnameen"
                                                    name="firstnameen"
                                                    placeholder="กรุณาระบุชื่อภาษาอังกฤษ"
                                                    value={firstnameen}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="lastnameen">นามสกุลภาษาอังกฤษ :</label>
                                                <input
                                                    type="text"
                                                    id="lastnameen"
                                                    name="lastnameen"
                                                    placeholder="กรุณาระบุนามสกุลภาษาอังกฤษ"
                                                    value={lastnameen}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="nickname">ชื่อเล่น :</label>
                                                <input
                                                    type="text"
                                                    id="nickname"
                                                    name="nickname"
                                                    placeholder="กรุณาระบุชื่อเล่น"
                                                    value={nickname}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="birthdate">วันเดือนปีเวลาเกิด :</label>
                                                <input
                                                    type="datetime-local"
                                                    id="birthdate"
                                                    name="birthdate"
                                                    placeholder="กรุณาระบุวันเดือนปีเวลาเกิด"
                                                    value={birthdate}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="birthplaceid">รหัสสถานที่เกิด :</label>
                                                <input
                                                    type="text"
                                                    id="birthplaceid"
                                                    name="birthplaceid"
                                                    placeholder="กรุณาระบุรหัสสถานที่เกิด"
                                                    value={birthplaceid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="birthplace">สถานที่เกิด :</label>
                                                <input
                                                    type="text"
                                                    id="birthplace"
                                                    name="birthplace"
                                                    placeholder="กรุณาระบุสถานที่เกิด"
                                                    value={birthplace}
                                                    onChange={handleInputChange}
                                                />

                                            </div>

                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp4}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">

                                            <div className="mb-3" >
                                                <label htmlFor="prefixcode">รหัสคำนำหน้าชื่อ :</label>
                                                <input
                                                    type="number"
                                                    id="prefixcode"
                                                    name="prefixcode"
                                                    placeholder="กรุณาระบุรหัสคำนำหน้าชื่อ"
                                                    value={prefixcode}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="prefixname">คำนำหน้าชื่อ :</label>
                                                <input
                                                    type="text"
                                                    id="prefixname"
                                                    name="prefixname"
                                                    placeholder="กรุณาระบุคำนำหน้าชื่อ"
                                                    value={prefixname}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="bloodgroup">หมู่โลหิต :</label>
                                                <input
                                                    type="text"
                                                    id="bloodgroup"
                                                    name="bloodgroup"
                                                    placeholder="กรุณาระบุหมู่โลหิต"
                                                    value={bloodgroup}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="religion">ศาสนา :</label>
                                                <input
                                                    type="text"
                                                    id="religion"
                                                    name="religion"
                                                    placeholder="กรุณาระบุศาสนา"
                                                    value={religion}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="scar">ตำหนิ แผลเป็น :</label>
                                                <input
                                                    type="text"
                                                    id="scar"
                                                    name="scar"
                                                    placeholder="กรุณาระบุตำหนิ แผลเป็น"
                                                    value={scar}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="hometown">ภูมิลำเนาเดิม :</label>
                                                <input
                                                    type="text"
                                                    id="hometown"
                                                    name="hometown"
                                                    placeholder="กรุณาระบุภูมิลำเนาเดิม"
                                                    value={hometown}
                                                    onChange={handleInputChange}
                                                />

                                            </div>

                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp5}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">

                                            <div className="mb-3" >
                                                <label htmlFor="fathercid">เลขบัตรประชาชนบิดา :</label>
                                                <input
                                                    type="text"
                                                    id="fathercid"
                                                    name="fathercid"
                                                    placeholder="กรุณาระบุเลขบัตรประชาชนบิดา"
                                                    value={fathercid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="father">ชื่อสกุลบิดา :</label>
                                                <input
                                                    type="text"
                                                    id="father"
                                                    name="father"
                                                    placeholder="กรุณาระบุชื่อสกุลบิดา"
                                                    value={father}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="mothercid">เลขบัตรประชาชนมารดา :</label>
                                                <input
                                                    type="text"
                                                    id="mothercid"
                                                    name="mothercid"
                                                    placeholder="กรุณาระบุเลขบัตรประชาชนมารดา"
                                                    value={mothercid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="mother">ชื่อสกุลมารดา :</label>
                                                <input
                                                    type="text"
                                                    id="mother"
                                                    name="mother"
                                                    placeholder="กรุณาระบุชื่อสกุลมารดา"
                                                    value={mother}
                                                    onChange={handleInputChange}
                                                />

                                                <label htmlFor="statusid">รหัสสถานภาพสมรส :</label>
                                                <input
                                                    type="number"
                                                    id="statusid"
                                                    name="statusid"
                                                    placeholder="กรุณาระบุรหัสสถานภาพสมรส"
                                                    value={statusid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="statusname">สถานภาพสมรส :</label>
                                                <input
                                                    type="text"
                                                    id="statusname"
                                                    name="statusname"
                                                    placeholder="กรุณาระบุสถานภาพสมรส"
                                                    value={statusname}
                                                    onChange={handleInputChange}
                                                />

                                            </div>

                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp6}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">

                                            <div className="mb-3" >
                                                <label htmlFor="spouse">ชื่อสกุลคู่สมรส :</label>
                                                <input
                                                    type="text"
                                                    id="spouse"
                                                    name="spouse"
                                                    placeholder="กรุณาระบุชื่อสกุลคู่สมรส"
                                                    value={spouse}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="address">ที่อยู่ตามบัตรประชาชน :</label>
                                                <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    placeholder="กรุณาระบุที่อยู่ตามบัตรประชาชน"
                                                    value={address}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="villageid">รหัสหมู่บ้าน :</label>
                                                <input
                                                    type="number"
                                                    id="villageid"
                                                    name="villageid"
                                                    placeholder="กรุณาระบุรหัสหมู่บ้าน"
                                                    value={villageid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="villagename">ชื่อหมู่บ้าน :</label>
                                                <input
                                                    type="text"
                                                    id="villagename"
                                                    name="villagename"
                                                    placeholder="กรุณาระบุชื่อหมู่บ้าน"
                                                    value={villagename}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="tambolid">รหัสตำบล :</label>
                                                <input
                                                    type="number"
                                                    id="tambolid"
                                                    name="tambolid"
                                                    placeholder="กรุณาระบุรหัสตำบล"
                                                    value={tambolid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="tambolname">ชื่อตำบล :</label>
                                                <input
                                                    type="text"
                                                    id="tambolname"
                                                    name="tambolname"
                                                    placeholder="กรุณาระบุชื่อตำบล"
                                                    value={tambolname}
                                                    onChange={handleInputChange}
                                                />

                                            </div>

                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp7}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">

                                            <div className="mb-3" >
                                                <label htmlFor="districtid">รหัสอำเภอ :</label>
                                                <input
                                                    type="number"
                                                    id="districtid"
                                                    name="districtid"
                                                    placeholder="กรุณาระบุรหัสอำเภอ"
                                                    value={districtid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="districtname">ชื่ออำเภอ :</label>
                                                <input
                                                    type="text"
                                                    id="districtname"
                                                    name="districtname"
                                                    placeholder="กรุณาระบุรหัสชื่ออำเภอ"
                                                    value={districtname}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="provinceid">รหัสจังหวัด :</label>
                                                <input
                                                    type="number"
                                                    id="provinceid"
                                                    name="provinceid"
                                                    placeholder="กรุณาระบุรหัสจังหวัด"
                                                    value={provinceid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="provincename">ชื่อจังหวัด :</label>
                                                <input
                                                    type="text"
                                                    id="provincename"
                                                    name="provincename"
                                                    placeholder="กรุณาระบุชื่อจังหวัด"
                                                    value={provincename}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="postcode">รหัสไปรษณีย์ :</label>
                                                <input
                                                    type="text"
                                                    id="postcode"
                                                    name="postcode"
                                                    placeholder="กรุณาระบุรหัสไปรษณีย์"
                                                    value={postcode}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="caddress">ที่อยู่ปัจจุบัน :</label>
                                                <input
                                                    type="text"
                                                    id="caddress"
                                                    name="caddress"
                                                    placeholder="กรุณาระบุที่อยู่ปัจจุบัน current address"
                                                    value={caddress}
                                                    onChange={handleInputChange}
                                                />

                                            </div>

                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp8}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">

                                            <div className="mb-3" >
                                                <label htmlFor="cvillageid">รหัสหมู่บ้านปัจจุบัน :</label>
                                                <input
                                                    type="number"
                                                    id="cvillageid"
                                                    name="cvillageid"
                                                    placeholder="กรุณาระบุรหัสหมู่บ้านปัจจุบัน"
                                                    value={cvillageid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="cvillagename">ชื่อหมู่บ้านปัจจุบัน :</label>
                                                <input
                                                    type="text"
                                                    id="cvillagename"
                                                    name="cvillagename"
                                                    placeholder="กรุณาระบุชื่อหมู่บ้านปัจจุบัน"
                                                    value={cvillagename}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="ctambolid">รหัสตำบลปัจจุบัน :</label>
                                                <input
                                                    type="number"
                                                    id="ctambolid"
                                                    name="ctambolid"
                                                    placeholder="กรุณาระบุรหัสตำบลปัจจุบัน"
                                                    value={ctambolid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="ctambolname">ชื่อตำบลปัจจุบัน :</label>
                                                <input
                                                    type="text"
                                                    id="ctambolname"
                                                    name="ctambolname"
                                                    placeholder="กรุณาระบุชื่อตำบลปัจจุบัน"
                                                    value={ctambolname}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="cdistrictid">รหัสอำเภอปัจจุบัน :</label>
                                                <input
                                                    type="number"
                                                    id="cdistrictid"
                                                    name="cdistrictid"
                                                    placeholder="กรุณาระบุรหัสอำเภอปัจจุบัน"
                                                    value={cdistrictid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="cdistrictname">ชื่ออำเภอปัจจุบัน :</label>
                                                <input
                                                    type="text"
                                                    id="cdistrictname"
                                                    name="cdistrictname"
                                                    placeholder="กรุณาระบุชื่ออำเภอปัจจุบัน"
                                                    value={cdistrictname}
                                                    onChange={handleInputChange}
                                                />

                                            </div>

                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp9}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">

                                            <div className="mb-3" >
                                                <label htmlFor="cprovinceid">รหัสจังหวัดปัจจุบัน :</label>
                                                <input
                                                    type="text"
                                                    id="cprovinceid"
                                                    name="cprovinceid"
                                                    placeholder="กรุณาระบุรหัสจังหวัดปัจจุบัน"
                                                    value={cprovinceid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="cprovincename">ชื่อจังหวัดปัจจุบัน :</label>
                                                <input
                                                    type="text"
                                                    id="cprovincename"
                                                    name="cprovincename"
                                                    placeholder="กรุณาระบุชื่อจังหวัดปัจจุบัน"
                                                    value={cprovincename}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="cpostcode">รหัสไปรษณีย์ปัจจุบัน :</label>
                                                <input
                                                    type="text"
                                                    id="cpostcode"
                                                    name="cpostcode"
                                                    placeholder="กรุณาระบุรหัสไปรษณีย์ปัจจุบัน"
                                                    value={cpostcode}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="telephone">โทรศัพท์ที่บ้าน :</label>
                                                <input
                                                    type="text"
                                                    id="telephone"
                                                    name="telephone"
                                                    placeholder="กรุณาระบุเบอร์โทรศัพท์ที่บ้าน"
                                                    value={telephone || ""}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="mobile">โทรศัพท์มือถือ :</label>
                                                <input
                                                    type="text"
                                                    id="mobile"
                                                    name="mobile"
                                                    placeholder="กรุณาระบุเบอร์โทรศัพท์มือถือ"
                                                    value={mobile || ""}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="fax">โทรสาร :</label>
                                                <input
                                                    type="text"
                                                    id="fax"
                                                    name="fax"
                                                    placeholder="กรุณาระบุเลขโทรสาร"
                                                    value={fax || ""}
                                                    onChange={handleInputChange}
                                                />

                                            </div>

                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp10}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">

                                            <div className="mb-3" >
                                                <label htmlFor="pic">รูปภาพ Profile :</label>
                                                <UploadField
                                                    id="pic"
                                                    name="pic"
                                                    placeholder="กรุณาเลือกรูปภาพ Profile"

                                                    state={state}
                                                    setState={setState}
                                                />

                                                <label htmlFor="gmail">จีเมลล์สำหรับ Authen :</label>
                                                <input
                                                    type="text"
                                                    id="gmail"
                                                    name="gmail"
                                                    placeholder="กรุณาระบุจีเมลล์สำหรับ Authen"
                                                    value={gmail || ""}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="email">อีเมลล์ :</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="กรุณาระบุอีเมลล์"
                                                    value={email || ""}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="lineid" >รหัสไลน์ :</label>
                                                <input
                                                    type="text"
                                                    id="lineid"
                                                    name="lineid"
                                                    placeholder="กรุณาระบุรหัสไลน์"
                                                    value={lineid || ""}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="facebook">รหัสเฟสบุ๊ค :</label>
                                                <input
                                                    type="text"
                                                    id="facebook"
                                                    name="facebook"
                                                    placeholder="กรุณาระบุรหัสเฟสบุ๊ค"
                                                    value={facebook || ""}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="linkedin">รหัสลิงค์เก็ตอิน :</label>
                                                <input
                                                    type="text"
                                                    id="linkedin"
                                                    name="linkedin"
                                                    placeholder="กรุณาระบุรหัสลิงค์เก็ตอิน"
                                                    value={linkedin || ""}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp11}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">
                                            <div className="mb-3" >
                                                <label htmlFor="banknumber">เลขที่บัญชีธนาคาร :</label>
                                                <input
                                                    type="text"
                                                    id="banknumber"
                                                    name="banknumber"
                                                    placeholder="กรุณาระบุเลขที่บัญชีธนาคาร"
                                                    value={banknumber}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="promptpay">รหัสพร๊อมเพย์ :</label>
                                                <input
                                                    type="text"
                                                    id="promptpay"
                                                    name="promptpay"
                                                    placeholder="กรุณาระบุรหัสพร๊อมเพย์"
                                                    value={promptpay}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="eduhis">ประวัติการศึกษา :</label>
                                                <UploadField

                                                    id="eduhis"
                                                    name="eduhis"
                                                    placeholder="กรุณาระบุประวัติการศึกษา"
                                                    state={state}
                                                    setState={setState}
                                                />
                                                <label htmlFor="trainhis">ประวัติฝึกอบรมดูงาน :</label>
                                                <UploadField

                                                    id="trainhis"
                                                    name="trainhis"
                                                    placeholder="กรุณาระบุประวัติฝึกอบรมดูงาน"
                                                    state={state}
                                                    setState={setState}
                                                />
                                                <label htmlFor="dochis">ชื่อ File เอกสารหลักฐานทั้งหมด.pdf :</label>
                                                <UploadField

                                                    id="dochis"
                                                    name="dochis"
                                                    placeholder="กรุณาระบุชื่อ File เอกสารหลักฐานทั้งหมด.pdf"
                                                    state={state}
                                                    setState={setState}
                                                />
                                                <label htmlFor="stardate">วันเดือนปีเริ่มปฏิบัติงาน :</label>
                                                <input
                                                    type="datetime-local"
                                                    id="stardate"
                                                    name="stardate"
                                                    placeholder="กรุณาระบุวันเดือนปีเริ่มปฏิบัติงาน"
                                                    value={stardate}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp12}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">
                                            <div className="mb-3" >
                                                <label htmlFor="employeedate">วันเดือนปีเริ่มจ้างงาน :</label>
                                                <input
                                                    type="datetime-local"
                                                    id="employeedate"
                                                    name="employeedate"
                                                    placeholder="กรุณาระบุวันเดือนปีเริ่มจ้างงาน"
                                                    value={employeedate}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="disciplinedate">วันเดือนปีได้รับโทษทางวินัย :</label>
                                                <input
                                                    type="datetime-local"
                                                    id="disciplinedate"
                                                    name="disciplinedate"
                                                    placeholder="กรุณาระบุวันเดือนปีได้รับโทษทางวินัย"
                                                    value={disciplinedate}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="disciplinedetail">รายละเอียดได้รับโทษทางวินัย :</label>
                                                <input
                                                    type="text"
                                                    id="disciplinedetail"
                                                    name="disciplinedetail"
                                                    placeholder="กรุณาระบุรายละเอียดได้รับโทษทางวินัย"
                                                    value={disciplinedetail}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="disciplinereference">เอกสารอ้างอิงได้รับโทษทางวินัย :</label>
                                                <input
                                                    type="text"
                                                    id="disciplinereference"
                                                    name="disciplinereference"
                                                    placeholder="กรุณาระบุเอกสารอ้างอิงได้รับโทษทางวินัย"
                                                    value={disciplinereference}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="disciplinereferencefile">ชื่อ File เอกสารอ้างอิงได้รับโทษทางวินัย :</label>
                                                <UploadField

                                                    id="disciplinereferencefile"
                                                    name="disciplinereferencefile"
                                                    placeholder="กรุณาระบุชื่อ File เอกสารอ้างอิงได้รับโทษทางวินัย"
                                                    state={state}
                                                    setState={setState}
                                                />
                                                <label htmlFor="nosalarydate">วันเดือนปีไม่ได้รับเงินเดือน หรือได้รับเงินเดือนไม่เต็ม หรือวันที่มิได้ประจำปฏิบัติหน้าที่อยู่วนเขตที่ได้มีประกาศใช้อัยการศึก :</label>
                                                <input
                                                    type="datetime-local"
                                                    id="nosalarydate"
                                                    name="nosalarydate"
                                                    placeholder="กรุณาระบุวันเดือนปีไม่ได้รับเงินเดือน หรือได้รับเงินเดือนไม่เต็ม หรือวันที่มิได้ประจำปฏิบัติหน้าที่อยู่วนเขตที่ได้มีประกาศใช้อัยการศึก"
                                                    value={nosalarydate}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp13}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">
                                            <div className="mb-3" >
                                                <label htmlFor="nosalarydetail">รายละเอียดไม่ได้รับเงินเดือน หรือได้รับเงินเดือนไม่เต็ม หรือวันที่มิได้ประจำปฏิบัติหน้าที่อยู่วนเขตที่ได้มีประกาศใช้อัยการศึก :</label>
                                                <input
                                                    type="text"
                                                    id="nosalarydetail"
                                                    name="nosalarydetail"
                                                    placeholder="กรุณาระบุรายละเอียดไม่ได้รับเงินเดือน หรือได้รับเงินเดือนไม่เต็ม หรือวันที่มิได้ประจำปฏิบัติหน้าที่อยู่วนเขตที่ได้มีประกาศใช้อัยการศึก"
                                                    value={nosalarydetail}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="nosalaryreference">เอกสารอ้างอิงไม่ได้รับเงินเดือน หรือได้รับเงินเดือนไม่เต็ม หรือวันที่มิได้ประจำปฏิบัติหน้าที่อยู่วนเขตที่ได้มีประกาศใช้อัยการศึก :</label>
                                                <UploadField

                                                    id="nosalaryreference"
                                                    name="nosalaryreference"
                                                    placeholder="กรุณาระบุเอกสารอ้างอิงไม่ได้รับเงินเดือน หรือได้รับเงินเดือนไม่เต็ม หรือวันที่มิได้ประจำปฏิบัติหน้าที่อยู่วนเขตที่ได้มีประกาศใช้อัยการศึก"
                                                    state={state}
                                                    setState={setState}
                                                />
                                                <label htmlFor="nosalaryreferencefile">ชื่อ File เอกสารอ้างอิงไม่ได้รับเงินเดือน หรือได้รับเงินเดือนไม่เต็ม หรือวันที่มิได้ประจำปฏิบัติหน้าที่อยู่วนเขตที่ได้มีประกาศใช้อัยการศึก.pdf :</label>
                                                <UploadField

                                                    id="nosalaryreferencefile"
                                                    name="nosalaryreferencefile"
                                                    placeholder="กรุณาระบุชื่อ File เอกสารอ้างอิงไม่ได้รับเงินเดือน หรือได้รับเงินเดือนไม่เต็ม หรือวันที่มิได้ประจำปฏิบัติหน้าที่อยู่วนเขตที่ได้มีประกาศใช้อัยการศึก.pdf"
                                                    state={state}
                                                    setState={setState}
                                                />
                                                <label htmlFor="agreeid">สัญญาจ้างเลขที่ / ตั้งแต่วันที่-วันที่ :</label>
                                                <input
                                                    type="text"
                                                    id="agreeid"
                                                    name="agreeid"
                                                    placeholder="กรุณาระบุสัญญาจ้างเลขที่ / ตั้งแต่วันที่-วันที่"
                                                    value={agreeid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="agreedate">วันเดือนปีที่เริ่มจ้างงาน :</label>
                                                <input
                                                    type="datetime-local"
                                                    id="agreedate"
                                                    name="agreedate"
                                                    placeholder="กรุณาระบุวันเดือนปีที่เริ่มจ้างงาน"
                                                    value={agreedate}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp14}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">
                                            <div className="mb-3" >
                                                <label htmlFor="position">ชื่อตำแหน่งงาน :</label>
                                                <input
                                                    type="text"
                                                    id="position"
                                                    name="position"
                                                    placeholder="กรุณาระบุชื่อตำแหน่งงาน"
                                                    value={position}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="positionid">รหัสตำแหน่งงาน :</label>
                                                <input
                                                    type="text"
                                                    id="positionid"
                                                    name="positionid"
                                                    placeholder="กรุณาระบุรหัสตำแหน่งงาน"
                                                    value={positionid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="salary">อัตราเงินเดือน :</label>
                                                <input
                                                    type="number"
                                                    id="salary"
                                                    name="salary"
                                                    placeholder="กรุณาระบุอัตราเงินเดือน"
                                                    value={salary}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="agreereference">เอกสารอ้างอิง :</label>
                                                <input
                                                    type="text"
                                                    id="agreereference"
                                                    name="agreereference"
                                                    placeholder="กรุณาระบุเอกสารอ้างอิง"
                                                    value={agreereference}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="agreereferencefile">ชื่อ File เอกสารอ้างอิง.pdf :</label>
                                                <UploadField

                                                    id="agreereferencefile"
                                                    name="agreereferencefile"
                                                    placeholder="กรุณาระบุชื่อ File เอกสารอ้างอิง.pdf"
                                                    state={state}
                                                    setState={setState}
                                                />

                                            </div>
                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle}>
                                <div ref={fp15}>
                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white' }}  >
                                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="card-header1">

                                            <div className="mb-3" >
                                                <label htmlFor="recorduserid">รหัสผู้บันทึก :</label>
                                                <input
                                                    type="number"
                                                    id="recorduserid"
                                                    name="recorduserid"
                                                    placeholder="กรุณาระบุรหัสผู้บันทึก"
                                                    value={recorduserid}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="recordusername">ผู้บันทึกการได้รับโทษทางวินัย :</label>
                                                <input
                                                    type="text"
                                                    id="recordusername"
                                                    name="recordusername"
                                                    placeholder="กรุณาระบุผู้บันทึกการได้รับโทษทางวินัย"
                                                    value={recordusername}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="recordsignature">ลายเซ็นอิเล็กทรอนิกส์ผู้บันทึก :</label>
                                                <input
                                                    type="text"
                                                    id="recordsignature"
                                                    name="recordsignature"
                                                    placeholder="กรุณาระบุลายเซ็นอิเล็กทรอนิกส์ผู้บันทึก"
                                                    value={recordsignature}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="recorddate">วันที่บันทึกการได้รับโทษทางวินัย :</label>
                                                <input
                                                    type="datetime-local"
                                                    id="recorddate"
                                                    name="recorddate"
                                                    placeholder="กรุณาระบุวันที่บันทึกการได้รับโทษทางวินัย"
                                                    value={recorddate}
                                                    onChange={handleInputChange}
                                                />


                                            </div>
                                            <input type="submit" value="Save" style={{ width: "680px", background: "green", color: "black" }} />
                                            <Link to="/">
                                                <input type="button" value="Go Back" style={{ width: "680px", background: "grey", color: "black" }} />
                                            </Link>
                                        </Paper>
                                    </Paper>
                                </div>
                            </FullpageSection>

                        </div>
                    </FullPageSections>
                </Fullpage>



            </form >
        </div >
    )
}

export default AddEdit;