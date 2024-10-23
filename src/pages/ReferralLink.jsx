import React from 'react';
import { Table, Typography } from 'antd';
import {Link} from "react-router-dom";
import {Trash} from "lucide-react";
import {motion} from "framer-motion";
const { Title } = Typography;

const ReferralLink = () => {
    // Sample data for the referral links table
    const referralData = [
        {
            key: '1',
            source: 'Source A',
            link: 'https://example.com/sourceA',
            entries: 120,
            registrations: 45,
        },
        {
            key: '2',
            source: 'Source B',
            link: 'https://example.com/sourceB',
            entries: 80,
            registrations: 30,
        },
        {
            key: '3',
            source: 'Source C',
            link: 'https://example.com/sourceC',
            entries: 150,
            registrations: 70,
        },
        // Add more referral data as needed
    ];

    // Column definitions for the referral links table
    const columns = [
        {
            title: 'Manba',
            dataIndex: 'source',
            key: 'source',
            width: 200,
        },
        {
            title: 'Link',
            dataIndex: 'link',
            key: 'link',
            width: 300,
            render: (text, record) => <Link className="text-blue-500" to={`/${record.link}`}>{text}</Link>,
        },
        {
            title: 'Kirishlar soni',
            dataIndex: 'entries',
            key: 'entries',
            width: 150,
        },
        {
            title: 'Ro\'yxatdan o\'tishlar soni',
            dataIndex: 'registrations',
            key: 'registrations',
            width: 200,
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
                <Title level={4}>Referral Link</Title>
                <button type="button"
                        className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-500 text-white hover:bg-green-600 transition-colors focus:outline-none focus:bg-green-600 disabled:opacity-50 disabled:pointer-events-none">
                    Referral Link yaratish
                </button>
            </div>
            <Table
                className="custom-table2"
                dataSource={referralData}
                columns={columns}
                pagination={false}
                bordered
            />
        </div>
        </motion.div>
    );
};

export default ReferralLink;
