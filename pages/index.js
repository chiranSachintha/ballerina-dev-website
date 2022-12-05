/**
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
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

import dynamic from 'next/dynamic';
import { Col, Row } from 'react-bootstrap';

import Layout from '../layouts/LayoutHome';
import Intro from '../components/home-page/intro/Intro';
import WhyBal from '../components/home-page/why-bal/WhyBal';
import Videos from '../components/home-page/videos/Videos';
import Events from '../components/home-page/events/Events';
import styles from '../styles/Home.module.css';

import fs from "fs";
import matter from "gray-matter";


var traverseFolder = function (dir) {
  var results = [];
  var list = fs.readdirSync(dir);
  list.forEach(function (file) {
    var filex = dir + "/" + file;
    results.push(filex);
  });
  return results;
};

export async function getStaticProps() {
  const files = traverseFolder("components/home-page/bal-action/action-bbe");
  var samples = {};

  files.forEach(function (item, index) {
    const filename = fs.readFileSync(item, "utf-8");
    const sampleName = item.replace('components/home-page/bal-action/action-bbe/', '').replace('.md','');
    const { data: frontmatter, content } = matter(filename);
    samples[sampleName] = content;
  });

  return {
    props: {
      samples
    },
  };
}


export default function Home({ samples }) {
  const BalAction = dynamic(() => import('../components/home-page/bal-action/BalAction'), { ssr: false });

  const getLink = (element, id) => {
    if (element.tagName.toLowerCase() === "path")
      element = element.parentElement;

    const elementNodeList = document.querySelectorAll(`#${id}`);
    const elementArray = Array.prototype.slice.call(elementNodeList);
    const count = elementArray.indexOf(element.parentElement);

    if (count === 0) {
      location.hash = `#${id}`;
    } else {
      location.hash = `#${id}-${count}`;
    }

    navigator.clipboard.writeText(window.location.href);
    element.parentElement.scrollIntoView();
  };

  return (
    <Layout>
      <Col sm={12}>

        <Row className={styles.homeIntro}>
          <Intro />
        </Row>

        <Row className={styles.homeBalAction}>
          <BalAction samples={samples} getLink={getLink}/>
        </Row>

        <Row className={styles.homeWhyBal}>
          <WhyBal getLink={getLink}/>
        </Row>

        <Row className={styles.homeVideos}>
          <Videos getLink={getLink}/>
        </Row>

        <Row className={styles.homeEvents}>
          <Events getLink={getLink}/>
        </Row>

      </Col>
    </Layout>
  );
}
