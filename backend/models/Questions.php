<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "questions".
 *
 * @property integer $question_id
 * @property integer $name
 * @property integer $subject_id
 * @property integer $cycle_id
 * @property integer $level_id
 * @property integer $topic_id
 * @property integer $year_id
 * @property integer $section_id
 * @property integer $status
 * @property string $question_image
 * @property string $answer_image
 * @property integer $created_by
 * @property integer $updated_by
 * @property string $created_at
 * @property string $updated_at
 *
 * @property ExamQuestion[] $examQuestions
 * @property Year $year
 * @property Topic $topic
 * @property Level $level
 * @property Cycle $cycle
 * @property Section $section
 * @property Subject $subject
 */
class Questions extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
public $file;

    public static function tableName()
    {
        return 'questions';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'cycle_id', 'level_id','subject_id', 'topic_id', 'year_id', 'section_id', 'status'], 'required'],
            [['subject_id', 'cycle_id', 'level_id', 'topic_id', 'year_id', 'section_id', 'status',], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
             //['question_image', 'required', 'message' => 't be blank', 'on'=>'create'],
            [['question_image','answer_image'],'file'],
            [['question_image', 'answer_image'], 'string', 'max' => 255],
            [['year_id'], 'exist', 'skipOnError' => true, 'targetClass' => Year::className(), 'targetAttribute' => ['year_id' => 'year_id']],
            [['topic_id'], 'exist', 'skipOnError' => true, 'targetClass' => Topic::className(), 'targetAttribute' => ['topic_id' => 'topic_id']],
            [['level_id'], 'exist', 'skipOnError' => true, 'targetClass' => Level::className(), 'targetAttribute' => ['level_id' => 'level_id']],
            [['cycle_id'], 'exist', 'skipOnError' => true, 'targetClass' => Cycle::className(), 'targetAttribute' => ['cycle_id' => 'cycle_id']],
            [['section_id'], 'exist', 'skipOnError' => true, 'targetClass' => Section::className(), 'targetAttribute' => ['section_id' => 'section_id']],
            [['subject_id'], 'exist', 'skipOnError' => true, 'targetClass' => Subject::className(), 'targetAttribute' => ['subject_id' => 'subject_id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'question_id' => 'Question ID',
            'name' => 'Name',
            'cycle_id' => 'Cycle ID',
            'level_id' => 'Level ID',
            'subject_id' => 'Subject ID',
            'topic_id' => 'Topic ID',
            'year_id' => 'Year ID',
            'section_id' => 'Section ID',
            'status' => 'Status',
            'question_image' => 'Question Image',
            'answer_image' => 'Answer Image',
            
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getExamQuestions()
    {
        return $this->hasMany(ExamQuestion::className(), ['question_id' => 'question_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getYear()
    {
        return $this->hasOne(Year::className(), ['year_id' => 'year_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTopic()
    {
        return $this->hasOne(Topic::className(), ['topic_id' => 'topic_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getLevel()
    {
        return $this->hasOne(Level::className(), ['level_id' => 'level_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCycle()
    {
        return $this->hasOne(Cycle::className(), ['cycle_id' => 'cycle_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getSection()
    {
        return $this->hasOne(Section::className(), ['section_id' => 'section_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getSubject()
    {
        return $this->hasOne(Subject::className(), ['subject_id' => 'subject_id']);
    }

    public function getCreatedBy()
    {
        return $this->hasOne(User::className(), ['id' => 'created_by']);
    }

}
