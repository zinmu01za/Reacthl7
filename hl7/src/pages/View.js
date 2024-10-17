import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "./View.css";
import Paper from '@mui/material/Paper';


const View = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();


    useEffect(() => {
        axios
            .get(`http://localhost:3001/staff/${id}`)
            .then((resp) => setUser({ ...resp.data[0] }));
    }, [id]);

    return (

        <div style={{ marginTop: "-0px" }} >
            <div className="card">

                <div className="container" >

                    <Paper sx={{ p: 2 }} style={{ backgroundColor: '#f0f0ef' }} className="ppp-7">
                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="ppp-11">
                            <strong style={{ fontSize: "20px" }}>ข้อมูลส่วนตัว</strong>

                        </Paper>
                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#f2deac' }} className="ppp-1">
                            <Paper className="pp-img" style={{ width: "200px", height: "240px" }}>
                                <img className="img-p" src={`http://localhost:3001/staff/${id}/pic`} alt={user.firstnameth + " " + user.lastnameth} height={'240px'} width={'200px'} />
                            </Paper>

                            <div className="spc" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <strong>เลขบัตรประชาชน: </strong>
                                    <span>{user.cid}</span>
                                    <br />
                                    <strong>รหัสประเภท: </strong>
                                    <span>{user.positiontypeid}</span>
                                    <br />

                                    <strong>สถานะการดำรงตำแหน่ง: </strong>
                                    <span>{user.positionstatus}</span>
                                    <br />
                                    <strong>คำนำหน้าชื่อไทย: </strong>
                                    <span>{user.prefixth}</span>
                                    <br />
                                    <strong>คำนำหน้าชื่ออังกฤษ: </strong>
                                    <span>{user.prefixen}</span>
                                    <br />
                                    <strong>ชื่อเล่น: </strong>
                                    <span>{user.nickname}</span>
                                    <br />
                                    <strong>รหัสสถานที่เกิด: </strong>
                                    <span>{user.birthplaceid}</span>
                                    <br />
                                    <strong>ตำหนิ/แผลเป็น: </strong>
                                    <span>{user.scar}</span>
                                    <br />
                                    <strong>รหัสบัตรประชาชนบิดา: </strong>
                                    <span>{user.fathercid}</span>
                                    <br />
                                    <strong>รหัสบัตรประชาชนมารดา: </strong>
                                    <span>{user.mothercid}</span>
                                    <br />
                                </div>

                                <div>
                                    <strong>รหัสพาสปอร์ต: </strong>
                                    <span>{user.passportid}</span>
                                    <br />
                                    <strong>ประเภทข้าราชการ: </strong>
                                    <span>{user.positiontype}</span>
                                    <br />

                                    <strong>รหัสคำนำหน้าชื่อ: </strong>
                                    <span>{user.prefixid}</span>
                                    <br />
                                    <strong>ชื่อภาษาไทย: </strong>
                                    <span>{user.firstnameth}</span>
                                    <br />
                                    <strong>ชื่อภาษาอังกฤษ: </strong>
                                    <span>{user.firstnameen}</span>
                                    <br />
                                    <strong>วันเดือนปีเวลาเกิด: </strong>
                                    <span>{user.birthdate}</span>
                                    <br />
                                    <strong>สถานที่เกิด: </strong>
                                    <span>{user.birthplace}</span>
                                    <br />
                                    <strong>ภูมิลำเนาเดิม: </strong>
                                    <span>{user.hometown}</span>
                                    <br />
                                    <strong>ชื่อสกุลบิดา: </strong>
                                    <span>{user.father}</span>
                                    <br />
                                    <strong>ชื่อสกุลมารดา: </strong>
                                    <span>{user.mother}</span>
                                    <br />
                                </div>



                                <div>
                                    <strong>เลขประจำตัวข้าราชการ: </strong>
                                    <span>{user.govid}</span>
                                    <br />
                                    <strong>เลขประจำตัวผู้เสียภาษีอากร: </strong>
                                    <span>{user.revid}</span>
                                    <br />
                                    <br />
                                    <strong>นามสกุลภาษาไทย: </strong>
                                    <span>{user.lastnameth}</span>
                                    <br />
                                    <strong>นามสกุลภาษาอังกฤษ: </strong>
                                    <span>{user.lastnameen}</span>
                                    <br />
                                    <strong>หมู่โลหิต: </strong>
                                    <span>{user.bloodgroup}</span>
                                    <br />
                                    <strong>ศาสนา: </strong>
                                    <span>{user.religion}</span>
                                    <br />
                                </div>
                            </div>


                        </Paper>

                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#f2deac' }} className="ppp-2">
                            <div className="spc1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <strong>รหัสสถานภาพสมรส: </strong>
                                    <span>{user.statusid}</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <strong>สถานภาพสมรส: </strong>
                                    <span>{user.statusname}</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <strong>ชื่อสกุลคู่สมรส: </strong>
                                    <span>{user.spouse}</span>
                                </div>
                            </div>
                        </Paper>

                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#f2deac' }} className="ppp-3">

                            <div className="spc1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>

                                    <strong>ที่อยู่ตามบัตรประชาชน: </strong>
                                    <span>{user.address}</span>
                                    <br />
                                    <strong>รหัสหมู่บ้าน: </strong>
                                    <span>{user.villageid}</span>
                                    <br />
                                    <strong>ชื่ออำเภอ: </strong>
                                    <span>{user.districtname}</span>
                                    <br />
                                    <strong>รหัสหมู่บ้านปัจจุบัน: </strong>
                                    <span>{user.cvillageid}</span>
                                    <br />
                                    <strong>ชื่ออำเภอปัจจุบัน: </strong>
                                    <span>{user.cdistrictname}</span>
                                    <br />



                                </div>



                                <div>


                                    <br />
                                    <strong>ชื่อหมู่บ้าน: </strong>
                                    <span>{user.villagename}</span>
                                    <br />
                                    <strong>รหัสจังหวัด: </strong>
                                    <span>{user.provinceid}</span>
                                    <br />
                                    <strong>ชื่อหมู่บ้านปัจจุบัน: </strong>
                                    <span>{user.cvillagename}</span>
                                    <br />
                                    <strong>รหัสจังหวัดปัจจุบัน: </strong>
                                    <span>{user.cprovinceid}</span>
                                    <br />

                                </div>



                                <div>


                                    <br />
                                    <strong>รหัสตำบล: </strong>
                                    <span>{user.tambolid}</span>
                                    <br />
                                    <strong>ชื่อจังหวัด: </strong>
                                    <span>{user.provincename}</span>
                                    <br />
                                    <strong>รหัสตำบลปัจจุบัน: </strong>
                                    <span>{user.ctambolid}</span>
                                    <br />
                                    <strong>ชื่อจังหวัดปัจจุบัน: </strong>
                                    <span>{user.cprovincename}</span>
                                    <br />


                                </div>



                                <div>

                                    <br />
                                    <strong>ชื่อตำบล: </strong>
                                    <span>{user.tambolname}</span>
                                    <br />
                                    <strong>รหัสไปรษณีย์: </strong>
                                    <span>{user.postcode}</span>
                                    <br />
                                    <strong>ชื่อตำบลปัจจุบัน: </strong>
                                    <span>{user.ctambolname}</span>
                                    <br />
                                    <strong>รหัสไปรษณีย์ปัจจุบัน: </strong>
                                    <span>{user.cpostcode}</span>
                                    <br />


                                </div>



                                <div>

                                    <br />
                                    <strong>รหัสอำเภอ: </strong>
                                    <span>{user.districtid}</span>
                                    <br />
                                    <strong>ที่อยู่ปัจจุบัน: </strong>
                                    <span>{user.caddress}</span>
                                    <br />
                                    <strong>รหัสอำเภอปัจจุบัน: </strong>
                                    <span>{user.cdistrictid}</span>
                                    <br />


                                </div>


                            </div>













                        </Paper>

                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#f2deac' }} className="ppp-5">

                            <div className="spc1" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <strong>โทรศัพท์ที่บ้าน: </strong>
                                    <span>{user.telephone}</span>
                                    <br />
                                    <strong>รหัสไลน์: </strong>
                                    <span>{user.lineid}</span>
                                    <br />
                                    <strong>เลขที่บัญชีธนาคาร: </strong>
                                    <span>{user.banknumber}</span>
                                    <br />

                                </div>



                                <div>
                                    <strong>โทรศัพท์มือถือ: </strong>
                                    <span>{user.mobile}</span>
                                    <br />
                                    <strong>รหัสเฟสบุ๊ค: </strong>
                                    <span>{user.facebook}</span>
                                    <br />

                                </div>



                                <div>
                                    <strong>โทรสาร: </strong>
                                    <span>{user.fax}</span>
                                    <br />
                                    <strong>รหัสลิงค์เก็ตอิน: </strong>
                                    <span>{user.linkedin}</span>
                                    <br />
                                </div>



                                <div>
                                    <strong>จีเมลล์: </strong>
                                    <span>{user.gmail}</span>
                                    <br />
                                    <strong>อีเมลล์: </strong>
                                    <span>{user.email}</span>
                                    <br />
                                </div>
                            </div>


                        </Paper>
                    </Paper>

                    <Paper sx={{ p: 2 }} style={{ backgroundColor: '#f0f0ef' }} className="ppp-7">
                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="ppp-11">
                            <strong style={{ fontSize: "20px" }}>ข้อมูลเกี่ยวกับงาน</strong>
                        </Paper>
                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#f2deac' }} className="ppp-9">
                            <strong>วันเดือนปีเริ่มปฏิบัติงาน: </strong>
                            <span>{user.stardate}</span>
                            <br />

                            <strong>วันเดือนปีเริ่มจ้างงาน: </strong>
                            <span>{user.employeedate}</span>
                            <br />

                            <strong>วันเดือนปีได้รับโทษทางวินัย: </strong>
                            <span>{user.disciplinedate}</span>
                            <br />

                            <strong>รายละเอียดได้รับโทษทางวินัย: </strong>
                            <span>{user.disciplinedetail}</span>
                            <br />

                            <strong>เอกสารอ้างอิงได้รับโทษทางวินัย: </strong>
                            <span>{user.disciplinereference}</span>
                            <br />

                            <strong>วันเดือนปีไม่ได้รับเงินเดือนหรือได้รับเงินเดือนไม่เต็ม: </strong>
                            <span>{user.nosalarydate}</span>
                            <br />

                            <strong>รายละเอียดไม่ได้รับเงินเดือนหรือได้รับเงินเดือนไม่เต็ม: </strong>
                            <span>{user.nosalarydetail}</span>
                            <br />

                            <strong>สัญญาจ้างเลขที่ / ตั้งแต่วันที่-วันที่: </strong>
                            <span>{user.agreeid}</span>
                            <br />

                            <strong>วันเดือนปีที่เริ่มจ้างงาน: </strong>
                            <span>{user.agreedate}</span>
                            <br />

                            <strong>ชื่อตำแหน่งงาน: </strong>
                            <span>{user.position}</span>
                            <br />

                            <strong>รหัสตำแหน่งงาน: </strong>
                            <span>{user.positionid}</span>
                            <br />

                            <strong>อัตราเงินเดือน: </strong>
                            <span>{user.salary}</span>
                            <br />

                            <strong>เอกสารอ้างอิง: </strong>
                            <span>{user.agreereference}</span>
                            <br />

                        </Paper>

                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="ppp-11">
                            <strong style={{ fontSize: "20px" }}>ไฟล์เอกสาร</strong>

                        </Paper>

                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#f2deac' }} className="ppp-6">


                            <strong>ประวัติการศึกษา: </strong>
                            <a href={`http://localhost:3001/staff/${id}/eduhis`}>คลิกเพื่อดูไฟล์</a>
                            <br />

                            <strong>ประวัติฝึกอบรมดูงาน: </strong>
                            <a href={`http://localhost:3001/staff/${id}/trainhis`}>คลิกเพื่อดูไฟล์</a>
                            <br />

                            <strong>File เอกสารหลักฐานทั้งหมด: </strong>
                            <a href={`http://localhost:3001/staff/${id}/dochis`}>คลิกเพื่อดูไฟล์</a>
                            <br />

                            <strong>ชื่อ File เอกสารอ้างอิงได้รับโทษทางวินัย .pdf: </strong>
                            <a href={`http://localhost:3001/staff/${id}/disciplinereferencefile`}>คลิกเพื่อดูไฟล์</a>
                            <br />



                            <strong>เอกสารอ้างอิงไม่ได้รับเงินเดือนหรือได้รับเงินเดือนไม่เต็ม: </strong>
                            <a href={`http://localhost:3001/staff/${id}/nosalaryreference`}>คลิกเพื่อดูไฟล์</a>
                            <br />

                            <strong>File เอกสารอ้างอิงไม่ได้รับเงินเดือนหรือได้รับเงินเดือนไม่เต็ม .pdf: </strong>
                            <a href={`http://localhost:3001/staff/${id}/nosalaryreferencefile`}>คลิกเพื่อดูไฟล์</a>
                            <br />



                            <strong>ชื่อ File เอกสารอ้างอิง .pdf: </strong>
                            <a href={`http://localhost:3001/staff/${id}/agreereferencefile`}>คลิกเพื่อดูไฟล์</a>
                            <br />


                        </Paper>
                    </Paper>

                    <Paper sx={{ p: 2 }} style={{ backgroundColor: '#f0f0ef' }} className="ppp-7">
                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#F3B400' }} className="ppp-11">
                            <strong style={{ fontSize: "20px" }}>ผู้บันทึก</strong>
                        </Paper>
                        <Paper sx={{ p: 2 }} style={{ backgroundColor: '#f2deac' }} className="ppp-8">
                            <strong>รหัสผู้บันทึก: </strong>
                            <span>{user.recorduserid}</span>
                            <br />

                            <strong>ผู้บันทึกการได้รับโทษทางวินัย: </strong>
                            <span>{user.recordusername}</span>
                            <br />

                            <strong>ลายเซ็นอิเล็กทรอนิกส์ผู้บันทึก: </strong>
                            <span>{user.recordsignature}</span>
                            <br />

                            <strong>วันที่บันทึกการได้รับโทษทางวินัย: </strong>
                            <span>{user.recorddate}</span>
                            <br />

                        </Paper>
                    </Paper>


                </div>
                <Link to="/">
                    <button className="btn btn-edit2">Back</button>
                </Link>
            </div>
        </div>

    )
}

export default View