import React from 'react';
import { Title } from 'components/Typography';
import emoji from 'helpers/icons/emoji.png';

const Main = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      rowGap: '10px',
    }}
  >
    <img src={emoji} width={50} height={50} alt='backhand index pointing up' />
    <Title level='3' style={{ textAlign: 'center' }}>
      Введите имя пользователя для поиска
    </Title>
  </div>
);

export default Main;
