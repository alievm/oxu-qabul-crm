import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { motion } from 'framer-motion';
import {SlidersHorizontalIcon, Trash, UserRoundPenIcon} from 'lucide-react';

const SuperContract = () => {
    const [filters, setFilters] = useState({
        id: '',
        fish: '',
        telefon: '',
        talimTil: '',
        summa: '',
        talimShakli: '',
        talimTuri: '',
        yunalish: '',
        kursi: '',
        yoshi: '',
        arizaTuri: '',
        telefon2: '',
        yuklanishlarSoni: '',
    });

    const data = [
        {
            key: '1',
            id: '12345',
            fish: 'Ismoilov Jasur Karimovich',
            telefon: '+998 90 123-45-67',
            talimTil: 'O\'zbek',
            summa: '500 000',
            talimShakli: 'Bola',
            talimTuri: 'Maktab',
            yunalish: 'Fizika',
            kursi: '1',
            yoshi: '18',
            arizaTuri: 'Boshqa',
            telefon2: '+998 90 765-43-21',
            yuklanishlarSoni: '5',
        },
        // Add more data as needed
    ];

    const columns = [
        { title: 'Id raqam', dataIndex: 'id', key: 'id', width: 120 }, // Wider width
        { title: 'Fish', dataIndex: 'fish', key: 'fish', width: 250 }, // Wider width
        { title: 'Telefon', dataIndex: 'telefon', key: 'telefon', width: 200 }, // Wider width
        { title: 'Talim Tili', dataIndex: 'talimTil', key: 'talimTil', width: 150 }, // Wider width
        { title: 'Summa', dataIndex: 'summa', key: 'summa', width: 150 }, // Wider width
        { title: 'Talim Shakli', dataIndex: 'talimShakli', key: 'talimShakli', width: 150 }, // Wider width
        { title: 'Talim Turi', dataIndex: 'talimTuri', key: 'talimTuri', width: 150 }, // Wider width
        { title: 'Yunalish', dataIndex: 'yunalish', key: 'yunalish', width: 150 }, // Wider width
        { title: 'Kursi', dataIndex: 'kursi', key: 'kursi', width: 80 }, // Wider width
        { title: 'Yoshi', dataIndex: 'yoshi', key: 'yoshi', width: 80 }, // Wider width
        { title: 'Ariza turi', dataIndex: 'arizaTuri', key: 'arizaTuri', width: 150 }, // Wider width
        { title: 'Telefon2', dataIndex: 'telefon2', key: 'telefon2', width: 200 }, // Wider width
        { title: 'Yuklanishlar Soni', dataIndex: 'yuklanishlarSoni', key: 'yuklanishlarSoni', width: 150 }, // Wider width
        {
            title: 'O\'zgartirish',
            fixed: 'right',
            key: 'edit',
            width: 120, // Wider width
            render: (_, record) => (
                <button
                    type="button"
                    className="py-2 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <UserRoundPenIcon className="w-5 h-5" strokeWidth="1.5"/>
                </button>
            ),
        },
        {
            title: 'O\'chirish',
            key: 'delete',
            fixed: 'right',
            width: 120, // Wider width
            render: (_, record) => (
                <button
                    type="button"
                    className="py-2 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none transition-colors focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <Trash className="w-5 h-5" />
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
        <div className="min-h-screen p-6">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {/* Header Section */}
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Abituriyentlar Ro'yxati</h2>

                {/* Filter Section */}
                <div className="bg-white p-4 rounded-md mb-4">
                    <div className="flex gap-4 ">
                        <Input
                            size="middle"
                            prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400"/>}
                            placeholder="Ariza turi"
                            value={filters.arizaTuri}
                            onChange={(e) => setFilters({...filters, arizaTuri: e.target.value})}
                            className="w-1/4"
                        />
                        <Input
                            size="middle"
                            prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400"/>}
                            placeholder="Telefon2"
                            value={filters.telefon2}
                            onChange={(e) => setFilters({...filters, telefon2: e.target.value})}
                            className="w-1/4"
                        />
                        <Input
                            size="middle"
                            prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400"/>}
                            placeholder="Yuklanishlar Soni"
                            value={filters.yuklanishlarSoni}
                            onChange={(e) => setFilters({...filters, yuklanishlarSoni: e.target.value})}
                            className="w-1/4"
                        />
                        <button type="button"
                                className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none">
                            Filtrlarni tozalash
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <Table
                    scroll={{x: 'max-content'}}
                    bordered
                    columns={columns}
                    dataSource={filteredData}
                    pagination={{pageSize: 10}}
                    rowKey="id"
                    className="bg-white custom-table rounded-md"
                />
            </motion.div>
        </div>
    );
};

export default SuperContract;
