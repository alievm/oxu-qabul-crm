import React, { useState } from 'react';
import { Form, Input, Button, Steps, Select, Row, Col } from 'antd'; // Ant Design components
import InputMask from 'react-input-mask';
import { motion } from 'framer-motion'; // Import Framer Motion
const { Step } = Steps;
const { Option } = Select;

const Register = () => {
    const [currentStep, setCurrentStep] = useState(0); // Step management
    const [form] = Form.useForm(); // Form instance
    const [phoneStatus, setPhoneStatus] = useState(''); // Status for phone validation

    const onNext = () => {
        form.validateFields()
            .then(() => {
                setCurrentStep(currentStep + 1);
            })
            .catch(info => {
                console.log('Validation failed:', info);
            });
    };

    const onPrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const onFinish = (values) => {
        console.log('Form data: ', values);
    };

    const validatePhoneNumber = (value) => {
        const cleanedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
        const phoneRegex = /^998\d{9}$/; // Check format: 998XXXXXXXXX

        if (phoneRegex.test(cleanedValue)) {
            setPhoneStatus('success');
        } else {
            setPhoneStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[#001529] flex flex-col justify-center items-center">
            <img className="h-52 mb-10" src="/logo.png" alt="Logo"/>
            <div className="w-full max-w-5xl border border-gray-100 bg-white p-8 rounded-lg">
                <Steps current={currentStep} className="mb-8">
                    <Step title="Telefon Raqami"/>
                    <Step title="Shaxsiy Ma'lumotlar"/>
                </Steps>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    className="w-full"
                >
                    {currentStep === 0 && (
                        <motion.div
                            initial={{opacity: 0, x: -50}} // Start off-screen left
                            animate={{opacity: 1, x: 0}} // Animate to on-screen
                            exit={{opacity: 0, x: 50}} // Exit to the right
                            transition={{duration: 0.3}} // Transition duration
                            className="step-content"
                        >
                            <Form.Item
                                label="Telefon Raqami"
                                name="phone"
                                validateStatus={phoneStatus} // Dynamic validation status
                                hasFeedback // Shows success/error icon
                                help={phoneStatus === 'error' && 'Telefon raqam noto‘g‘ri formatda!'}
                                rules={[{required: true, message: 'Telefon raqamni kiriting!'}]}
                            >
                                <InputMask
                                    placeholder="+998 (__) ___-__-__"
                                    mask="+\9\9\8 (99) 999-99-99"
                                    maskChar="_"
                                    minLength="12"
                                    onChange={(e) => validatePhoneNumber(e.target.value)}
                                >
                                    {() => (
                                        <Input
                                            size="large"
                                            className={phoneStatus === 'success' ? 'success-border' : ''}
                                            placeholder="+998 XX XXX-XX-XX"
                                        />
                                    )}
                                </InputMask>
                            </Form.Item>

                            <Form.Item
                                label="Qo'shimcha telefon (ixtiyoriy)"
                                name="additionalPhone"
                            >
                                <Input size="large" placeholder="+998 XX XXX-XX-XX"/>
                            </Form.Item>

                            <div className="flex justify-end">
                                <Button block size="large" className="text-sm" type="primary" onClick={onNext}
                                        disabled={phoneStatus !== 'success'}>
                                    Keyingi
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 1 && (
                        <motion.div
                            initial={{opacity: 0, x: 50}} // Start off-screen right
                            animate={{opacity: 1, x: 0}} // Animate to on-screen
                            exit={{opacity: 0, x: -50}} // Exit to the left
                            transition={{duration: 0.3}} // Transition duration
                            className="step-content"
                        >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Familiya"
                                        name="lastName"
                                        rules={[{required: true, message: 'Familiyangizni kiriting!'}]}
                                    >
                                        <Input size="large" placeholder="Familiya"/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Ism"
                                        name="firstName"
                                        rules={[{required: true, message: 'Ismingizni kiriting!'}]}
                                    >
                                        <Input size="large" placeholder="Ism"/>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Sharifi"
                                        name="middleName"
                                    >
                                        <Input size="large" placeholder="Sharifi"/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Yoshi"
                                        name="age"
                                        rules={[{required: true, message: 'Yoshingizni kiriting!'}]}
                                    >
                                        <Input size="large" placeholder="Yoshi" type="number"/>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Ariza Turi"
                                        name="applicationType"
                                        rules={[{required: true, message: 'Ariza turini tanlang!'}]}
                                    >
                                        <Select size="large" placeholder="Ariza Turi">
                                            <Option value="grant">Grant</Option>
                                            <Option value="contract">Shartnoma</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Ta'lim tili"
                                        name="educationLanguage"
                                        rules={[{required: true, message: 'Ta\'lim tilini tanlang!'}]}
                                    >
                                        <Select size="large" placeholder="Ta'lim tili">
                                            <Option value="uzbek">O'zbek tili</Option>
                                            <Option value="russian">Rus tili</Option>
                                            <Option value="english">Ingliz tili</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Ta'lim turi"
                                        name="educationType"
                                        rules={[{required: true, message: 'Ta\'lim turini tanlang!'}]}
                                    >
                                        <Select size="large" placeholder="Ta'lim turi">
                                            <Option value="online">Online</Option>
                                            <Option value="offline">Offline</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Yo'nalish"
                                        name="direction"
                                        rules={[{required: true, message: 'Yo\'nalishni tanlang!'}]}
                                    >
                                        <Select size="large" placeholder="Yo'nalish">
                                            <Option value="engineering">Muhandislik</Option>
                                            <Option value="economics">Iqtisodiyot</Option>
                                            <Option value="law">Huquqshunoslik</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Tasdiqlash holati"
                                        name="confirmationStatus"
                                        rules={[{required: true, message: 'Tasdiqlash holatini tanlang!'}]}
                                    >
                                        <Select size="large" placeholder="Tasdiqlash holati">
                                            <Option value="confirmed">Tasdiqlangan</Option>
                                            <Option value="pending">Kutilmoqda</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <div className="flex w-full gap-10 justify-between">
                                <Button block size="large" className="text-sm" onClick={onPrevious}>
                                    Oldingi
                                </Button>
                                <Button block size="large" className="text-sm" type="primary" htmlType="submit">
                                    Yuborish
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </Form>
            </div>
        </div>
    );
};

export default Register;
