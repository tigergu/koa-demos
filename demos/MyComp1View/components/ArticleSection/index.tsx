import React from 'react';

import styles from './index.module.less';

const ArticleSection: React.FC = () => {
  return (
    <div className={styles.wrapper2}>
      <div className={styles.sectionContainer}>
        <span className={styles.bottomCornerText}>
          Float an Element to the Bottom Corner
        </span>
        <div className={styles.contentBlock}>
          <div>
            <span className={styles.paragraphOne}>
              Earum, dserunt quarat id sapint qua dbitis, atqu voluptatum
              vitae,t rror mag
            </span>
          </div>
          <div className={styles.contentBlock2}>
            <span className={styles.paragraphOne}>
              architecto rerum possimus maiores porro aut quidem rem
              exercitationem. Quae quaerat
            </span>
          </div>
          <div className={styles.contentBlock3}>
            <span className={styles.paragraphThree}>
              reprehenderit， sitharum repellendus providenttemporibus.Earum,
              deserunt quaerat
            </span>
            <img
              alt=""
              src="https://weavefox.alipay.com/assets/94ccc5a8-6685-40ce-91b8-69ba99f49da8.png"
              className={styles.imageThumbnail}
            />
          </div>
          <div className={styles.contentBlock4}>
            <span className={styles.shortPhrase}>sapiente quae</span>
            <span className={styles.paragraphFour}>
              debitis, atque voluptatum vitae, sint error magni architecto rerum
              possimus
            </span>
          </div>
          <div className={styles.contentBlock5}>
            <span className={styles.paragraphFive}>
              maiores porro aut quidem rem exercitationem. Quae quaerat
              reprehenderit...
            </span>
            <div className={styles.readMoreButton}>
              <span className={styles.readMoreText}>Read More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
