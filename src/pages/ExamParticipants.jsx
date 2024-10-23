import React from 'react';
import { Table, Button } from 'antd';
import { motion } from 'framer-motion';
import {MessageCircleReplyIcon, RefreshCw, RefreshCwIcon, UserCheckIcon} from "lucide-react";

const ExamParticipants = () => {
    const data = [
        {
            key: '1',
            jshir: '123456789',
            fio: 'Ismoilov Jasur',
            ball: 85,
        },
        {
            key: '2',
            jshir: '987654321',
            fio: 'Saidov Azamat',
            ball: 90,
        },
        // Add more data if needed
    ];

    const columns = [
        { title: 'Jshir', dataIndex: 'jshir', key: 'jshir' },
        { title: 'Fio', dataIndex: 'fio', key: 'fio' },
        { title: 'Ball', dataIndex: 'ball', key: 'ball' },
    ];

    return (
        <div className="p-5">
            <motion.div
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, ease: 'easeOut'}}
            >
                <h2 className="text-xl font-semibold mb-4">Imtihon natijalarini SMS orqali yuborish va shartnomani tasdiqlash</h2>
                <div className="flex gap-4 mb-4">
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors focus:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <RefreshCwIcon className="w-5 h-5"/>
                        Yangi ro'yxatni yuklash
                    </button>
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-green-500 text-white hover:bg-green-600 focus:outline-none transition-colors focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <MessageCircleReplyIcon className="w-5 h-5"/>
                        SMS yuborish
                    </button>
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none transition-colors focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <UserCheckIcon className="w-5 h-5"/>
                        Tasdiqlash
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

export default ExamParticipants;
