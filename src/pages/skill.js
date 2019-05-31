import React, { Component } from 'react';
import '../App.css';
import SkillCards from '../components/skillCard';

export default class Skill extends Component {
  render() {

    const skillList = [
      {
        skill: 'HTML / CSS',
        explain: '実務レベル。Haml, Sassも使えます。Bootstrap4は使いすぎて失敗した苦い経験があります...。',
      }, 
      {
        skill: 'JavaScript (ES6)',
        explain: '初心者。実務でjQueryを少し扱っていました。退職後に改めて学習してReactに着手。TypeScript使いたい。',
      },
      {
        skill: 'Java',
        explain: '新卒入社したSI企業で1年の研修を経て習得。Springを使ったWebアプリの開発経験あり。',
      },
      {
        skill: 'PHP',
        explain: '2社目の会社で必要に駆られて学習。CakePHPを使ったWebサービスの開発経験（軽微なバグ修正程度）あり。',
      },
      {
        skill: 'Ruby',
        explain: '駆け出しレベル。Railsに興味があって退職後に学習を始めました。Progate→Railsチュートリアルで学習中。',
      },
      {
        skill: 'SQL',
        explain: '基本的な処理は書けます。実務ではOracle, MySQLを使ってました。',
      },
      {
        skill: 'Git / GitHub',
        explain: 'rebase, stash, コミットまとめはできるくらいのレベル。お世話になってます。',
      },
      {
        skill: 'KARTE',
        explain: '超基礎を理解している程度。実務で配信用メールテンプレートを作成。',
      }
    ];

    const interestsList = [
      {
        skill: 'UI / UX',
        explain: 'UI/UXを理解したフロントエンドエンジニアを目指しています。オススメの本があれば教えてほしいです。',
      }, 
      {
        skill: 'デザイン',
        explain: 'デザインの入門書で勉強中。配色アイデア本を眺めるのが好きです。',
      },
      {
        skill: 'Sketch',
        explain: 'YouTubeの解説（英語）で基礎を学んで練習中。DiaryUIを年内に100個達成するのが目標。',
      },
    ];

    return(
      <React.Fragment>
        <span>チョットデキル</span>
        <div className = "card-container">
          {skillList.map((skillItem, index) => {
            return (
              <SkillCards 
                key = {index}
                skill = {skillItem.skill}
                explain = {skillItem.explain}
              />
            );
          })}
        </div>
        <span>興味あり</span>
        <div className = "card-container green">
          {interestsList.map((interestItem, index) => {
            return (
              <SkillCards 
                key = {index}
                skill = {interestItem.skill}
                explain = {interestItem.explain}
              />
            );
          })}
        </div>
      </React.Fragment>

    );
  }
}