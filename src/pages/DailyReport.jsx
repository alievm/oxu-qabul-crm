import React, { useState } from 'react';
import { Table, Select } from 'antd';
import { motion } from 'framer-motion';
import { SlidersHorizontalIcon } from 'lucide-react';

const { Option } = Select;

const DailyReport = () => {
    const [selectedMonth, setSelectedMonth] = useState('');
    const dataSource = [
        {
            key: '1',
            date: '2024-04-01',
            tasdiqlanganlar: 13,
            bonus: 120000,
        },
        {
            key: '2',
            date: '2024-04-02',
            tasdiqlanganlar: 10,
            bonus: 90000,
        },
        {
            key: '3',
            date: '2024-05-01',
            tasdiqlanganlar: 20,
            bonus: 200000,
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
            title: 'Tasdiqlanganlar',
            dataIndex: 'tasdiqlanganlar',
            key: 'tasdiqlanganlar',
        },
        {
            title: 'Bonus',
            dataIndex: 'bonus',
            key: 'bonus',
        },
    ];

    const filteredData = dataSource.filter(item => {
        // Фильтрация данных по выбранному месяцу
        if (!selectedMonth) return true;
        return item.date.startsWith(selectedMonth);
    });

    const totalTasdiqlanganlar = filteredData.reduce((sum, item) => sum + item.tasdiqlanganlar, 0);
    const totalBonus = filteredData.reduce((sum, item) => sum + item.bonus, 0);

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                {/* Заголовок страницы */}
                <div className="flex justify-between items-center space-x-4 mb-5">
                    <h2 className="text-xl font-semibold">Kunlik to'lov hisobotlari</h2>
                </div>

                {/* Фильтры таблицы */}
                <div className="p-3 rounded-md bg-gray-50 mb-4 px-5">
                    <div className="flex gap-4 justify-start">
                        <Select
                            size="large"
                            suffixIcon={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400" />}
                            defaultValue=""
                            style={{ width: 400 }}
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

                {/* Таблица */}
                <Table
                    className="custom-table overflow-x-auto"
                    rowClassName="even:bg-blue-50/50"
                    columns={columns}
                    dataSource={filteredData}
                    footer={() => (
                        <div>
                            <div className="flex justify-between font-bold">
                                <div>Jami:</div>
                                <div>{totalTasdiqlanganlar}</div>
                                <div>{totalBonus.toLocaleString('uz-UZ')} сум</div>
                            </div>
                        </div>
                    )}
                    pagination={false}
                    bordered
                    scroll={{ x: 'max-content' }} // Включить горизонтальную прокрутку
                />
            </motion.div>
        </div>
    );
};

export default DailyReport;
