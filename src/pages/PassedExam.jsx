import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { motion } from 'framer-motion';
import {SlidersHorizontalIcon, Trash, UserRoundPenIcon} from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const PassedExam = () => {
    const [filters, setFilters] = useState({
        id: '',
        fish: '',
        telefon: '',
        talimTil: '',
        talimTuri: '',
        yunalish: '',
        kursi: '',
        telefon2: '',
        arizaTuri: '',
        yoshi: '',
        yuklanishlarSoni: '',
    });

    const data = [
        {
            key: '1',
            id: '12345',
            fish: 'Ismoilov Jasur Karimovich',
            telefon: '+998 90 123-45-67',
            talimTil: 'O\'zbek',
            talimShakli: 'Bola',
            talimTuri: 'Maktab',
            yunalish: 'Fizika',
            kursi: '1',
            telefon2: '+998 90 765-43-21',
            arizaTuri: 'Boshqa',
            yoshi: '18',
            yuklanishlarSoni: '5',
        },
        // Add more data as needed
    ];

    const columns = [
        { title: '#', dataIndex: 'key', key: 'key', width: 50 },
        { title: 'Id raqam', dataIndex: 'id', key: 'id', width: 100 },
        { title: 'Fish', dataIndex: 'fish', key: 'fish', width: 200 },
        { title: 'Telefon', dataIndex: 'telefon', key: 'telefon', width: 170 },
        { title: 'Talim Tili', dataIndex: 'talimTil', key: 'talimTil', width: 100 },
        { title: 'Talim Shakli', dataIndex: 'talimShakli', key: 'talimShakli', width: 100 },
        { title: 'Talim Turi', dataIndex: 'talimTuri', key: 'talimTuri', width: 100 },
        { title: 'Yunalish', dataIndex: 'yunalish', key: 'yunalish', width: 100 },
        { title: 'Kursi', dataIndex: 'kursi', key: 'kursi', width: 50 },
        { title: 'Telefon2', dataIndex: 'telefon2', key: 'telefon2', width: 170 },
        { title: 'Ariza turi', dataIndex: 'arizaTuri', key: 'arizaTuri', width: 100 },
        { title: 'Yoshi', dataIndex: 'yoshi', key: 'yoshi', width: 50 },
        { title: 'Yuklanishlar Soni', dataIndex: 'yuklanishlarSoni', key: 'yuklanishlarSoni', width: 100 },
        {
            title: 'O\'zgartirish',
            key: 'edit',
            width: 100,
            render: (_, record) => (
                <button
                    type="button"
                    className="py-2 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <UserRoundPenIcon  className="w-5 h-5" strokeWidth="1.5"/>
                </button>
            ),
        },
        {
            title: 'O\'chirish',
            key: 'delete',
            width: 100,
            render: (_, record) => (
                <button
                    type="button"
                    className="py-2 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none transition-colors focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <Trash className="w-5 h-5" />
                </button>
            ),
        },
        {
            title: 'Yuqori kursga ko\'chirish',
            key: 'promote',
            fixed: 'right',
            width: 230,
            render: (_, record) => (
                <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-green-500 text-white hover:bg-green-600 focus:outline-none transition-colors focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                    Yuqori kursga ko'chirish
                </button>
            ),
        },
        {
            title: 'Pastgi kursga ko\'chirish',
            key: 'demote',
            fixed: 'right',
            width: 230,
            render: (_, record) => (
                <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-yellow-400 text-white hover:bg-yellow-500 focus:outline-none transition-colors focus:bg-yellow-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                    Pastgi kursga ko'chirish
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
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Imtihondan o'tganlar</h2>

                {/* Filter Section */}
                <div className="bg-white p-4 rounded-md shadow-lg mb-4">
                    <div className="flex gap-4 justify-between">
                        <Input size="middle"
                               prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400" />}
                               placeholder="Id raqam"
                               value={filters.id}
                               onChange={(e) => setFilters({ ...filters, id: e.target.value })}
                               className="w-1/4"
                        />
                        <Input size="middle"
                               prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400" />}
                               placeholder="Familiya"
                               value={filters.fish}
                               onChange={(e) => setFilters({ ...filters, fish: e.target.value })}
                               className="w-1/4"
                        />
                        <Input size="middle"
                               prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400" />}
                               placeholder="Telefon"
                               value={filters.telefon}
                               onChange={(e) => setFilters({ ...filters, telefon: e.target.value })}
                               className="w-1/4"
                        />
                        <Input size="middle"
                               prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400" />}
                               placeholder="Talim Tili"
                               value={filters.talimTil}
                               onChange={(e) => setFilters({ ...filters, talimTil: e.target.value })}
                               className="w-1/4"
                        />
                    </div>
                    <div className="flex gap-4 mt-4">
                        <Input size="middle"
                               prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400"/>}
                               placeholder="Yunalish"
                               value={filters.yunalish}
                               onChange={(e) => setFilters({...filters, yunalish: e.target.value})}
                               className="w-1/4"
                        />
                        <Input size="middle"
                               prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400"/>}
                               placeholder="Kursi"
                               value={filters.kursi}
                               onChange={(e) => setFilters({...filters, kursi: e.target.value})}
                               className="w-1/4"
                        />
                        <button type="button"
                                className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none">
                            Filtrlarni tozalash
                        </button>
                    </div>
                </div>

                {/* Data Table */}
                <Table
                    className="custom-table overflow-x-auto"
                    columns={columns}
                    dataSource={filteredData}
                    pagination={false}
                    bordered
                    scroll={{x: 'max-content'}}
                />
            </motion.div>
        </div>
    );
};

export default PassedExam;
