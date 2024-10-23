import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { Menu, Transition } from '@headlessui/react';
import {ChevronDownIcon} from "lucide-react";
// import { ChevronDownIcon } from '@heroicons/react/solid';
import {motion} from "framer-motion";
const Enrolled = () => {
    const [exportCount, setExportCount] = useState(100);
    const [filters, setFilters] = useState({
        telefon: '',
        idRaqam: '',
        familiya: '',
        ism: '',
        otasiIsm: '',
        royxatOluchi: '',
        qosimchaRaqam: ''
    });

    const data = [
        {
            key: '1',
            telefon: '+998 90 123-45-67',
            idRaqam: '12345',
            familiya: 'Ismoilov',
            ism: 'Jasur',
            otasiIsm: 'Karimovich',
            royxatOluchi: 'Admin',
            createdAt: '2024-10-01',
            qosimchaRaqam: '+998 90 987-65-43'
        },
    ];

    const totalRecords = 77545; // Total records for display

    const columns = [
        { title: '#', dataIndex: 'key', key: 'key', width: 50 },
        { title: 'Telefon', dataIndex: 'telefon', key: 'telefon' },
        { title: 'ID raqam', dataIndex: 'idRaqam', key: 'idRaqam' },
        { title: 'Familiya', dataIndex: 'familiya', key: 'familiya' },
        { title: 'Ism', dataIndex: 'ism', key: 'ism' },
        { title: 'Otasi Ism', dataIndex: 'otasiIsm', key: 'otasiIsm' },
        { title: 'Ro\'yxatga oluvchi', dataIndex: 'royxatOluchi', key: 'royxatOluchi' },
        { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
        { title: 'Qo\'shimcha raqam', dataIndex: 'qosimchaRaqam', key: 'qosimchaRaqam' },
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
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, ease: 'easeOut'}}
            >

                <div className="flex items-center justify-between my-5 px-5">
                    <h2 className="text-lg font-semibold">Ro'yxatga olingan, hali to'lov qilmagan abituriyentlar</h2>

                    <div className="flex items-center gap-3">
                    <span
                        className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-500 ring-1 ring-inset ring-yellow-600/20">
                        Показаны {startRecord}-{endRecord} из {totalRecords} записи
                    </span>

                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ">
                                    Excel Export
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                                </Menu.Button>
                            </div>

                            <Transition
                                as={React.Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="p-1">
                                        {[100, 1000, 10000].map(count => (
                                            <Menu.Item key={count}>
                                                {({active}) => (
                                                    <button
                                                        onClick={() => setExportCount(count)}
                                                        className={`${
                                                            active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                                        } group flex rounded-md items-center w-full p-2 text-sm`}
                                                    >
                                                        {count}
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
                <Table
                    className="custom-table  overflow-x-auto"
                    columns={columns}
                    dataSource={filteredData}
                    pagination={false}
                    bordered
                    components={{
                        header: {
                            row: () => (
                                <>
                                    <tr>
                                        <th>#</th>
                                        {columns.slice(1).map(col => (
                                            <th key={col.key}>{col.title}</th>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td></td>
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

export default Enrolled;
