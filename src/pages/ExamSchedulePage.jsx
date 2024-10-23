import React from 'react';
import { Table, Typography, Divider } from 'antd';
import {Trash} from "lucide-react";
import TextArea from "antd/lib/input/TextArea.js";
import {motion} from "framer-motion";
const { Title, Text } = Typography;

const ExamSchedulePage = () => {
    // Sample data for the online exam table
    const onlineData = [
        {
            key: '1',
            examTime: '10:00 AM - 12:00 PM',
            maxParticipants: 100,
            actualParticipants: 85,
        },
        {
            key: '2',
            examTime: '2:00 PM - 4:00 PM',
            maxParticipants: 50,
            actualParticipants: 30,
        },
        // Add more data as needed
    ];

    // Column definitions for the online exam table
    const onlineColumns = [
        {
            title: 'Imtihon Vaqti',
            dataIndex: 'examTime',
            key: 'examTime',
            width: 200,
        },
        {
            title: 'Test topshiruvchilar maksimal soni',
            dataIndex: 'maxParticipants',
            key: 'maxParticipants',
            width: 250,
        },
        {
            title: 'Test topshiruvchi abiyuriyentlar soni',
            dataIndex: 'actualParticipants',
            key: 'actualParticipants',
            width: 250,
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

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
        <div className="container mx-auto p-5">
            <div className="w-full flex items-center justify-between mb-4">
                <Title level={4}>Online imtihon vaqti</Title>
                <button type="button"
                        className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-500 text-white hover:bg-green-600 transition-colors focus:outline-none focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none">
                    Imtihon vaqtini qo'shish
                </button>
            </div>
            <Table
                className="custom-table2"
                dataSource={onlineData}
                columns={onlineColumns}
                pagination={false}
                bordered
                summary={() => (
                    <Table.Summary>
                        <Table.Summary.Row>
                            <Table.Summary.Cell colSpan={1}>
                                <Text strong>Umumiy:</Text>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell colSpan={1}/>
                            <Table.Summary.Cell colSpan={1}>
                                {/* Optional: Total participants summary */}
                                <Text>{onlineData.reduce((total, item) => total + item.actualParticipants, 0)} / {onlineData.reduce((total, item) => total + item.maxParticipants, 0)}</Text>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell colSpan={1}/>
                        </Table.Summary.Row>
                    </Table.Summary>
                )}
            />

            <Divider/>

            <Title level={4}>Offline imtihon vaqti</Title>
            <Text>Xabar: Offline imtihon vaqti haqida ma'lumot qo'shiladi.</Text>
            <TextArea rows={4}/>
            <button type="button"
                    className="py-2 px-4 mt-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-500 text-white hover:bg-green-600 transition-colors focus:outline-none focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none">
              O'zgartirish
            </button>
        </div>
        </motion.div>
    );
};

export default ExamSchedulePage;
