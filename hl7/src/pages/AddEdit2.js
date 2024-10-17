import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './AddEdit2.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Paper from '@mui/material/Paper';


import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import FullpageNavigation4 from './FullpageNavigation4';
import FullpageNavigation3 from './FullpageNavigation3';


const initialState = {
    telephone: "",
    mobile: "",
    fax: "",
    gmail: "",
    email: "",
    lineid: "",
    facebook: "",
    linkedin: "",
};


const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const { telephone, mobile, fax, gmail, email, lineid, facebook, linkedin } = state;

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:3001/staff/${id}`)
            .then((resp) => setState({ ...resp.data[0] }));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!telephone || !mobile || !fax || !gmail ||
            !email || !lineid || !facebook || !linkedin) {
            toast.error("โปรดระบุข้อมูลของท่านให้เรียบร้อย");
        } else {
            if (!id) {
                axios.post("http://localhost:3001/create", {
                    telephone, mobile, fax, gmail, email, lineid, facebook, linkedin
                }).then(() => {
                    setState({
                        telephone: "", mobile: "", fax: "", gmail: "",
                        email: "", lineid: "", facebook: "", linkedin: ""
                    });
                }).catch((err) => toast.error(err.response.data));
                toast.success("เพิ่มข้อมูลเรียบร้อยแล้ว");
            } else {
                axios.put(`http://localhost:3001/update/${id}`, {
                    telephone, mobile, fax, gmail, email, lineid, facebook, linkedin
                }).then(() => {
                    setState({
                        telephone: "", mobile: "", fax: "", gmail: "",
                        email: "", lineid: "", facebook: "", linkedin: ""
                    });
                }).catch((err) => toast.error(err.response.data));
                toast.success("อัพเดตข้อมูลเรียบร้อยแล้ว");
            }

            setTimeout(() => navigate("/"), 10);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const [user, setUser] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:3001/staff/${id}`)
            .then((resp) => setUser({ ...resp.data[0] }));
    }, [id]);


    const SectionStyle = {
        width: '120vh',
        display: 'flex',
        margin: 'auto',
        alignItems: "center ",
    }


    return (

        <div className="container2" style={{ background: "#323f49" }}>

            <form style={{
                margin: "auto",
                alignContent: "center",
            }}

                onSubmit={handleSubmit}
            >

                <Fullpage >
                    <FullpageNavigation4 style={{
                        padding: "4px", background: " #158CD2", display: "flex",
                        flexDirection: "row", width: "100% ", height: "34px",
                        alignItems: "center"
                    }} />
                    <Paper style={{
                        backgroundColor: '#F3B400',
                        position: "fixed",
                        top: 36,
                        left: 0,
                        width: "auto",
                        zIndex: 100,
                        color: "black",
                        margin: "10px",
                        padding: "0 20px"
                    }} className="ppts"
                    >อัพเดตข้อมูล <br />{user.prefixth} {user.firstnameth} {user.lastnameth}</Paper>
                    <Paper style={{
                        background: "#158CD2", position: "fixed",
                        top: 100,
                        left: 0,
                        width: "auto",
                        zIndex: 100,
                        color: "white",
                        margin: "10px",
                        padding: "0 20px"

                    }} className="ppts" >
                        <Link to="/" style={{ color: "white", textDecoration: "none" }}><span className="txttop">BACK</span></Link>
                    </Paper>
                    <FullpageNavigation3 style={{ padding: "4px", }} className="nvgp" />
                    <FullPageSections style={{ background: "#323f49" }}>

                        <div className="container">


                            <FullpageSection style={SectionStyle} >
                                <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white', width: "530px" }} className="container">

                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400', width: "500px" }} className="container">

                                        <div className="mb-3" >

                                            <label htmlFor="telephone">โทรศัพท์บ้าน:</label>
                                            <input
                                                type="text"
                                                id="telephone"
                                                name="telephone"
                                                placeholder="กรุณาระบุเบอร์โทรศัพท์มือถือ"
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
                                            <label htmlFor="gmail">จีเมลล์สำหรับ Authen :</label>
                                            <input
                                                type="text"
                                                id="gmail"
                                                name="gmail"
                                                placeholder="กรุณาระบุจีเมลล์สำหรับ Authen"
                                                value={gmail || ""}
                                                onChange={handleInputChange}
                                            />
                                            <input type="submit" value={id ? "Update" : "Save"} />
                                            <Link to="/">
                                                <input type="button" value="Go Back" />
                                            </Link>

                                        </div>
                                    </Paper>
                                </Paper>
                            </FullpageSection>

                            <FullpageSection style={SectionStyle} >
                                <Paper sx={{ p: 2 }} style={{ backgroundColor: 'white', width: "530px" }} className="container">

                                    <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400', width: "500px" }} className="container">
                                        <div className="mb-3" >


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

                                            <input type="submit" value={id ? "Update" : "Save"} />
                                            <Link to="/">
                                                <input type="button" value="Go Back" />
                                            </Link>
                                        </div>
                                    </Paper>
                                </Paper>
                            </FullpageSection>

                        </div>
                    </FullPageSections>
                </Fullpage>
            </form >
        </div >


    )
}

export default AddEdit;