import React, { useEffect, useState } from 'react';

import styles from './Dashboard.module.css';
import Breadcrumb from '@/components/UI/Breadcrumb/Breadcrumb';
import TotalCalender from '@/components/UI/Dashboard/TotalCalender/TotalCalender';
import TotalCar from '@/components/UI/Dashboard/TotalCar/TotalCar';
import TotalCustomer from '@/components/UI/Dashboard/TotalCustomer/TotalCustomer';
import TotalRevenue from '@/components/UI/Dashboard/TotalRevenue/TotalRevenue';
import TotalUser from '@/components/UI/Dashboard/TotalUser/TotalUser';
import DataTable from '@/components/UI/Table/DataTable';
import { getUserApi } from '@/utils/api';

const Dashboard = ({ toggle }) => {
    
    const [userData,setUserData] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserApi();
                console.log('dataTable',response)
                setUserData(response);
                setLoading(false);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu người dùng:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    
    return (
        <div>
            <div className={styles.dashboardWrapper}>
                <div className={toggle ? styles.dashContentWithSidebar : styles.dashContentFull}>
                    <div className={styles.dashBoard}>
                        <Breadcrumb items={['Tổng quan']} />
                    </div>
                    <div className={styles.dashBoardHead}>
                        <TotalCalender />
                        <TotalCar />
                        <TotalCustomer />
                        <TotalRevenue />
                        <TotalUser />
                    </div>
                    <div>
                        <DataTable data={userData} itemsPerPage={5} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
