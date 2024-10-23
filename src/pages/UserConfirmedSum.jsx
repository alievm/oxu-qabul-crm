import React, { useState } from 'react';
import { Select, Table, Tabs } from 'antd';
import { motion } from 'framer-motion';
import { SlidersHorizontalIcon } from "lucide-react";

const { Option } = Select;
const { TabPane } = Tabs;

const UserConfirmedSum = () => {
    const [selectedMonth, setSelectedMonth] = useState("");

    const dataSource = [
        {
            key: '1',
            fish: 'Ali Valiyev',
            tasdiqlagan: 20,
            bonus: 100000,
        },
        {
            key: '2',
            fish: 'Oyna Turaeva',
            tasdiqlagan: 15,
            bonus: 75000,
        },
        {
            key: '3',
            fish: 'Bobur Karimov',
            tasdiqlagan: 30,
            bonus: 150000,
        },
    ];

    const columns = [
        {
            title: 'F.I.SH.',
            dataIndex: 'fish',
            key: 'fish',
        },
        {
            title: 'Tasdiqlagan',
            dataIndex: 'tasdiqlagan',
            key: 'tasdiqlagan',
        },
        {
            title: 'Bonus',
            dataIndex: 'bonus',
            key: 'bonus',
        },
    ];

    const tabColumns = [
        {
            title: 'User',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: "Qo'ng'iroqlar soni",
            dataIndex: 'callCount',
            key: 'callCount',
        },
        {
            title: "Shundan o'qishga kirganlar soni",
            dataIndex: 'admittedCount',
            key: 'admittedCount',
        },
    ];

    const tabDataSource = [
        {
            key: '1',
            user: 'Ali Valiyev',
            callCount: 10,
            admittedCount: 5,
        },
        {
            key: '2',
            user: 'Oyna Turaeva',
            callCount: 8,
            admittedCount: 3,
        },
        {
            key: '3',
            user: 'Bobur Karimov',
            callCount: 15,
            admittedCount: 10,
        },
    ];

    return (
        <div>
            <motion.div
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, ease: 'easeOut'}}
            >
                {/* Заголовок страницы */}
                <div className="flex justify-between items-center space-x-4 mb-5">
                    <h2 className="text-xl font-semibold">Userlarning jami tasdiqlagan summasi</h2>
                </div>

                <div className="p-3 rounded-md bg-gray-50 mb-4 px-5">
                    <p className="font-semibold mb-3">Qaysi oy bo`yicha filter qilasiz?</p>
                    <div className="flex gap-4 justify-start">
                        <Select
                            size="large"
                            suffixIcon={<SlidersHorizontalIcon size="18" className="mr-2 text-gray-400"/>}
                            defaultValue=""
                            style={{width: 400}}
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

                {/* Основная таблица */}
                <Table
                    className="custom-table overflow-x-auto"
                    rowClassName="even:bg-blue-50/50"
                    columns={columns}
                    dataSource={dataSource}
                    footer={() => (
                        <div className="flex justify-between font-bold">
                            <div>Jami:</div>
                            <div>{dataSource.reduce((sum, item) => sum + item.tasdiqlagan, 0)}</div>
                            <div>{dataSource.reduce((sum, item) => sum + item.bonus, 0).toLocaleString('uz-UZ')} сум</div>
                        </div>
                    )}
                    pagination={false}
                    bordered
                    scroll={{x: 'max-content'}} // Включить горизонтальную прокрутку
                />



                {/* Вкладки с таблицами */}
                <Tabs type="card" defaultActiveKey="1" className="mt-5">
                    <TabPane tab="Barcha" key="1">
                        <div className="p-3 rounded-md bg-gradient-to-tl  from-[#0072ff] to-[#00c6ff] text-white my-4 px-5">
                            <p className="font-semibold ">Qo'ng'iroqlar statistikasi</p>
                        </div>
                        <Table
                            className="custom-table overflow-x-auto"
                            rowClassName="even:bg-blue-50/50"
                            columns={tabColumns}
                            dataSource={tabDataSource} // Данные для вкладки "Barcha"
                            pagination={false}
                            bordered
                        />
                    </TabPane>
                    <TabPane tab="Bir haftalik" key="2">
                        <div className="p-3 rounded-md bg-gradient-to-tl  from-[#0072ff] to-[#00c6ff] text-white my-4 px-5">
                            <p className="font-semibold ">Qo'ng'iroqlar statistikasi</p>
                        </div>
                        <Table
                            className="custom-table overflow-x-auto"
                            rowClassName="even:bg-blue-50/50"
                            columns={tabColumns}
                            dataSource={[]} // Пустая таблица для вкладки "Bir haftalik"
                            pagination={false}
                            bordered
                        />
                    </TabPane>
                    <TabPane tab="Bir oylik" key="3">
                        <div className="p-3 rounded-md bg-gradient-to-tl  from-[#0072ff] to-[#00c6ff] text-white my-4 px-5">
                            <p className="font-semibold ">Qo'ng'iroqlar statistikasi</p>
                        </div>
                        <Table
                            className="custom-table overflow-x-auto"
                            rowClassName="even:bg-blue-50/50"
                            columns={tabColumns}
                            dataSource={[]} // Пустая таблица для вкладки "Bir oylik"
                            pagination={false}
                            bordered
                        />
                    </TabPane>
                    <TabPane tab="Bir kunlik" key="4">
                        <div className="p-3 rounded-md bg-gradient-to-tl  from-[#0072ff] to-[#00c6ff] text-white my-4 px-5">
                            <p className="font-semibold ">Qo'ng'iroqlar statistikasi</p>
                        </div>
                        <Table
                            className="custom-table overflow-x-auto"
                            rowClassName="even:bg-blue-50/50"
                            columns={tabColumns}
                            dataSource={[]} // Пустая таблица для вкладки "Bir kunlik"
                            pagination={false}
                            bordered
                        />
                    </TabPane>
                </Tabs>
            </motion.div>
        </div>
    );
};

export default UserConfirmedSum;
