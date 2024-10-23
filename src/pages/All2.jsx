import React, { useState } from 'react';
import { Table, Input } from 'antd';
import { motion } from 'framer-motion';

const All2 = () => {
    const [filters, setFilters] = useState({
        id: '',
        telefon: '',
        familiya: '',
        ism: '',
        otasiIsm: '',
    });

    // Sample data for the applicants
    const data = [
        {
            key: '1',
            id: '1',
            telefon: '+998 90 123-45-67',
            familiya: 'Ismoilov',
            ism: 'Jasur',
            otasiIsm: 'Karimovich',
        },
        {
            key: '2',
            id: '2',
            telefon: '+998 90 234-56-78',
            familiya: 'Saidov',
            ism: 'Ali',
            otasiIsm: 'Abdulazizovich',
        },
        {
            key: '3',
            id: '3',
            telefon: '+998 90 345-67-89',
            familiya: 'Rahmonov',
            ism: 'Dilmurod',
            otasiIsm: 'Akbarovich',
        },
        // Add more data as needed
    ];

    const columns = [
        { title: '#', dataIndex: 'key', key: 'key' },
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Telefon', dataIndex: 'telefon', key: 'telefon' },
        { title: 'Familiya', dataIndex: 'familiya', key: 'familiya' },
        { title: 'Ism', dataIndex: 'ism', key: 'ism' },
        { title: 'Otasi Ism', dataIndex: 'otasiIsm', key: 'otasiIsm' },
        {
            title: 'Harakat',
            key: 'action',
            render: () => (
                <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                    Tasdiqlash
                </button>
            ),
        },
    ];

    const filteredData = data.filter(item =>
        Object.keys(filters).every(key =>
            !filters[key] || item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
        )
    );

    return (
        <div>
            <motion.div
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, ease: 'easeOut'}}
            >
                <div className="flex items-center justify-between my-5 px-5">
                    <h2 className="text-lg font-semibold">Ro'yxatdan o'tgan abituriyentlar</h2>
                </div>

                <div role="alert" className="mb-4 relative flex w-full p-3 text-sm text-white bg-green-600 rounded-md">
                    Diqqat! O'qishga kirganlardan o'chirishda ehtiyot bo'ling!
                    <button
                        className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5"
                        type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             className="h-5 w-5" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <Table
                    className="custom-table overflow-x-auto"
                    columns={columns}
                    dataSource={filteredData}
                    pagination={false}
                    bordered
                    components={{
                        header: {
                            row: () => (
                                <>
                                    <tr>{columns.map(col => (
                                        <th key={col.key}>{col.title}</th>
                                    ))}</tr>
                                    <tr>{columns.map((col, index) => (
                                        <td className="p-3 bg-white" key={index}>
                                            {col.key !== 'action' ? ( // Skip filter for action column
                                                <Input
                                                    placeholder={`Filtr ${col.title}`}
                                                    value={filters[col.dataIndex]}
                                                    onChange={(e) => setFilters({
                                                        ...filters,
                                                        [col.dataIndex]: e.target.value
                                                    })}
                                                />
                                            ) : (
                                                <span></span> // Empty cell for action column
                                            )}
                                        </td>
                                    ))}</tr>
                                </>
                            ),
                        },
                    }}
                />
            </motion.div>
        </div>
    );
};

export default All2;
