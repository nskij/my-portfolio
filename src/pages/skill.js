import React, { Component } from 'react';
import '../App.css';
import SkillCards from '../components/skillCards';

export default class Skill extends Component {
  render() {

    const skillList = [
      {
        skill: 'HTML & CSS',
        explain: '実務レベル。Haml, Sassも使えます。最近はCSSアニメーションにちょっと興味あり。',
      }, 
      {
        skill: 'JavaScript',
        explain: '初心者。実務でjQueryを少し扱っていました。退職後に改めて学習してReactに着手。',
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
        skill: 'BootStrap4',
        explain: '前職でゴリゴリ使いすぎて失敗した苦い経験あり。適材適所を心がけます。',
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
        explain: 'YouTubeの解説（英語）で基礎を学んで練習中。DiaryUIを年内に100項目達成するのが目標。',
      },
    ];

    return(
      <React.Fragment>
        <span>チョットデキル</span>
        <div className = "card-container">
          {skillList.map((skillItem) => {
            return (
              <SkillCards 
              skill = {skillItem.skill}
              explain = {skillItem.explain}
            />
            );
          })}
        </div>
        <span>興味あり</span>
        <div className = "card-container green">
          {interestsList.map((interestItem) => {
            return (
              <SkillCards 
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