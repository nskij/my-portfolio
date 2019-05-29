import React, { Component } from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class SkillCard extends Component {

  render(){
    const skillList = [
      {
        skill: 'HTML & CSS',
        explain: '実務レベル。Haml, Sassも利用できます。',
      }, 
      {
        skill: 'JavaScript',
        explain: '初心者。実務でjQueryを少し扱っていました。退職後に独学してReactに着手。',
      },
      {
        skill: 'Java',
        explain: '新卒入社したSI企業で1年の研修を経て習得。Springを使ったWebアプリの開発経験あり。',
      },
      {
        skill: 'PHP',
        explain: '2社目の会社で必要に駆られて学習。CakePHPを使ったWebサービスの開発経験（バグ修正程度）あり。',
      },
      {
        skill: 'Ruby',
        explain: '駆け出しレベル。Railsに興味があって退職後に学習を始めました。Railsチュートリアルで学習中。',
      },
      {
        skill: 'SQL',
        explain: '基本的な処理は書けます。実務ではOracle, MySQLを使ってました。',
      },
      {
        skill: 'KARTE',
        explain: '超基礎を理解している程度。実務で配信用メールテンプレートを作成。',
      }
    ];

      return (
        <React.Fragment>
            {skillList.map((skillItem => {
              return (
                <div className = "skill">
                  <Typography variant="h5" component="h3">
                    {skillItem.skill}
                  </Typography>
                  <Typography component="p">
                    {skillItem.explain}
                  </Typography>
                </div>
              );
            }))}
        </React.Fragment>
      );
    }
  }


export default SkillCard;