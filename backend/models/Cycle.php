<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "cycle".
 *
 * @property integer $cycle_id
 * @property string $name
 * @property integer $status
 * @property integer $created_by
 * @property integer $update_by
 * @property string $created_at
 * @property string $updated_at
 */
class Cycle extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'cycle';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'status'], 'required'],
            [['status', 'created_by', 'update_by'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'cycle_id' => 'Cycle ID',
            'name' => 'Name',
            'status' => 'Status',
            'created_by' => 'Created By',
            'update_by' => 'Update By',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
