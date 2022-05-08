/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import {
  BoxWrapper,
  ContentWrapper,
  LeftContent,
  RightContent,
} from './Mybox.style';
import BoxUserList from '../userlist/BoxUserList';

import DdayButton from './DdayButton';
import ProgressBar from '../Main/ProgressBar';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdMoreVert } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import UserProfile from './UserProfile';
import { Tooltip } from '@mui/material';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { BsPlusLg } from 'react-icons/bs';

const Box = props => {
  const [modal, setModal] = useState(false);

  const today = new Date();
  const Dday = new Date(props.boxInfo.boxOpenAt);
  const distance = Dday.getTime() - today.getTime();
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const StartDay = new Date(props.boxInfo.boxCreatedAt);
  const totalDayLenght = Dday.getTime() - StartDay.getTime();

  function getPercent() {
    const StartDay = new Date(props.boxInfo.boxCreatedAt);
    const Dday = new Date(props.boxInfo.boxOpenAt);
    const today = new Date();
    const distance = Dday.getTime() - today.getTime();
    if (today.getTime() > Dday.getTime()) {
      return 100;
    }
    const leftDay = ((totalDayLenght - distance) / totalDayLenght) * 100;
    const leftDayPer = Math.floor(leftDay);
    return leftDayPer;
  }

  function userSlice() {
    if (props.boxInfo.user.length > 4) {
      const userInfo = props.boxInfo.user.slice(0, 4);
      return (
        <>
          {/* <p style={{ marginRight: '5px' }}>...</p> */}
          {userInfo.map((value, i) => {
            return <UserProfile value={value} />;
          })}
        </>
      );
    } else {
      return props.boxInfo.user.map((value, i) => {
        return <UserProfile value={value} />;
      });
    }
  }

  function headIcon() {
    if (props.categori === 4) {
      return;
    } else {
      // return <AiOutlinePlus />;
      return (
        <div
          className="toggleButton"
          onClick={e => {
            props.set(props.num);
            e.stopPropagation();
          }}
        >
          <BsPlusLg />
        </div>
      );
    }
  }

  const showModal = e => {
    setModal(true);
    e.stopPropagation();
  };

  const handleCancel = e => {
    setModal(false);
    e.stopPropagation();
  };

  return (
    <BoxWrapper
      click={props.click}
      firstClick={props.firstClick}
      num={props.num}
    >
      <div className={props.click ? 'off' : 'on'} onClick={props.nextToggle}>
        <ContentWrapper>
          <LeftContent num={props.num} />
          <RightContent>
            <div className="contentGroup">
              <p>{props.boxInfo.boxName}</p>
            </div>
            <div className="dayGroup">
              {headIcon()}
              <div className="state">
                <div>{props.boxInfo.boxOpenAt.slice(0, 10)}</div>
                <DdayButton day={day} num={props.num} />
              </div>
              <div className="user">
                {userSlice()}
                <Tooltip title="유저 더보기" placement="top">
                  <div className="plusButton">
                    <MdMoreVert onClick={e => showModal(e)} />
                  </div>
                </Tooltip>
                <Modal
                  title="유저목록"
                  visible={modal}
                  onCancel={e => handleCancel(e)}
                  footer={null}
                >
                  <BoxUserList
                    user={props.boxInfo.user}
                    value={props.boxInfo}
                  />
                </Modal>
              </div>
            </div>
          </RightContent>
        </ContentWrapper>

        <ProgressBar percent={getPercent()} />
      </div>
    </BoxWrapper>
  );
};

export default Box;
