import React, { useState } from 'react';
import {Table, Input, Select} from 'antd';
import { motion } from 'framer-motion';
import {
    SlidersHorizontalIcon
} from 'lucide-react';
const { Option } = Select;
const DailyPaymentReport = () => {


    const [filters, setFilters] = useState({
        id: '',
        familiya: '',
        ism: '',
        sharif: ''
    });

    const dataSource = [
        {
            key: '1',
            date: '2024-10-20',
            tasdiqlanganlarSoni: 15,
            bonus: 100,
            dtmBonus: 50,
        },
        {
            key: '2',
            date: '2024-10-21',
            tasdiqlanganlarSoni: 20,
            bonus: 120,
            dtmBonus: 60,
        },
        // Добавьте больше объектов по необходимости
    ];

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Tasdiqlanganlar soni',
            dataIndex: 'tasdiqlanganlarSoni',
            key: 'tasdiqlanganlarSoni',
        },
        {
            title: 'Bonus',
            dataIndex: 'bonus',
            key: 'bonus',
        },
        {
            title: 'Dtm Bonus',
            dataIndex: 'dtmBonus',
            key: 'dtmBonus',
        },
    ];

    const [selectedMonth, setSelectedMonth] = useState('');

    // Функция для фильтрации данных по месяцу
    const filteredDataSource = dataSource.filter(item => {
        if (!selectedMonth) return true; // Если месяц не выбран, возвращаем все данные
        return item.date.startsWith(selectedMonth); // Фильтрация по выбранному месяцу
    });

    const totalTasdiqlanganlarSoni = dataSource.reduce((sum, item) => sum + item.tasdiqlanganlarSoni, 0);
    const totalBonus = dataSource.reduce((sum, item) => sum + item.bonus, 0);
    const totalDtmBonus = dataSource.reduce((sum, item) => sum + item.dtmBonus, 0);

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
                    <h2 className="text-xl font-semibold">Kunlik to'lov hisobotlari</h2>
                </div>

                {/* Table Filters */}
                <div className="p-3 rounded-md bg-gray-50 mb-4 px-5">
                    <div className="flex gap-4 justify-start">
                        <Select
                            size="large"
                            suffixIcon={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400" />}
                            defaultValue=""
                            style={{ width: 400}}
                            onChange={value => setSelectedMonth(value)}
                            placeholder="Qaysi oy bo`yicha filter qilasiz?"
                        >
                            <Option value="">Hammasi</Option>
                            <Option value="2024-04">2024-04</Option>
                            <Option value="2024-05">2024-05</Option>
                        </Select>

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
                    footer={() => (
                        <div>
                            <div className="flex justify-around">
                                <div style={{fontWeight: 'bold', textAlign: 'center'}}>Jami:</div>
                                <div>{totalTasdiqlanganlarSoni}</div>
                                <div>{totalBonus}</div>
                                <div>{totalDtmBonus}</div>
                            </div>
                        </div>
                    )}
                    pagination={false}
                    bordered
                    scroll={{ x: 'max-content'}} // Enable horizontal scrolling
                />
            </motion.div>
        </div>
    );
};

export default DailyPaymentReport;
