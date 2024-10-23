import {createBrowserRouter} from "react-router-dom";
import BaseLayout from "../pages/layout/BaseLayout.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Register from "../pages/Register.jsx";
import Enrolled from "../pages/Enrolled.jsx";
import Called from "../pages/Called.jsx";
import SelfRegistered from "../pages/SelfRegistered.jsx";
import DTM from "../pages/DTM.jsx";
import PaymentConfirmed from "../pages/PaymentConfirmed.jsx";
import RegistrationForm from "../pages/RegistrationForm.jsx";
import SelfConfirmed from "../pages/SelfConfirmed.jsx";
import DailyPaymentReport from "../pages/DailyPaymentReport.jsx";
import DTMBonus from "../pages/DTMBonus.jsx";
import DailyReport from "../pages/DailyReport.jsx";
import UserConfirmedSum from "../pages/UserConfirmedSum.jsx";
import All from "../pages/All.jsx";
import ExamParticipants from "../pages/ExamParticipants.jsx";
import SMSSend from "../pages/SMSSend.jsx";
import AutomaticSending from "../pages/AutomaticSending.jsx";
import PassedExam from "../pages/PassedExam.jsx";
import SuperContract from "../pages/SuperContract.jsx";
import ExamSchedulePage from "../pages/ExamSchedulePage.jsx";
import Staff from "../pages/Staff.jsx";
import ReferralLink from "../pages/ReferralLink.jsx";
import All2 from "../pages/All2.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/hujjat',
                element: <Enrolled/>
            },
            {
                path: '/qungiroq',
                element: <Called/>
            },
            {
                path: '/ruyxat-uzi',
                element: <SelfRegistered/>
            },
            {
                path: '/dtm',
                element: <DTM/>
            },
            {
                path: '/tasdiqlangan',
                element: <PaymentConfirmed/>
            },
            {
                path: '/ozgartitirsh',
                element: <RegistrationForm/>
            },
            {
                path: '/tasdiqlangan-uzi',
                element: <SelfConfirmed/>
            },
            {
                path: '/hisobot-kunlik',
                element: <DailyPaymentReport/>
            },
            {
                path: '/dtm-bonus',
                element: <DTMBonus/>
            },
            {
                path: '/hisobot',
                element: <DailyReport/>
            },
            {
                path: '/hisobot-user-all',
                element: <UserConfirmedSum/>
            },
            {
                path: '/barcha',
                element: <All/>
            },
            {
                path: '/sms/natija',
                element: <ExamParticipants/>
            },
            {
                path: '/sms/sms-send',
                element: <SMSSend/>
            },
            {
                path: '/sms/send-robot',
                element: <AutomaticSending/>
            },
            {
                path: '/imtihon-utgan-yangi',
                element: <PassedExam/>
            },
            {
                path: '/imtihon-utgan-super',
                element: <SuperContract/>
            },
            {
                path: '/imtihon-vaqti',
                element: <ExamSchedulePage/>
            },
            {
                path: '/xodimlar',
                element: <Staff/>
            },
            {
                path: '/referral-link',
                element: <ReferralLink/>
            },
            {
                path: '/barcha2',
                element: <All2/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;