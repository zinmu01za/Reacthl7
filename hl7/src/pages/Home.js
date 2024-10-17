import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
    const pageNumbers = [];

    if (currentPage !== 1) {
        pageNumbers.push(1);
    }

    if (currentPage > 4 && currentPage !== 1) {

    }

    // Add page numbers before the current page
    for (let i = currentPage - 2; i < currentPage; i++) {
        if (i > 1) {
            pageNumbers.push(i);
        }
    }

    // Add the current page
    pageNumbers.push(currentPage);

    // Add page numbers after the current page
    for (let i = currentPage + 1; i <= currentPage + 2; i++) {
        if (i < totalPages) {
            pageNumbers.push(i);
        }
    }

    if (currentPage < totalPages - 3 && currentPage !== totalPages) {

    }

    if (currentPage !== totalPages) {
        pageNumbers.push(totalPages);
    }
    return (
        <div>
            {pageNumbers.map(number => (
                <button key={number} style={{ margin: "2px" }} onClick={() => handlePageChange(number)} className={`pagination-button ${number === currentPage ? "active" : ""}`}>
                    {number}
                </button>

            ))}
        </div>
    );
};




const Home = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(30);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("")


    const loadData = useMemo(() => {
        return async () => {
            const response = await axios.get(`http://localhost:3001/staff?page=${currentPage}&per_page=${itemsPerPage}`);
            setData(response.data);
            setTotalPages(Math.ceil(response.data.length / itemsPerPage))
        }
    }, [currentPage, itemsPerPage]);

    useEffect(() => {
        loadData();
    }, [currentPage, loadData]);

    const deleteStaff = (id) => {
        if (window.confirm("คุณต้้องการลบข้อมูลหรือไม่ ?")) {
            axios.delete(`http://localhost:3001/delete/${id}`);
            toast.success("ลบข้อมูลเรียบร้อย");
            setTimeout(() => loadData(), 500);
        }
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(currentPage + (newPage - currentPage));
        loadData();
    }

    const filteredData = data.filter(item => {
        return item.firstnameth.toLowerCase().includes(search.toLowerCase()) ||
            item.lastnameth.toLowerCase().includes(search.toLowerCase()) ||
            item.cid.toLowerCase().includes(search.toLowerCase()) ||
            item.positiontype.toString().toLowerCase().includes(search.toLowerCase()) ||
            item.govid.toString().toLowerCase().includes(search.toLowerCase())
    });



    return (
        <div style={{ marginTop: "20px" }}>
        
            <Link to="/create">
                <button className="btn btn-contact">เพิ่มข้อมูล <FontAwesomeIcon icon={faSave}></FontAwesomeIcon></button>
            </Link>
            <input className="search-data" style={{
                width: "400px"
            }}
                type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>ลำดับ</th>
                        <th style={{ textAlign: "center" }}>เลขประชาชน</th>
                        <th style={{ textAlign: "center" }}>เลขประจำตัวข้าราชการ</th>
                        <th style={{ textAlign: "center" }}>ประเภทข้าราชการ</th>
                        <th style={{ textAlign: "center" }}>ชื่อภาษาไทย</th>
                        <th style={{ textAlign: "center" }}>นามสกุลภาษาไทย</th>
                        <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{(currentPage - 1) * itemsPerPage + index + 1}</th>
                                <td>{item.cid}</td>
                                <td>{item.govid}</td>
                                <td>{item.positiontype}</td>
                                <td>{item.firstnameth}</td>
                                <td>{item.lastnameth}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className="btn btn-edit"><FontAwesomeIcon icon={faEdit} /></button>
                                    </Link>
                                    <Button className="btn btn-delete" onClick={() => deleteStaff(item.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                    <Link to={`/view/${item.id}`}>
                                        <button className="btn btn-view"><FontAwesomeIcon icon={faEye} /></button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            
            <div className="btnn">
                <PaginationControl
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                />
            </div>


        </div>
    )
}

const PaginationControl = ({ currentPage, totalPages, handlePageChange }) => {
    return (
        <div className="pagination-container">
            <button
                className="btn btn-pagination"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            <span className="pagination-info">
                {currentPage}/{totalPages}
            </span>
            <button
                className="btn btn-pagination"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
            
        </div>
        
    )
}









export default Home;