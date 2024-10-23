import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { PhoneOutlined, UserOutlined, GlobalOutlined, ReadOutlined, DeploymentUnitOutlined, ProfileOutlined, TeamOutlined } from '@ant-design/icons'

const { Option } = Select;

const RegistrationForm = () => {
    const [form] = Form.useForm();
    const [formData, setFormData] = useState({
        phone: '+998 33 557-00-09',
        fio: 'dewdewded dededede ededed',
        talimTili: 'O`zbek',
        talimTuri: 'Bakalavr',
        talimShakli: 'Sirtqi',
        yonalish: '60220300 - Tarix (mamlakatlar va yo‘nalishlar bo‘yicha)',
        royxatgaOluvchi: 'admin'
    });

    const handleFormChange = (changedValues) => {
        setFormData((prev) => ({ ...prev, ...changedValues }));
    };

    const handleSubmit = () => {
        form.validateFields()
            .then(values => {
                console.log('Submitted data:', values);
                // handle form submission, e.g., sending data to backend
            })
            .catch(errorInfo => {
                console.error('Form validation failed:', errorInfo);
            });
    };

    return (
        <div>
            <div className="bg-white overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Foydalanuvchi haqida ma'lumot
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Shaxsiy ma'lumotlar va ta'lim ma'lumotlari.
                    </p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 flex items-center">
                                <PhoneOutlined className="mr-2"/>
                                Telefon
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                +998 33 557-00-09
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 flex items-center">
                                <UserOutlined className="mr-2"/>
                                F.I.O
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                dewdewded dededede ededed
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 flex items-center">
                                <GlobalOutlined className="mr-2"/>
                                Ta'lim tili
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                O'zbek
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 flex items-center">
                                <ReadOutlined className="mr-2"/>
                                Ta'lim turi
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                Bakalavr
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 flex items-center">
                                <DeploymentUnitOutlined className="mr-2"/>
                                Ta'lim shakli
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                Sirtqi
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 flex items-center">
                                <ProfileOutlined className="mr-2"/>
                                Yo'nalish
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                60220300 - Tarix (mamlakatlar va yo'nalishlar bo'yicha)
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500 flex items-center">
                                <TeamOutlined className="mr-2"/>
                                Ro'yxatga oluvchi
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                admin
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>


            <Form
                className="mt-5 px-5"
                form={form}
                layout="vertical"
                initialValues={formData}
                onValuesChange={handleFormChange}
                onFinish={handleSubmit}
            >

                <Form.Item label="Ta'lim tili" name="talimTili">
                    <Select>
                        <Option value="O`zbek">O`zbek</Option>
                        <Option value="Rus">Rus</Option>
                        <Option value="Ingliz">Ingliz</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Ta'lim turi" name="talimTuri">
                    <Select>
                        <Option value="Bakalavr">Bakalavr</Option>
                        <Option value="Magistr">Magistr</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Ta'lim shakli" name="talimShakli">
                    <Select>
                        <Option value="Sirtqi">Sirtqi</Option>
                        <Option value="Kunduzgi">Kunduzgi</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Yo'nalish" name="yonalish">
                    <Select>
                        <Option value="60220300 - Tarix (mamlakatlar va yo‘nalishlar bo‘yicha)">
                            60220300 - Tarix (mamlakatlar va yo‘nalishlar bo‘yicha)
                        </Option>
                        <Option value="60220400 - Filologiya (til va adabiyot)">
                            60220400 - Filologiya (til va adabiyot)
                        </Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Saqlash
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
        ;
};

export default RegistrationForm;
