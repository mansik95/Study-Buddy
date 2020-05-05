<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Exam */

$this->title = 'Update Exam: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Exams', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->exam_id]];
$this->params['breadcrumbs'][] = 'Update';

$session= Yii::$app->session;
//echo '<pre>';
//print_r (Yii::$app->user->identity);

$model->updated_by= Yii::$app->user->getId();
$model->updated_at=date('Y-m-d H:i:s');
?>
<div class="exam-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
