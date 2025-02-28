import React from 'react';
import ArticleSection from './components/ArticleSection';

import styles from './index.module.less';

const MyPageComponent: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContainer}>
        <img
          alt=""
          src="https://weavefox.alipay.com/assets/ed312aeb-b85a-458e-94c7-baf0dcd9cf01.png"
          className={styles.profileImage}
        />
      </div>
      <ArticleSection />
    </div>
  );
};

export default MyPageComponent;
