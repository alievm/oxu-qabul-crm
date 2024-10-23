import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, message, Typography, Card } from 'antd';
import { Send, Info } from 'lucide-react';

const { Title, Text } = Typography;

const AutomaticSending = () => {
    const [smsToSend, setSmsToSend] = useState(0);
    const [timeInterval, setTimeInterval] = useState('');
    const [sentSms, setSentSms] = useState(0);
    const [remainingSms, setRemainingSms] = useState(0);

    const handleStartSending = () => {
        // Simple validation
        if (smsToSend <= 0) {
            message.error('Yuboriladigan SMS lar soni 0 dan katta bo\'lishi kerak!');
            return;
        }

        // Simulate sending SMS logic
        setSentSms(0);
        setRemainingSms(smsToSend);

        const interval = setInterval(() => {
            if (sentSms < smsToSend) {
                setSentSms(prev => prev + 1);
                setRemainingSms(prev => prev - 1);
            } else {
                clearInterval(interval);
                message.success('Barcha SMSlar yuborildi!');
            }
        }, (timeInterval * 60 * 1000) / smsToSend); // Adjust the interval time
    };

    return (
        <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full max-w-3xl"
            >
                <Title level={3} className="text-center font-semibold mb-4 text-blue-800">SMS avtomatik yuborish</Title>

                <Card className=" rounded-lg mb-6 p-6 bg-white border border-blue-100">
                    <div className="flex items-center justify-between mb-4">
                        <Text className="text-lg font-medium">SMS yuboriladigan raqamlar soni: {smsToSend}</Text>
                        <Info className="text-gray-500 cursor-pointer" title="SMS raqamlarini yuklang" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="smsCount">Yuboriladigan SMS lar soni</label>
                        <Input
                            size="large"
                            id="smsCount"
                            type="number"
                            value={smsToSend}
                            onChange={(e) => setSmsToSend(e.target.value)}
                            placeholder="Yuboriladigan SMS sonini kiriting"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="timeInterval">Qancha vaqtda ketishi kerak (minutlarda)</label>
                        <Input
                            size="large"
                            id="timeInterval"
                            type="number"
                            value={timeInterval}
                            onChange={(e) => setTimeInterval(e.target.value)}
                            placeholder="Intervalni kiriting (minutda)"
                        />
                    </div>

                    <Button
                        size="large"
                        type="primary"
                        onClick={handleStartSending}
                        className="flex text-sm w-full items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:to-blue-700 transition-colors duration-200 text-white"
                    >
                        <Send className="w-4 h-4 mr-1" />
                        Yuborishni boshlash
                    </Button>
                </Card>

                <Card className=" rounded-lg p-6 bg-white border border-blue-100">
                    <Title level={4} className="mb-4">Yuboriladigan sms miqdori:</Title>
                    <div className="flex justify-between">
                        <div>
                            <Text strong>Yuboriladigan sms miqdori:</Text> {smsToSend}
                            <br />
                            <Text strong>Vaqt:</Text> {timeInterval} minut
                        </div>
                        <div>
                            <Text strong>Ketgan SMS:</Text> {sentSms}
                            <br />
                            <Text strong>Qolgan SMS:</Text> {remainingSms}
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
};

export default AutomaticSending;
