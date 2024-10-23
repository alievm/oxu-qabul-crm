import React from 'react';
import { Table, Typography, Input } from 'antd';
import {motion} from "framer-motion";
const { Title } = Typography;

const Staff = () => {
    // Sample data for the employees table
    const employeesData = [
        {
            key: '1',
            employee: 'John Doe',
            login: 'john.doe',
            password: 'password123',
        },
        {
            key: '2',
            employee: 'Jane Smith',
            login: 'jane.smith',
            password: 'password456',
        },
        {
            key: '3',
            employee: 'Bob Johnson',
            login: 'bob.johnson',
            password: 'password789',
        },
        // Add more employee data as needed
    ];

    // Column definitions for the employees table
    const columns = [
        {
            title: 'Xodim',
            dataIndex: 'employee',
            key: 'employee',
            width: 200,
        },
        {
            title: 'Login',
            dataIndex: 'login',
            key: 'login',
            width: 200,
        },
        {
            title: 'Parol',
            dataIndex: 'password',
            key: 'password',
            width: 200,
        },
    ];

    // Render custom header and input row for filtering
    const customHeader = () => (
        <>
            <tr>
                {columns.map(col => (
                    <th key={col.key}>{col.title}</th>
                ))}
            </tr>
            <tr>
                {columns.map((col, index) => (
                    <td className="p-3 bg-white" key={index}>
                        <Input
                            placeholder={`Filtr ${col.title}`}
                            allowClear
                        />
                    </td>
                ))}
            </tr>
        </>
    );

    return (  <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
    >
        <div className="container mx-auto p-5">
            <div className="w-full flex items-center justify-between mb-4">
                <Title level={4}>Xodimlar</Title>
                <button type="button"
                        className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-500 text-white hover:bg-green-600 transition-colors focus:outline-none focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none">
                   Yangi xodim qo'shish
                </button>
            </div>
            <Table
                className="custom-table2"
                dataSource={employeesData}
                columns={columns}
                pagination={false}
                bordered
                components={{
                    header: {
                        row: customHeader,
                    }
                }}
            />
        </div>
        </motion.div>
    );
};

export default Staff;
