import React, { useState } from 'react';
import {Table, Input, Button, Badge} from 'antd';
import { motion } from 'framer-motion';
import {
    BadgeCheckIcon,
    FilePenLineIcon,
    ReceiptTextIcon,
    SlidersHorizontalIcon,
    UserCheckIcon,
    UserRoundCheckIcon, UserRoundPenIcon
} from 'lucide-react';
import { Menu, Transition } from '@headlessui/react'; // Для выпадающего списка
import { Fragment } from 'react';

const SelfConfirmed = () => {
    const [filters, setFilters] = useState({
        id: '',
        familiya: '',
        ism: '',
        sharif: ''
    });

    const dataSource = [
        {
            key: '1',
            telefon: '+998 33 557-00-09',
            fio: 'dewdewded dededede ededed',
            idRaqqam: '123456',
            talimTil: 'O`zbek',
            talimTuri: 'Bakalavr',
            talimShakli: 'Sirtqi',
            yunalish: '60220300 - Tarix (mamlakatlar va yo‘nalishlar bo‘yicha)',
            kursi: '1',
            onlineTolov: 'Ha',
            createdAt: '2024-10-20',
            tulovTuri: 'Naqd',
            tasdiqlovchi: 'admin',
            ruyxatgaOluvchi: 'admin'
        },
        // Добавьте больше объектов по необходимости
    ];

    const columns = [
        {
            title: 'Telefon',
            dataIndex: 'telefon',
            key: 'telefon',
        },
        {
            title: 'Fio',
            dataIndex: 'fio',
            key: 'fio',
        },
        {
            title: 'Id raqam',
            dataIndex: 'idRaqqam',
            key: 'idRaqqam',
        },
        {
            title: 'Talim Til',
            dataIndex: 'talimTil',
            key: 'talimTil',
        },
        {
            title: 'Talim Turi',
            dataIndex: 'talimTuri',
            key: 'talimTuri',
        },
        {
            title: 'Talim Shakli',
            dataIndex: 'talimShakli',
            key: 'talimShakli',
        },
        {
            title: 'Yunalish',
            dataIndex: 'yunalish',
            key: 'yunalish',
        },
        {
            title: 'Kursi',
            dataIndex: 'kursi',
            key: 'kursi',
        },
        {
            title: 'Online to\'lov',
            dataIndex: 'onlineTolov',
            key: 'onlineTolov',
            render: () => (
                <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                   Online imtihon
                </button>
            ),
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Tulov Turi',
            dataIndex: 'tulovTuri',
            key: 'tulovTuri',
        },
        {
            title: 'Tasdiqlovchi',
            dataIndex: 'tasdiqlovchi',
            key: 'tasdiqlovchi',
        },
        {
            title: 'Ruyxatga Oluvchi',
            dataIndex: 'ruyxatgaOluvchi',
            key: 'ruyxatgaOluvchi',
        },
    ];


    const filteredData = dataSource.filter(item =>
        Object.keys(filters).every(key =>
            !filters[key] || item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
        )
    );

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {/* Flex container with buttons */}
                <div className="flex justify-between items-center space-x-4 mb-5">
                    <h2 className="text-xl font-semibold">O'zi tasdiqlagan abituriyentlar</h2>
                </div>

                {/* Table Filters */}
                <div className="p-3 rounded-md bg-gray-50 mb-4 px-5">
                    <div className="flex gap-4 justify-start">
                        <Input size="middle"
                               prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400"/>}
                               placeholder="Id"
                               value={filters.id}
                               onChange={(e) => setFilters({...filters, id: e.target.value})}
                               style={{marginRight: 10, width: 220}}
                        />
                        <Input size="middle"
                               prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400"/>}
                               placeholder="Familiya"
                               value={filters.familiya}
                               onChange={(e) => setFilters({...filters, familiya: e.target.value})}
                               style={{marginRight: 10, width: 220}}
                        />
                        <Input size="middle"
                               prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400"/>}
                               placeholder="Ism"
                               value={filters.ism}
                               onChange={(e) => setFilters({...filters, ism: e.target.value})}
                               style={{marginRight: 10, width: 220}}
                        />
                        <Input size="middle"
                               prefix={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400"/>}
                               placeholder="Sharif"
                               value={filters.sharif}
                               onChange={(e) => setFilters({...filters, sharif: e.target.value})}
                               style={{marginRight: 10, width: 220}}
                        />

                        <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            Filtrlarni tozalash
                        </button>

                    </div>
                </div>

                {/* Table */}
                <Table
                    className="custom-table overflow-x-auto [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-blue-500
  [&::-webkit-scrollbar-thumb]:bg-blue-500
  dark:[&::-webkit-scrollbar-track]:bg-transparent
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-500"
                    rowClassName="even:bg-blue-50/50"
                    columns={columns}
                    dataSource={filteredData}
                    pagination={false}
                    bordered
                    scroll={{ x: 'max-content'}} // Enable horizontal scrolling
                />
            </motion.div>
        </div>
    );
};

export default SelfConfirmed;
