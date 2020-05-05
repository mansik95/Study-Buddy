<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Questions;

/**
 * QuestionSearch represents the model behind the search form about `app\models\Questions`.
 */
class QuestionSearch extends Questions
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['question_id', 'name', 'subject_id', 'cycle_id', 'level_id', 'topic_id', 'year_id', 'section_id', 'status', 'created_by', 'updated_by'], 'integer'],
            [['question_image', 'answer_image', 'created_at', 'updated_at'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Questions::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'question_id' => $this->question_id,
            'name' => $this->name,
            'subject_id' => $this->subject_id,
            'cycle_id' => $this->cycle_id,
            'level_id' => $this->level_id,
            'topic_id' => $this->topic_id,
            'year_id' => $this->year_id,
            'section_id' => $this->section_id,
            'status' => $this->status,
            'created_by' => $this->created_by,
            'updated_by' => $this->updated_by,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'question_image', $this->question_image])
            ->andFilterWhere(['like', 'answer_image', $this->answer_image]);

        return $dataProvider;
    }
}
