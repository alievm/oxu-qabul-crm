import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { motion } from 'framer-motion';
import {ReceiptTextIcon} from "lucide-react";

const All = () => {
    const [exportCount, setExportCount] = useState(100);
    const [filters, setFilters] = useState({
        telefon: '',
        familiya: '',
        ism: '',
        otasiIsm: '',
        royxatOluchi: ''
    });

    const data = [
        {
            key: '1',
            id: '1',
            telefon: '+998 90 123-45-67',
            familiya: 'Ismoilov',
            ism: 'Jasur',
            otasiIsm: 'Karimovich',
            royxatOluchi: 'Admin',
            createdAt: '2024-10-01',
        }, {
            key: '1',
            id: '1',
            telefon: '+998 90 123-45-67',
            familiya: 'Ismoilov',
            ism: 'Jasur',
            otasiIsm: 'Karimovich',
            royxatOluchi: 'Admin',
            createdAt: '2024-10-01',
        }, {
            key: '1',
            id: '1',
            telefon: '+998 90 123-45-67',
            familiya: 'Ismoilov',
            ism: 'Jasur',
            otasiIsm: 'Karimovich',
            royxatOluchi: 'Admin',
            createdAt: '2024-10-01',
        },
        // Add more data if needed
    ];

    const totalRecords = 77545; // Total records for display

    const columns = [
        { title: '#', dataIndex: 'key', key: 'key', width: 50 }, // Empty column for #
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Telefon', dataIndex: 'telefon', key: 'telefon' },
        { title: 'Familiya', dataIndex: 'familiya', key: 'familiya' },
        { title: 'Ism', dataIndex: 'ism', key: 'ism' },
        { title: 'Otasi Ism', dataIndex: 'otasiIsm', key: 'otasiIsm' },
            {
                title: 'O\'zgartirish',
                key: 'edit',
                render: () => (
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        O'zgartirish
                    </button>
                ),
            },
            {
                title: 'O\'qishda kirdi',
                width: 170,
                key: 'admitted',
                render: () => (
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-green-500 text-white hover:bg-green-600 focus:outline-none transition-colors focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        O'qishda kirdi
                    </button>
                ),
            },
            {
                title: 'Tolovni bekor qilish',
                width: 200,
                key: 'cancel',
                render: () => (
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none transition-colors focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        Tolovni bekor qilish
                    </button>
                ),
            },

            ,
]
    ;

    const filteredData = data.filter(item =>
        Object.keys(filters).every(key =>
            !filters[key] || item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
        )
    );

    const currentRecordsCount = filteredData.length; // Display count of current records
    const startRecord = 1; // Adjust based on pagination logic
    const endRecord = currentRecordsCount < 20 ? currentRecordsCount : 20; // Example for showing 20 records max

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className="flex items-center justify-between my-5 px-5">
                    <h2 className="text-xl font-semibold">O'zi ro'yxatga olgan, hali to'lov qilmagan abituriyentlar</h2>
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
                                    <tr>
                                        <th>#</th> {/* Empty column for # */}
                                        {columns.slice(1).map(col => (
                                            <th key={col.key}>{col.title}</th>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td></td> {/* Empty cell for # filter */}
                                        {columns.slice(1, -4).map((col, index) => ( // Exclude action columns
                                            <td className="p-3 bg-white" key={index}>
                                                <Input
                                                    placeholder={`Filtr ${col.title}`}
                                                    value={filters[col.dataIndex]}
                                                    onChange={(e) => setFilters({
                                                        ...filters,
                                                        [col.dataIndex]: e.target.value
                                                    })}
                                                />
                                            </td>
                                        ))}
                                        <td></td> {/* Empty cells for action columns */}
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </>
                            )
                        }
                    }}
                />
            </motion.div>
        </div>
    );
};

export default All;
