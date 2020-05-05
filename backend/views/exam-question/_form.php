<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use backend\models\Topic;
use backend\models\Exam;
use backend\models\Question;


/* @var $this yii\web\View */
/* @var $model app\models\ExamQuestion */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="exam-question-form">

    <?php $form = ActiveForm::begin(); ?>

    <?php 
        $exam = \app\models\Exam::find()->all(); 
        $listData=ArrayHelper::map($exam,'exam_id','name'); 
    ?>
    <?= $form->field($model, 'exam_id')->dropdownList($listData,['prompt'=>'Choose...']) ?>

    <?php 
        $subject = \app\models\Subject::find()->all(); 
        $listData=ArrayHelper::map($subject,'subject_id','name'); 
    ?>
    <?= $form->field($model, 'subject_id')->dropdownList($listData,['prompt'=>'Choose...','onchange'=>
        '$.post( "index.php?r=topic/subject-topic&subjectid="+$(this).val(), function( data ) {
                  $( "#exam-questions-topic_id" ).html( data );
            
                });']) ?>

    <?php 
        $question = \app\models\Questions::find()->all(); 
        $listData=ArrayHelper::map($question,'question_id','name'); 
    ?>
    <?= $form->field($model, 'question_id')->dropdownList($listData,['prompt'=>'Choose...']) ?>

    <?= $form->field($model, 'status')->dropdownList(array('1'=>'Active','0'=>'InActive'),array('prompt'=>'Select Status')) ?>

    <?= $form->field($model, 'created_by')->textInput() ?>

    <?= $form->field($model, 'updated_by')->textInput() ?>

    <?= $form->field($model, 'created_at')->textInput() ?>

    <?= $form->field($model, 'updated_at')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
