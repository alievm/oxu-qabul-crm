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

const PaymentConfirmed = () => {
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
            onlineImtihon: 'Kod: 1802800, Vaqt: 2024-10-24 10:00:00',
        },
        {
            key: '2',
            id: '67890',
            familiya: 'Tursunova',
            ism: 'Dilnoza',
            sharif: 'Shukurovna',
            telefon: '+998 91 123-45-67',
            telefon2: '+998 91 765-43-21',
            talimTil: 'Rus',
            talimTuri: 'Litsey',
            talimShakli: 'Qiz',
            yunalish: 'Matematika',
            kursi: '2',
            createdAt: '2024-09-15',
            tulovTuri: 'Grant',
            tasdiqlovchi: 'Rahbar',
            ruyxatOluchi: 'Operator',
            shartnoma: 'Shartnoma 2',
            onlineImtihon: 'badge green', // Зеленый значок
        },
        {
            key: '3',
            id: '54321',
            familiya: 'Xolmatov',
            ism: 'Odil',
            sharif: 'Sobirovich',
            telefon: '+998 92 123-45-67',
            telefon2: '+998 92 765-43-21',
            talimTil: 'Ingliz',
            talimTuri: 'Oliy',
            talimShakli: 'Kattalar',
            yunalish: 'Informatika',
            kursi: '3',
            createdAt: '2024-08-10',
            tulovTuri: 'To\'lov',
            tasdiqlovchi: 'Nazorat',
            ruyxatOluchi: 'Operator',
            shartnoma: 'Shartnoma 3',
            onlineImtihon: 'badge red', // Красный значок
        },
        {
            key: '4',
            id: '98765',
            familiya: 'Usmonov',
            ism: 'Alisher',
            sharif: 'Abdurahmonovich',
            telefon: '+998 93 123-45-67',
            telefon2: '+998 93 765-43-21',
            talimTil: 'O\'zbek',
            talimTuri: 'Universitet',
            talimShakli: 'Kattalar',
            yunalish: 'Kimyo',
            kursi: '4',
            createdAt: '2024-07-20',
            tulovTuri: 'To\'lov',
            tasdiqlovchi: 'Admin',
            ruyxatOluchi: 'Operator',
            shartnoma: 'Shartnoma 4',
            onlineImtihon: 'Kod: 1802801, Vaqt: 2024-11-02 12:00:00',
        },
        {
            key: '5',
            id: '34567',
            familiya: 'Yuldasheva',
            ism: 'Gulnoza',
            sharif: 'Abdusamatovna',
            telefon: '+998 94 123-45-67',
            telefon2: '+998 94 765-43-21',
            talimTil: 'Rus',
            talimTuri: 'Kollej',
            talimShakli: 'Qiz',
            yunalish: 'Geografiya',
            kursi: '1',
            createdAt: '2024-09-05',
            tulovTuri: 'Grant',
            tasdiqlovchi: 'Rahbar',
            ruyxatOluchi: 'Admin',
            shartnoma: 'Shartnoma 5',
            onlineImtihon: 'badge red', // Красный значок
        },
    ];


    const columns = [
        { title: '#', dataIndex: 'key', key: 'key', width: 80 },
        { title: 'Telefon', dataIndex: 'telefon', key: 'telefon', width: 200 },
        {
            title: 'Fio',
            key: 'fio',
            width: 300,
            render: (_, record) => `${record.familiya} ${record.ism} ${record.sharif}`
        },
        { title: 'Id raqam', dataIndex: 'id', key: 'id', width: 200 },
        { title: 'Talim Til', dataIndex: 'talimTil', key: 'talimTil', width: 200 },
        { title: 'Talim Turi', dataIndex: 'talimTuri', key: 'talimTuri', width: 200 },
        { title: 'Talim Shakli', dataIndex: 'talimShakli', key: 'talimShakli', width: 200 },
        { title: 'Yunalish', dataIndex: 'yunalish', key: 'yunalish', width: 200 },
        { title: 'Kursi', dataIndex: 'kursi', key: 'kursi', width: 200 },
        { title: 'Qo\'shimcha raqam', dataIndex: 'telefon2', key: 'telefon2', width: 200 },
        {
            title: 'Chek',
            fixed: 'right',
            key: 'check',
            width: 50,
            render: (_, record) => (

                <button
                    type="button"
                    className="py-1 px-1 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none transition-colors focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <ReceiptTextIcon strokeWidth="1.5"/>
                </button>


            ),
        },
        {
            title: 'Edit',
            fixed: 'right',
            key: 'edit',
            width: 50,
            render: (_, record) => (
                <button
                    type="button"
                    className="py-1 px-1 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-purple-500 text-white hover:bg-purple-600 focus:outline-none transition-colors focus:bg-purple-600 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <UserRoundPenIcon strokeWidth="1.5"/>
                </button>
            ),
        },
        {
            title: 'Online imtihon',
            key: 'onlineExam',
            width: 200,
            fixed: 'right',
            render: (_, record) => {
                if (record.onlineImtihon.includes('Kod')) {
                    // Отображение кода и даты
                    const [code, date] = record.onlineImtihon.split(', Vaqt: ');
                    return (
                        <div className="text-xs">
                            <div className="font-medium text-gray-400 uppercase">{code}</div>
                            <div><span className="font-semibold uppercase">Vaqt: {date}</span> </div>
                        </div>
                    );
                } else if (record.onlineImtihon === 'badge green') {
                    // Зеленый бейдж
                    return <span
                        className="bg-green-500 font-semibold text-white text-center py-1 px-2 text-xs rounded">Muvaffaqiyatli</span>
                    // <span className="mc zp aen akd asa asm axf axh aza bda bde bdy">Muvaffaqiyatli</span>;
                } else if (record.onlineImtihon === 'badge red') {
                    // Красный бейдж
                    return <span
                        className="bg-red-500 font-semibold text-white text-center py-1 px-2 text-xs rounded">Muvaffaqiyatsiz</span>
                    //   <span className="mc zp aen alh asa asm axf axh bae bda bde beo">
                    // Muvaffaqiyatsiz
                    // </span>;
                } else {
                    return null;
                }
            }
        },
        {title: 'Created At', dataIndex: 'createdAt', key: 'createdAt', width: 200 },
        { title: 'Tulov Turi', dataIndex: 'tulovTuri', key: 'tulovTuri', width: 200 },
        { title: 'Tasdiqlovchi', dataIndex: 'tasdiqlovchi', key: 'tasdiqlovchi', width: 200 },
        { title: 'Ruyxatga Oluvchi', dataIndex: 'ruyxatOluchi', key: 'ruyxatOluchi', width: 200 },
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
                    <h2 className="text-xl font-semibold">Tasdiqlangan abituriyentlar</h2>
                    <div className="flex items-center gap-3">
                        <Button type="primary">Xamma ma'lumotni korish</Button>
                        {/* Dropdown with Headless UI */}
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    Excel
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
                                                   1000
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    href="#"
                                                    className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                                                >
                                                   10 000
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

export default PaymentConfirmed;
