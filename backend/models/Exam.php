<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "exam".
 *
 * @property integer $exam_id
 * @property integer $cycle_id
 * @property integer $subject_id
 * @property integer $level_id
 * @property string $topic_id
 * @property integer $name
 * @property integer $status
 * @property integer $created_by
 * @property integer $updated_by
 * @property string $created_at
 * @property string $updated_at
 */
class Exam extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'exam';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['cycle_id', 'subject_id', 'level_id', 'topic_id', 'name', 'status'], 'required'],
            [['cycle_id', 'subject_id', 'level_id', 'name', 'status', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['topic_id'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'exam_id' => 'Exam ID',
            'cycle_id' => 'Cycle ID',
            'subject_id' => 'Subject ID',
            'level_id' => 'Level ID',
            'topic_id' => 'Topic ID',
            'name' => 'Name',
            'status' => 'Status',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
