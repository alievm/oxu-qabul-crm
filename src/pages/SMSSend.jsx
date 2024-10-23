import React from 'react';
import { Table } from 'antd';
import { motion } from 'framer-motion';
import { Upload, MessageCircle, Send, Trash } from 'lucide-react';
import {Link} from "react-router-dom"; // Import icons from Lucide React

const SMSSend = () => {
    const data = [
        {
            key: '1',
            id: '001',
            fio: 'Ismoilov Jasur',
            tel: '+998 90 123-45-67',
            xabar: 'Test message 1',
        },
        {
            key: '2',
            id: '002',
            fio: 'Saidov Azamat',
            tel: '+998 90 765-43-21',
            xabar: 'Test message 2',
        },
        // Add more data if needed
    ];

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Fio', dataIndex: 'fio', key: 'fio' },
        { title: 'Tel', dataIndex: 'tel', key: 'tel' },
        { title: 'Xabar', dataIndex: 'xabar', key: 'xabar' },
    ];

    return (
        <div className="p-5">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <h2 className="text-xl font-semibold mb-4">Abituriyentlarga SMS xabar yuborish</h2>
                <div className="flex gap-4 mb-4">
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-green-500 text-white hover:bg-green-600 focus:outline-none transition-colors focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <Upload className="w-5 h-5" />
                        Royxatni yuklash
                    </button>
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Sms Yuborish
                    </button>
                    <Link
                        to="/sms/send-robot"
                        className="py-2 px-3 inline-flex hover:text-white items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-yellow-400 text-white hover:bg-yellow-500 focus:outline-none transition-colors focus:bg-yellow-500 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <Send className="w-5 h-5" />
                        Avtomat Yuborish
                    </Link>
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none transition-colors focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <Trash className="w-5 h-5" />
                        Tozalash
                    </button>
                </div>

                <Table
                    className="custom-table"
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    bordered
                />
            </motion.div>
        </div>
    );
};

export default SMSSend;
