import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import BotLogo from '../resource/bot.png'

const CustomChatbotMessage = ({ message }) => {
  const messages = message.split('');
  return (
    <div>
      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
};

const Chatbot = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenChatbot = () => {
    setIsOpen(true);
  };

  const handleCloseChatbot = () => {
    setIsOpen(false);
  };

  

  const pages = [
    {
      id: '0',
      message: '안녕하세요! 학사일정을 안내해드릴게요.',
      trigger: 'showSchedule',
    },
    {
      id: 'showSchedule',
      options: [
        { value: '01월', label: '01월', trigger: '01월' },
        { value: '02월', label: '02월', trigger: '02월' },
        { value: '03월', label: '03월', trigger: '03월' },
        { value: '04월', label: '04월', trigger: '04월' },
        { value: '05월', label: '05월', trigger: '05월' },
        { value: '06월', label: '06월', trigger: '06월' },
        { value: '07월', label: '07월', trigger: '07월' },
        { value: '08월', label: '08월', trigger: '08월' },
        { value: '09월', label: '09월', trigger: '09월' },
        { value: '10월', label: '10월', trigger: '10월' },
        { value: '11월', label: '11월', trigger: '11월' },
        { value: '12월', label: '12월', trigger: '12월' },
        { value: '외부장학금', label: '외부장학금', trigger: '외부장학금' },
        { value: '졸업요건', label: '졸업요건', trigger: '졸업요건' },
      ],
    },
    {
      id: '01월',
      message: `
        01-06 ~ 01-06 2학기 성적 확정
        01-12 ~ 01-14 동계 계절학기 성적입력
        01-16 ~ 01-17 동계 계절학기 성적정정 및 확정
      `,
      trigger: 'showSchedule',
      component: <CustomChatbotMessage />,
    },
    {
      id: '02월',
      message: `
        02-13 ~ 02-28 1학기 휴학 신청
        02-14 ~ 02-14 2022학년도 전기 학위수여식
        02-15 ~ 02-17 1학기 재ㆍ복학생 수강신청
        02-16 ~ 02-17 신입생 오리엔테이션
        02-20 ~ 02-28 1학기 등록금 수납기간(예정) / 1학기 분납신청기간(예정)
        02-23 ~ 02-24 1학기 신ㆍ편입생 수강신청
      `,
      trigger: 'showSchedule',
    },
    {
      id: '03월',
      message: `
        03-02 ~ 03-02 2023학년도 1학기 개강
        03-02 ~ 03-08 수강신청 정정
        03-07 ~ 03-07 입학식 및 1학기 개강예배
        03-22 ~ 03-24 수강신청 철회신청 및 출력
        03-29 ~ 03-29 수업일수 1/4
      `,
      trigger: 'showSchedule',
    },
    {
      id: '04월',
      message: `
        04-07 ~ 04-07 수업일수 1/3
        04-20 ~ 04-26 중간고사
        04-26 ~ 04-26 수업일수 1/2
      `,
      trigger: 'showSchedule',
    },
    {
      id: '05월',
      message: `
        05-01 ~ 05-01 근로자의 날 휴무
        05-04 ~ 05-04 개교기념일 휴무
        05-09 ~ 05-10 오순절 축제
        05-15 ~ 05-15 수업일수 2/3
        05-15 ~ 05-19 분납4차 수납기간(예정)
        05-18 ~ 05-18 전반기 예비군훈련
        05-24 ~ 05-24 수업일수 3/4
        05-25 ~ 05-31 하계 계절학기 신청
        05-29 ~ 05-29 학기 개시일로부터 90일
        05-29 ~ 06-02 다전공 이수인정서 제출
      `,
      trigger: 'showSchedule',
    },
    {
      id: '06월',
      message: `
        06-02 ~ 06-09 하계 계절학기 등록(예정)
        06-08 ~ 06-14 보강주
        06-13 ~ 06-13 종강예배
        06-15 ~ 06-21 기말고사
        06-15 ~ 06-28 1학기 성적입력 및 조회
        06-21 ~ 06-21 1학기 종강
        06-22 ~ 07-12 하계 계절학기 수업
        06-26 ~ 06-30 2학기 복학 신청(1차)
        06-30 ~ 07-03 1학기 성적 정정
      `,
      trigger: 'showSchedule',
    },
    {
      id: '07월',
      message: `
        07-05 ~ 07-05 1학기 성적 확정
        07-13 ~ 07-16 하계 계절학기 성적입력
        07-17 ~ 07-18 하계 계절학기 성적정정 및 확정
        07-24 ~ 08-04 2학기 복학 신청(2차)
      `,
      trigger: 'showSchedule',
    },
    {
      id: '08월',
      message: `
        08-17 ~ 08-31 2학기 휴학 신청
        08-21 ~ 08-23 2학기 수강신청
        08-21 ~ 08-31 2학기 등록금 수납기간(예정) / 2학기 분납신청기간(예정)
      `,
      trigger: 'showSchedule',
    },
    {
      id: '09월',
      message: `
        09-01 ~ 09-01 2학기 개강<br />
        09-01 ~ 09-07 추가등록금 수납기간(예정) / 분납1차 수납기간<br />
        09-01 ~ 09-07 수강신청 정정<br />
        09-05 ~ 09-05 2학기 개강예배<br />
        09-13 ~ 09-19 연한초과자 등록금 수납기간(예정)<br />
        09-21 ~ 09-25 수강신청 철회신청 및 출력<br />
        09-25 ~ 10-02 다전공 포기 신청<br />
        09-25 ~ 10-06 분납2차 수납기간(예정)<br />
        09-26 ~ 09-27 수강신청 철회신청서 제출<br />
        09-28 ~ 09-28 수업일수 1/4<br />
        09-30 ~ 09-30 학기 개시일로부터 30일<br />
      `,
      trigger: 'showSchedule',
    },    
    {
      id: '10월',
      message: `
        10-04 ~ 10-04 한세 체육대회
        10-09 ~ 10-09 수업일수 1/3
        10-20 ~ 10-26 중간고사 / 분납3차 수납기간(예정)
        10-26 ~ 10-26 수업일수 1/2
        10-30 ~ 10-30 학기 개시일로부터 60일
        10-30 ~ 11-03 다전공 신청
      `,
      trigger: 'showSchedule',
    },
    {
      id: '11월',
      message: `
        11-13 ~ 11-17 분납4차 수납기간(예정)
        11-14 ~ 11-14 수업일수 2/3
        11-23 ~ 11-23 수업일수 3/4
        11-24 ~ 11-30 재입학, 전부(과) 신청 / 동계계절학기 신청
        11-27 ~ 12-01 다전공 이수인정서 제출
        11-29 ~ 11-29 학기 개시일로부터 90일
      `,
      trigger: 'showSchedule',
    },
    {
      id: '12월',
      message: `
        12-05 ~ 12-08 동계 계절학기 등록(예정)
        
        12-05 ~ 12-05 2학기 종강예배
        12-08 ~ 12-14 보강주
        12-15 ~ 12-21 기말고사
        12-15 ~ 12-28 2학기 성적입력 및 조회
        12-21 ~ 12-21 2학기 종강
        12-22 ~ 01-15 동계 계절학기 수업
        12-26 ~ 12-29 1학기 복학 신청(1차)
        12-30 ~ 01-02 2학기 성적 정정
      `,
      trigger: 'showSchedule',
    },
    {
      id: '외부장학금',
      message: `
        (5) 봉사장학금
        ->학생활동부서 및 학교에서 인정하는 부서에서 봉사하는 학생에게 일정액을 지급한다.
        ->직전학기 성적이 2.8 이상이어야 한다.
        (단, 생활관 외국인 동장 2인은 직전학기 2.0이상을 적용하며 과락(F)은 적용하지 아니한다)
        ->직전 학기 성적 내 과락(F) 및 채플 미패스 기록이 있을 시 지급이 불가능하다.
        ->계약학과는 과대표만 봉사 장학금을 지급한다.
        ->(단, 학년별 재학인원이 10명 이상일 경우에만 해당된다)
        ->봉사(과대표,생활관포함) 및 언론장학금은 중복수혜가 불가하다.
        ->(각 기관별 학생회 활동은 2개 이상 가능하나 장학금은 큰금액 1개만 지급한다)

        (6)언론장학금
        ->본교 언론기관에서 봉사하는 학생에게 일정액을 지급한다.
        ->직전 학기 성적이 2.8이상이어야 한다.
        ->직전 학기 성적 내 과락(F) 및 채플 미패스 기록이 있을 시 지급이 불가능하다.
      `,
      trigger: 'showSchedule',
    },

    {
      id: '졸업요건',
      message: `
        공통졸업요건
        ->소정의 교육과정을 이수한 자로 학칙 제42조의 졸업학점을 취득한 자
        ->전학년 성적 누계 평점이 1.50 이상인 자
        ->경건훈련을 이수한 자
        ->소정의 등록을 마친 자
        ->졸업종합시험(졸업논문, 졸업시험, 졸업연주, 졸업작품, 졸업프로젝트, 공인된 외국어 시험, 자격증 등 중 택일: 각 학과에서 정함)에 합격한 자
        ->성서종합시험에 합격한 자.(신학부에 한함)
        ->졸업인증제에 의한 일정자격을 취득한 자
        ->교과목이수: 각 학과에 규정된 자격 필수과목(목회실습, 전공실기 등) 및 최저 요구 학점 이수자
      `,
      trigger: 'showSchedule',
    },
  ];

  const currentPageOptions = pages[currentPage].options || [];

  return (
    <>
      {isOpen && (
        <div className="chatbot-container">
          <ChatBot
            steps={pages}
            botAvatar={BotLogo}
            userDelay={0}
            width="400px"
            floating
            style={{ bottom: '20px', right: '20px', height: '500px' }}
            contentStyle={{ overflow: 'auto' }}
            headerTitle="한세봇"
          />
 
        </div>
      )}
    </>
  );
};

export default Chatbot;
