<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "topic".
 *
 * @property integer $topic_id
 * @property string $name
 * @property integer $cycle_id
 * @property integer $level_id
 * @property integer $subject_id
 * @property integer $status
 * @property integer $created_by
 * @property integer $updated_by
 * @property string $created_at
 * @property string $updated_at
 */
class Topic extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'topic';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'cycle_id', 'level_id', 'subject_id', 'status'], 'required'],
            [['cycle_id', 'level_id', 'subject_id', 'status', 'created_by', 'updated_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'string', 'max' => 255],
            [['name'], 'unique'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'topic_id' => 'Topic ID',
            'name' => 'Name',
            'cycle_id' => 'Cycle ID',
            'level_id' => 'Level ID',
            'subject_id' => 'Subject ID',
            'status' => 'Status',
            'created_by' => 'Created By',
            'updated_by' => 'Updated By',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
