import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react'; // Ensure lucide-react is installed
import { motion } from 'framer-motion';

const Called = () => {
    const [exportCount, setExportCount] = useState(100);
    const [filters, setFilters] = useState({
        telefon: '',
        idRaqam: '',
        familiya: '',
        ism: '',
        otasiIsm: '',
        kursi: '',
        royxatOluchi: ''
    });

    const data = [
        {
            key: '1',
            telefon: '+998 90 123-45-67',
            idRaqam: '12345',
            familiya: 'Ismoilov',
            ism: 'Jasur',
            otasiIsm: 'Karimovich',
            kursi: 'Matematika',
            royxatOluchi: 'Admin',
            createdAt: '2024-10-01',
        },
        // Add more data if needed
    ];

    const totalRecords = 77545; // Total records for display

    const columns = [
        { title: 'Telefon', dataIndex: 'telefon', key: 'telefon' },
        { title: 'ID raqam', dataIndex: 'idRaqam', key: 'idRaqam' },
        { title: 'Familiya', dataIndex: 'familiya', key: 'familiya' },
        { title: 'Ism', dataIndex: 'ism', key: 'ism' },
        { title: 'Otasi Ism', dataIndex: 'otasiIsm', key: 'otasiIsm' },
        { title: 'Kursi', dataIndex: 'kursi', key: 'kursi' },
        { title: 'Ro\'yxatga oluvchi', dataIndex: 'royxatOluchi', key: 'royxatOluchi' },
        { title: 'Sana', dataIndex: 'createdAt', key: 'createdAt' },
        {
            title: 'Harakat',
            key: 'action',
            render: () => <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
            >
              Tasdiqlash
            </button>,
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
                    <h2 className="text-lg font-semibold">O'zi ro'yxatdan o'tgan, hali to'lov qilmagan abituriyentlar</h2>
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
                                        {columns.map(col => (
                                            <th key={col.key}>{col.title}</th>
                                        ))}
                                    </tr>
                                    <tr>
                                        {columns.map((col, index) => (
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

export default Called;
