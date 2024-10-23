import React, { useState } from 'react';
import { Table, Select } from 'antd';
import { motion } from 'framer-motion';
import { SlidersHorizontalIcon } from 'lucide-react';

const { Option } = Select;

const DTMBonus = () => {
    const [selectedMonth, setSelectedMonth] = useState('');
    const dataSource = [
        {
            key: '1',
            fish: 'Ali Valiyev',
            ruyxatgaOlgani: 10,
            bonus: 50000,
        },
        {
            key: '2',
            fish: 'Oyna Turaeva',
            ruyxatgaOlgani: 8,
            bonus: 40000,
        },
        {
            key: '3',
            fish: 'Bobur Karimov',
            ruyxatgaOlgani: 15,
            bonus: 75000,
        },
        // Добавьте больше объектов по необходимости
    ];

    const columns = [
        {
            title: 'FISH',
            dataIndex: 'fish',
            key: 'fish',
        },
        {
            title: 'Ruyxatga olgan abituriyentlar soni',
            dataIndex: 'ruyxatgaOlgani',
            key: 'ruyxatgaOlgani',
        },
        {
            title: 'Bonus',
            dataIndex: 'bonus',
            key: 'bonus',
        },
    ];

    const filteredData = dataSource.filter(item => {
        // Фильтрация данных, если выбран месяц
        if (!selectedMonth) return true;
        // Если месяц в данных отсутствует, вы можете добавить условие по дате
        return true; // Для примера, здесь нужно добавить вашу логику
    });

    const totalRuyxatgaOlgani = filteredData.reduce((sum, item) => sum + item.ruyxatgaOlgani, 0);
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
                    <h2 className="text-xl font-semibold">DTM BONUS</h2>
                </div>

                {/* Фильтры таблицы */}
                <div className="p-3 rounded-md bg-gray-50 mb-4 px-5">
                    <div className="flex gap-4 justify-start">
                        <Select
                            size="large"
                            suffixIcon={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400" />}
                            defaultValue=""
                            style={{ width: 200 }}
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
                            <div className="flex justify-around font-bold">
                                <div>Jami:</div>
                                <div>{totalRuyxatgaOlgani}</div>
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

export default DTMBonus;
