import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { motion } from 'framer-motion';
import { SlidersHorizontalIcon } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react'; // Для выпадающего списка
import { Fragment } from 'react';

const DTM = () => {
    const [filters, setFilters] = useState({
        id: '',
        familiya: '',
        ism: '',
        sharif: ''
    });

    const data = [
        {
            key: '1',
            id: '12345',
            familiya: 'Ismoilov',
            ism: 'Jasur',
            sharif: 'Karimovich',
            telefon: '+998 90 123-45-67',
            telefon2: '+998 90 765-43-21',
            talimTil: 'O\'zbek',
            talimTuri: 'Maktab',
            talimShakli: 'Bola',
            yunalish: 'Fizika',
            kursi: '1',
            createdAt: '2024-10-01',
            tulovTuri: 'To\'lov',
            tasdiqlovchi: 'Admin',
            ruyxatOluchi: 'Admin',
            shartnoma: 'Shartnoma 1',
        },
        // Add more data if needed
    ];

    const columns = [
        { title: '#', dataIndex: 'key', key: 'key', width: 80 },
        { title: 'Id', dataIndex: 'id', key: 'id', width: 200 },
        { title: 'Familiya', dataIndex: 'familiya', key: 'familiya', width: 200 },
        { title: 'Ism', dataIndex: 'ism', key: 'ism', width: 200 },
        { title: 'Sharif', dataIndex: 'sharif', key: 'sharif', width: 200 },
        { title: 'Telefon', dataIndex: 'telefon', key: 'telefon', width: 200 },
        { title: 'Telefon2', dataIndex: 'telefon2', key: 'telefon2', width: 200 },
        {
            title: 'O\'zgartirish', key: 'edit', width: 150,
            render: (_, record) => (
                <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                    O'zgartirish
                </button>
            ),
        },
        {title: 'Talim Til', dataIndex: 'talimTil', key: 'talimTil', width: 200},
        {title: 'Talim Turi', dataIndex: 'talimTuri', key: 'talimTuri', width: 200},
        {title: 'Talim Shakli', dataIndex: 'talimShakli', key: 'talimShakli', width: 200},
        {title: 'Yunalish', dataIndex: 'yunalish', key: 'yunalish', width: 200},
        {title: 'Kursi', dataIndex: 'kursi', key: 'kursi', width: 200 },
        { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt', width: 200 },
        { title: 'Tulov Turi', dataIndex: 'tulovTuri', key: 'tulovTuri', width: 200 },
        { title: 'Tasdiqlovchi', dataIndex: 'tasdiqlovchi', key: 'tasdiqlovchi', width: 200 },
        { title: 'Ruyxatga Oluvchi', dataIndex: 'ruyxatOluchi', key: 'ruyxatOluchi', width: 200 },
        { title: 'Shartnoma', dataIndex: 'shartnoma', key: 'shartnoma', width: 200 },

    ];

    const filteredData = data.filter(item =>
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
                    <h2 className="text-xl font-semibold">Ro'yxatga olingan, hali to'lov qilmagan abituriyentlar</h2>
                    <div className="flex items-center gap-3">
                        <Button type="primary">Все</Button>
                        {/* Dropdown with Headless UI */}
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    Опции
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    className="absolute right-0 z-[999] mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    href="#"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Опция 1
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    href="#"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                    Опция 2
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>

                {/* Table Filters */}
                <div className="p-3 rounded-md bg-gray-50 mb-4 px-5">
                    <div className="flex gap-4 justify-evenly">
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

                        <button  type="button"
                                className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none">
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

export default DTM;
