/**
 * Copyright (c) 2022, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Image from 'next-image-export-optimizer';

import { prefix } from '../../../utils/prefix';
import styles from './Intro.module.css';


export default function Intro() {

  const [hoverBtn, setHoverBtn] = React.useState(false);

  let imagePath = prefix + '/images/main-right-arrow-home.svg';
  let imagePathHover = prefix + '/images/main-right-arrow-home-hover.svg';

  const buttonStyle = {
    backgroundImage: 'url(' + imagePath + ')',
    backgroundSize: '60px 60px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
  };

  const buttonStyleHover = {
    backgroundImage: 'url(' + imagePathHover + ')',
    backgroundSize: '60px 60px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
  };

  return (

    <Col sm={12}>
      <Container>
        <Row className={styles.introTopRow}>
          <Col xs={12} sm={12} md={12} lg={8}>
            <Image className={styles.homePageLogo} src={`${prefix}/images/ballerina-logo-white.svg`} height={100} width={330} alt="Ballerina Logo" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}></Col>
        </Row>
        <Row className={styles.introBottomRow}>
          <Col xs={12} sm={12} md={12} lg={8}>
            <p className={styles.descriptionMain}>Ballerina Swan Lake is an open-source programming language optimized for integration.</p>
            <p className={styles.descriptionSub}>Ballerina Swan Lake was developed by WSO2 and open source contributors and first released in February 2021.</p>

            <div className={styles.socialMediaPanel} >
              <a className={styles.socialMediaIcons} href="https://github.com/ballerina-platform/ballerina-lang" target="_blank" rel="noreferrer" passHref title="GitHub">
                <Image src={`${prefix}/images/github-mark-white.svg`} width={40} height={40} alt="GitHub" />
              </a>

              <a className={styles.socialMediaIcons} href="https://twitter.com/ballerinalang" target="_blank" rel="noreferrer" passHref title="Twitter">
                <Image src={`${prefix}/images/twitter-white.svg`} width={40} height={40} alt="Twitter" />
              </a>

              <a className={styles.socialMediaIcons} href="https://discord.gg/ballerinalang" target="_blank" rel="noreferrer" passHref title="Discord">
                <Image src={`${prefix}/images/discord-white.svg`} width={40} height={40} alt="Discord" />
              </a>

              <a className={styles.socialMediaIcons} href="https://stackoverflow.com/questions/tagged/ballerina" target="_blank" rel="noreferrer" passHref title="Stackoverflow">
                <Image src={`${prefix}/images/stackoverflow-white.svg`} width={40} height={40} alt="Stackoverflow" />
              </a>

              <a className={styles.socialMediaIcons} href="https://www.youtube.com/c/Ballerinalang" target="_blank" rel="noreferrer" passHref title="YouTube">
                <Image src={`${prefix}/images/youtube-white.svg`} width={40} height={40} alt="YouTube" />
              </a>

              <a className={styles.socialMediaIcons} href="https://www.linkedin.com/company/79080790" target="_blank" rel="noreferrer" passHref title="LinkedIn">
                <Image src={`${prefix}/images/linkedin-white.svg`} width={40} height={40} alt="LinkedIn" />
              </a>
            </div>

          </Col>

          <Col xs={12} sm={12} md={12} lg={4}>
            <a className={styles.homeIntroButton}
              onMouseEnter={() => {
                setHoverBtn(true);
              }}
              onMouseLeave={() => {
                setHoverBtn(false);
              }}
              style={
                (hoverBtn ? buttonStyleHover : buttonStyle)
              }
              target="_blank"
              href={`${prefix}/downloads/`}
              rel="noreferrer">
              Download
            </a>
            <a className={`${styles.homeIntroButton} ${styles.playButton}`}
              style={buttonStyleHover}
              target="_blank"
              href={`${prefix}/learn/by-example/`}
              rel="noreferrer">
              Examples
              <p>Explore and try out a series of guided Ballerina examples.<br /> &nbsp;</p>
            </a>
          </Col>
        </Row>
      </Container>
    </Col>

  );
}