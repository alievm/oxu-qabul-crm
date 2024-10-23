import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Table, Button } from 'antd';
import { motion } from 'framer-motion';

const Home = () => {
    const [messages, setMessages] = useState([]); // State to store messages
    const [editorContent, setEditorContent] = useState(''); // State for the editor content

    const handleAddMessage = () => {
        if (editorContent.trim()) {
            const newMessage = {
                id: Date.now(), // Generate a unique ID
                content: editorContent
            };
            setMessages([...messages, newMessage]);
            setEditorContent(''); // Clear the editor after adding
        }
    };

    const handleDeleteMessage = (id) => {
        setMessages(messages.filter(message => message.id !== id)); // Delete message by ID
    };

    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Xabarlar',
            dataIndex: 'content',
            key: 'content',
            render: text => <div dangerouslySetInnerHTML={{ __html: text }} />, // Render HTML content
        },
        {
            title: 'Xarakat',
            key: 'action',
            render: (_, record) => (

                <button onClick={() => handleDeleteMessage(record.id)}
                   className="relative rounded px-5 py-2.5 overflow-hidden group bg-red-500  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
                    <span
                        className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">O'chirish</span>
                </button>
),
},
]
    ;
    return (
        <div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="bg-gradient-to-tl mb-5 from-[#0072ff] to-[#00c6ff] rounded-lg p-5 relative overflow-hidden"
            >
                <svg
                    width="581"
                    height="239"
                    viewBox="0 0 581 239"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -top-14 -right-[27rem] sm:-right-64 lg:-top-28"
                >
                    <path
                        d="M527.607 1.7273C580.879 -33.0372 543.535 -81.6071 518.204 -101.546C439.881 -162.473 430.701 -91.4797 317.582 -143.722C204.463 -195.965 227.141 -159.2 83.8863 17.2559C-59.3679 193.712 128.456 191.653 151.46 157.066C174.465 122.48 215.973 138.631 267.533 191.898C319.093 245.165 448.712 151.23 426.229 94.617C403.746 38.0046 461.017 45.183 527.607 1.7273Z"
                        stroke="white"
                        strokeOpacity="0.13"
                    />
                    <path
                        d="M504.037 3.63866C552.037 -27.7193 518.379 -71.544 495.551 -89.5367C424.965 -144.515 416.703 -80.4656 314.764 -127.614C212.825 -174.762 233.264 -141.589 104.2 17.5917C-24.8647 176.773 144.384 174.939 165.109 143.738C185.834 112.537 223.239 127.114 269.707 175.178C316.175 223.243 432.963 138.51 412.696 87.4313C392.43 36.3523 444.038 42.836 504.037 3.63866Z"
                        stroke="white"
                        strokeOpacity="0.13"
                    />
                    <path
                        d="M485.755 5.0211C529.659 -23.6299 498.882 -63.6584 478.006 -80.0913C413.456 -130.304 405.891 -71.7948 312.664 -114.85C219.438 -157.906 238.127 -127.606 120.065 17.8189C2.00333 163.244 156.797 161.547 175.756 133.043C194.715 104.539 228.924 117.849 271.416 161.749C313.909 205.649 420.734 128.232 402.205 81.5755C383.675 34.9188 430.875 40.8348 485.755 5.0211Z"
                        stroke="white"
                        strokeOpacity="0.13"
                    />
                    <path
                        d="M468.499 6.88949C508.518 -19.2443 480.459 -55.7637 461.428 -70.7567C402.583 -116.569 395.692 -63.1941 310.707 -102.48C225.722 -141.766 242.761 -114.123 135.153 18.5341C27.5446 151.191 168.648 149.656 185.928 123.654C203.208 97.6522 234.392 109.798 273.13 149.85C311.868 189.902 409.239 119.286 392.344 76.721C375.45 34.1558 418.476 39.5567 468.499 6.88949Z"
                        stroke="white"
                        strokeOpacity="0.13"
                    />
                    <path
                        d="M449.738 8.32684C485.547 -15.0868 460.432 -47.8173 443.399 -61.2558C390.732 -102.319 384.573 -54.4882 308.515 -89.7062C232.456 -124.924 247.709 -100.15 151.43 18.7138C55.1508 137.577 181.423 136.222 196.883 112.923C212.343 89.6242 240.251 100.513 274.924 136.411C309.596 172.309 396.722 109.041 381.597 70.8944C366.473 32.7477 404.977 37.5939 449.738 8.32684Z"
                        stroke="white"
                        strokeOpacity="0.13"
                    />
                    <path
                        d="M430.012 9.82216C461.401 -10.6816 439.392 -39.336 424.464 -51.1002C378.306 -87.047 372.903 -45.1683 306.242 -75.9951C239.581 -106.822 252.947 -85.1321 168.546 18.9493C84.1452 123.031 194.822 121.83 208.375 101.429C221.928 81.0282 246.389 90.5588 276.775 121.985C307.161 153.412 383.533 98.0083 370.281 64.6106C357.028 31.213 390.777 35.4519 430.012 9.82216Z"
                        stroke="white"
                        strokeOpacity="0.13"
                    />
                </svg>
                <div
                    className="flex gap-4 sm:flex-wrap ssm:gap-12 xl:gap-6 flex-col xl:flex-row xl:justify-between xl:items-end lg:h-fit">
                    <div className="flex flex-col gap-3">
                    <span className="text-sm font-medium text-[#FDFDFF]">
                  OSIYO XALQARO UNIVERSITETI QABUL
                    </span>
                        <span className="text-[19px] font-bold text-[#FDFDFF] flex items-center gap-2">
                      Xush kelibsiz osiyo xalqaro universiteti qabul tizimiga!
                    </span>
                    </div>

                </div>
            </motion.div>

            <motion.div
                initial={{opacity: 0, y: 20}} // Начальное состояние
                animate={{opacity: 1, y: 0}} // Конечное состояние
                transition={{duration: 0.5, delay: 0.2}} // Длительность анимации
            >
                <div className="relative">
                    <ReactQuill
                        className="h-40 mb-4"
                        value={editorContent}
                        onChange={setEditorContent}
                        theme="snow"
                    />
                    <Button className="absolute text-xs font-medium top-0 h-[42px] rounded-none right-0" size="large"
                            type="primary" onClick={handleAddMessage}>Xabar Qo'shish</Button>
                </div>
            </motion.div>

                <motion.div
                    className="custom-table mt-20 overflow-x-auto"
                    initial={{opacity: 0, y: 20}} // Начальное состояние
                    animate={{opacity: 1, y: 0}} // Конечное состояние
                    exit={{opacity: 0, y: -20}} // Состояние при удалении
                    transition={{duration: 0.5}} // Длительность анимации
                >
                    <Table
                        bordered
                        dataSource={messages.map(msg => ({...msg, key: msg.id}))}
                        columns={columns}
                        pagination={false}
                    />
                </motion.div>
        </div>
);
};

export default Home;
