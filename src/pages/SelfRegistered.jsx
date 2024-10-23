import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { motion } from 'framer-motion';

const SelfRegistered = () => {
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
        { title: 'Telefon', dataIndex: 'telefon', key: 'telefon' },
        { title: 'Familiya', dataIndex: 'familiya', key: 'familiya' },
        { title: 'Ism', dataIndex: 'ism', key: 'ism' },
        { title: 'Otasi Ism', dataIndex: 'otasiIsm', key: 'otasiIsm' },
        { title: 'Ro\'yxatga oluvchi', dataIndex: 'royxatOluchi', key: 'royxatOluchi' },
        {
            title: 'Harakat',
            key: 'action',
            render: () => <Button className="text-xs" type="primary">Tasdiqlash</Button>,
        },
    ];

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
                    <h2 className="text-lg font-semibold">O'zi ro'yxatga olgan, hali to'lov qilmagan abituriyentlar</h2>
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
                                        {columns.slice(1, -1).map((col, index) => (
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
                                        <td></td> {/* Empty cell for action column */}
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

export default SelfRegistered;
