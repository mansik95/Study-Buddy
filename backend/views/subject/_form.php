<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use backend\models\Cycle;
use backend\models\Level;

/* @var $this yii\web\View */
/* @var $model app\models\Subject */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="subject-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?php 
        $cycle = \app\models\Cycle::find()->all(); 
        $listData=ArrayHelper::map($cycle,'cycle_id','name'); 
    ?>
     <?= $form->field($model, 'cycle_id')->dropdownList($listData,['prompt'=>'Choose...']) ?>


    <?php 
        $level = \app\models\Level::find()->all(); 
        $listData=ArrayHelper::map($level,'level_id','name'); 
    ?>
    <?= $form->field($model, 'level_id')->dropdownList($listData,['prompt'=>'Choose...']) ?>

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
